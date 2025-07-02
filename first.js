function getProduct(id) {
    return {
        id: id,
        name: "Awesome product ".concat(id),
        price: 10.99
    };
}
var product = getProduct(1);
// console.log(`The product ${product.name} costs $${product.id}`);
var showProduct = function (name, id) { return console.log("The productss ".concat(name, " costs $").concat(id)); };
showProduct(product.id, product.price);
