/**Challenge 7 : 
Write a function rollCall that accepts an array of names and returns a function. The first time the returned function is invoked, it should log the first name to the console. The second time it is invoked, it should log the second name to the console, and so on, until all names have been called. Once all names have been called, it should log 'Everyone accounted for'. */

// CHALLENGE 7
function rollCall(names) {
	let len = names.length;
  let c = 0;
  return ()=>
  {
  if(c<len)
    {
      console.log(names[c]);
    }
    else
      {
        console.log('Everyone accounted for');
      }
        c++;
  }
}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // => should log 'Victoria'
rollCaller() // => should log 'Juan'
rollCaller() // => should log 'Ruth'
rollCaller() // => should log 'Everyone accounted for'