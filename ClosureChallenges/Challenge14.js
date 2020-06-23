/**Challenge 14 : 
Write a function, callTimes, that returns a new function. The new function should return the number of times it’s been called. */

// CHALLENGE 14
function callTimes() {
    let c = 0;
    return()=>{
          c++;
      console.log(c)
    }
  
  }
  
  // /*** Uncomment these to check your work! ***/
  let myNewFunc1 = callTimes();
  let myNewFunc2 = callTimes();
  myNewFunc1(); // => 1
  myNewFunc1(); // => 2
  myNewFunc2(); // => 1
  myNewFunc2(); // => 2