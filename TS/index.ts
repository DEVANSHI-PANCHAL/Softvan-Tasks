console.log("Hello typescript")
let num: number = 5
num = 7

//add two numbers

function sum(a:number,b:number):number {
    return a+b;
}

console.log(sum(10,4))
// sub string
let longText:string = "Hello i am devanshi panchal and i am learning typescript"

let shortText:string = longText.substring(0,10)
console.log(shortText)

//string comparision
let str1:string ="Hello"
let str2:string = "world"

let areEqual = str1 == str2

console.log(areEqual)

let product = "soap"
let price = 100

console.log(`the ${product} is of ${price}`)

//average

function calcAvg(numbers:number[]):number {
    if(numbers.length === 0) {
        return 0
    }
    const sum: number = numbers.reduce((accumulator, currentValue) => accumulator + currentValue,0)
    const avg = sum/numbers.length
    return avg;
}

const numbersArray1 :number[] = [10,20,30,40]

const result: number = calcAvg(numbersArray1);

function findMaxNumber(numbers: number[]): number | null {
    if (numbers.length === 0) {
      return null; 
    }
  
    let maxNumber: number = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
      }
    }
  
    return maxNumber;
  }
  
  const numbersArray: number[] = [10, 5, 8, 20, 15];
  const maxNumber: number | null = findMaxNumber(numbersArray);
  
  if (maxNumber !== null) {
    console.log("Maximum number:", maxNumber);
  } else {
    console.log("Array is empty.");
  }
  