class User {
    /**
     * User constructor.
     * @param {String} username 
     * @param {String} fullname 
     * @param {String} email 
     * @param {String} phone 
     * @param {String} address 
     * @param {String} password 
     */
    constructor(username, fullname, email, phone, address, password) {
        this.username = username;
        this.fullname = fullname;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.password = password;
    }
}

module.exports = User;