// create object destructuring
const user = {
    name : "Avinesh",
    address : "Amit Nagar Colony",
    age : 25
}
// const {name , age} = user;
const {name, ...restItem} = user;
console.log(name);
console.log(restItem);

// objects inside array 
// const users = [
//     {userId:1, fname:"Avinesh", gender:"male"},
//     {userId:2, fname:"Deepak", gender:"male"},
//     {userId:3, fname:"Ankur", gender:"male"}
// ]
// for(let user of users){
//     console.log(user);
// }

// nested destructuring 
const users = [
    {userId:1, fname:"Avinesh", gender:"male"},
    {userId:2, fname:"Deepak", gender:"male"},
    {userId:3, fname:"Ankur", gender:"male"}
]
// const [user1, user2, user3] = users;

const[{fname} , ,{userId}] = users;
console.log(fname);
console.log(userId);
