/**Challenge 12 : 
Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. When two strings are given, the returned function will hold onto the two strings as a pair, for future use. When one string is given, the returned function will return the same string, except all instances of first strings (of saved pairs) will be replaced with their corresponding second strings (of those saved pairs). */

// CHALLENGE 12
function replaceAll(str,find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }
  
  function censor() {
    let obj = {};
    let arr =[];
    return function(x,y){
      if(arguments.length===2)
        {
           obj[x] = y;
           arr.push(x);
            //	 console.log(obj);
        }
      //  console.log(arr);
      arr.forEach(item=>{ x = replaceAll(x,item,obj[item]) })
          return x
    }
  }
  
  // /*** Uncomment these to check your work! ***/
  const changeScene = censor();
  changeScene('dogs', 'cats');
  changeScene('quick', 'slow');
  changeScene('brown','Red');
  console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'
  //changeScene('The quick, brown fox jumps over the lazy dogs.')