class Product {
    /**
     * Product constructor.
     * @param {Number} id
     * @param {String} name 
     * @param {Number} price 
     * @param {Number} amount 
     */
    constructor(id, name, price, amount) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
}

module.exports = Product