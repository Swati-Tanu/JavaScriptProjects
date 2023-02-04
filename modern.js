//Destructuring

//Array destructuring
let myBioData = ['Aman','Kumar','25'];
let [fName, lName, age, education = 'MCS'] = myBioData;

//Object destructuring
let obj = {
    name : 'Aman',
    lastname : 'Kumar',
    Age: 25
};
let {name, lastname, Age, edu = 'MCS'} = obj;

//Object Properties:
// 1. Dynamic properties: myName is just a variable name but [myName] represents the value of the key myName.
//2.If key name & value are same then we can simply mention it once. 

//Spread Operator (...arr/...obj) is for array as well as object.

//Array.prototype.includes()

//String padding: padStart(), padEnd()
let str = "My name is Ironman";
console.log(str.padStart(5)); //"     My name is Ironman"
console.log(str.padEnd(10)); //"My name is Ironman          "

//Object.values(): 
console.log((Object.values(obj))); //['Aman', 'Kumar' 25]
//Object.entries():
let arrObj = ((Object.entries(obj)));
console.log(arrObj) //[['name','Aman'], ['lastname','Kumar'] ['Age',25]]
//Object.fromEntries(): 
console.log((Object.fromEntries(arrObj))); //let obj = {name : 'Aman', lastname : 'Kumar', Age: 25};

//BigIn: 
let oldNum = Number.MAX_SAFE_INTEGER;
console.log(oldNum);
console.log(oldNum + 15); //gives wrong output
let newNum = (oldNum + 15n); //to solve this issue BigInt comes into picture.
console.log(newNum)
console.log(typeof newNum) //bigint

//Nullish Coalescing: There are 6 fasly values: 0, undefined,"",false,NaN,null.

//Use strict
x = 3.14;
console.log(x); //3.14
"use strict"
y = 5.8;
console.log(y); //error
let z = 8.4;
console.log(z); //8.4





