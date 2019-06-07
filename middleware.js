const express = require('express');
var app = express();

console.log('This is a example for usage of middleware');
console.log("type this in your browser to see the response http://localhost:3000");

// using middleware function 

//This middlewares are called each and every time a request is made 
app.use('/',(req,res,next) => {
console.log("calling middleware");
next();	
});

//calling second middleware
app.use('/',(req,res,next) => {
	console.log("calling 2nd middleware");
	next();	
	});

//middleware ends here

//simple get request api with settimeout function 
app.get('/data',(req,res,next) => {
	console.log("calling router");
	setTimeout( () => {
			console.log("set tiemout function is called");
		}
	,2000);
	res.send('Welcome to home');
next();
});

//listening on port 3000 
app.listen(3000,(req,res) => {
	console.log("Connected to server and running on port 3000");
});