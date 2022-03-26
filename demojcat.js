// // you can only take input via node.js in javascript beacuse you can only take input via terminal and in browser we dont have such terminal so we need node js bhaiya supports terminal

// // let input = process.argv;
// // console.log(input);

// // let input_1 = process.argv.slice(1);
// // console.log(input_1);

// let fs = require('fs');
// let input_2 = process.argv.slice(2)+"";
// // printing the name of the file user has inputted
// console.log(input_2);

// // now printing the actual content of the file in input_2
// let dataF1 = fs.readFileSync(input_2)
// console.log(dataF1+"");

// // .split() function in js

var str = "hello my name is Jatin";
console.log(str);
// split will split the string on the basis of argument given inside the function or vo particular argument hat jaega array sa jo new banegi and conver them to an array

console.log(str.split(""))

var arr = str.split(" ");
console.log(arr);
