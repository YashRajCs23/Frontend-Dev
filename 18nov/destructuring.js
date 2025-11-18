const user={
    name:"John",
    age:30,
    city:"New York",
    myFunction:function(){
        console.log("fn called");
    }
}
//without destructuring
const name1=user.name;
const age1=user.age;
const city1=user.city;
user.myFunction();
console.log(name1,age1,city1);

//object me key value k alava function bhi ho skti h

//with destructuring
const {name,age,city,myFunction}=user;
myFunction();
console.log(name,age,city);