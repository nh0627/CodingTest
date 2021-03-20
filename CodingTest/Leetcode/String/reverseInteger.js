/**
 * Given a signed 32-bit integer x, return x with its digits reversed. 
 * If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 */

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
    let answer = 0;

    while (x !== 0) {
        const pop = x % 10;
        x = parseInt(x / 10);
        answer = answer * 10 + pop;
        if (answer < Math.pow(-2, 31) || answer > Math.pow(2, 31) - 1) return 0;
    }

    return answer;
};