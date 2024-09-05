// // for of

// // ["","",""]
// // [{},{},{}]

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
    
// }

// const greetings = "Hello Harsh"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
    
// }

// ->Holds unique key value pair, not iterable

const map = new Map()
map.set("IN","Inida")
map.set("USA","United States Of America")
map.set("Fr","France")
map.set("IN","Inida")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key,":-",value);
    
}

const obj = {
    "Game 1" : "NFS",
    "Game 2" : "POP"
}

// for (const [key,value] of obj) {
//     console.log(key,":-",value);
    
// } obj is not iterable

