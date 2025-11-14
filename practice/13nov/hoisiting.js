// initialise krne s phle call kr dena - hoisting
console.log(temp); // undefined (hoisted)
var temp = 10;
console.log(temp1); // 10 //ReferenceError: Cannot access 'temp' before initialization
let temp1 = 20; //ReferenceError: Cannot access 'temp' before initialization
console.log(temp2); 
const temp2 = 30; //ReferenceError: Cannot access 'temp' before initialization
// function hoisting
greet(); // Works fine
function greet() {
  console.log("Hello yash!");
}