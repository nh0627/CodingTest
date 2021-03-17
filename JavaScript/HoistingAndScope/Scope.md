Scope
===============
> Each world, that is each context, has a link to its outside world. Or a link to its parent and this outer environment depends on where the function sits lexical.
Scope determines the visibility and accessibility of a variable. JavaScript has three scopes: global scope, local scope, and block scope.

## Global scope
When you execute a script, the JavaScript engine creates a global execution context.
It also assigns variables that you declare outside of functions to the global execution context. 
These variables are in the global scope. They are also known as global variables.

## Local scope
Variables that you declare inside a **function** are local to the function. They are called local variables.

## Block scope
ES6 provides the let and const keywords that allow you to declare variables in block scope.

## Global variable leaks
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