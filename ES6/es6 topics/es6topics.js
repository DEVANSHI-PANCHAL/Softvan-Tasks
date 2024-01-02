var sum = (...array) => {
    let result = 0;
    for (let i =0; i< array.length;i++) {
        result += array[i]
    }
    return result;
}
console.log(sum(10,20,30))

var nums = [10,20,60,30]

console.log(Math.max(...nums))

var obj = {
    name: "Devanshi",
    age: "23",
    hobbies: "music"
}
var obj1 = {
    name: "ken",
    age: "25",
    hobbies: "nothing",
    bloodgroup:"b+"
}

console.log({...obj, ...obj1})

let numbers = [1,2,3,4,5,6,7,8,9]
 for(let nos of numbers) {
    console.log(nos)
 }

 let obj2 = {
    name : "devanshi",
    age: "23"
 }

 for(let prop in obj2) {
    console.log(prop)
    console.log(obj[prop])
 }

//  let name = "devanshi"
 let surname = "panchal"

//  console.log(`hello my name is ${name} ${surname}`)

 let arr = [1,2,3]

 let [a,b,c] = arr;

 console.log(a,b,c)

 let ob = {
    name: "dp",
    age:"23",
    hello : function() {
        console.log("hello")
    }
 }

 let {name, age, hello} = ob
 console.log(name, age)
 hello()

 class Person {
    hello() {
        console.log("Hello person")
    }
 }
 let p = new Person()
 p.hello();

 console.log(p.__proto__)
 console.log(Person.prototype)

 class Devanshi extends Person {

 }

 let devanshi = new Devanshi()

 devanshi.hello();

 var cuboid = {
    length: 25,
    width: 50,
    height: 200
};

//your code goes here
let {length, width, height}= cuboid
console.log(length*width*height)

