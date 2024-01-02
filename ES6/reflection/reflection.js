class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
}
 function AnotherPerson() {
    this.age = 90;
 }

 AnotherPerson.prototype.sayHello = function() {
    console.log("hello!")
 }

// const p1 = new Person("Devanshi","23")

const p1 = Reflect.construct(Person, ["devanshi", "99"], AnotherPerson)
console.log(p1)