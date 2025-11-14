let x = 16.75;
let roundedValue = Math.round(x);
let squareRoot = Math.sqrt(x);
let powerValue = Math.pow(x, 3);
let randomNumber = Math.floor(Math.random() * 41) + 10;
// Display summary using template literals
let summary = `
------ Math Utility Dashboard ------
Given Number: ${x}
Rounded: ${roundedValue}
Square Root: ${squareRoot}
x³ Value: ${powerValue}
Random (10-50): ${randomNumber}
------------------------------------
`;
console.log(summary);