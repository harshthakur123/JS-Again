// const user  = new Object(); 
const user1 = {}  
user1.id = "123abc"
user1.name = "Piku"
user1.isLoggedIn = false

// console.log(user);

const user2 = {
    email : "piku@gmail.com",
    fullname : {
        userFullName : {
            fisrtname : "Harsh",
            lastname : "Thakur"
        }
    }
}

// console.log(user2.fullname.userFullName.fisrtname);

const obj1  = { 1 : "a" , 2 : "b"}
const obj2 = { 3 : "a" , 4 : "b"}
const obj4 = { 5 : "a" , 6 : "b"}
// const obj3 = { obj1 , obj2}

// const returnedTarget = Object.assign(target, source);
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2,...obj4}

// console.log(obj3);

const user3 = [
    {
        id : 1,
        email : "u1@gmail.com"
    },
    {
        id : 2,
        email : "u2@gmail.com"
    },
    {
        id : 3,
        email : "u@gmail.com"
    }
]

console.log(user3[1].email);
console.log(user1);
console.log(Object.keys(user1));
console.log(Object.values(user1));
console.log(Object.entries(user1));
console.log(user1.hasOwnProperty('isLoggedIn'));


