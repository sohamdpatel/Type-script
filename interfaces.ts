interface User {
    readonly _id: string,
    name: string,
    age: number,
    isOnline?: boolean, // if we can't define this is in object it will not so any erro so when it doesn't need in every object that time we use ? this before colon
    startTrail: () => string, // here we define that this function return a string
    // startTrail(): string //this is same as above but above one is much undersatndable
    endTrail(_id: string): string
}

interface User{
    email: string
} // we can also add a new fields to User like this but this is not a right way this will create a mashup so prefered not to use

interface Admin extends User { 
    department: string
}// using extends we can extend the interface

const user1: Admin ={
    _id: '123',
    name: 'John',
    email: "sd@sd.com",
    age: 25,
    isOnline: true,
    department: "Any",
    startTrail: () =>
        {
            return 'trail started';
        },
    endTrail: (userId: string) => // we can change name og argument it will not show any error
        {
            return ` ${userId} trail ended `;
        }
}

// user1._id = 33// this shows a error because this is readonly
user1.age = 33;

console.log(user1.endTrail("Soham"));

