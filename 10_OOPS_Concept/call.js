function setUsername(username){
    this.username = username;
    console.log("called");
    
}

function createUser(username,email,password){
    setUsername.call(this,username)
    
    // this.username=username
    this.email = email
    this.password = password
}

const chai = new createUser("Harsh","harsh123@gmail.com","123")
console.log(chai);
