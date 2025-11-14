let count = 0;
function increment() {
    count++;
    console.log("Count after increment:", count);
    function logInsideIncrement() {
        console.log("Inside nested increment: count =", count);
    }
    logInsideIncrement();
}

function decrement() {
    count--;
    console.log("Count after decrement:", count);
    function logInsideDecrement() {
        console.log("Inside nested decrement: count =", count);
    }
    logInsideDecrement();
}
increment();
increment();
decrement(); 
increment(); 