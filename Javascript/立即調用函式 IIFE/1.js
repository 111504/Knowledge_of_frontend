(function(){
    var module1Variable="var in module1";
    function module1Function(){
        console.log(module1Variable);
    }
    window.module1={
        module1Function:module1Function,
    };
})();

(function(){
    var module2Variable="var in module2";
    function module2Function(){
        console.log(module2Variable);
    }
    window.module2={
        module2Function:module2Function,
    };
})();

module1.module1Function();
module2.module2Function();