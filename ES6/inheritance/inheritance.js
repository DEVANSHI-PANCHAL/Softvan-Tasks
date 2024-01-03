class Person {
    constructor(name){
        this.name = name;
    }
    hello() {
        console.log(`Hello world i am ${this.name}`)
    }
}

class Devanshi extends Person {
    constructor (age) {
        super('Devanshi')
        this.age = age
    }

}

let devanshi = new Devanshi(23)
devanshi.hello()