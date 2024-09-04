// Immediately Invoked Function Expression

(function chai() {
    var num = 10
    console.log(`DB Connected ${num}`);
    
})(); // Named IIFE 

// Whenever if we write two or more IIFE we have to write ';' after each IIFE

((name)=>{
    console.log(`Db Connected 2 ${name} `);
    
})("Harsh") // Unnamed IIFE



