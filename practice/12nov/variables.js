var temp=10;
let temp2=20;
const temp3=30;

var temp=15; // Re-declaring and intialise with var is allowed
// let temp2=25; // Re-declaring let variable will cause an error
temp2=25;    // Re-assigning or reinitialise let variable is allowed
// temp3=35; // Re-assigning const variable will cause an error 


//var temp2=40; // Re-declaring with another keyword is not allowed

// let temp=50; // Re-declaring with let keyword is not allowed

console.log("temp:", temp);
console.log("temp2:", temp2);
console.log("temp3:", temp3);