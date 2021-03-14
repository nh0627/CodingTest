/**
 * Complete the solution to return the maximum number of departments that can get support of budget
 * when the total "budget" parameters are given and
 * array ("d") containing the amount of items requested by each department.
 * Example)
 * d: [1,3,2,5,4] budget: 9 result: 3
 * d: [2,2,3,3] budget: 10 result: 4
 */

// My solution
function mySolution(d, budget) {

    d.sort((a, b) => a - b);

    let count = 0;
    while (budget > 0) {
        budget = budget - d[count];
        if (budget >= 0) ++count;
    }

    return count;
}