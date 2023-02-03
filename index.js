//alert("Hey!");
document.write("Hey!");
var a=10;
var b=20;
var c=a+b;
document.write('<br>'); //Line break
document.write(c);
document.write('<br>');

//Arrays
//Methods: array.length, pop,push, etc;
var arrays = new Array;
arrays[0] = "Hello";
arrays[1] = "Welcome";
document.write(arrays);
document.write('<br>');
//OR
var arrays = new Array ("Hello", "Welcome", "Apple", "Zeal");
document.write(arrays);

//Array Sort
document.write('<br>');
arrays.sort();
document.write(arrays);
document.write('<br>');

//Strings
var str = "Javascript";
//Methods: string.length, charAt, indexOf, charCodeAt,localeCompare
var answer = str.charAt(5);
document.write(answer);
document.write('<br>');
var answer1 = str.charCodeAt(4)
document.write(answer1);
document.write('<br>');
var answer2 = str.indexOf('s') //If the element is not present then the index is -1 by default.
document.write(answer2);
document.write('<br>');
var answer2 = str.localeCompare('ava')//If this is present in string then we get 1 else -1.
document.write(answer2);
document.write('<br>');

//Function
sum();

function sum (){
    var a=10;
    var b=20;
    var c=a+b;
    document.write(c)
}
document.write('<br>');

function myfun(){
    document.write('Clicked');
}
document.write('<br>');

function myfun1(){
    document.write('Mouseoverd!');
}
document.write('<br>');

function myfun2(){
    document.write('Mousedowned!');
}
document.write('<br>');

function myfun3(){
    document.write('Mouseout!');
}
document.write('<br>');

function cal(){
    document.example.answer.value = eval(document.example.calculator.value);
}
document.write('<br>');

function myfun4(){
    debugger;
    window.location = "https://www.youtube.com/watch?v=PA8IptS2wQA"
}
document.write('<br>');

function confirmation(){
    var answer = confirm("Click ok to see the website");
    if(answer){
        alert("Welcome to the website");
        window.location = "https://www.youtube.com"
    }
    else{
        alert("Sorry! you clicked on cancel button");
    }
}
document.write('<br>');

function warning(){
    var str = prompt("Hi! My name is roBot. What is your name?", "");
    alert("Nice to meet you " + str + "!");
}
document.write('<br>');

//Math object: 
var d = Math.floor(10.99);
document.write("Math Floor: " + d);
document.write('<br>');
var e = Math.floor(-10.99);
document.write("Math Floor: " + e);
document.write('<br>');
var f = Math.round(10.99);
document.write("Math Round: " + f);
document.write('<br>');
var g = Math.log(10.99);
document.write("Math Log: " + g);
document.write('<br>');
var h = Math.max(10,80,5,100);
document.write("Math Max: " + h);
document.write('<br>');
var i = Math.min(10,80,5,100);
document.write("Math Min: " + i);
document.write('<br>');
var j = Math.pow(4,2);
document.write("Math Pow: " + j);
document.write('<br>');
var k = Math.sqrt(25);
document.write("Math Square Root: " + k);
document.write('<br>');
var l = Math.random();
document.write("Random no.: " + l);
document.write('<br>');
document.write('<br>');

//Date Methods (get and set) & Time Methods (get and set)
//Creating Date Object: 4 ways

//1. new Date();
let currDate = new Date();
console.log(currDate); //2023-02-03T16:37:29.760Z: T and Z is TimeZone GMT+0530(IST)
console.log(currDate.toLocaleString()); //3/2/2023, 10:14:20 pm: It helps to display in the Terminal itself, no need to go to the browse.
console.log(currDate.toString()); //Fri Feb 03 2023 22:14:59 GMT+0530 (India Standard Time)
console.log(Date.now()); //1675442763301: returns time in numeric value in miliseconds since January 1, 1970 00:00:00 UTC

//2. new Date(year, month, day, hours, minutes, seconds, miliseconds): this takes 7 arguments, we can pass less too. But passing month argument is necessary.
//In JavaScript the count of month starts from 0.
let d = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d.toLocaleString()); //24/12/2018, 10:33:30 am

//3. new Date(milliseconds);
let milli = new Date(1675442763301);
console.log(milli); //2023-02-03T16:46:03.301Z

//4. new Date(date string);
let milli1 = new Date('2023-02-03T16:46:03.301Z');
console.log(milli1); //2023-02-03T16:46:03.301Z

document.write(Date());
document.write('<br>');
var dt = new Date();
//get method
document.write("getDay() : "+ dt.getDay());
document.write('<br>');
document.write("getFullYear() : "+ dt.getFullYear());
document.write('<br>');
document.write("getMilliseconds() : "+ dt.getMilliseconds());
document.write('<br>');
document.write("getHours() : "+ dt.getHours());
document.write('<br>');
document.write("getMinutes() : "+ dt.getMinutes());
document.write('<br>');
document.write("getMonth() : "+ dt.getMonth());
document.write('<br>');
document.write("getSeconds() : "+ dt.getSeconds());
document.write('<br>');
document.write("getTime() : "+ dt.getTime()); //It displays time after 1st January 1970 in milliseconds.
document.write('<br>');
//set method
document.write('<br>');
var dts = new Date("Feb 2, 2023 13:37:56");
document.write(dts);
document.write('<br>');
dts.setDate(25);
document.write(dts);
document.write('<br>');
dts.setFullYear(2025);
document.write(dts);
document.write('<br>');
dts.setHours(2);
document.write(dts);
document.write('<br>');
dts.setMinutes(45);
document.write(dts);
document.write('<br>');
dts.setMonth(4);
document.write(dts);
document.write('<br>');
dts.setSeconds(00);
document.write(dts);
document.write('<br>');
document.write('<br>');
document.write('<br>');

//Validation
function validation(){
    var un = document.getElementById("user").value;
    var ps = document.getElementById("pd").value;
    
    if(un==""){
        document.getElementById("username").innerHTML = "**Please fill the Username**";
        return false;
    }
    if(ps==""){
        document.getElementById("password").innerHTML = "**Please enter the Password**";
        return false;
    }else{
        alert("Done!")
        return true;
    }
}

