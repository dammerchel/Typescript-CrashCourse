//For automatic compilation use 'tsc types.ts -w', compilator will start watching for changes in this file in current terminal
let myString:string;
let myNum: number;
let myBool: boolean;
let myVar: any;

let stringArray: string[];
let numArray: Array<number>;
//Tuple is an Array with defined number of elements, once you pass initial collection of elements you can add any additional elements
let strNumTuple: [string, number];

myNum = 22;
myString = 'Hello World from TypeScript'.slice(1,7);
myBool = false;
strNumTuple = [myString,myNum];

stringArray = ['Hello', myString];


console.log(myString);
console.log(myNum);
console.log(myBool);
console.log(stringArray);

let myVoid: void = null;
let myUndefined: undefined = null;

console.log(myVoid);
