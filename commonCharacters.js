/**

 *

 * Write a function `f(a, b)` which takes two strings as arguments and returns a

 * string containing the characters found in both strings (without duplication), in the

 * order that they appeared in `a`. Remember to skip spaces and characters you

 * have already encountered!

 *

 * Example: commonCharacters('acexivou', 'aegihobu')

 * Returns: 'aeiou'

 * Should return null or empty string of there is no commonCharacters

 *
    /** */
    var check = (str1,str2)=>{
        var res = ''
        var c = 0
        for ( var i = 0 ; i < str1.length ; i++){
            for ( var j = 0 ; j < str2.length ; j++){
                if (str1[i]===str2[j] && str1[i]!== ' '){
                    c++
                    if ( c>=1 && !res.includes(str1[i])){
                      res = res + str1[i]
                    }
                }   
            }
        }
           return res
    }
  