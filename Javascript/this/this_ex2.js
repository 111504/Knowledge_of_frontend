console.log(this);//window

//普通函數
function globalFunction(){
    console.log(this); //window
}
globalFunction();

// method
const obj={
    name:'Alice',
    greet:function(){
        console.log(this) //obj
    }
};
obj.greet();

//構造函式
function Person(name){
    this.name=name;
    console.log(this);
}

const alice=new Person('Alice');