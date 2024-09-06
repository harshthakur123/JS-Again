// const languages = ["JS","CPP","Java","Python","Ruby"] 

// const values = languages.forEach((item)=>{
//     // console.log(item);
//     return item
    
// })

// console.log(values);

const nums = [1,2,3,4,5,6,7,8,9,10]
// const filtredNums = nums.filter((n)=> n > 4 )

// const filtredNums = nums.filter((n)=> {
//     return n > 4
// } )
// console.log(filtredNums);

const newNums = []
nums.forEach((n)=>{
    if(n>4){
        newNums.push(n)
    }
})

console.log(newNums);

const books = [
    {
      "title": "Book One",
      "genre": "History",
      "publishing": 1992,
      "edition": 1996
    },
    {
      "title": "Book Two",
      "genre": "Science Fiction",
      "publishing": 2001,
      "edition": 2005
    },
    {
      "title": "Book Three",
      "genre": "Fantasy",
      "publishing": 1999,
      "edition": 2004
    },
    {
      "title": "Book Four",
      "genre": "Mystery",
      "publishing": 2010,
      "edition": 2015
    },
    {
      "title": "Book Five",
      "genre": "Romance",
      "publishing": 1998,
      "edition": 2002
    },
    {
      "title": "Book Six",
      "genre": "History",
      "publishing": 1987,
      "edition": 1993
    },
    {
      "title": "Book Seven",
      "genre": "Science Fiction",
      "publishing": 2003,
      "edition": 2009
    },
    {
      "title": "Book Eight",
      "genre": "Fantasy",
      "publishing": 2011,
      "edition": 2017
    },
    {
      "title": "Book Nine",
      "genre": "Mystery",
      "publishing": 1995,
      "edition": 1999
    },
    {
      "title": "Book Ten",
      "genre": "Romance",
      "publishing": 2000,
      "edition": 2006
    }
  ]
  
let userBooks = books.filter((bk)=>bk.genre==="History")
// console.log(userBooks);
  
userBooks = books.filter((bk)=>{
    return bk.publishing>=1990 && bk.genre==="History"
})

console.log(userBooks);
