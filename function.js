// function declration
function myFunc() {
    console.log("Hello Function");
    
}
myFunc();

// create parameters and argument 
// function sumTwoNum(num1 , num2) {
//     return num1 + num2;
    
// }
// const add = sumTwoNum(5,10);
// console.log(add);

// true or false function 
function isEven(number) {
    // if (number % 2 === 0) {
    //     return true;
    // }else{
    //     return false;
    // }
    return number % 2 === 0;
    
}
console.log(isEven(3));

// function expression
const sumTwoNum = function (num1 , num2) {
    return num1 + num2;
    
}
const add = sumTwoNum(5,10);
console.log(add);
