/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
   // since x is valid integer palindrome of negative will always return false
   if (x < 0) return false;
   let y = x;
   let res = 0;
   //not optimal solution
   while (y != 0) {
      res = res * 10 + y % 10;
      y = Math.floor(y / 10);
   }
   return x === res;
};

