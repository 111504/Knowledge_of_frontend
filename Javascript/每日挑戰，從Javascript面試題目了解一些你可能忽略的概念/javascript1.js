//請解釋var const & let的差別
var author = "Danny";
var author = "Wang";

console.log(author);


// function demo() {
//     var a = 5;
//     for (let i = 0; i < 1; i++) {
//        let b = 10
//     }
//     console.log(a)
//     console.log(b)
//   }

//   demo()

greet1();
greet2();


var greet1 = () => {
  console.log('Hello')
}

function greet2 () {
  console.log('Hola')
}