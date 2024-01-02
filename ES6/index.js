console.log("Hello es6")

// 1
let x = 10;
if (x == 10) {
    const x = 20;
    console.log(x);
}
console.log(x);


var a = 10;
// const a = 100;
// let a= 1000
console.log(window.a);


for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000); //01234
}
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000); //55555
}

// for (var i = 0; i < 5; i++) {
//     setInterval(function () {
//         console.log(i);
//     }, 1000);
// }

// temporal death zone
// console.log(x); // ReferenceError: x is not defined
// let x = 10;

//js const and objects
 const devanshi = {age:23}
 devanshi.age = 22;
 console.log(devanshi)

 //Object.freeze
 const person = Object.freeze({age: 20});
person.age = 30; // no effect
console.log(person)

const company = Object.freeze({
    name: 'ABC corp',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        zipcode: 95134
    }
});
company.address.country = 'USA';
console.log(company)

const colors = ['red'];
colors.push('green');
console.log(colors); // ["red", "green"]

colors.pop();
colors.pop();
console.log(colors); // []

colors = []; // TypeError

//proxy
const targetObject = {
    name: "John",
    age: 25
  };
  
  const handler = {
    get: function(target, prop, receiver) {
      console.log(`Getting property "${prop}"`);
      return target[prop];
    },
    set: function(target, prop, value, receiver) {
      console.log(`Setting property "${prop}" to ${value}`);
      target[prop] = value;
      return true;
    }
  };
  
  const proxy = new Proxy(targetObject, handler);
  
  // Accessing properties through the proxy
  console.log(proxy.name); // Output: Getting property "name"
  
  // Setting properties through the proxy
  proxy.age = 30; // Output: Setting property "age" to 30

  let proxy = new Proxy(target, handler);

 