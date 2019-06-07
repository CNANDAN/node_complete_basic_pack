//custom events nodejs
// nodejs is so fast that it resolves 500000 (5L request) in 26 sec

var emitter = require('events').EventEmitter;
var e = new emitter();
e.on('beforeprocess', (data) => {
    console.log("Starting the process for event "+data);
});


e.on('afterprocess', (data) => {
    console.log("finished processing event "+data);
});

function processEvents(events_no) {
    for(let i = 1; i <= events_no; i++) {
            e.emit('beforeprocess',i);
            console.log("event under process");
            e.emit('afterprocess',i);
            console.log('\n');
        }
    }

processEvents(500);