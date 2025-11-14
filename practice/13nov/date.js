let now = Date.now();
console.log(now);

// let future=new Date(now+1000*60*24);//add 1 day
let future=new Date(now+1000*60*24).getTime();//add 1 day
console.log(future);