// require the fs module first

const fs = require("fs");

// making a program line to take input from the user
let inputArr = process.argv.slice(2);

// making the aray of files such that we can easily get the data of more tan one files user inputting
let filesArr = [];
// options array making
let optionsArr = [];
// taking user input in the form of array

for (let i = 0; i < inputArr.length; i++) {
  if (inputArr[i].charAt(0) == "-") {
    optionsArr.push(inputArr[i]);
  } else {
    filesArr.push(inputArr[i]);
  }
}
// files path in filesArr
// console.log(filesArr);
// console.log("Options to be followed is:" + optionsArr)

//check if all the files exist or not
for (let i = 0; i < filesArr.length; i++) {
  let doesExist = fs.existsSync(filesArr[i]);
  if (doesExist == false) {
    console.log("One or more files does not exist.");
    process.exit();
  }
}

// content reading and appending files
let content = "";
for (let i = 0; i < filesArr.length; i++) {
  let fileContent = fs.readFileSync(filesArr[i]);
  content += fileContent + "\r\n";
}
// console.log(content);

// using split to take the content of different files in different index of contentArr

let contentArr = content.split("\r\n");
// console.log(contentArr);


// cheching the edge cases 
// 1)- -n and -b cant come together

for(let i = 0; i < optionsArr.length; i++)
{
    if(optionsArr.includes("-n") && optionsArr.includes("-b"))
    {
        console.log("-n and -b cant be processed together....");
        process.exit();
    }
}



// ===================>- OTPIONS -<===================//
// 1)- -s option
let isSPresent = optionsArr.includes("-s");
if (isSPresent) {
  for (let i = 1; i < contentArr.length; i++) {
    if (contentArr[i] == "" && contentArr[i - 1] == "") {
      contentArr[i] = null;
    } else if (contentArr[i] == "" && contentArr[i - 1] == null) {
      contentArr[i] = null;
    }
  }
}

// console.table(contentArr);
let tempArr = [];
for (let i = 0; i < contentArr.length; i++) {
  //push everything in tempArr except null
  if (contentArr[i] != null) {
    tempArr.push(contentArr[i]);
  }
}
contentArr = tempArr;

// console.log(contentArr.join('\n'));

// 2)- -n option

let isNPresent = optionsArr.includes("-n");
if(isNPresent) {
    for(let i=0; i<contentArr.length; i++) {
        contentArr[i] = i+1 + ". " + contentArr[i];
    }
}

// console.log(contentArr.join('\n'));


// 3)- -b option

// console.log(contentArr.join('\n'));
let isBPresent = optionsArr.includes("-b");

if(isBPresent) {
    let count = 1;
    for(let i=0; i<contentArr.length; i++)
        if(contentArr[i]!="")
        {
          contentArr[i] = count + ". " + contentArr[i];
          ++count;
        }
    }


console.log(contentArr.join('\n'));
