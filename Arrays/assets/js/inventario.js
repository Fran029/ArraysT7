const products = [
    { name: "Laptop", category: "electrónica", price: 1200, stock: 5, discount: 0 },
    { name: "Televisor", category: "electrónica", price: 800, stock: 3, discount: 10 },
    { name: "Sofá", category: "hogar", price: 500, stock: 8, discount: 15 },
    { name: "Mesa de comedor", category: "hogar", price: 700, stock: 2, discount: 0 },
    { name: "Pan", category: "alimentos", price: 1.5, stock: 50, discount: 0 },
    { name: "Leche", category: "alimentos", price: 1.2, stock: 20, discount: 5 },
];
//1
const discountedProducts = products.filter(product => product.discount > 0);
console.log(discountedProducts);

//2
const calculateFinalPrice = (product) => {
    if (product.discount > 0) {
      const discountAmount = (product.price * product.discount) / 100;
        return product.price - discountAmount;
    } else {
        return product.price;
    } 
}; 
const productsWithDiscount = products.map(product => ({
    ...product,
    priceAfterDiscount: calculateFinalPrice(product)
}));

console.log(productsWithDiscount);

//3
const lowStockProducts = [];
for (const product of products) {
if (product.stock < 5) {
    lowStockProducts.push(product);
}
}
console.log(lowStockProducts);

//4
function updateStock(productName, quantityToAdd) {
    try {
    const product = products.find(product => product.name === productName);
if (!product) {
        throw new Error("Producto no encontrado"); }
    product.stock += quantityToAdd;
    console.log(`Stock actualizado: ${product.name} ahora tiene ${product.stock} unidades.`);
    } catch (error) {
    console.error(error.message);
    }
}

updateStock("Laptop", 10);
updateStock("Tablet", 5); 

//5
const categorySummary = {};
for (const product of products) {
if (!categorySummary[product.category]) {
    categorySummary[product.category] = 0;
}
categorySummary[product.category]++;
}
console.log(categorySummary);

