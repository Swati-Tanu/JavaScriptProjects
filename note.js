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

//Operators
var x = 10;
var y = 10;
console.log(x == y) //true
console.log("Is both x and y equal?" + x == y); //false (as we are using one more operator '+').
console.log(`Is both x and y equal?" : ${x == y}`); //The above bug is solve by ES6 using Template literals).

//Increment/Decrement
var num = 15;
var newNum = num++ +5;
console.log(num); //16
console.log(newNum); //20 (15+5)
var newNum = ++num; 
console.log(num); //17
console.log(newNum); //17 (16+1)
var newNum = num-- +5;
console.log(num); //16
console.log(newNum); //22 (17+5)
var newNum = --num +5;
console.log(num); //15
console.log(newNum); //20 (15+5)

//Logical AND (&&) is also called logical conjunction.
//Logical OR (||) is also called logical disjunction.
//String Concatenation Operator: '+'
//Exponentiation operator: '**'
console.log(10 ** -1); //-1 (1/10)

//Swap value without using third variable.
var num1 = 5;
var num2 = 10;
//o/p b=5; a=10;
a = a + b; // a = 15;
b = a - b; // b = 5;
a = a - b; // a = 10;

//Leap year or not

let year = 2400;
debugger;
if(year%4===0){
    if(year%100===0){
        if(year%400===0){
            console.log(year + " is a leap year");
        }else{
            console.log(year + "is not a leap year");
        }
    }else{
        console.log(year + " is a leap year");
    }
}else{
    console.log(year + " is not a leap year");
}

//6 Falsy values in JS: 0, "", undefined, null, NaN, false.

//Conditional ternary operator is the only JS operator that takes three operands.

//Find the Area of circle, triangle and rectangle.

var area = 'sqaure';
var PI = 3.142, lh=5, bh=4, r=3;
switch(area){
    case 'circle': console.log("The area of the circle is: " + PI*r**2 );
    break;
    case 'triangle': console.log("The area of the triangle is: " + (lh*bh)/2 );
    break;
    case 'rectangle': console.log("The area of the rectangle is: " + (lh*bh));
    break;
    default: console.log("Please enter valid data");
    break;
}

//While loop checks the condition first then enters but the do while loop perform the operation for the first time before checking the condition then checks after first time.

//Do-While Loop
var j = 5;
do{
    console.log(j);
    j++;
}while(j<5)

//While Loop
var i = 1;
while(i<5){
    console.log(i);
    i++;
}

//Function Defination is also called function declaration or function statement.
//When we donot explicitlly return anything JavaScript implicitlly returns 'undefined'.

//Function expression: means creating a function and putting it into the variable.
function sum(a,b){
    let total = a+b;
    console.log(total);
}   

let funExp = sum(5,10);
funExp;

//A function without a name is called an anonymous function.

//ES6
//let & const, template string, default arguments, rest & spread operators, destructuring, object properties, arrow function.









