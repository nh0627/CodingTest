Pure Function
======================

## Two rules of pure function
* *No side effects* - A function cannot modify anything outside of itself.
One of the problems with having side effects is that reusing shared state something like a global variable that can interact with anything and the order of the function calls matter and that can cause a lot of bugs.

```
// Side effect

const array = [1, 2, 3];

function mutateArray(arr) {
    arr.pop(); 
}

function mutateArray2(arr, item) {
    arr.push(item);
}

mutateArray(array);
mutateArray2(array, "test");
mutateArray(array);

// Without side effect - No affect anything outside of the function!

function removeLastItem(arr) {
    const newArray = [...arr];
    newArray.pop();
    return newArray;
}

removeLastItem(array);

```

* *Referential Transparency* - A function has to always return the same output given the same input.

```
function a(num1, num2) {
    return num1 + num2;
}

function b(num) {
    return num * 2;
}

b(a(3, 4));
b(7); // The same result with the same input

```

## Can everything be pure?
Just pure functions which are just functions. It doesn't do anything because *a program cannot exist without side effects*. We can't have Web sites with just pure functions. However, the goal is to minimize side effects and to organize code in a way so that we isolate these side effects.

## Benefits of pure functions
* They're easier to reason about and debug because they don't depend on mutable state.
* The return value can be cached or "memoized" to avoid recomputing it in the future.
* They're easier to test because there are no dependencies (such as logging, Ajax, database, etc.) that need to be mocked.

## Compose and Pipe
Composition is the idea that any sort of data transformation that we do should be obvious.
Compose ability is a system design principle that deals with a relationship of components.
We can compose functions build them together to add extra functionality to create that data flow 
where we take a piece of data we take it through all functions and then finally we have some sort of data that gets output 
because all those functions are pure and all those functions well are composed of all.
In addition, pipe is simple, only the order will be different from compose.

```
// Compose
const compose = (f, g) => data => f(g(data));
// Pipe
const pipe = (f, g) => data => g(f(data));

const multiplyBy3 = num => num * 3;
const makePositive = num => Math.abs(num);

const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive);
multiplyBy3AndAbsolute(-50); // it returns -150
```

### Source: 
[Udemy: Advanced Javascript Concepts](https://udemy.com/course/advanced-javascript-concepts/), 
[opensource.com](https://opensource.com/article/17/6/functional-javascript)