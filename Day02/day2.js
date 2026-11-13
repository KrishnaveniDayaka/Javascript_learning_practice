
//Data types  Primitive Data Types

let name="krishnaveni";  //string
let age=21;   //number
let isStudent=true;//boolean
let trainer;  //Undefined
let selectedstudent=null;//null

console.log(name);
console.log(age);
console.log(isStudent);
console.log(trainer)
console.log(selectedstudent)
console.log(typeof null)

console.log(typeof name)
console.log(typeof age)
let bigInt =432444444444443498744n;
console.log(bigInt);
console.log(typeof(bigInt))

//Non-Primitive Data Types
//Non-primitive data types are used to store collections of values or more complex data.
//1.object: An object stores data in key-value pairs.

let student1={
    name:"Krishna",
    age:22,
    couse:"Javascript"
}
console.log(student1);
console.log(student1.age);
console.log(student1.name);

//2. Array:An array is used to store multiple values in a single variable.

let subjects=['html','css','javascript','python']
console.log(subjects);
console.log(subjects[0]);
console.log(subjects[3]);

//3. Function:A function is a reusable block of code that performs a particular task.
function greet(){
    console.log("Welcome to my birthday party");
}
greet();


//How to check the data type
console.log(typeof greet);







