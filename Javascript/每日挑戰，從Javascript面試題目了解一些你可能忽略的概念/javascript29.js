//請手刻一個與Array.map有著一樣功用的函數，以下為起手式
Array.prototype.map2 = function (value, index, array) {
   const result=[]

   for(let i=0;i<this.length;i++){
    result.push(callback(this[i], i, this))
   }

   return result
}

const arr = [1, 2, 3,5,6,6,7,7,7]
const arr2 = arr.map2((item) => item * 2)
console.log(arr2) // [2, 4, 6]