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
//console.log(dict);    prints { lionDef: 'Big cat', numLimbs: 4, roar: true }
dict.lionDef = "King of the jungle"; 
dict['lionDef'] += "; savannah*";
//console.log(dict.lionDef);    King of the jungle; savannah*


/**
 * Arrays
 */
let anArray = ['crazy', 2];
//console.log(anArray);   prints ['crazy', 2];
anArray[1] = true;
//console.log(anArray);   prints ['crazy', true];
anArray.splice(1,1); //used to remove elements from array (second argument !needed)
//console.log(anArray.length) prints 1


/**
 * Functions
 */
function printHelloWorld(word){
    console.log("Hello " + word + "!");
    return word; //Word is returned
}
//printHelloWorld("World");     prints "Hello World!"
//console.log(printHelloWorld("World")); 


/**
 * Arithmetic Operators:  +, -, *, /, %
 * Comparison Operators:  ===, ==, >, <, >=, <=
 * 
 * === checks if both are same data types but
 * in js (number) 1 == '1' (string) is true
 */


/**
 * Ternary Operator
 */

let lessThan1;
let num1 = 1;

lessThan1 = num1 >= 1? false:true;
//console.log(lessThan1); ^false


/**
 * Logical Operator: ||, &&, !, ??
 * 
 * ?? = null coalescing
 * if a value is null then we can give it a deafult value 
 * so if a = null and we need to return a as a bool in a func
 * we can do return a ?? false; 
 * 
 * false is default for undefined, null, 0, false, "", NaN
 * true is default for all else
 * 
 * When both values = truthy in logic the left is favored
 * if defColour and usrColour are both strings and truthy
 * but colour = usrColouur || defColour; would favour usrColour
 */


/**
 * If Else
 */
let money = 12;
let cost = 13
let beg = true;
const hasEnoughMoney = money >= cost;

if(hasEnoughMoney){
    console.log("Enjoy your purchase");
}else if(beg) {
    //console.log("Won't be on the house next time") <printed for us
}else{
    console.log("Not enough money")
}


/**
 * Switch Case Statements 
 */
let job = "Manager"

switch(job){
    case "Executive":
        console.log("Knows the inner workings of upper lvl corporate management");
        break;
    case "Manager": //Prints this and default since no break
        //console.log("Administrative and leadership skills");
    default: //Salesperson
        //console.log("Works with customers");
}


/**
 * Loops
 */

//For Loop
for(let i=0; i<5; i++){
    //console.log(i); prints 0,1,2,3,4 (num/iteration)
}

//While Loop
let index = 0
while(index < 5){
    //console.log(index); prints same as for loop
    index++;
}

//Do While Loop
index = 0;
do{
    //console.log(index); prints same as above
    index ++;
}while(index < 5);

//For In Loop
for (const key in dict){
    //console.log(dict[key]); prints value/iteration for key in dict
}

//For Of Loop
for (let element in anArray){
    //console.log(element); prints an element of anArray per iteration
}

//use break and continue keywords as needed


/**
 * Factory Function
 */
function getAnimal(name, species, age, limbs){
    return{
        name,
        genericSpeciesName: species,
        age,
        limbs,
        eat(){
            console.log("Chomp!");
        },
        roar(){
            console.log("Roar!");
        }
    }
}

const anAnimal = getAnimal("Tom", "tiger", 3, 4);
//anAnimal.roar();


/**
 * Constructor Function
 */
function Dog(name, breed, age, weight){
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.weight = weight;

    this.eat = function() {
        console.log(this.name + "licked the plate clean!");
    }
}
let dog = new Dog("Tommy", "Doberman", 3, 100);
// console.log(dog);
// Dog {
//   name: 'Tommy',
//   breed: 'Doberman',
//   age: 3,
//   weight: 100,
//   eat: [Function (anonymous)]
// }

dog.favGame = "Fetch"; 
//console.log(dog); same as before but at the end shows favgame key/value pair


/**
 * Functions are Objects
 */
const Programmer  = new Function('name', `
    this.name = name;
    this.writeCode = function(){
        console.log(name + " codes in JS")
    }`
);

const newProgrammer = new Programmer("Bryan");
//newProgrammer.writeCode();    Bryan codes in JS


/**
 * Value vs. Reference
 * 
 * primitive values are passed by copy
 * ex. a = 1; b = a; b holds copy of a data
 * this means even if a is changed b still has og a data
 * 
 * objects are copied by reference
 * ex. if a = {n: 1}; b = a; b is referencing a 
 * now if a changes b also changes since it just points to a
 */


/**
 * Enumerating Object Properties
 */
const keys = Object.keys(dog);
const values = Object.values(dog);
const entries = Object.entries(dog);
// console.log(keys); [ 'name', 'breed', 'age', 'weight', 'eat', 'favGame' ]
// console.log(values); [ 'Tommy', 'Doberman', 3, 100, [Function (anonymous)], 'Fetch' ]
// console.log(entries); entries are nested arrays
// [
//     [ 'name', 'Tommy' ],
//     [ 'breed', 'Doberman' ],
//     [ 'age', 3 ],
//     [ 'weight', 100 ],
//     [ 'eat', [Function (anonymous)] ],
//     [ 'favGame', 'Fetch' ]
//   ]


/**
 * Clone Object 
 * 
 * since objects are by reference we have to make objects independant
 * refer to Values vs. References for why this is
 */

let object = {value: 1};
let clone = {};
Object.assign(clone, object);
clone.value = 2;
// console.log(clone); { value: 2 }
let cloneOfClone = {...clone} //we dont need Object.assign w/ this
cloneOfClone.value = 3;
//console.log(cloneOfClone); { value: 3 }


/**
 * There is built in Math functions if needed.
 * 
 * Also there is a string "wrapper" class called String for String methods
 */


/**
 * Template Literals
 */
let nameTemplate = `${LEGAL_FIRST_NAME} -2006`
//console.log(nameTemplate); Bryan -2006

let now = new Date(); //time rn
let Jan01_1970 = new Date(0); // Sets time to 0 ms since Jan 1, 1970
let Jan01_2024 = new Date(2024, 0, 1);
let Dec25_2024 = new Date('December 25 2024 16:08');
let currentYear = now.getFullYear; 
let currentMonth = now.getMonth;
let today = now.getDate;
let timeZoneDiff = now.getTimezoneOffset; // Diff b/w UTC and your timezoone
//more methods can be found online