const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(Math.PI);
// Math.PI = 6
// console.log(Math.PI);

console.log(descriptor);

// const newObj = Object.create(null)

const chai = {
    name : "Chai",
    price : 250,
    isAvailable : true,

    orderChai : function(){
        console.log("chai");
        
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{
    // writable : false,
    // enumerable : false
})

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// chai.name = 'harsh'
// console.log(chai);

 for (const [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
    
    console.log(`${key} : ${value}`);
    }
 }
