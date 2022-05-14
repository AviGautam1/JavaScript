// how to create object 
const person = {
    name : "Avinesh", //key also in string name and "name" is same
    age : 25,
    hobbies : ["singing", "cricket"] // you can create arrays in object
}
console.log(person);
console.log(person.hobbies);

// access items from object by dot (.) notation 
console.log(person.age);
console.log(person["age"]);

// add key value pair --> by dot notation
person.gender = "male";
console.log(person);

// add item by bracket notation 
person["gender"] = "male";
console.log(person);

// difference between bracket and dot notation 
const car = {
    humdai : "creta",
    suzuki : "kia",
    "tata motors" : ["range rover", "land rover"]
}
console.log(car["tata motors"]);

// how to iterate object 
// by using for in loop 
const studentInfo = {
    name : "priya",
    age : 18,
    class : 12
}
// for(let key in studentInfo){
// console.log(studentInfo[key]);
// console.log(key, ":", studentInfo[key]);
// }

// by using Object.keys in for of loop 
for(let key of Object.keys(studentInfo)){
    console.log(key, ":" , studentInfo[key]);
}

// spread operator in object 
const obj1 = {
    key1 : "value1",
    key2 : "value2",

}
const obj2 = {
    key1 : "newvalue",
    key3 : "value3",
    key4 : "value4",
}
const newObj = {...obj1, ...obj2, key5 : "value5"};
console.log(newObj);