"use strict";
// class User {
//     name: string
//     email: string
//     readonly city: string = ""
//     constructor(name: string, email: string){
//         this.name = name
//         this.email = email
//     }
// }
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this._count = 1; // we can not use this out side the class
        this._counter = 3; // we can not use this out side the class but we can use in extended class
    }
    coolDown() {
        console.log("Cool Down");
    }
    get currentCount() {
        return this._count;
    }
    set countt(count) {
        if (count <= 1) {
            throw new Error("Count should be more than one");
        }
        this._count = count;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    changeCount() {
        this._counter = 4;
    }
}
const user1 = new User("Soham", "sd@gmail.com");
console.log(user1.currentCount);
user1.countt = 3;
console.log(user1.currentCount);
// user1.coolDown // we can't use out of the class because this is private
// user1.city = "Dahegam" // we can only read this property we can't change this because this is readonly property
console.log(user1);
console.log(typeof user1);
console.log(typeof user1.name);
