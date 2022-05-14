// important aaray methods 
const num = [5, 2, 6, 8];
// function myFunc(number, index){
//     console.log(`index is ${index} number is ${number}`);
// }
// for(let i = 0; i<num.length; i++){
//     myFunc(num[i], i);
// }

// forEach() method 
// num.forEach(myFunc);
num.forEach(function(number, index){
    console.log(`index is ${index} number is ${number}`);

});

// Map() method 
const numbers = [2, 3, 5, 7];
// const square = function(number){
//     return number * number;
// }
const result = numbers.map(function(number){
    return number * number;
});
console.log(result);

// filter() method
const myNum = [1, 2, 4, 5, 6, 8];
const isEven = function(number){
    return number % 2 === 0;

}
const evenNumber = myNum.filter(isEven);
console.log(evenNumber);

// reduce() method 
// const int = [1, 2, 3, 4, 5, 6, 7, 8];
// const sum = int.reduce((value, result) => {
//     return value + result;

// }, 100);
// console.log(sum);

const userCart = [
    {productId:1, productName:"mobile", price:15000},
    {productId:2, productName:"laptop", price:25000},
    {productId:3, productName:"tv", price:15000}
]
const totalprice = userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price;

}, 0);
console.log(totalprice);

// sort () method 
const userName = ["avi", "deepak", "aman", "ankur", "ATUL"];
userName.sort();
console.log(userName);

const num1 = [2, 1, 3, 8, 5, 4]; //not sort numbers but sort by ASCII code
num.sort();
console.log(num1);






