interface Product{
    id: number,
    name: string,
    price: number,
}

function getProduct(id): Product{
    return {
        id: id,
        name:`Awesome product ${id}`,
        price: 10.99
    }
}

const product = getProduct(1);

// console.log(`The product ${product.name} costs $${product.id}`);

const showProduct = (name: string, id: number) => console.log(`The productss ${name} costs $${id}` );

showProduct(product.name,product.price);
// when i give wrong argument type it gives Argument type error 
