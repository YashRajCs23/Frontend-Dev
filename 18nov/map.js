let arr=[10,3,5,4,6,2,3,5,7,5];
//console.log(arr);
// for (let index = 0; index < arr.length; index++) {
//     if(arr[index]===2 || arr[index]===3)
//     {
//         console.log(arr[index]);
        
//     }
// }
// let element=0;
// for (let index = 0; index < arr.length; index++) {
//     element+= arr[index];
    
// }
// console.log(element);
// let arr2=arr.map(n=>n*2);
// // console.log(arr2);


// arr2.map((n,index)=>{
//     console.log(My Number is ${n*1} My Index is ${index});
    
// })

let arr3=arr.filter(n=> n%2===0)
console.log(arr3);