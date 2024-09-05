const languages = ["JS","CPP","Java","Python"] 
// languages.forEach( (item)=>{
//     console.log(item);
    
// } )

// languages.forEach(function(item){
//     console.log(item);
    
// })

function printMe(item){
    console.log(item);
    
}

// languages.forEach(printMe)

languages.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
    
})

const myCoding = [
    {
        languageName : "JS",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    },
    {
        languageName : "Pyhton",
        languageFileName : "py"
    }

]

myCoding.forEach( (item)=>{
    console.log(item.languageName);
    
} )