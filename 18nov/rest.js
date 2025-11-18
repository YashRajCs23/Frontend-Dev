const user={
    name:"John",
    age:30,
    city:"New York",
    country:"USA"
}
const {name,...others}=user;
console.log(name);
console.log(others);
// output:
// John
// { age: 30, city: 'New York', country: 'USA' }