// npm install csv-parser
// yarn add csv-parser
const csv = require('csv-parser')
const fs = require('fs')
const results = [];

// parse csv
fs.createReadStream('names.csv')
  .pipe(csv(['Name','Gender']))
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
  });

  //remove duplicates
// const uniqueValuesSet = new Set();
// const filteredArr = results.filter((obj) => {
//   // check if name property value is already in the set
//   const isPresentInSet = uniqueValuesSet.has(obj.name);

//   // add name property value to Set
//   uniqueValuesSet.add(obj.name);

//   // return the negated value of
//   // isPresentInSet variable
//   return !isPresentInSet;
// });

// console.log(filteredArr);

// function removeDuplicates(originalArray, prop) {
//   var newArray = [];
//   var lookupObject  = {};

//   for(var i in originalArray) {
//      lookupObject[originalArray[i][prop]] = originalArray[i];
//   }

//   for(i in lookupObject) {
//       newArray.push(lookupObject[i]);
//   }
//    return newArray;
// }

// var uniqueArray = removeDuplicates(results, it => it.Gender);
// console.log("uniqueArray is: " + JSON.stringify(uniqueArray));

function removeDuplicates(data, key){
  return[ ...new Map(data.map( x => [key(x), x])).values()]
}
console.log(JSON.stringify(removeDuplicates(results, it => it.Gender)));