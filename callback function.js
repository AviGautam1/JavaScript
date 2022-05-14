// callback function 
function first(){
    console.log("hello");
}

function second(callback){
    console.log("hell0 callback");
    callback();
}
second(first);

// function returning function 
function myFunc(){
    function myFunc1(){
        console.log("hello world");
    }
    return myFunc1;
}
const ans = myFunc();
console.log(ans);
ans();