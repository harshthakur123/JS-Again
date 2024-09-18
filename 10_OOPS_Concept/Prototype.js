// let myName = "Harsh     "
// let myChannel = "HK"

// console.log(myName.trim().length);


myHeroes = ["Thor","Hulk"]

let heroPower = {
    thor : "Hammer",
    hulk : "Green" ,

    getHulkPower : function(){
        console.log(`Hulk power is ${this.hulk} `);
        
    }
}

Object.prototype.harsh = function(){
    console.log(`Harsh is everywhere`);
    
}

// heroPower.harsh()

// myHeroes.harsh()

Array.prototype.heyHarsh = function(){
    console.log("Hello");
    
}

// myHeroes.heyHarsh()
// heroPower.heyHarsh()

// Inheritance 
 
const user = {
    name : "chai",
    email : "chai@gmail.com"
}

const Teacher = {
    makeVideo : true
}

const teacherSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "JSAssignmnet",
    fulltime : true,
    __proto__:teacherSupport
}

Teacher.__proto__ = "User"

// Modern Syntax
Object.setPrototypeOf(teacherSupport,Teacher)

let anotherUsername = "harsh      "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
    
}

anotherUsername.trueLength()

"Hars".trueLength()
"Pk".trueLength()