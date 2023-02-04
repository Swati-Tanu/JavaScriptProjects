//Event Propagation: The event propagation mode determines in which order the elements receive the event. //By default the event propagation mode is event bubbling. 
//1. Event Bubbling : the event is first captured and handled by the innermost element and then propagated to outer element. Target to parent (bottom to top)
//2. Event Capturing : the event is first captured by the outermost element and propagated to the inner elements. Capturing is also called "Trickling". Grandparent/Parent to target (top to bottom).
//If event is set on more than one element then to stop other's propagation we use event.stopPropagation().

//HOF: Function that accepts another function as an argument is called Higher order function. Here, calculator() is HOF.
//Callback Function: A function that are passed as an argument of another function is called callback function. Here, add(), subs(), mult() are callback function.

let add = (a,b) => {
    return a+b;
}
let subs = (a,b) => {
    return Math.abs(a-b);
}
let mult = (a,b) => {
    return a*b;
}

let calculator = (num1,num2,operator) => {
    return operator(num1,num2)
};

calculator(5,2,add);

//Asynchronous JavaScript: 


