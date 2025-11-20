const GITHUB_API="https://api.github.com/users/YashRajCs23";
const user=fetch(GITHUB_API)
.then(response=>response.json())
.then(data=>console.log(data))
console.log(user);