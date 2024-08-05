function add(a, b) {
    return a + b
  }
  
  // 或是
  
  const add2 = function(a, b) {
    return a + b 
  }

  console.log(add2(1,2))

  //箭頭改寫
  const add3=(a,b)=>{
     return a+b
  }

  //在精簡
  const add4=(a,b)=>a+b

  //箭頭函數的this
  //但箭頭函數的指向都是固定的，
  //永遠指向宣告時的物件而非使用它的物件

var name = '全域字串'
var auntie = {
  name: '內部字串',
  callName: () => { 
    console.log('4', this.name); // 4 全域字串
    setTimeout(() => {
      console.log('5', this.name); // 5 全域字串
      console.log('6', this); // 6 window 物件
    }, 10);
  }
}

auntie.callName()