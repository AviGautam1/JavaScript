// default parameter
function addTwoNum(a,b=0){   //b=0 is default parameter
    return a + b;

}
const ans = addTwoNum(5);
console.log(ans);

// rest paremeter 
function myFunc(a, b, ...c){  //for rest parameter use ... three dots
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is `, c);
}
const num = myFunc(1,2,3,4,5,6);
console.log(num);

// parameter destructuring uses in object and react 
const user = {
    name : "avinesh",
    gender : "male"
}
function detail({name, gender}){
    console.log(name);
    console.log(gender);
}
detail(user);
