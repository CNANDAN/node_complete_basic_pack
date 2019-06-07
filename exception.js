//exception in nodejs 

var x,y;

var divOperation = (x,y) =>{
	try{
		if(x!=0){
			console.log("operation possible");
		}
		else{
			var err = new Error('division not possible');
			throw err;
		}
	} catch (err) {
		console.log(err);
	}
}

divOperation(0,11);
