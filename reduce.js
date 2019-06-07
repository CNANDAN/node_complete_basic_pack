//how reduce works reduce 

const reducearray = [1,2,3,4];

const sum = reducearray.reduce((accumulator,curval,curindex,array) => {
    return accumulator+curval;
},0);
console.log(sum);