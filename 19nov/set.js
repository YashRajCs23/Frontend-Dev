//synchronous code
// for (let i = 0; i < 10; i++) {
//   console.log(`index: ${i}`);
// }

//asynchronous code
setTimeout(() => {
  console.log('This is asynchronous code executed after 2 seconds');
}, 2000);
for (let i = 0; i < 1000; i++) {
  console.log(`index: ${i}`);
}