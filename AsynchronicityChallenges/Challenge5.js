/**Challenge 5
Create a function limitedRepeat that console logs hi for now every second, but only for 5 seconds. Research how to use clearInterval if you are not sure how to do this. */

/* CHALLENGE 5 */

function limitedRepeat() {
  // ADD CODE HERE
  var counter = 0,
    interval = setInterval(function () {
      counter++;
      console.log('hi for now');
        if (counter === 5) {
            clearInterval(interval);
        }
    },1000)
}

// Uncomment the following line to check your work!
 limitedRepeat(); // should log (every second, for 5 seconds): hi for now