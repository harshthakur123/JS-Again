const obj = {
    js : "Javascipt",
    cpp : "C++",
    ror : "Ruby On rails "
}

for (const key in obj) {
    // console.log(`${key} is shortcut for ${obj[key]}`);
    
}

const languages = ["JS","CPP","Java","Python"] 
for (const key in languages) {
    console.log(languages[key]);
    
}

const map = new Map()
map.set("IN","Inida")
map.set("USA","United States Of America")
map.set("Fr","France")
map.set("IN","Inida")

for (const key in map) {
    // console.log(key); map is not iterables
    
}

