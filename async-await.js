var fs = require("fs");

async function readFileData (filename) {                //making function as async
    try {
        let displayData = await getFileData(filename);  //await to wait for each and every request
    } catch (err) {
        console.log(err);
    }
} 

function getFileData(filename) {
    fs.readFile(filename, (err, data) => {
        if(err) return err;
        console.log(data.toString());
    });
 }

readFileData('input.txt');
readFileData('input2.txt');
readFileData('input3.txt');
