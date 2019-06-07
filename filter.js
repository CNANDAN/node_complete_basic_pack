//filter array to odd numbers using filter

const filterArray = [1,2,3,4,5,6,7,8,9,10,11,12];

const filteredArray = filterArray.filter((value,index,array) => {
    return value % 2 !== 0;
});
console.log(filteredArray);
 
