const fs = require('fs')

class ProductManager {
    constructor(filepath) {
        this.filepath = filepath;
    }
    
    getProducts() {
        return JSON.parse(fs.readFileSync(this.filepath, "utf-8"));
    }
}

module.exports = ProductManager;