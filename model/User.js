class User {
    constructor(userName, fullName, email, phone, address, password) {
        this.id = 0 //TODO
        this.userName = userName;
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.password = password;
    }
}

module.exports = User;