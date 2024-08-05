//請解釋call by reference & by value間的差異
let a = 5
let b = a
let c = []
let d = c

function modifyArray(arr) {
  arr = {}
}

a = 10

c.push(1)

modifyArray(d)

console.log('a=',a,'b=',b,'c=',c,'d=',d)

//javascript 資料型別分為 基本型 與 物件


function changeElement(arr) {
    arr[0] = 42;//這裡傳的是參考
}

let myArray = [1, 2, 3];
changeElement(myArray);
console.log(myArray[0]); // 42


//一旦你選擇重新賦值傳進來的參數，
//傳進來的參數與原始的資料就完全沒有任何關係了，
//因此會造成範例中看到的結果，arr仍是一個空陣列。
let arr = []
function modifyArr(arr) {
  arr = [1,2,3] //這裡arr是參考 但是arr=[]２　代表創建一個新陣列，並把他賦值給區域變數arr
}

modifyArr(arr)
console.log(arr)//[]

//carr重新指向新的變數
let c_arr=[]
let b_arr=c_arr
c_arr.push(1)
console.log(b_arr) //[1]
c_arr="132"
console.log(b_arr) //[1]
console.log(c_arr) //[132]