/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let newArr=[];
    for(let i=digits.length-1; i>=0; i--){
        if(i===digits.length-1 && digits[i]!==9){
            digits[i]= digits[i]+1;
            return digits;
        }
        if(digits[i]===9){
            newArr.push(0);
        }
    }
    if(digits[0]===9){
        newArr.unshift(1);
    } else {
        newArr.unshift(digits[0]+1);
    }
    return newArr;
};
