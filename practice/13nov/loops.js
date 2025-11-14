let student={
    name:"John",
    age:20,
    marks:85
};
console.log(student.age); //20

// for loop
for(let i=0;i<5;i++){
    console.log("Iteration: "+i);
}

// for-in loop
for(let key in student){
    console.log(key+": "+student[key]);
}
// for-of loop
let colors=["red","green","blue"];
for(let color of colors){
    console.log(color);
}
// while loop
let count=0;
while(count<3){
    console.log("Count: "+count);
    count++;
}
// do-while loop
let num=0;
do{
    console.log("Number: "+num);
    num++;
}while(num<3);

// break and continue
for(let i=0;i<10;i++){
    if(i===5){
        break; // exits the loop when i is 5
    }
    if(i%2===0){
        continue; // skips even numbers
    }
    console.log(i); // prints odd numbers less than 5
}
