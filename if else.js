// if else Condition
let a = 10;
if(a>9){
    console.log("yes");
}else{
    console.log("no");
}

let num = 16;
if (num%2===0) {
    console.log("even");
    
}else{
    console.log("odd");
}

// falsy values
// false
// ""
// null
// undefined
// 0

// let firstName = "";
// if (firstName) {
//     console.log(firstName);
    
// } else {
//     console.log("firstName is empty");
    
// }

// rest of the values are truthy value
let firstName = "avi";
if (firstName) {
    console.log(firstName);
    
} else {
    console.log("firstName is empty");
    
}

// nested if else
// let winningNumber = 19;
// let userNumber = +prompt("Guess a number");
// if (userNumber === winningNumber) {
//     console.log("Hurrah! Your guess is right.");

    
// } else {
//     if (userNumber < winningNumber) {
//         console.log("Your number is low.");
        
//     } else {
        
    
//     console.log("Your number is high.");
//     }
    
// }

// if
// else if
// else if
// else if
// else

let employeeSalary = 10000;
if(employeeSalary<12000){
    console.log("yes");

}else if (employeeSalary>12000) {
    console.log("no");

    
}else if (employeeSalary>9000) {
    console.log("yes");
}else{
    console.log("no data");
}

