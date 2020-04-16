// Level 1: Create an array with n elements, from 1 to n 
// - Input: a number n (example: 5)
// - Output: an array with n elements, starting at 1 and finishing at n (example: [1,2,3,4,5])



function greatGrowingList(n) {
    array = []
    for(counter=1; counter <= n; counter++) {
      array.push(counter)
    }
    console.log(array)
  }
  
  // Level 2, Create an array with n elements, from 1 to 2**n
  // - Input: a number n (example: 5)
  // - Output: an array with elements, starting at 1 (=2**0) and finishing at 2**n (example: [1,2,4,8,16,32])
  
  function growingPowerOf2List(n) {
    array = []
    for(counter = 0; counter <= n; counter ++) {
      x = 2 ** counter
      array.push(x)
    }
  
    console.log(array)
  }
  
  
  
  greatGrowingList(5)
  growingPowerOf2List(5)