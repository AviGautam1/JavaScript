// create arrow funtion 
const myFunc = (num1, num2) => {
    return num1 + num2;
}
console.log(myFunc(2,5));

// examples of arrow function 
// const isEven = (number) => {
//     return number % 2 === 0;
// }
// console.log(isEven(5));

const isEven = number => number % 2 === 0; //only valid in one paremeter
console.log(isEven(5));

// hoisting => in case of function declration you can called function before function
// declration called hoisting
// but you can not declare it in the case of function expression and arrow function

hello()
function hello() {
    console.log("hello hoisting");
    
}

// function inside function
function app(){
    const myapp = () =>{
        console.log("hello");
    }
    myapp();
    console.log("inside app");
}
app();