var sum = (...array) => {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
};
console.log(sum(10, 20, 30));

var nums = [10, 20, 60, 30];

console.log(Math.max(...nums));

var obj = {
  name: "Devanshi",
  age: "23",
  hobbies: "music",
};
var obj1 = {
  name: "ken",
  age: "25",
  hobbies: "nothing",
  bloodgroup: "b+",
};

console.log({ ...obj, ...obj1 });

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let nos of numbers) {
  console.log(nos);
}

let obj2 = {
  name: "devanshi",
  age: "23",
};

for (let prop in obj2) {
  console.log(prop);
  console.log(obj[prop]);
}

//  let name = "devanshi"
let surname = "panchal";

//  console.log(`hello my name is ${name} ${surname}`)

let arr = [1, 2, 3];

let [a, b, c] = arr;

console.log(a, b, c);

let ob = {
  name: "dp",
  age: "23",
  hello: function () {
    console.log("hello");
  },
};

let { name, age, hello } = ob;
console.log(name, age);
hello();

class Person {
  hello() {
    console.log("Hello person");
  }
}
let p = new Person();
p.hello();

console.log(p.__proto__);
console.log(Person.prototype);

class Devanshi extends Person {}

let devanshi = new Devanshi();

devanshi.hello();

var cuboid = {
  length: 25,
  width: 50,
  height: 200,
};

//your code goes here
let { length, width, height } = cuboid;
console.log(length * width * height);

//-------------------------------------------
// day 3
// -----------------------------------------
// static methods
class Human {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(`Hello my name is ${name}`);
  }
}

class Helper {
  static getMessage(message) {
    console.log(message);
  }
}

// let helper = new Helper()
Helper.getMessage("hi");

//-----------------------getters and setters-----------------
class Human1 {
  constructor(n) {
    this._n = n;
  }

  get name() {
    return this._n.toUpperCase();
  }

  set name(value) {
    if (value.length > 2) {
      this._n = value;
    } else {
      console.log("not saved");
    }
  }
}

let person = new Human1("devanshi");
console.log(person.name);

person.name = "debu";
console.log(person.name);

// CALCULATING DISCOUNT
function main() {
  var prodID = readLine();
  var price = parseInt(readLine(), 10);
  var discount = parseInt(readLine(), 10);
  var prod1 = new Product(prodID, price);
  console.log(prod1.prodID + " price: " + prod1.price);
  prod1.changePrice(discount);
  console.log(prod1.prodID + " new price: " + prod1.price);
}
function Product(prodID, price) {
  this.prodID = prodID;
  this.price = price;
  this.changePrice = function (discount) {
    //your code goes here
    this.price *= 1 - discount / 100;
  };
}

//___________Symbol___________

let symbol = new Symbol('debug');
let anotherSymbol = new Symbol('debug');

let objj = {
    name: "devanshi",
    [symbol]:22
}

for(let key in obj) {
    console.log(key);
    console.log(obj[key])
}

//shared symbol

let symbol1 = Symbol.for('age')
let symbol2 = Symbol.for('age')

console.log(symbol1 == symbol2)

let personSymbol = {
    name: "devanshi"
}
function makeAge() {
    let symbol = Symbol.for("age")
    person[symbol] = 30;
}
makeAge();
console.log(personSymbol)

