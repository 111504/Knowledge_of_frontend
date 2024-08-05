//請解釋在javascript中什麼是this
var name = '全域阿婆'
var auntie = {
  name: '漂亮阿姨',
  callName: function () { 
    console.log('2:此時的this指向', this);
    console.log('2:callName', this.name);
  }
}

function callName() {
  console.log('1:此時的this指向', this);
  console.log('1:callName', this.name);
}

callName()
auntie.callName()
console.log('3:此時的this指向', this)

/* 輸出結果

1:此時的this指向 Window
1:callName 全域阿婆

2:此時的this指向 {name: '漂亮阿姨', callName: f()}
2:callName 漂亮阿姨

3:此時的this指向 Window */


/**
 * 直接呼叫this this指向目前的execution 在瀏覽器window
 * this 在函數中呼叫 指向執行這函數的物件
 */

//call& apply 使用上基本完全相同 傳入參數方法不同 


const obj={name:'Danny'}

function greet(a,b){
  return `${a},${this.name},${b}`
}

console.log(greet.call(obj,'Hello','How are you?'))
console.log(greet.apply(obj,['Hello','How are you?']))


//bind

const obj2={name:'Amy'}

function greet2(a,b){
   return `${a},${this.name},${b}`
}

const bound=greet2.bind(obj2)


console.log(bound('Hello','How are you?'))

console.log("-------------------------------------------")

const obj3 = {
  name: 'John',
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};


obj3.greet()
/**greet3 是一個孤立的函數變數，
 * 它只是儲存了 obj3.greet 函數的引用，
 * 而不包括 this 的上下文。這意味著當你調用 greet3 時，
 * this 不會自動指向 obj3 */
const greet3=obj3.greet
