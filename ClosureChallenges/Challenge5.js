/**Challenge 5 : 
Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter. */
// CHALLENGE 5
function after(count, func) {
	let c=0;
  return function()
  {
  	//func();
    c++;
    if(c===count)
      {
        func('Hello')
      }
    else
      {
        func('Nothing')
      }
    
  }
}

// /*** Uncomment these to check your work! ***/
 const called = function(x) { console.log(x) };
 const afterCalled = after(3, called);
 afterCalled(); // => nothing is printed
 afterCalled(); // => nothing is printed
 afterCalled(); // => 'hello' is printed