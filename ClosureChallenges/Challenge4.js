/**Challenge 4 :
Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called. */

// CHALLENGE 4
function once(func) {
  
    let executed = false;
    let y ;
      return function(x)
    {
      if (!executed) {
          executed = true;
            y = func(x);
          return y;
        }
      else 
        return y;
      }
  }
  // /*** Uncomment these to check your work! ***/
  function addBy2(x)
  {
    return x+2
  }
  
   const onceFunc = once(addBy2);
   console.log(onceFunc(4));  // => should log 6
   console.log(onceFunc(10));  // => should log 6
   console.log(onceFunc(9001));  // => should log 6