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
        let buscarId = id;
        let miProducto = null;
        this.products.forEach((product) => {
            if (product.id === buscarId) {
                miProducto = product;
            }
        });
        if (miProducto = null) {
            return console.log("Not found");
        } else {
            return miProducto;
        }
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