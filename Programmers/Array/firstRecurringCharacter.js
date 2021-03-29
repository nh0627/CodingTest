/**
 * Find the first repeated character in an array (if none, return undefined).
 */

const array = [2, 1, 1, 2, 4, 5];

const solution = (array) => {
    const hash = {};

    for (const num of array) {
        if (typeof hash[num] ==="undefined") {
            hash[num] = num;
        } else {
            return num;
        }
    }
    return undefined;
};

console.log(solution(array));