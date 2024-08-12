let arr=[0,1,2,3,4,5]

for(let i=0;i<arr.length;i++){
    if(i>4) break;
    console.log(arr[i])
}

const arr2=["apple","origian","babanan"]

for(const i of arr2){
    if(i === "origian") continue;
    console.log(i)
}

const arr3=["apple","origian","babanan"]

for(const item in arr3){
    console.log(item)
}

const arr4=[0,1,2,2,4,4,4,4,7]

arr4.forEach(function(element,index){
    console.log(element,index);
    //但不能使用break continue
})


const arr5=[1,2,7,8,5]
const newArr=arr5.map((x)=>x+1)
console.log(newArr)
console.log(arr5)



const arr6=[11,22,33,55,47]
const newArr2=arr6.filter((x)=>x>25)
console.log(arr6)
console.log(newArr2)


