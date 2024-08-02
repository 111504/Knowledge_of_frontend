// this 不等於 function
var foo = function() {
    
    this.count++;//這是 window.count = undefined 不是 foo.count
  };
  
  foo.count = 0;
  
  for( var i = 0; i < 5; i++ ) {
    foo();
  }

  console.log(foo.count)//?
// foo 全域變數 全域物件的屬性 foo=window.foo  

//請貼到主控台
var bar = function() {
    console.log( this.a );
};
  
  var foo2 = function() {
    var a = 123;
    this.bar();
  };
  
  foo2();

  const obj = {
    name: 'Alice',
    greet: function() {
      console.log(this); // 指向 obj
      console.log(this.name); // 'Alice'
    }
  };
  
  obj.greet();