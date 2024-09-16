// const promiseOne = new Promise(function(resolve,reject){
//     // Do and async tasks
//     // DB calls, cryptography

//     setTimeout(function(){
//         console.log('Async task complete');
//         resolve()
//     },1000)
// })


// promiseOne.then(function(){
//     console.log("Promise consumed !!!");
    
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");
    
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username : 'Harsh', email : 'hkt123@gmail.com' })
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
    
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username : 'Harsh', email : 'hkt123@gmail.com'})
//         }else{
//             reject('ERROR : Something went wrong!!!')
//         }
//     })
// },2000)

// promiseFour
// .then((user)=>{
//      console.log(user);
//      return user.username
// })
// .then((uname )=>{
//     console.log(uname);
    
// })
// .catch(function(error){
//     console.log(error);
    
// }).finally(()=> console.log("The promise is resolved"))

// console.log(username);


// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username : 'javascript123', password : 'hkt123@gmail.com'})
//         }else{
//             reject('ERROR : Something went wrong!!!')
//         }
//     },2000)
// })  

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//     console.log(response);
//     }catch(error){
//         console.log(error);
        
//     }
    
// }

// consumePromiseFive()

// async function getAllUsers(params) {
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')

//     const data  = await response.json()
//     console.log(data);
    
//    } catch (error) {
//         console.log(error);
        
//    }
    
// }



// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
    
})
.catch((error) => console.log(error))