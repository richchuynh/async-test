const getNumLessThanTen = require('./getNumLessThan');
const waitOneSecond = require('./waitOneSecond');
const writeToFile = require('./writeToFile');

getNumLessThanTen((err, num) => {
  if (err) {
    console.log('Error getting number')
  } else {
    console.log(num);
    waitOneSecond((err, message) => {
      if (err) {
        console.log('error waiting one second')
      } else {
        console.log(message);
        waitOneSecond((err, message2) => {
          if (err) {
            console.log('error waiting two seconds');
          } else {
            console.log(message2);
            waitOneSecond((err, message3) => {
              if (err) {
                console.log('error waiting three seconds');
              } else {
                console.log(message3);
                writeToFile(num, (err) => {
                  if (err) {
                    console.log('error writing file');
                  } else {
                    console.log('I\'m Done!');
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});
/*
//get a random number less than 10,
wait three seconds
write the number to the hard drive
Then, once all that is done, console log "I'm done!"

CONSTRAINTS
- No using setTimeout (must use waitOneSecond)
- No editing any file except main.js
*/





