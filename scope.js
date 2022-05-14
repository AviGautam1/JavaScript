// lexical Scope
const myvar = "value1";
function myApp(){
    function myFunc1(){
        const myFunc2 = () => {
            console.log("Inside MyFunc", myvar);
        }
        myFunc2();

    }
    console.log(myvar);
    myFunc1();
}
myApp();

// let and const are block scope 
{
    let fname = "Avinesh"
    console.log(fname);
}
{

const firstName = "Deepak"
console.log(firstName);
}

// var is function scope 
{
    var myName = "Ankur";
}
console.log(myName);

function myCar() {
    if (true) {
        var car = "Mercedez";
        // let car = "Mercedez";
        console.log(car);
        
    }
    if (true) {
        console.log(car);

        
    }
    
}
myCar();
