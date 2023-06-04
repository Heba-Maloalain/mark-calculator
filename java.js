// for(let i=0;i<10;i++)
// {
// if(i%2==0)
// console.log(i);

// else if(i==5)
// { console.log("half of loop");
 
//     console.log("half of loop");
// }
// else 
// console.log("sorry it's odd "+i);
// }

// let name=prompt("enter your name ?");






// function evenNumber(first,second){

// for(let i=first; i<=second ;i++)
// {
//  if (i%2==0) {
//   console.log(i +" is even"+" and welcome "+ name);
//  }




// }
// }
// evenNumber(0,10);
let myStudents = ["ahmad", "ali", "anas", "omar","taleb"];
let myStudentsMarks = [60, 48, 33, 88,99];

function markCalculate(params) {
  // for (let i = 0; i < myStudents.length; i++) {
  //   console.log(myStudents[i]);
  // }
  for (let k = 0; k < myStudentsMarks.length; k++) {
    if (myStudentsMarks[k]>=50) {
      console.log("congrats "+myStudents[k]+ " you scored "+myStudentsMarks[k]+ " and you have passed");
    }
 else{
  console.log("sorry "+myStudents[k]+ " you scored "+myStudentsMarks[k]+ " and you have failed");
 }

  }
}

markCalculate();


