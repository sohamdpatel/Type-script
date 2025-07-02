function infoType<Type>(val: Type): Type {
    return val
}

function infoTypeTwo<T>(val:T): T {
    return val
}// we can use any word rather than T

function infoTypeArray<T>(vals: T[]): T{
    // Do some works like get from databse
    const myIndex = 3
    return vals[3]
}

const infoTypeArray2 = <T,>(vals: T[]): T => { // this comma is for just tell it is generic it is not any html tag
    // Do some works like get from databse
    const myIndex = 3
    return vals[3]
}// This is the 2 way of write a parameter to take Arguments as a Array 

function infoType2<T, U extends number/* extends means this is from number*/>(val1: T, val2: U): object{
    return {val1, val2}
}// we can also use two diffrent type like generics