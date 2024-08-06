function promiseFn(num, time = 500) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        num ? resolve(`${num}, 成功`) : reject('失敗');
      }, time);
    });
  }
  promiseFn(0)
  .then(value => console.log(value))//resolve
  .catch(err => console.log(err))//reject