"use strict";
class Useer {
    constructor(name, age, email, password) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
    }
}
class Userr extends Useer {
    constructor(name, age, email, password, role) {
        super(name, age, email, password);
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}
