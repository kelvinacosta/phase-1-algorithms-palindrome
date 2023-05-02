function isPalindrome(word) {
  // Write your algorithm here
  //Return true if given statement is a palindrome.Otherwise, return false
  const splitWord = word.split('')
  const reverseWord = splitWord.reverse()
  const reverString = reverseWord.join('')

  if(word === reverString){
    return true 
  }else{
    return false
  }
  
}

/* 
  Add your pseudocode here
  create a variable and then split into arrays
  create another variable where arrays can be reverse it
  function palindrome with one argument
  if string is a plaindrome 
  return true
  else if not palindrome
  return false
  
*/

/*
  Add written explanation of your solution here
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
