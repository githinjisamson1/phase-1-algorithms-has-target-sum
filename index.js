function hasTargetSum(array, target) {
  // Write your algorithm here

  // iterate array
  for (let i = 0; i < array.length; i++) {
    // assign item at position i to firstNum for each iteration
    const firstNum = array[i];

    // less firstNum from target to get suppossed other num
    const secondNum = target - firstNum;

    // iterate rest of array/starting at one index higher than i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === secondNum) {
        // secondNum confirmed
        return true;
      }
    }
  }

  // no random pair summed results to target
  return false;
}

/* 
  Write the Big O time complexity of your function here

  since the algorithm contains a nested loop, 
  O(n*n) => O(n^2)
  
  Big O time complexity, O(n^2)

*/

/* 
  Add your pseudocode here
  IF result of adding any two random numbers in array is equal to target
    return true
  ELSE result of adding any two random numbers in array is not equal to targe
    return false
*/

/*
  Add written explanation of your solution here

  I have defined a function hasTargetSum that takes an array and target as parameters
  I iterated array using a for loop construct
  I assigned item at position i for each iteration to firstNum variable
  I assummed the secondNum would be target minus firstNum
  I iterated the rest of the array starting an index higher than current i
  I compared item at position j to secondNum with aid of strict equality
  if the comparison evaluates to true, true is returned
  otherwise false is returned
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
