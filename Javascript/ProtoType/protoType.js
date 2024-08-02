
//prototype 每個javascript函數 都自動擁有的一個屬性
function Person(name,job,yearOfBirth){
  this.name=name;
  this.job=job;
  this.yearOfBirth=yearOfBirth;
}



console.log(Person.prototype);







var a = {
    buster: true,
    test:2,
    tall:3
};
var b = {cutter: true};
var c = {final: true};
Object.setPrototypeOf(b,a);
Object.setPrototypeOf(c,b);

console.log(b.tall)
//c繼承b b繼承a 這就是原型鍊
console.log(c.buster)
console.log(c.test)
console.log("----------------------------------------")
// ----------------------------------------------------

var Person = function(){};

// 函式也是物件，所以可以透過 prototype 來擴充每一個透過這個函式所建構的物件
Person.prototype.sayHello = function(){
  return "Hi!";
}

var p1 = Person();
var p2 = new Person();

// console.log(p1.sayHello) //error
console.log(p2.sayHello())

console.log("----------------------------------------")

//如果我們在建構式中建立一個「同名」的實例方法
var Person = function(){
    this.sayHello = function(){
      return "Yo!";
    };
  };
  
  Person.prototype.sayHello = function(){
    return "Hi!";
  }
  
  var p = new Person();

  console.log(p.sayHello())