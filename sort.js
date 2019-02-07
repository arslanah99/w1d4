myArray = [10, 2, 5, 1, 9]

myArray.sort(function(a,b){
    return a - b
})
// console.log(myArray)


var students = [
    { id: 1, name: "bruce",    age: 40 },
    { id: 2, name: "zoidberg", age: 22 },
    { id: 3, name: "alex",     age: 22 },
    { id: 4, name: "alex",     age: 30 }
  ];

  students.sort(function(a, b){
     var nameA = a.name
     var nameB = b.name
     if(nameA < nameB){
         return -1
     } else if(nameA > nameB){
         return 1
     } else{
         a.age - b.age
     }
  })
  console.log(students)