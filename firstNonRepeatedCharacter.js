/**
 *  Given an arbitrary input string, return the first nonrepeated character in
 *  the string. For example:
 *  firstNonRepeatedCharacter('ABA'); // => 'B'
 *  firstNonRepeatedCharacter('AACBDB'); // => 'C'
 *  Should return null or empty string of there is no repeated characters
 * 
 * @function firstNonRepeatedCharacter
 * @param {String} string 
 * @returns {String}
 */
const firstNonRepeatedCharacter = function (string) {
    var arr = string.split('')
    var result = ''
    var c = 0; 
     for (var i = 0; i < arr.length; i++) {
      c = 0;
     for (var j = 0; j < arr.length; j++) {
     if (arr[i] === arr[j]) {
       c+= 1
       }
      }
   if (ctr < 2) {
   return  result = arr[i]
     }
   }
  
   }