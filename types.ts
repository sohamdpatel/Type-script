let counter: number = 11;
let name: string = "Sdp";
let active: boolean = true;


console.log(counter, name, active);


// counter = "hello"
// this gives a error like this "error TS2322: Type 'string' is not assignable to type 'number'."


// Array type define

let count: number[] = [1,2,3,4,5]
let count2: Array<number|string> = [1,2,3,4,5,"6"] // in this we can also use union type

// these are two type of Array declaration and both are same there is not any single diffrence.

let multiTypeArray: (number | string)[] = [1,2,3,4,"Sdp"];

//when we need many types in one array than we use or operater to define type and we can write one or more type using this in a Array

let fullDifTypeArray: string[] | number[] = [1,2,3]
// when we need full array in one type but its not sure about which type of array it has been all string or all number type

// let fullDifTypeArray: string[] | number[] = ["1","2",3]
// this will give error because we write both type in array. if we need to decalare array like this than we need to use Union type declaracen


const count3: ReadonlyArray<number> = [5,4,3,2,1];

//with this type we can only read array we can't mutate the array
// So we can't push or pop or any other method that can mutate the array.
const SquareCount3 = count3.map((num) => num*num)

console.log(SquareCount3);


// console.log(count[0])
// console.log(count2[0])
// console.log(typeof count[0])
// console.log(typeof count);
// console.log(multiTypeArray);

// Declare a function
function greeting(name:string): string{
    return `Hi ${name}`;
}

const greeting1 = greeting("Soham")

// function consoleError(errMsg:string){
//     console.error(errMsg)
// }

// console.log(greeting1);

// Tuple type

const rgb: [number,number,number] = [255,255,255]

const tUser: [number,string,boolean] = [12,"Soham",true]

// This is tuple when we need strict type array and we know a index that time we can use this.


export {}
// when we wrote this thing, re declared error doesn't show.

 