const name = 'Danny'
const age = 30

console.log(typeof name) // string
console.log(typeof age) // number
console.log(typeof [])//object
console.log(typeof {})//object

//首先，在js中除了基本型別以外，實際上全都是物件，所以typeof就出局啦! 
console.log(Array.isArray(10)) // false
console.log(Array.isArray('Danny')) // false
console.log(Array.isArray([])) // true
console.log(Array.isArray({})) // false
console.log(Array.isArray(null)) // false
console.log(Array.isArray(undefined)) // false

