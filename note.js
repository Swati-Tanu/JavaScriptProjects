console.log(10 + "20"); //1020
console.log(9 - '5'); //4 (It's a bug)
console.log("Java" + "Script"); //JavaScript (Concatenation)
console.log("Java" - "Script"); //NaN

//Operation on Boolean 
console.log(true + true); //2
console.log(true + false);//1
console.log(false + true);//1
console.log(false + false);//0
console.log(false - true);//-1

//Datatype of null in object.
let a = null;
console.log(typeof a); //object

//Datatype of undefined is undefined.
let b;
console.log(b); //undefined
console.log(typeof b); //undefined

//NaN is a property of the global object. In other words, it is a variable in global scope. The initial value of NaN is Not a Number.
NaN === NaN; //false
Number.NaN === NaN; //false(as NaN is a property of global type)
isNaN(NaN); //true(as NaN is not a number)
isNaN(Number.NaN); //true
Number.isNaN(NaN); //true


