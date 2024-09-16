/**
 * Variables
 * (JS is dynamically typed; TS is static)
 */

var name; //old way of doing it

let nickName = "bry ", year; //let is new way
year = "2006";

//console.log(nickName)


/**
 * Constants
 */

const LEGAL_FIRST_NAME = "Bryan"; 
//cant later on do LEGAL_FIRST_NAME = "other name"; 


/**
 * Primitive Data Types
 * string, number, BigInt, boolean, undefined, null, Symbol
 * 
 * object is the reference data type NOT PRIMITIVE
 */

//string
let fruit = "apple";
fruit = 'banana'; fruit = `kiwi`;

//number
let number = 5;
let pi = 3.15;

//BigInt
let veryLargeNumber = 123142453245356n;

//boolean
let fact = true;

//undefined 
let notDefinedJustInitialized;

//null
let theVoid = null;

//Symbols 
//(used to create unique identifiers and objects)
const UNIQUE_KEY = Symbol();


/** USE typeof <var name> TO GET TYPE
 *  ex. @ terminal just type in node first and then
 *  typeof theVoid (prints 'undefined') */




/**
 * Objects
 */
//(key/value pairs)
let dict = {
    lionDef: "Big cat",
    numLimbs: 4,
    roar: true
}; //each key/value pair is aka a property
console.log(dict);
dict.lionDef = "King of the jungle";
dict['lionDef'] += "; savannah*";
console.log(dict.lionDef);


/**
 * Arrays
 */