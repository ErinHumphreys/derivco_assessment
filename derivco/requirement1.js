
// this function removes whitespaces from the string
function removeSpace(string){
    let x = string.replace(/\s+/g, '');
    return x;
}

// this function returns the frequency of each character
function getFrequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }
    return freq;
}

function sum(num)
{
     //if num is greater than or equal to 2 end the function and return final value
     if(num.length <= 2) return num;
         //converting the num to string beacuse first time input will be number
     num = String(num);
     let result = '';
         //creating a loop upto half of length of the num
     for(let i = 0;i<num.length/2;i++){
                 //if the number is not middle one
         if(i !== num.length - 1 - i)
         {
                         //adding the sum of corresponding numbers to result
             result += parseInt(num[i]) + parseInt(num[num.length - 1 - i]);
         }
                 //if the number is middle number just add it to result			
                 else result += num[i] 
     }
     return sum(result);
     //return result;
 }   

function goodMatch(string)
{
    if (sum(string) >= 80){
        return sentence + ' ' + sum(string) + '%, good match';
    }else return sentence + ' ' + sum(string) + '%';
}

// function isLetter(str) {
//     return str.length === 1 && str.match(/[a-z]/i);
// }

const prompt = require('prompt-sync')();

let fplayer = prompt('Enter the first players name:').toLowerCase();
let splayer = prompt('Enter the second players name:').toLowerCase();

// console.log(fplayer + " matches " + splayer);

let sentence = fplayer + " matches " + splayer;

//let nsentence = sentence.replace(/\s+/g, '');
//console.log(sentence);



//let output = getFrequency(removeSpace(toLow(sentence)));
let output = getFrequency(removeSpace(sentence));
let tempArr = Object.values(output);
let arr2String = tempArr.toString().replace(/,/g, '');


//console.log(getFrequency(removeSpace(sentence)));
//console.log(tempArr);
console.log(arr2String);
console.log(sum(arr2String));
console.log(goodMatch(arr2String));
//console.log(add(newArr));
