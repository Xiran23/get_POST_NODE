//for refreace check feature.js
const { fromfeature} = require('./feature');
console.log(fromfeature);


//for refreance check file people.js
const test1 = require('./people'); 


//test1 will be zero if in(people.js ) does not export anything
// module.exports = "this will be return in test1 in module.js"

console.log(test1);


console.log("THis is form people.js");

// const y = test1.gothere;


//for refreace check file people 

//here we try to acess multiple value return from
//people.js 


// const age = [2,4,5,6];


// module.exports={
//     send1 : gothere,
//     send2 : age
// };

const test2 = test1.send1;

console.log(test2);

const test3= test1.send2; 
console.log(test3);