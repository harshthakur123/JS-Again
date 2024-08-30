// // Arrays 

// const myArr = [10,81,62,43,94,25] // arrays in js creates shallow copy - points
// // to same memory location
// const myArr2 = myArr

// myArr2[2] = 20
// myArr[1] = 99

// // console.log(myArr,'\n',myArr2);

// const arr1 = ["Hulk","Hayweye","Ironman","Pinki"]
// const arr2 = new Array(12,35,15,65,87)
// console.log(arr2);

// arr2.push(23)
// console.log(arr2);
// arr2.unshift(14) // Adds value at first
// console.log(arr2); 
// arr2.shift() // removes value at first
// console.log(arr2);

// console.log(arr2.includes(12));
// console.log(arr2.indexOf(159)); // doesnt exists -> gives -1 as op
// // if exists -> gives index

// const newArr = arr2.join()
// console.log(arr2 , typeof arr2);
// console.log(newArr, typeof newArr);

const arr2 = new Array(12,35,15,65,87)
console.log("A ",arr2);

const myn1 = arr2.slice(1,3)
console.log(myn1);
console.log("B ",arr2);

const myn2 = arr2.splice(1,3)
console.log(myn2);
console.log("C ",arr2);

// 1. slice(1,5) gives the op as elements from index 1 to 4(i.e. n-1) and
//does not manipulate the original array

// 2. splice(1,5) gives output as elements from index 1 to 5(i.e. n) and 
// removes the elements from from index 1 to 5 and left array with
// remaining elements





