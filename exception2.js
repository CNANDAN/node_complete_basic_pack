//handling all exception at once

process.on('uncaughtException',(err)=>{
	console.log(err + " recorded");
});

var divOperation = (x,y) => {
	if(x == 0 ){
		var err = new Error("Division not possible for denominator value 0");
		throw err;
	} else {
        console.log("operation possible");
    }
}

divOperation(0,11);