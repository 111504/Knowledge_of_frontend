//請寫一個duplicate函數，達成以下的輸出結果
function duplicate1(arr){
   const result=[...arr]
   for(let i=0;i<arr.length;i++){
    result.push(arr[i])
   }
   return result
}

function duplicate2(arr){
    return[...arr,...arr]
}
function duplicate3(arr){
    return  [].concat.apply(arr,arr)
}
// 展開陣列
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// 展開物件
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

// 展開為函數參數
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6
