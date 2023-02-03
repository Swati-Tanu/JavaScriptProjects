//Arrays

let array = new Array(5);
console.log(array.length); //length is a property of array.
array = ['a','b','c','d','e','f'];
//For in loop: Both index and value can be accessed.
for (let key in array){
    console.log("forIn:",array[key]);
    console.log("forIn:",key);
}
//For off loop: Used to access the elements/values directly, we can't access index.
for (let key of array){
    console.log("forOff:", key);
}
//forEach loop: Calls a function for each element in the array. We cannot use break statement in forEach.
array.forEach(function(element,index, array /*type of data structure*/){
    console.log("forEach:", element);
    console.log("forEach:", index);
    console.log("forEach:", array);
});
//Arrow function of forEach: It doesnot support 'this' keyword.
array.forEach((element,index, array) => {
    console.log("Arrow forEach:", element);
    console.log("Arrow forEach:", index);
    console.log("Arrow forEach:", array);
});

//Search in Array: indexOf(), lastIndexOf(), includes(), find(), findIndex().

console.log(array.indexOf('c')); //returns the index of the element. Starts to search from 0th index.
console.log(array.indexOf('c',3)); //also we can put an index number to start search from that index. If the element is not present it returns -1.
console.log(array.lastIndexOf('c',3)); //It does the same thing in reverse order. Starts to search from last index. If the element is not present it returns -1.
console.log(array.includes('z')); //checks if the element is present in the array or not. Returns boolean value.
console.log(array.includes('c',4)); //Also if we give any index to serach from it only go forward and will return false if did not find the element in that case even if the element is present in the array.
let arr = [200,300,400,500,600] 
let findElem = arr.find((currVal,index,array) => {
    return currVal > 400;
});
console.log(findElem); //Expected output: 500,600. But find() only returns 400 i.e., the first satisfied value. If none satisfied returns 'undefined'.
let findIndex = arr.findIndex((currVal,index,array) => {
    return currVal > 400;
});
console.log(findIndex); //It returns the index simply. Expected output: 3,4. But findIndex() only returns 3 i.e., the index of first satisfied value. If none satisfied returns -1.

//filter() returns a new array containing all elements of the calling array. That means it doesnot mutate the original array.
let filterElem = arr.filter((element, index) => {
    return element < 400;
})
console.log("Filtered Array: ",filterElem); //When none is satisfied it returns an empty array.
console.log("Original Array: ",arr);

//Sorting in an array
//Array.prototype.sort() 
let months = ['March','Jan','Dec','Feb','Nov'];
console.log(months.sort()); //return in ascending order that is alphabatically: [ 'Dec', 'Feb', 'Jan', 'March', 'Nov' ]. Also it first convert everything in string then sort in ascending order.

//CRUD
//Array.prototype.push(); adds element at the end. It returns the new length of the array.
const animals = ['pigs','goats','sheep'];
const count = animals.push('chicken');
console.log(animals);
console.log("Push returns: ",count); //4: push () returns the new length of the array.

//Array.prototype.unshift(); adds element in the start. It returns the new length of the array. Everything else is similar to push().
const counting = animals.unshift('gorilla','cows','camel');
console.log(animals);
console.log("Push unshift: ",counting);

//Array.prototype.pop(); removes element from the end and returns that element. This method changes the length of the array.
console.log("Length before pop: ",animals.length);
const poped = animals.pop();
console.log(animals);
console.log("Length after pop: ",animals.length);
console.log("Pop returns: ",poped);

//Array.prototype.shift(); removes element from the start and returns that element. This method changes the length of the array.
console.log("Length before shift: ",animals.length);
const shifted = animals.shift();
console.log(animals);
console.log("Length after shift: ",animals.length);
console.log("shift returns: ",shifted);

//Array.prototype.splice(): All CRUD operation can be performed by this one array method. Eg:
const month = ['Jan', 'march', 'April', 'June', 'July'];

//1. Add Dec at the end: (Create example)
//const newMonth = month.splice(5, 0, 'Dec'); //We need to know the index here.
const newMonth = month.splice(month.length, 0, 'Dec'); //This is better approach.
console.log(month);
console.log(newMonth);//[]: slice() returns an array filled with deleted element. If nothing is deleted it returns an empty array [].

//2. Update march to March: (Update example)
//const updateMonth = month.splice(1,1,'March'); //We need to know the index here.
const indexFind = month.indexOf('march'); //This is better approach.
if(indexFind !== -1){
const updateMonth = month.splice('indexFind',1,'March'); 
console.log(month); //[ 'Jan', 'March', 'April', 'June', 'July' ]
console.log(updateMonth); //['march']
}else{
    console.log('No such data found');
}

//3. Delete June: (Delete example)
const indexOfMonth = month.indexOf('June'); //This is better approach.
if(indexOfMonth !== -1){
const updateMonth = month.splice('indexOfMonth',1); //If 2 then it will delete June and July.
//const updateMonth = month.splice('indexOfMonth',Infinity); //To delete all elements after a particular element
console.log(month); //[ 'Jan', 'March', 'April', 'July' ]
console.log(updateMonth); //['June']
}else{
    console.log('No such data found');
}

//map(): map() returns element a new array with desired result, does not mutate the original array like forEach();
const array1 = [1,4,9,16,25];
//num > 9
const newArray = array1.map((currElem, index, array) => {
    return currElem > 9;
});
console.log("Mapped Array: ",newArray); //[ false, false, false, true, true ]: by default in boolean form. To solve it look down.
console.log("Original Array: ",array1);

const newArray1 = array1.map((currElem, index, array) => {
    return `Index no. = ${index} and the value is ${currElem} belong to ${array1}`;
});
console.log("Mapped Array: ",newArray1); //[ false, false, false, true, true ]: by default in boolean form. To solve it look down.
console.log("Original Array: ",array1);

let sqarr = [25, 36, 49, 64, 81];
let sqrt = sqarr.map((currElem, index, array) => {
    return currElem**0.5;
})
console.log("Sqrt: ",sqrt);

//Chaining example: 
let data = [2, 3, 4, 6, 8];
let newarr = data.map((currElem, index, array) => {
    return currElem*2;
}).filter((currElem) => {
    return currElem > 10;
})
console.log("Multiplied by 2, greater than 10: ",newarr);

//reduce(); It returns single value. We ue it to flatten an array, to convert the 3D/2D array into single dimentional array. It take four arguments: accumulator, current value, current index, source array and initial value.
let reducedData = data.reduce((acc, currElem, index, array) => {
    acc = acc + currElem;
    return acc;
},0)
console.log(reducedData);

//How to flatten an array
//Here using concat() and reduce() to achieve it.
const matrix = [
    ['a', 'b'],
    ['c', 'd'],
    ['e', 'f']
];

let flatArr = matrix.reduce((acc, currVal) => {
    return acc.concat(currVal)
});
console.log(flatArr);
