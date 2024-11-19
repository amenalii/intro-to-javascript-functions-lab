// alert("JS WORKS")
/*
Exercise 1: maxOfTwoNumbers()
Exercise 1 has been completed for you:
*/
const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));



//Exercise 2
const isAdult = (x) => {
    if (x >= 18) {
        return "Adult";
    } else {
        return "Minor";
    }
}
console.log("Exercise 2 Result:", isAdult(21));



//Exercise 3
const isCharAVowel = (x) => {
    if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
        return true;
    } else {
        return false;
    }
}
console.log("Exercise 3 Result:", isCharAVowel('a'))



//Exercise 4
function generateEmail(name, email) {
    return `${name}@${email}`;
}
console.log(`Exercise 4 Result: ${generateEmail('johnsmith', 'example.com')}`);

// const generateEmail = (name, email) => {
//     return `${name}@${email}`;
// }
// console.log(`Exercise 4 Result:`, generateEmail('johnsmith', 'example.com'))



//Exercise 5
function greetUser(name, time) {
    return `Good ${time}, ${name}!`;
}
console.log('Exercise 5 Result:', greetUser("Sam", "morning"))



//Exercise 6
const maxOfThree = (x, y, z) => {
    if (x >=y && x >= z) {
        return x;
    } else if (y >= x && y >= z) {
        return y;
    } else {
        return z;
    }
    }
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

  

//Exercise 7
function calculateTip(bill, percent) {
    return /*Math.round*/(bill * (percent / 100));
}
console.log('Exercise 7 Result:', calculateTip(50, 20));



//Exercise 8
function convertTemperature(temperature, degree) {
    if (degree = "C") {
        return (temperature * (9/5) + 32) + "F";
    } else if (degree = "F") {
        return ((temperature - 32) * 5/9) + "C";
    }
}
console.log('Exercise 8 Result:', convertTemperature(32, "C"));



//Exercise 9
function basicCalculator(numA, numB, operation) {
    if (operation === "add") {
        return numA + numB;
    } else if (operation === "subtract") {
        return numA - numB;
    } else if (operation === "multiply") {
        return numA * numB;
    } else if (operation === "divide") {
        return numA / numB;
    }
}
console.log('Exercise 9 Result', basicCalculator(10, 5, "subtract"))



//Exercise 10
function calculateGrade(x) {
    if (x >= 90) {
        return "A";
    } else if (x >= 80 && x <= 89) {
        return "B";
    } else if (x >= 70 && x <= 79) {
        return "C";
    } else if (x >= 60 && x <= 69) {
        return "D";
    } else if (x <= 59) {
        return "F"
    }
}
console.log('Exercise 10 Result:', calculateGrade(85));



//Exercise 11
function createUsername(firstname, lastname){
    // let first = firstname.slice(0,3);
    // let last = lastname.slice(0,3);
    // let total = firstname.length + lastname.length;
    // return first + last + total
    return firstname.slice(0,3) + lastname.slice(0,3) + (firstname.length + lastname.length)
}
console.log('Exercise 11 Result:', createUsername("Samantha", "Green") )



//Exercise 12 - ???
//function numArgs() 