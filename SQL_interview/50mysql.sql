create table student(
 sno varchar(10) primary key,
 sname varchar(20),
 sage int(2), 
 ssex varchar(5)
);

create table teacher(
 tno varchar(10) primary key, 
 tname varchar(20)
);

create table course(
 cno varchar(10),
 cname varchar(20), 
 tno varchar(20), 
 constraint pk_course primary key (cno,tno)
);


create table sc(
 sno varchar(10),
 cno varchar(10), 
 score float(4,2),
 constraint pk_sc primary key (sno,cno)
);

insert into student values ('s001','張三',23,'男');
insert into student values ('s002','李四',23,'男');
insert into student values ('s003','吳鵬',25,'男');
insert into student values ('s004','琴沁',20,'女');
insert into student values ('s005','王麗',20,'女');
insert into student values ('s006','李波',21,'男');
insert into student values ('s007','劉玉',21,'男');
insert into student values ('s008','蕭蓉',21,'女');
insert into student values ('s009','陳蕭曉',23,'女');
insert into student values ('s010','陳美',22,'女');
insert into student values ('s011','王麗',24,'女');
insert into student values ('s012','蕭蓉',20,'女');

insert into teacher values ('t001', '劉陽');
insert into teacher values ('t002', '諶燕');
insert into teacher values ('t003', '胡明星');

insert into course values ('c001','J2SE','t002');
insert into course values ('c002','Java Web','t002');
insert into course values ('c003','SSH','t001');
insert into course values ('c004','Oracle','t001');
insert into course values ('c005','SQL SERVER 2005','t003');
insert into course values ('c006','C#','t003');
insert into course values ('c007','JavaScript','t002');
insert into course values ('c008','DIV+CSS','t001');
insert into course values ('c009','PHP','t003');
insert into course values ('c010','EJB3.0','t002');

insert into sc values ('s001','c001',78.9);
insert into sc values ('s002','c001',80.9);
insert into sc values ('s003','c001',81.9);
insert into sc values ('s004','c001',50.9);
insert into sc values ('s005','c001',59.9);
insert into sc values ('s001','c002',82.9);
insert into sc values ('s002','c002',72.9);
insert into sc values ('s003','c002',82.9);
insert into sc values ('s001','c003',59);
insert into sc values ('s006','c003',99.8);
insert into sc values ('s002','c004',52.9);
insert into sc values ('s003','c004',20.9);
insert into sc values ('s004','c004',59.8);
insert into sc values ('s007','c004',50.8);
insert into sc values ('s009','c005',92.9);
insert into sc values ('s008','c007',78.9);
insert into sc values ('s010','c010',78.9);
insert into sc values ('s011','c004',20.9);
insert into sc values ('s012','c004',59.8);
insert into sc values ('s011','c003',50.8);
insert into sc values ('s007','c005',92.9);
insert into sc values ('s008','c003',78.9);
insert into sc values ('s009','c010',78.9);
insert into sc values ('s001','c007',82.9);
insert into sc values ('s001','c010',82.9);
-- 查詢任何一門課程成績在70 分以上的學生姓名.課程名稱和分數
-- SELECT cname,sname,score
-- FROM student LEFT JOIN sc USING(sno) LEFT JOIN course USING(cno)
-- where score>=70;



-- 查詢兩門以上不及格課程的同學的學號及其平均成績
-- SELECT student.sno, AVG(sc.score)
-- FROM student 
-- LEFT JOIN sc USING (sno)
-- WHERE sno IN (
--   SELECT sno
--   FROM student
--   LEFT JOIN sc USING (sno)
--   WHERE score < 60
--   GROUP BY sno
--   HAVING COUNT(cno) >= 2
-- )
-- GROUP BY sno;

-- 查詢平均成績大於60分的同學的學號和平均成績

-- SELECT sno,AVG(score)
-- FROM student LEFT JOIN sc USING (sno)
-- GROUP BY sno
-- HAVING AVG(score) >=60;

-- SELECT *
-- FROM student LEFT JOIN sc USING (sno);

-- 諶燕”老師所教的所有課的課程代號
-- SELECT cno FROM course JOIN teacher USING (tno) WHERE tname='諶燕';

-- 列出學生學過幾種課
-- SELECT sname, COUNT(cname)
-- FROM student JOIN sc USING (sno) JOIN course USING (cno) JOIN teacher USING (tno)
-- GROUP BY sname;

-- SELECT sname, cname
-- FROM student JOIN sc USING (sno) JOIN course USING (cno) JOIN teacher USING (tno);

-- 學過諶燕老師課的學生
-- SELECT sname, cname,cno
-- FROM student JOIN sc USING (sno) JOIN course USING (cno) JOIN teacher USING (tno)
-- WHERE cno in ('C001','C002','C007','C010');


-- SELECT sno,sname,cno
-- FROM student JOIN sc USING (sno) JOIN course USING (cno) JOIN teacher USING (tno)
-- WHERE cno in ('C001','C002','C007','C010')
-- GROUP BY sno,sname,cno
-- HAVING COUNT(cno)>=4;


-- SELECT *
-- FROM student JOIN sc USING (sno) JOIN course USING (cno) JOIN teacher USING (tno);


-- SELECT tno,cno
-- FROM student JOIN sc USING (sno) JOIN course USING (cno) JOIN teacher USING (tno)
-- GROUP BY tno,cno;


-- SELECT ssex,cname,COUNT(tname)
-- FROM student JOIN sc USING (sno) JOIN course USING (cno) JOIN teacher USING (tno)
-- GROUP BY ssex,cname;

-- SELECT cname,sname
-- FROM student JOIN sc USING (sno) JOIN course USING (cno) JOIN teacher USING (tno);
-- GROUP BY cname,sname;

-- 查詢學過”諶燕”老師所教的所有課的同學的學號:姓名

-- SELECT sno,sname
-- FROM student JOIN sc USING (sno) JOIN course USING (cno) JOIN teacher USING (tno)
-- WHERE cno IN (SELECT cno FROM course JOIN teacher USING (tno) WHERE tname='諶燕') 
-- GROUP by sno,sname
-- HAVING COUNT(cno)>=2;


-- SELECT *
-- FROM student JOIN sc USING (sno) JOIN course USING (cno) JOIN teacher USING (tno)
-- WHERE cno IN (SELECT cno FROM course JOIN teacher USING (tno) WHERE tname='諶燕');


-- SELECT *
-- FROM student JOIN sc USING (sno) JOIN course USING (cno) JOIN teacher USING (tno)
-- WHERE cno IN (SELECT cno FROM course JOIN teacher USING (tno) WHERE tname='諶燕')

-- HAVING sname='張三';

-- 查詢每個課程的老師及平均分從高到低顯示 老師名稱,課程名稱,平均分數
SELECT cname,tname,AVG(score)
FROM sc  JOIN  course USING(cno) JOIN teacher USING(tno)
GROUP BY cname,tname;
-- order by AVG(score) desc;


SELECT *
FROM sc LEFT JOIN course USING(cno) LEFT JOIN student USING(sno);


SELECT sno,cname
FROM sc LEFT JOIN course USING(cno) LEFT JOIN student USING(sno) 
GROUP BY sno,cname;
