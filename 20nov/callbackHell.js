// Step 1: createOrder
function createOrder(callback) {
    console.log("Order created...");
    // fake orderId
    const orderId = 123;

    // callback call (next step)
    callback(orderId);
}

// Step 2: proceedToPayment
function proceedToPayment(orderId, callback) {
    console.log("Proceeding to payment for order:", orderId);

    const paymentInfo = { status: "success", amount: 500 };

    // next callback
    callback(paymentInfo);
}

// Step 3: showOrderSummary
function showOrderSummary(paymentInfo, callback) {
    console.log("Payment Info:", paymentInfo);

    const summary = { message: "Order summary generated" };

    // next callback
    callback(summary);
}

// Step 4: viewOrder
function viewOrder(summary, callback) {
    console.log("Summary:", summary);

    const finalResult = "Order Viewed Successfully";

    // last callback
    callback(finalResult);
}


// ---------------------------------------------------------------
// ❌ CALLBACK HELL (nested callbacks → pyramid structure)
// ---------------------------------------------------------------

createOrder(function (orderId) {
    proceedToPayment(orderId, function (paymentInfo) {
        showOrderSummary(paymentInfo, function (summary) {
            viewOrder(summary, function (finalResult) {
                console.log(finalResult);
            });
        });
    });
});
/*
Callback hell hota hai jab hum ek callback ke andar dusra callback
aur uske andar teesra callback likhte rehte hain.
Code horizontal grow karta hai → unreadable ho jata hai.

Promises is problem ko solve karte hain by:
- flattening the structure
- using .then() chaining
- or async/await for synchronous-looking flow.
*/

function createOrder(){

}

const promise = createOrder(cart);
promise.then(function(orderId){
    proceedToPayment(orderId);
});