Hoisting & Scope
===============

## Execution context
1. The creation phase
* Create a global object i.e., window in the web browser or global in Node.js.
* Create a this object binding which points to the global object above(window === this).
* Setup a memory heap for storing variables and function references.
* Store the function declarations in the memory heap and variables within the global execution context with the initial values as undefined. 

2. The execution phase
During the execution phase, the JavaScript engine executes the code line by line. In this phase, it assigns values to variables and executes the function calls. For every function call, the JavaScript engine creates a new Function Execution Context. The Function Execution Context is similar to the Global Execution Context, but instead of creating the global object, it creates the arguments object that contains a reference to all the parameters passed into the function.

## Lexical Environment
In Javascript our lexical scope (available data + variables where the function was defined) determines our available variables. Not where the function is called(dynamic scope => "this" keyword).

## **Hoisting**
During the creation phase, the JavaScript engine moves the variable and function declarations to the top of your code. This feature is known as hoisting in JavaScript.

### Variable hoisting
Variable hoisting means the JavaScript engine moves the variable declarations to the top of the script. Variables are partially hoisted, not the actual value, it is just assigned undefined. The JavaScript engine hoists the variables declared using the let keyword, but it doesn’t initialize them as the variables declared with the var keyword.

### Function hoisting
Function declarations is fully hoisted. During the creation phase of the execution context, the JavaScript engine places the function declaration in the heap memory. Thus, we can use a function if it is declared somewhere in the same context. In case of function expressions (or arrow functions), it works like the variable hositing (The variable is hoisted up and it is assigned undefined).

```js
var favouriteFood = "grapes";

var foodThoughts = function() {
    // It starts new excution context here, so favouriteFood right below prints undefined 
    console.log("Original favorite food: " + favouriteFood); // undefined
    var favouriteFood = "kimchi";
    console.log("New favorite food: " + favouriteFood); // kimchi
}

foodThoughts();

```

### Source: 
[Udemy: Advanced Javascript Concepts](https://udemy.com/course/advanced-javascript-concepts/),
[JavaScript Tutorial](https://www.javascripttutorial.net/javascript-execution-context/)
