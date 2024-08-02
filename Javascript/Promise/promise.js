//使用非同步且又想要依照固定的順序來執行時 ES6 promise物件
const myFirstPromise = new Promise((resolve, reject) => {
    resolve(someValue);         // 完成
    reject("failure reason");   // 拒絕
  });
  //函式使用promise
  function myAsyncFunction(url) {
    return new Promise((resolve, reject) => {
      // resolve() or reject()
    });
  };

 