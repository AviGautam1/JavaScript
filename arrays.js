// intro Array
// let fruits = ["apple", "banana", 'orange']
// console.log(fruits);
// console.log(fruits[2]);

// array can stored any data types like
// let mixed = [1, "avi", null, true, undefined]
// console.log(mixed);

// let fruits = ["apple", "banana", 'orange']
// fruits[1] = "grapes"
// console.log(fruits);
// console.log(typeof fruits);
// console.log(Array.isArray(fruits)); //Array.isArray check array or not

// array push method--> add element at last
// let fruit = ["apple", "banana", 'orange']
// fruit.push("mango");
// fruit.pop();
// console.log(fruit);

// array pop method--> remove element from last
// let fruit = ["apple", "banana", 'orange']
// fruit.pop();
// console.log(fruit);

// array unshift method--> adda items from start
// let fruit = ["apple", "banana", 'orange']
// fruit.unshift("mango");
// console.log(fruit);

// array shift method--> remove items from start
// let fruit = ["apple", "banana", 'orange']
// fruit.shift();
// console.log(fruit);

// let removeFruit = fruit.shift();
// console.log("remove item is", removeFruit);

// clone array
let array1 = ["item1", "item2"];
// let array2 = array1;
// let array2 = ["item1", "item2"];
// let array2 = array1.slice(0); //by using slice method
// let array2 = [].concat(array1); // by using concat method
let array2 = [...array1, "item3"]; //by using spread method
array1.push("item3");
console.log(array1);
console.log(array2);
console.log(array1===array2);

// for loop in array
let fruit = ["apple", "banana", 'orange'];
for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
    
}

// use const for creating array
const fruits = ["apple", "banana", 'orange'];
fruits.push("grapes");
console.log(fruits);

// while loop in array
const fruit1 = ["apple", "banana", 'orange'];
const fruit2 =[];
let i = 0;
while (i < fruit1.length) {
    fruit2.push(fruit1[i].toUpperCase())
    i++;
    
}
console.log(fruit2);

// for of loop in array
// const fruit3 = ["apple", "banana", 'orange'];
// for (let fruit4 of fruit3) {
//     console.log(fruit4);
    
// }

// for in loop in array--> gives index 
const fruit3 = ["apple", "banana", 'orange'];
for (let index in fruit3) {
    console.log(fruit3[index]);
    
}

// array destructuring
const colors = ["red", "blue", "pink", "yellow"];
let [myvar1, myvar2, ...myNewArray] = colors;
console.log(myvar1);
console.log(myvar2);
console.log(myNewArray);









