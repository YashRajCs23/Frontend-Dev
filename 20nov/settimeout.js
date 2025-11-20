setTimeout(() => { // hof
    console.log("This message is displayed after 2 seconds");
}, 2000); //callback function

setTimeout(function() {
    console.log("This message is displayed after 5 seconds");
}, 5000);

//sync - stack
console.log("Timer start");

//asynv -> callback queue -> event loop -> stack
setTimeout(() => {
    console.log("callback with 2s delay" );
}, 2000);

//sync
console.log("timer end");