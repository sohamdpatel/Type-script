"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(name, gender, mobileNo) {
    return {
        name: name,
        gender: gender,
        isAvailable: true,
        mobileNo: mobileNo
    };
}
var user1 = createUser("Soham", "Male", 1234567890);
var userDetails = {
    name: "Dhruv",
    gender: "Male",
    isAvailable: false,
    mobileNo: 9876543210,
    email: "sohampatel@gmail.com"
};
// const user2 = createUser({userDetails})
console.log(user1);
