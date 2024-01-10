function isPalindrome(word) {
  // Write your algorithm here
    
      if (word.length === 0 || word.toUpperCase() === word){
        return "string cannot be empty and write in lowwercase."
    } 
    
    if(typeof word !== "string"){
        return "only strings allowed"
    }
    
    
    let reversed_word = ""
    
    for(let i = word.length - 1; i >= 0; i--){
     reversed_word += word[i]; 
    }
    
    if (reversed_word === word ){
       return true
    } else {
     return false
    }
    
}
    
     let result = isPalindrome("racecar")
     console.log(result);






/* 
  Add your pseudocode here
  ---------------------------------------------------------------------

  Input the word to be checked
  if input is empty && lowercase
     return "string cannot be empty and write in lowwercase."
        
        if type of word != string, return "only strings allowed"

      initialize an empty string

      iterate through each letter in the word in reversed mode
        
      if origin word === reversed word, return true 

      else
         return  false
*/





/*
  Add written explanation of your solution here
  ----------------------------------------------------------------------


  The function gets an input of a word and checks wether the it is a string and also lower case.

  the function proceeds and initializes an empty string, it then iterates through each letter in reverse format to check 

  if it is equal to the origin string. if so, return true and false if not.






*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
