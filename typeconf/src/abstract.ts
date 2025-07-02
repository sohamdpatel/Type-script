interface Usser{
    name: string,
    age: number,
    email: string,
    password: string
}
abstract class Useer implements Usser {
    constructor(
        public name: string,
        public age: number,
        public email: string,
        public password: string
    ){}
}

class Userr extends Useer {
    constructor(
        public name: string,
        public age: number,
        public email: string,
        public password: string,
        public role: string
    ){
        super(name, age, email, password);
    }
}