
const fs = require('fs');

class ProductManager {
  constructor(filePath) {
    this.filePath = filePath;
  }

  getProducts(limit) {
    const rawData = fs.readFileSync(this.filePath, 'utf-8');
    const products = JSON.parse(rawData);

    if (limit) {

      return products.slice(0, limit);
    } else {
      return products;
    }
  }
}

module.exports = ProductManager;
