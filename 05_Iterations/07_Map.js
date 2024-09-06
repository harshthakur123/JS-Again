const nums = [1,2,3,4,5,6,7,8,9,10]

// const newNums =  nums.map((n)=>n+10)
const newNums =  nums.map((n)=>{return n+10})
console.log(newNums);

const newNums2 = nums.map((n)=> n * 10).map((n)=> n + 1 ).filter((n)=>n>=40)
console.log(newNums2);

const shoppingCart = [
    {
        itemName: "Java",
        price: 999
    },
    {
        itemName: "Python",
        price: 899
    },
    {
        itemName: "C++",
        price: 799
    },
    {
        itemName: "JavaScript",
        price: 699
    },
    {
        itemName: "React",
        price: 1099
    }
];


const priceToPay = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(`Total = ${priceToPay}`);
