
// var rollDie = function () {
//     return Math.floor(1 + Math.random() * 6);
//   }
  
//   console.log(rollDie());  // 1 (for example)







// function makeLoadedDie() {
//     var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
//     var empt = 0
//     /* your code here */
//     return function() {
//       /* your code here */
//         currentVal = list[empt]
//         empt += 1;
//         if(currentVal === undefined){
//             console.log('STOP')
//         }
//         return currentVal  //output GET MONEY!//
//     }
//   }
  
//   var rollLoadedDie = mak  //output GET MONEY!//LoadedDie();
  
//   console.log(rollLoadedD  //output GET MONEY!//e());  // 5
//   console.log(rollLoadedDie());  // 4
//   console.log(rollLoadedDie());  // 6


//input allow rollloadeddie to be called to show random number
//this is a nested function so we must make a nested function
//need a var set at 0
//and need that variable to loop through list array
//console.log that

//output show number of array one after the other from console.log

var countdownGenerator = function (x) {
    /* your code here */

    return function(){

        if(x > 0){
            console.log('T-minus ' + x + '...')
        } else if(x === 0){
            console.log('Blast Off!')
        } else{
            console.log('Rockets already gone, bub!')
        }
                x -= 1
    }

  };
  
  var countdown = countdownGenerator(3);
  countdown(); // T-minus 3...
  countdown(); // T-minus 2...
  countdown(); // T-minus 1...
  countdown(); // Blast Off!
  countdown(); // Rockets already gone, bub!
  countdown(); // Rockets already gone, bub!


  //input replace x with a number
  //take that number and subtract it by 1
  //if that number its 0 do 'Blast Off'
  // output after 0 if timer hits -1 or -2 or less consolelog 'rockets gone'

