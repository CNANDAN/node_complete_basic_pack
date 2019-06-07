//problems
// * messy code in case of multiple callback
// * error prone
// * unable to understand
 
//alternatives
// * modularity approach
// * use promises or async/await 


var fs = require("fs");


// a simple callback

fs.readFile('input.txt', function (err, data) {
    if(err) throw err;
    console.log(data.toString());
});

//multiple callback 
//This is what we call as callback hell 
fs.readFile('input.txt', (err, data) => {
    if(err) throw err;
    console.log("calling first callback "+data.toString());
    fs.readFile('input2.txt', (err, data2) => {
        if(err) throw err
        console.log("calling second callback "+data2.toString());
        fs.readFile('input3.txt', (err, data3) => {
            if(err) throw err
            console.log("calling third callback "+data3.toString());
        });
    });
});

