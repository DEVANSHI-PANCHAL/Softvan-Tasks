alert("Alert from external js")

//variables
let admin;
let name= "John";
admin = name;
alert(admin)

let test = prompt("hello",10)
let test2 = confirm("are you sure you want to continue?")

let enterName = prompt("enter your name")

document.write(`Hello ${enterName}`)

let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true


let value = prompt('What is the "official" name of JavaScript?', '');

if (value == 'ECMAScript') {
  alert('Right!');
} else {
  alert("You don't know? ECMAScript!");
}

let insNumber = +prompt("Enter the number");

let result = insNumber > 0 ? 1 : insNumber === 0 ? 0 : -1;

console.log(result);


let user = prompt("who's there").toLowerCase();
// document.write(user)
if(user==="admin") {
    let pass = prompt(`Please enter your password`).toLowerCase();
    if(pass==="iammaster") {

        alert(`welcome ${user}`)
    } else {
        alert("wrong password")
    }
} else {
    alert("You are not admin")
}

let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}