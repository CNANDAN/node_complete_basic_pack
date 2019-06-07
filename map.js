// converts all uppercase to lowecase using map

const mapArray = ['ABC',"DEF","HIJ","KLMN","OPQ"];

const mappedArray  = mapArray.map( (value,index,arrayval) => {
        return value.toLowerCase();
    });
console.log(mappedArray);
