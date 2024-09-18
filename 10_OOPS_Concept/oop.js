const user = {
    username : "Harsh",
    loginCount : 8,
    signedin : true,

    getUserDetails : function(){
        console.log(`Got user details : ${this.username}`);
        console.log(this);
        
    }
}

console.log(user.username);
// console.log(user.getUserDetails());
console.log(this);

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        `Hello ${this.username}`
    }

    return this;
}

const userOne = new User("Harsh",9,true)
const userTwo = new User("pk",10,false)


console.log(userOne.constructor);
// console.log(userTwo);
