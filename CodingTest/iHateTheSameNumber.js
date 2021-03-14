/**
 * Complete the solution that removes the consecutive numbers from the array and returns the remaining numbers.
 * Example)
 * arr = [1, 1, 3, 3, 0, 1, 1], returns [1, 3, 0, 1]
 * arr = [4, 4, 4, 3, 3], returns [4, 3]
 */


// My solution
function mySolution(arr) {
    let answer = [];

    for (let i = 1; i < arr.length; i++) {
        if (i === 1) answer.push(arr[0]);
        if (arr[i - 1] !== arr[i]) answer.push(arr[i]);
    }

    return answer;
}

// Best solution
function bestSolution(arr) {
    return arr.filter((num, index) => num !== arr[index+1]);
}
