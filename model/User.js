class User {
    /**
     * User constructor.
     * @param {Number} id User id
     * @param {String} username User nickname.
     * @param {String} fullname User fullname.
     * @param {String} email User email.
     * @param {String} phone User phone.
     * @param {String} address User address.
     * @param {String} password User password.
     * @param {String} rol User rol.
     */
    constructor(id, username, fullname, email, phone, address, password, rol = 'user') {
        this.id = id;
        this.username = username;
        this.fullname = fullname;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.password = password;
        this.rol = rol;
    }
}

module.exports = User;