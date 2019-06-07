        // example for promise.all

        var promise1 = Promise.resolve(3);
        var promise2 = 42;
        var promise3 = new Promise(function(resolve, reject) {
            setTimeout(resolve, 100, 'foo');
        });

Promise.all([promise1, promise2, promise3]).then( (values) => {
  console.log(values);
});