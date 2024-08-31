// Singleton
// Object.create

// Objest Literals

const mySym = Symbol("key1")
console.log(typeof mySym, mySym);


const jsUser = {
    firstName : "Harsh",
    "last Name" : "Thakur",
    [mySym] : "mykey1",
    age : 18,
    location : "Raipur",
    email : "harsh@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]

}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["last Name"]); //there is no way to access key with space
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

// jsUser.email = "harsh123@gmail.com"
// console.log(jsUser.email);
// Object.freeze(jsUser) // to preveent any changes in object
// jsUser.email = "hk@gmail.com"
// console.log(jsUser.email);

console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User");
    
}

jsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.firstName} `);
    
}

console.log(jsUser);
console.log(jsUser.greeting());
console.log(jsUser.greeting2());






