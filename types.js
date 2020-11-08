//For automatic compilation use 'tsc types.ts -w', compilator will start watching for changes in this file in current terminal
var myString;
var myNum;
var myBool;
var myVar;
var stringArray;
var numArray;
//Tuple is an Array with defined number of elements, once you pass initial collection of elements you can add any additional elements
var strNumTuple;
myNum = 22;
myString = 'Hello World from TypeScript'.slice(1, 7);
myBool = false;
strNumTuple = [myString, myNum];
stringArray = ['Hello', myString];
console.log(myString);
console.log(myNum);
console.log(myBool);
console.log(stringArray);
var myVoid = null;
var myUndefined = null;
console.log(myVoid);
