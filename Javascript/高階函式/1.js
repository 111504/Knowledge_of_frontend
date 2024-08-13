//模擬filter

function customFilter(fn,arr){
    const filterArray=[];

    for(let i=0;i<arr.length;i++){
        if(fn(arr[i])){
          filterArray.push(arr[i]);
        }
    }
    return filterArray;
}


const numbers = [1, 2, 3, 4, 5];
const evenNumbers = customFilter((x) => x % 2 === 0, numbers);
console.log(evenNumbers);