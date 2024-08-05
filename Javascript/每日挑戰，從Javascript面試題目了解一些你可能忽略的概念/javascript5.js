let salary = "1000";

(function () {
  console.log("Origin salary was " + salary);//undefined
  
  var salary = "5000";
  
  console.log("My new salary is ", + salary); //5000
})();

console.log("My new salary Outer is ", + salary);//1000