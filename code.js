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
 * JS does hoisting (moves all functions to top of scope; use functions before initially defined)
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


/**
 * Date Objects
 */
let now = new Date(); //time rn
let Jan01_1970 = new Date(0); // Sets time to 0 ms since Jan 1, 1970
let Jan01_2024 = new Date(2024, 0, 1);
let Dec25_2024 = new Date('December 25 2024 16:08');
let currentYear = now.getFullYear; 
let currentMonth = now.getMonth;
let today = now.getDate;
let timeZoneDiff = now.getTimezoneOffset; // Diff b/w UTC and your timezoone
//more methods can be found online


/**
 * More Array Stuff
 */

// Adding Elements
const numbersArray = [1,2,3,4,5,6];
numbersArray.push(7, 8);//1,2,...,6,7,8
numbersArray.unshift(0);//0,1,2...
numbersArray.splice(4,0,3.4,3.5);//...3,3.4,3.5,4,...
//4 = starting index of 3.4 after it is spliced in
//0 is number of elements to delete


// Finding Primitive Values
const containsArray = [1,2,3,5,1]
const indexOfOne = containsArray.indexOf(1); //0; if 1 did not exits it would be -1
const lastIndexOfOne = containsArray.lastIndexOf(1) //4
const isOneInArray = containsArray.includes(1); //true

// Finding Reference Values
const employees = [
    {id: 1, name: "Mihcael"}, {id: 2, name: "Jim"}, {id: 2, name: "Pam"}
];

// employee = {id: 1, name: "Jim"} by using anonymous function
let employee = employees.find(function(x){ //we can also use findIndex to get index of obj
    return x.name == "Jim";
});

// arrow function (cleaner looking but does same as above)
employee = employees.find((x) => { return x.name == "Pam";
})                                                                                       

// Removing Elements
// current array: [0, 1, 2, 3, 3.4, 3.5, 4, 5, 6, 7, 8]
numbersArray.pop(); // ...6, 7
numbersArray.shift(); //1,2,...
numbersArray.splice(3,2)//remove 2 elements starting after index of 3 (3.4 & 3.5) 
// 0, 1, 2, 3, 4, 5, 6, 7, 8

// Combining Arrays
let numbersArray2 = [9,10];
numbersArray2 = numbersArray2.concat(numbersArray); //9,10,0,1,2,...

// Slice Arrays
numbersArray2 = numbersArray2.slice(0,2); //[9,10]

// Spread Operator
const combined = [...numbersArray, 8.5, ...numbersArray2]; //1,2,3...,8.5,9,10

// Make Copy of Array
let a = [1]; let b = [...a]; //this makes a copy instead of reference when b=a

// You can iterate over an array with a for-of loop; you can also use forEach method
combined.forEach ((number, index)=>{ //console.log(number + index) //same as for of
});

// Array to string
let letters = ["B", "r", "y"]; let word = letters.join(""); // word = Bry
// String to Array
letters = word.split(""); // letters = ["B","r","y"]
// Other String Methods
word = word.toLowerCase(); //bry


/**
 * Sorting Array
 */
let charArray = ['b', 'c', 'a']; charArray.sort(); // now its ['a', 'b', 'c'];
charArray.reverse(); // cba

// sort method for objects

employees.sort((a,b)=> {
    const lowerCaseA = a.name.toLowerCase(); const lowerCaseB = b.name.toLowerCase();
    if(lowerCaseA < lowerCaseB) return -1;
    if(lowerCaseB < lowerCaseA) return 1;
    return 0;
}) //employees = jim, michael, pam   now since its sorted by alphabetical order


/**
 * Testing Elements in Arra
 */
const testNum = [2,4,5,10];
const areAllEven = testNum.every(number => {
    return number % 2 == 0;
}) //for testNum would return false
const someEven = testNum.some(number => {
    return number % 2 == 0;
}) //for testNum would return true


/**
 * Filtering Array
 */
const evenNumbers = testNum.filter(number => number % 2 == 0); //2,4,10

//for Objects
const workers = [
    {id: 1, role: "Dev"},
    {id: 2, role: "Tester"},
    {id: 3, role: "Dev"},
]

const devWorkers = workers.filter(worker => worker.role == "Dev");
//[ { id: 1, role: 'Dev' }, { id: 3, role: 'Dev' } ]


/**
 * Mapping an Array
 */
const testSquared = testNum.map(num => num*num); //squared as per the mapping process

const employeesWithEmails = [
    {id: 1, name: "Bry", email: "sAS30@gmail.com"},
    {id: 2, name: "Ry", email: "b21Abs@gmail.com"},
    {id: 3, name: "Bri", email: "ask1@gmail.com"},
]
const updatedEmployees = employeesWithEmails.map(employee =>({
    //spread assures original isnt tampered with
    ...employee, //spread op to copy over all properties into this new obj we are returning
    email: employee.email.toLowerCase()
}));


/**
 * Arguments
 */
function multiply(...args){ //for when function has indefinite amount of args
    return args.reduce((accumulator, currentValue) => accumulator*currentValue, 1); //1 is starting currentValue
    //Reduces array to a single value by accumulting and that being current value for next it
}
//console.log(multiply(1,2,3,4)); 24
//speaking of arguments: we could define function multiply (x=2, y=2) in which case default args are 2


/**
 * Getters and Setters
 */
const course = {
    name: "JS review",
    duration: "taking longer than I thought",
    get details(){
        return `${this.name} is ${this.duration}`
    },
    set details(value){
        if(typeof value != 'string'){
            throw new Error("value in details(value) has to be a string")
        }
        let parts = value.split(" is ");
        this.name = parts[0]; this.duration = parts[1];
    }
}

try{
    course.details = "JS is taking too long";
}catch(e){
    console.log(`Caught an error: ${e.message}`);
} 
// console.log(course.details); JS is taking too long       but if not string then 
// Caught an error: value in details(value) has to be a string

//instead of let keyword we can use var btw; var is function scoped


/**
 * All Done!!!
 */