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

//Dates
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

