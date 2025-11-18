const num3=[1,2,3,4,5];
const even=num3.filter(n => n%2===0);
// reduce method apllied on array only
const reduce=num3.reduce((acc,cur)=> acc+cur,0);
console.log(even);
console.log(reduce);
const odd=num3.filter(n => n%2!==0);
console.log(odd);
