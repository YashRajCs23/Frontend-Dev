let scores = Array(8)
    .fill(0)
    .map(() => Math.floor(Math.random() * 71) + 30); 
console.log("Scores:", scores);

let highest = Math.max(...scores);
let lowest = Math.min(...scores);
let average =
    scores.reduce((sum, value) => sum + value, 0) / scores.length;
let passedCount = scores.filter(score => score >= 50).length;
let summary = `
------- Student Performance Summary -------
Scores: ${scores.join(", ")}
Highest Score: ${highest}
Lowest Score: ${lowest}
Average Score: ${average.toFixed(2)}
Students Passed (>=50): ${passedCount}
-------------------------------------------
`;
console.log(summary);