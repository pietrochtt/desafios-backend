class ProductManager {
    products;
    constructor() {
        this.products = []; //carrito
        this.product = Product;
    }

    getProducts() {
        return this.products;
    }

    addProduct(product) {
        if (this.getProducts().find((p) => p.code == product.code)) return console.log(`Producto con code ${product.code} listo`)
        else product.id = this.getProducts().length + 1; this.products.push(product);
    }

    getProductById(product) {

    }
}

class Product extends ProductManager {
    constructor(title, description, price, thumbnail, code, stock) {
        super();
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}

const newProductManager = new ProductManager()