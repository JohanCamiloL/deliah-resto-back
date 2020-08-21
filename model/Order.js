class Order {
    /**
     * Order constructor.
     * @param {Number} id Order id.
     * @param {Number} userId User id.
     * @param {String} description Order description.
     * @param {String} time Order time.
     * @param {String} state Order state.
     * @param {String} wayToPay Order wayToPay.
     * @param {Number} total Order total.
     */
    constructor(id, userId, description, time, state, wayToPay, total) {
        this.id = id;
        this.userId = userId;
        this.description = description;
        this.time = time;
        this.state = state;
        this.wayToPay = wayToPay;
        this.total = total;
    }

}

module.exports = Order;