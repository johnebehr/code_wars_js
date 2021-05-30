/* Disemvowel Trolls
- Write a function that takes in a string and returns a new string with all vawels removed
- For this Kata ```y``` isn't considered a vowel
*/

// Code Wars solution
let disemvowel = (str) => {return str.replace(/[aeiou]/gi, "");} 

// John's Solution
/*
function disemvowel(str) {
    const vowelList = "aeiouAEIOU".split("");
    let noVowels = [];

    str.split("").forEach(function(element){
        vowelList.includes(element) ? true : noVowels.push(element);
        
    });

    return noVowels.join("");
}
*/
  disemvowel("This website is for losers LOL!") //=

  module.exports = disemvowel;