/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
   if (strs.length === 1) return strs[0];

   let firstStr = strs[0];
   let prefix = "";

   for (let i = 0; i < firstStr.length; i++) {

      let ctr = 0;
      for (let j = 0; j < strs.length; j++) {
         if (firstStr[i] === strs[j][i]) {
            ctr++;
         }
      }
      if (ctr === strs.length) {
         prefix += firstStr[i];
      } else {
         break;
      }
   }
   return prefix;
};
