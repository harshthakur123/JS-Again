const name = "Harsh "
const repoCount = 50
// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo Count 
is ${repoCount}` );

const gameName = new String('Harsh-thakur')
// console.log(gameName);
// console.log(gameName[2]);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('r'));
// const newString = gameName.substring(0,3)
// console.log(newString);

const newString2 = gameName.slice(-12 ,4)
console.log(newString2);

const newString3 = "  Harsh    "
console.log(newString3);
console.log(newString3.trim());

const url = "https://harsh.com/harsh%20thakur"

console.log(url.replace('%20','-'));
console.log(url.includes('%k'));

const str = 'The quick brown fox jumps over the lazy dog.';
const str1 = str.split(' ')
console.log(str1[4]);
const str2 = str.split('')
console.log(str2[7]);


