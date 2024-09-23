class User {
    constructor(email, password) {
        this._email = email; // Use _email to store the actual value
        this._password = password;
    }

    get email() {
        return this._email.toUpperCase(); // No recursion, return _email
    }

    set email(email) {
        this._email = email; // Set _email in the setter
    }

    get password() {
        return this._password.toUpperCase(); // Return the uppercase password
    }

    set password(password) {
        this._password = password.toUpperCase(); // Store the password in uppercase
    }
}

const harsh = new User("harsh123", "123");
console.log(harsh.password); // Output: 123 in uppercase
console.log(harsh.password());
