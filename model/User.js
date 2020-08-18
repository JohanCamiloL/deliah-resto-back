class User {
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