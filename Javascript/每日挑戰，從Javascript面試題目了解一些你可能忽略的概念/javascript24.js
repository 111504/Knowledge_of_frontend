
//macro task & nicro task 微任務 宏任務
setTimeout(() => alert("timeout1"));
setTimeout(() => alert("timeout2"));
Promise.resolve()
  .then(() => alert("promise1"));
  setTimeout(() => alert("timeout3"));
setTimeout(() => alert("timeout4"));
Promise.resolve()
  .then(() => alert("promise2"));
alert("global ex. context");

