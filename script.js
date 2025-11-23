var products = [
    { name: "AeroFlash", price: 15.99 },
    { name: "StrideX", price: 12.99 },
    { name: "Skyline Rush", price: 12.99 }
];
var discountProduct = "AeroFlash";
var discountPercent = 10;
function addToCart(product) {
    if (product.name === discountProduct) {
        var discountAmount = (product.price * discountPercent) / 100;
        var finalPrice = product.price - discountAmount;
        alert(`Original price for ${product.name}: $${product.price.toFixed(2)}`);
        alert(`After 10% Discount, the Final Price is: $${finalPrice.toFixed(2)}`);
    } else {
        alert(`Price to pay for ${product.name}: $${product.price.toFixed(2)}`);
    }
}
