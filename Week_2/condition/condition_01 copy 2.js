/* 
Write a function named checkAdult:
Take an age as a parameter.
If age is 18 or older, return "You are an adult."
Otherwise, return nothing.
Call the function with different ages and print the result.
 */

// const checkAdult =(age) =>{
//     if (age >= 18){
//         console.log('You Are An Adult!');
        
//     }
// }
// console.log(checkAdult(15));
const checkAdult = (age) => {
    return age >= 18 ? "You are an adult" : "";
  };
  
  console.log(checkAdult(18));
  console.log(checkAdult(17));