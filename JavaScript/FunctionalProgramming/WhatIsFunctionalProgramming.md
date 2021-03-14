What is functional programming?
======================

In OOP, a class is divided up properties and methods. 
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

### Functional Programming Keywords
* [PureFunction](../PureFunction.md)

* Idempotence
The idea of Idempotence is a function that always returns or does what we expected to do. The result won’t change beyond initial calling.
e.g. Deleting a record by GUID (not by count) is idempotent, because the row stays deleted after subsequent calls. (additional calls do nothing)
> An idempotent function can cause idempotent side-effects. A pure function cannot.

* Imperative vs Declarative

* Immutability

* HOF and Closure

* Currying

* Partial Application

### Source: 
[Advanced Javascript Concepts](https://udemy.com/course/advanced-javascript-concepts/)
[stackoverflow](https://stackoverflow.com/questions/4801282/are-idempotent-functions-the-same-as-pure-functions)