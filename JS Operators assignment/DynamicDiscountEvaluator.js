const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let discountedPrices = [];

for (let product of cart) {
    let finalPrice = product.price;

    if (product.category === "electronics") {
        finalPrice = finalPrice - (finalPrice * 0.10); // 10% discount
    } else if (product.category === "fashion") {
        finalPrice = finalPrice - (finalPrice * 0.05); // 5% discount
    }

    discountedPrices.push(finalPrice);
}

let totalAfterCategoryDiscount = discountedPrices.reduce((sum, p) => sum + p, 0);

let finalTotal = totalAfterCategoryDiscount;

if (finalTotal > 50000) {
    finalTotal = finalTotal - (finalTotal * 0.05);
}
console.log("Original Cart:", cart);
console.log("Prices After Category Discounts:", discountedPrices);
console.log("Final Total:", finalTotal);