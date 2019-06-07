var fs = require("fs");

function getFileData(filename) {
    return new Promise((resolve, reject) => {               //custom promise
        fs.readFile(filename, (err,data) => {
            if(err) reject(err);
            resolve(data);
        })
    });
}

getFileData('input.txt')
.then( (filedata) => {
    console.log(filedata.toString())
    });
    // calling 2nd input file in sync way
     getFileData('input2.txt')
    .then( (data) => { 
        console.log(data.toString())
    })
    return getFileData('input3.txt')
     .then( (data) => {
         console.log(data.toString());
     })
    .catch((err) => {
        console.log(err);
    })

