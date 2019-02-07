var words = ["ground", "control", "to", "major", "tom"];

// map(words, function(word) {
//   return word.length;
// });

// map(words, function(word) {
//   return word.toUpperCase();
// });

// map(words, function(word) {
//   return word.split('').reverse().join('');
// });


// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

var list = [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]

function greatestMap(list, cb){
    var finalResult = [];
    for(var i = 0;i < list.length; i++){
        var result = cb(list[i], i, list);
        finalResult.push(result)
    }

    return finalResult;
}

var result = greatestMap(words, function callBack1(word){
    return
});

let a = greatestMap(words, function(word) {
    return word.length;
  });

let b = greatestMap(words, function(word) {
    return word.toUpperCase();
  });

let c = greatestMap(words, function(word) {
    return word.split('').reverse().join('');
  });  

console.log(a)
console.log(b)
console.log(c)