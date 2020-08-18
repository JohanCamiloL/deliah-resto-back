class Order {
    constructor(description, time, state, wayToPay, total) {
        this.description = description;
        this.time = time;
        this.state = state;
        this.wayToPay = wayToPay;
        this.total = total;
    }

}

module.exports = Order;