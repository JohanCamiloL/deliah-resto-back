class Order {
    /**
     * Order constructor.
     * @param {String} description 
     * @param {String} time 
     * @param {String} state 
     * @param {String} wayToPay 
     * @param {Number} total 
     */
    constructor(description, time, state, wayToPay, total) {
        this.description = description;
        this.time = time;
        this.state = state;
        this.wayToPay = wayToPay;
        this.total = total;
    }

}

module.exports = Order;