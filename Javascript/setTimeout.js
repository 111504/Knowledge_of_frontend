function sayHello(){
    console.log('Hello')
}
setTimeout(sayHello,1000);

setTimeout(function(){
    console.log('Inner function')
},1000)