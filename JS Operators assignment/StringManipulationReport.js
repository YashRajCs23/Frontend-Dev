let productName = " wireless headphones PRO ";
productName = productName.trim();
productName = productName.toLowerCase();
let capitalized = productName
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
let finalTitle = capitalized.replace("Pro", "Pro Edition");
console.log("Cleaned Title:", finalTitle);
console.log("Length:", finalTitle.length);