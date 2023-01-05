const ProductManager = require("./class/ProductManager");
const { leche, harina, arroz, tomate } = require("./products/products")

const newProductManager = new ProductManager("database/db.json");
//newProductManager.getProducts()
newProductManager.addProduct(harina)
//newProductManager.getProductById(3)
//newProductManager.updateProduct(3, { stock: 25 })
//newProductManager.deleteProductById()
//newProductManager.deleteAll()