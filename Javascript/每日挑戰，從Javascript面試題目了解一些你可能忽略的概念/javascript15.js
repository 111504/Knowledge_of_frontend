//淺拷貝 深拷貝
let arr=[1,2,3]
let arr2=arr
//這不是拷貝 而是指向同一物件

//使用迴圈
let arr3=[1,2,3]
let arr4=[]
for(let i=0;i<arr3.length;i++){
    arr4.push(arr3[i])
}

//slice or concat
let arr5=[1,2,3]
let arr6=[].concat(arr5)
let arr7=arr5.slice()

arr6.push(4)
arr7.push(5)

console.log(arr5) // [1, 2, 3]
console.log(arr6) // [1, 2, 3, 4]
console.log(arr7) // [1, 2, 3, 5]

//擴展運算子
let arr8=[1,2,3]
let arr9=[...arr8]

//上述的幾種方法雖然都成功地複製了陣列/物件，
//但他們全都屬於所謂的淺拷貝(shallow clone)，
//也就是說萬一你今天複製的對象裡面還有其他的物件，
//裡面的物件會還是保持同一個reference

let demo=[0,[1,2]]
let demoClone=demo.slice() // [0,[1,2]]

demoClone[1].push(3)


console.log(demo) //[0, [1, 2, 3]]
console.log(demoClone) //[0, [1, 2, 3]]

//深拷貝 而在js中最簡單做到深拷貝的辦法就是先轉成json字串再parse回來，
//原理大致上是因為字串屬於基本型別，所以複製的時候會重新建立一個記憶體位置
let demo2=[0,[1,2]]
let demo3=JSON.parse(JSON.stringify(demo2))
demo3[1].push(3)

console.log(demo2) //[0, [1, 2]]
console.log(demo3)//[0, [1, 2, 3]]

//structuredClone
let objA={
    a:1,
    b:{c:3},
}

let objB=structuredClone(objA)

console.log(objA===objB)//false
console.log(objA.b === objB.b); // false