// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date("2024-08-30") // month starts with 0 -> 00=jan,01,feb
// console.log(myCreatedDate.toLocaleString());
// let myCreatedDate2 = new Date("08-30-2024")
// console.log(myCreatedDate2.toLocaleString());

// console.log(myCreatedDate2.getTime()); gives date in millisec
let myTimeStamp = Date.now()
console.log(myTimeStamp);

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday : "long",
    
}));







