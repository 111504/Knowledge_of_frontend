//如何用 JavaScript 算出陣列的平均數？
//給定一個含有數字的陣列，例如 [10, 20, 30, 40, 50]，寫一個函式來計算這個陣列的平均數。

function getAverage(array){
    let sum = 0;
    for(let i=0;i<array.length;i++){
        sum += array[i];
    }
    return sum / array.length;
}

//函式編程 (functional programming) 

const getAverage=(array)=>{
    array.reduce(
        (sum,currentValue)=>sum+currentValue,0)/array.length
    }