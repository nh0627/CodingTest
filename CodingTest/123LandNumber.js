/**
 * The 124 land uses only 1, 2, and 4 to express all numbers.
 * When a natural number of n is given as a parameter, 
 * complete a solution to return the value that changed n to a number used in 124 countries.
 * Example)
 * 1 => 1
 * 2 => 2
 * 3 => 4
 * 4 => 11
 * 5 => 12
 * 6 => 14
 * 8 => 22
 * 10 => 41
 */

// My solution
const mySolution = (n) => {
    let isMultipleof3 = false;
    let quotient = 0;
    let remainder = 0;
    let numbers = "";

    while (n > 0) {
        isMultipleof3 = n % 3 === 0;
        quotient = isMultipleof3 ? parseInt(n / 3) - 1 : parseInt(n / 3);
        remainder = isMultipleof3 ? 4 : n % 3;
        numbers = remainder + numbers;
        n = quotient;
    }

    return numbers;
}

// Best solution
const bestSolution = n => {
    const src = [4, 1, 2];

    let result = "";
    while (n) {
        result = src[n % 3] + result;
        n = Math.floor((n - 1) / 3);
    }
    return result;
}