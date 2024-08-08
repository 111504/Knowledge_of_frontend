var a = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve('hello world');
    }, 1000);
});

a.then(function(value) {
console.log(a);				// Promise {<resolved>: "hello world"}
console.log(value + '1');		// "hello world1"
});
a.then(function(value) {
console.log(a);				// Promise {<resolved>: "hello world"}
console.log(value + '2');		// "hello world2"
});

console.log(a);			