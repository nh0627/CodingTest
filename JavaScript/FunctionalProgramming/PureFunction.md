Pure Function
======================

## Two rules of pure function

* *No side effects* - A function cannot modify anything outside of itself.
> One of the problems with having side effects is that reusing shared state something like a global variable that can interact with anything and the order of the function calls matter and that can cause a lot of bugs.

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

> Just pure functions which are just functions. It doesn't do anything because *a program cannot exist without side effects*. We can't have Web sites with just pure functions. However, the goal is to minimize side effects and to organize code in a way so that we isolate these side effects.

## Benefits of pure functions
* They're easier to reason about and debug because they don't depend on mutable state.
* The return value can be cached or "memoized" to avoid recomputing it in the future.
* They're easier to test because there are no dependencies (such as logging, Ajax, database, etc.) that need to be mocked.

## Perfect Function💥💥
* Should do one task only
* Return statement
* Pure
* No shared state
* Immutable state
* Composable
* Predictable

### Source: 
[Udemy: Advanced Javascript Concepts](udemy.com/course/advanced-javascript-concepts/)
[opensource.com](https://opensource.com/article/17/6/functional-javascript)