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

//Hoisting: It is a machenism where variables and function declaration are moved to the top of their scope before the code executed.

//Scope Chain : It is used to resolve the value of variable names in JS. It is lexically defined which means we can see what the scope chain will be by looking at the code. 

//Lexical Scope: It means the inner function can get access to their parent functions, variables but the vice-versa is not true.

//Closures: It is a combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. in JS, it is created everytime a function is created, at function creation time.



