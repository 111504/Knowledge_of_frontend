//內建函式
let array=[1,2,,[3,[4,5,[6,7,[8]]]]];
// console.log(array.flat(2));

//遞迴

let array2=[1,2,[3,[4,5,[6,7,[8]]]]];

function flatten(arr,output=[]){
    for(const  val of arr){
        if(Array.isArray(val)){
            console.log(val)
            flatten(val,output)
        }
        else{
            output.push(val)
        }
      
    }
    return output;
}

const flattenArray=flatten(array);
console.log(flattenArray);

let array3=[1,2,[3,[4,5,[6,7,[8]]]]];

function flattenReduce(arr){
   return arr.reduce(
    (acc,cur)=>
    Array.isArray(cur)?[...acc,...flatten(cur)]:[...acc,cur],
    []
   );
}

const flattenWithReduce = flattenReduce(array);
console.log("flattenWithReduce=",flattenWithReduce);