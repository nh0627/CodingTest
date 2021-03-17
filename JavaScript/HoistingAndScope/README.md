Hoisting & Scope
===============
## Execution context
1. The creation phase
* Create a global object i.e., window in the web browser or global in Node.js.
* Create a this object binding which points to the global object above(window === this).
* Setup a memory heap for storing variables and function references.
* Store the function declarations in the memory heap and variables within the global execution context with the initial values as undefined. 

2. The execution phase
During the execution phase, the JavaScript engine executes the code line by line. In this phase, it assigns values to variables and executes the function calls. For every function call, the JavaScript engine creates a new Function Execution Context. The Function Execution Context is similar to the Global Execution Context, but instead of creating the global object, it creates the arguments object that contains a reference to all the parameters passed into the function. Further, each excution context has each variable environment.

```js
var favouriteFood = "grapes";

var foodThoughts = function() {
    // It starts new excution context here, so favouriteFood right below prints undefined 
    // "Each excution context has each variable environment"
    console.log("Original favorite food: " + favouriteFood); // undefined
    var favouriteFood = "kimchi";
    console.log("New favorite food: " + favouriteFood); // kimchi
}

foodThoughts();
```

## **Hoisting**
During the creation phase, the JavaScript engine moves the variable and function declarations to the top of your code. This feature is known as hoisting in JavaScript.

### Variable hoisting
Variable hoisting means the JavaScript engine moves the variable declarations to the top of the script. Variables are partially hoisted, not the actual value, it is just assigned undefined. The JavaScript engine hoists the variables declared using the let keyword, but it doesn’t initialize them as the variables declared with the var keyword.

### Function hoisting
Function declarations is fully hoisted. During the creation phase of the execution context, the JavaScript engine places the function declaration in the heap memory. Thus, we can use a function if it is declared somewhere in the same context. In case of function expressions (or arrow functions), it works like the variable hositing (The variable is hoisted up and it is assigned undefined).

## **Scope**
> Each world, that is each context, has a link to its outside world. Or a link to its parent and this outer environment depends on where the function sits lexical.
Scope determines the visibility and accessibility of a variable. JavaScript has three scopes: global scope, local scope, and block scope.

### Global scope
When you execute a script, the JavaScript engine creates a global execution context.
It also assigns variables that you declare outside of functions to the global execution context. 
These variables are in the global scope, also known as global variables.
> Issues with the global scope:  1. Polluting the global namespace 2. Having too much data on our global execution environment can crash our memory.

### Local scope
Variables that you declare inside a **function** are local to the function. They are called local variables.

### Block scope
ES6 provides the let and const keywords that allow you to declare variables in block scope.

### Global variable leaks
```js
function getCounter() {
    counter = 10;
    return counter;
}

console.log(getCounter());
```
In this example, we assigned 10 to the counter variable without the var, let, or const keyword and then returned it.
Outside the function, we called the getCounter() function and showed the result in the console.
This issue is known as the leaks of the global variables. If the variable are not in both a local or global scope, the JavaScript engine creates the variable in the global scope.
To fix this “weird” behavior, you use the **'use strict'** at the top of the script or at the top of the function.

### Source: 
[Udemy: Advanced Javascript Concepts](https://udemy.com/course/advanced-javascript-concepts/),
[JavaScript Tutorial](https://www.javascripttutorial.net/)
