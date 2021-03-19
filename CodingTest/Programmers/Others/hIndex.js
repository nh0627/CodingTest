/**
 * Complete a soultion to return h-index.
 * H-index: Of "n" papers published by a scientist, 
 * the maximum value of "h" is this scientist's h-index 
 * if more than "h" paper has been cited and the rest has been cited less than "h".
 * Example)
 * citations: [3, 0, 6, 1, 5] result: 3
 * citations: [22, 42] result: 2
 * 
 */

// My solution
function mySolution(citations) {
    let answer = 0;
    let count = 0;
    let indexes = [];

    while (count <= citations.length) {
        const h = citations.filter(paper => paper >= count).length;
        if (count >= h) indexes.push(h);
        ++count;
    }

    if (indexes.length !== 0) answer = Math.max(...indexes);

    return answer;
}

// Best Solution
function bestSolution(citations) {
    citations = citations.sort((a, b) => b - a);
    var i = 0;
    while (i + 1 <= citations[i]) {
        i++;
    }
    return i;
}