{
    var temp=10;
    let temp2=20;
    const temp3=30;
}

console.log(temp);  // 10
console.log(temp2);  // ReferenceError: temp2 is not defined
console.log(temp3);  // ReferenceError: temp3 is not defined
//let and const are block-scoped, so they are not accessible outside the block they are defined in.