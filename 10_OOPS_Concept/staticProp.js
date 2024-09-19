class User{

    static id = 1

    constructor(username) {
        this.username = username
        this.id = User.id++
    }

    logMe(){
        console.log(`Username  : ${this.username}`);
        
    }

    display(){
        console.log(` ${this.username} , ${this.id} `);
        
    }

    static createId(){
       
    }
}

const harsh = new User('harsh')
const pk = new User('pk')
// console.log(harsh,pk);


class Teacher extends User{
    constructor(username,email) {
        super(username)
        this.email = email
    }
}

const iphone =  new Teacher("iphone","iphone123@gmmail.com")
// console.log(iphone.createId());
