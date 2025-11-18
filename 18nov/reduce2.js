const letters=['a','b','a','c','b','a'];


const count=letters.reduce((acc,cur)=>{
    acc[cur]=(acc[cur] || 0)+1;
    return acc;
},{});
console.log(count);
// output: { a: 3, b: 2, c: 1 }