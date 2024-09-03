// a = 10
// b = 20

function swap(n1,n2){
    console.log(`Before Swap : n1 = ${n1} , n2 = ${n2}`);
    n1=n1+n2
    n2=n1-n2
    n1=n1-n2
    console.log(`After Swap : n1 = ${n1} , n2 = ${n2}`);
    
}

// swap(a,b)
// var c = 300
let a = 300

if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("Innner  : ",a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

// one() // also correct
function one(){
    const username = "Harsh"

    function two(){
        const website = "Youtube"
        console.log(username);
        
    }
    // console.log(website);
    

    two()
}

one()

if(true){
    const username = 'Harsh'
    if(username === "Harsh"){
        const website = "Youtube"
        console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);



// ==============================INTEResting=======================
function addOne(num){
    return num++
}

addOne(5)


// addTwo(5) // if you declare function and store it in a variable, then you
// cannot access it before inilialization
const addTwo = function(num){
    return num+2
}

addTwo(5)