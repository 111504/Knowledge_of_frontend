var _name='Global Amy'

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};


var stoleSecretIdentity = hero.getSecretIdentity;


/**若直接呼叫this，this指向全域環境，
 * 也就是window或是global object
若在函數中使用this，this指向執行該函數的物件
可以用call、bind & apply改變this的指向 */
console.log(stoleSecretIdentity());//Global Amy  在非嚴格模式下 這時指向window
console.log(hero.getSecretIdentity());//指向調用他的物件