// trim() method
// let firstName = "  Avinesh  ";
// console.log(firstName.length);
// let name = firstName.trim()
// console.log(name);
// console.log(name.length);

// toUpperCase() method
// let firstName = "Avinesh";
// console.log(firstName.toUpperCase());

// toLowerCase() method
// let name = "aVINesh";
// console.log(name.toLowerCase());

// slicing
// let firstName = "Avinesh";
// let newString = firstName.slice(0,6);
// let String = firstName.slice(1);
// console.log(newString);
// console.log(String);

// typeof operator
// let firstName = "Avinesh";
// let age = 26;
// console.log(typeof firstName);
// console.log(typeof age);

// convert number to String
let age = 26;
console.log(age + "");
console.log(typeof (age + ""));

// convert string to Number
let firstName = "Avinesh";
console.log(typeof firstName);
console.log(typeof +firstName);

// string concatenation
let fName = "Avinesh";
let lName = "Gautam";
let fullName = fName + " " + lName; // " " --> for space b/w strings
console.log(fullName);

// template String
let name = "Avinesh Gautam";
let aAge = 26;
// let aboutMe = "my name is " + name + " and my age is " + aAge;
// console.log(aboutMe);

// or you can use ${name of varleiab} and back tik``
let aboutMe =  `my name is ${name} and my name is ${aAge}`
console.log(aboutMe);

// undefined
// let str;
// console.log(str);
// str = "avinesh";
// console.log(typeof str, str);

// null
let str = null;
str =  "harshit";
console.log(str, typeof str);
console.log(typeof null);

// BigInt it is called primitive data type
// let myNumber = BigInt(12345688554744448784545);
// console.log(myNumber);
let myNumber = 12354457n;
console.log(myNumber);

// comparison and Boolean operator
let num1 = "7";
let num2 = 7;
//console.log(num1>num2);

// == vs ===
console.log(num1==num2);
console.log(num1===num2);






