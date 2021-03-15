What is functional programming?
======================

In OOP, a class is divided up by properties and methods. 
Functional programming has the idea as well of separating concerns but they also separate data and functions.
Most functional programming languages don't have these concepts of classes and methods that belong to objects,
instead functions operate on well-defined data structures like arrays and objects 
rather than actually belonging to that data structure like an object (keep it stateless).

## Perfect Function💥💥
* Should do one task only
* Return statement
* Pure
* No shared state
* Immutable state
* Composable
* Predictable

## Functional Programming Keywords

### [PureFunction](PureFunction.md)

### Idempotence
The idea of Idempotence is a function that always returns or does what we expected to do. The result won’t change beyond initial calling.
e.g. Deleting a record by GUID (not by count) is idempotent, because the row stays deleted after subsequent calls. (additional calls do nothing)
> An idempotent function can cause idempotent side-effects. A pure function cannot.

### Imperative vs Declarative
Imperative code is code that tells the machine what to do and how to do it, but declarative code tells what to do and what should happen.
A computer is better at being imperative, which is it needs to know how to do things.
We on the other hand as humans are more declarative.

```
const arr = [1, 2, 3];

// Imperative
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Declarative
arr.forEach(number => console.log(number));
```

### Immutability
In OOP we have classes that you can change the property, but in functional programming, it is different.
The idea is of immutability that is not changing state but instead making copies of the state and returning a new state every time.
> I am just going to borrow this data and I am only going to make a new copy of this data so other people can still use this.

```
const obj1 = { name: "Lee" };
function clone(obj) {
    return {...obj}; // Pure function
}

const obj2 = clone(obj1);
obj2.name = "Nana";

console.log(obj1.name); // Lee
console.log(obj2.name); // NaNa
```

### Higher Order Function (HOF)
A function either takes one or more functions as arguments or returns a function as a result. This is possible because a function is the first citizen in JS.

```
const hof = (fn) => fn(5);
hof(x => return(x));
```

### Closure
A function accesses a variable defined outside of the function scope, which is the scope of the parent. Beneficial for memory efficiency✔
> There is no clear way to create private methods in JS, but the closure can ‘private’ the methods.

```
const closure = function() {
    let count = 55;
    return function() {
        return count; // It remembers "count" which is declared outsize of its scope.
    }
}
const getCounter() = closure();
getCounter();

```

### Currying
Instead of a function that can take multiple parameters, with currying we can make a function that takes one parameter at a time.

```
const multiply = (a, b) => a * b;
multiply(3, 5); // 15

const curriedMultiply = a => b => a * b;
curriedMultiply(3)(5); // 15 again!

// When we want to remember "3", we can simply make another function below. This will remember 3, till the end of the program.
const curriedMultiply3 = curriedMultiply(3);
```

### Source: 
[Udemy: Advanced Javascript Concepts](https://udemy.com/course/advanced-javascript-concepts/), 
[stackoverflow](https://stackoverflow.com/questions/4801282/are-idempotent-functions-the-same-as-pure-functions)