/**
 * Create a solution to return the number of different combinations of clothes 
 * given a two-dimensional array of camouflage clothes for a spy.
 * example)
 * clothes: [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]
 * return: 5
 * 
 * clothes: [["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]]
 * return: 3
 */

// My solution
function mySolution(clothes) {
    let answer = 1;
    const hash = {};

    for (let i = 0; i < clothes.length; ++i) {
        let key = clothes[i][1];
        hash[key] = (hash[key] || 1) + 1;
    }

    answer = Object.values(hash).reduce((a, b) => a * b);

    return answer - 1;
}