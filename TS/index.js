console.log("Hello typescript");
var num = 5;
num = 7;
//add two numbers
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 4));
// sub string
var longText = "Hello i am devanshi panchal and i am learning typescript";
var shortText = longText.substring(0, 10);
console.log(shortText);
//string comparision
var str1 = "Hello";
var str2 = "world";
var areEqual = str1 == str2;
console.log(areEqual);
var product = "soap";
var price = 100;
console.log("the ".concat(product, " is of ").concat(price));
//average
function calcAvg(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    var sum = numbers.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0);
    var avg = sum / numbers.length;
    return avg;
}
var numbersArray1 = [10, 20, 30, 40];
var result = calcAvg(numbersArray1);
function findMaxNumber(numbers) {
    if (numbers.length === 0) {
        return null;
    }
    var maxNumber = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }
    return maxNumber;
}
var numbersArray = [10, 5, 8, 20, 15];
var maxNumber = findMaxNumber(numbersArray);
if (maxNumber !== null) {
    console.log("Maximum number:", maxNumber);
}
else {
    console.log("Array is empty.");
}
