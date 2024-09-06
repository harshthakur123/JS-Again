const myNums = [1,2,3,4,5]

// const total = myNums.reduce(function(acc,curVal){
//     console.log(`acc : ${acc} and curVal : ${curVal}`);
    
//     return acc + curVal
// },1)

const total = myNums.reduce((acc,curVal) => acc+curVal,0)

console.log(total);
