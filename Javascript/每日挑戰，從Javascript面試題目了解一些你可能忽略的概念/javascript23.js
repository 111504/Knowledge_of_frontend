//重點 promise取值時才是非同步

const promise = new Promise((resolve,reject)=> {
    console.log(1)
    resolve(5)//fulfilled
    console.log(2)
    reject(6)//rejected
  })
  
  promise.then((value)=> {
    console.log(value)
    console.log(3)
  }).catch(value => {
    console.log(value)
  })
  console.log(4)

  /**
   * 1.創立一個promise函數 執行console log(1)
   * 2.resolve(5)被調用 將promise標記為已解決
     3. console.log(2) 立即執行並輸出 2
     4.然後，reject(6) 被調用，但由於 Promise 已經被解決，因此這行程式碼沒有作用
     5.promise.then((value) => {...}).catch(value => {...}) 設定了 Promise 解決或拒絕時的回調函數，但這些回調函數會被排入事件循環中，
     等待同步代碼執行完成後才會執行。
     6.console.log(4) 立即執行並輸出 4。
     7.當同步代碼執行完畢後，事件循環會處理 Promise 的回調函數。
     在這裡，Promise 已經解決，因此 then 回調函數會被調用，輸出 5 和 3。
  
     */

     console.log('Start');

setTimeout(() => {
  console.log('Timeout callback');
}, 1000);

console.log('End');