const a=[1,2]
const b=[3,4]
const merged=[...a,...b]
console.log(merged);
// output: [ 1, 2, 3, 4 ]
const obj1={x:1}
const obj2={y:2}
const mergedObj={...obj1,...obj2}
console.log(mergedObj);
// output: { x: 1, y: 2 }