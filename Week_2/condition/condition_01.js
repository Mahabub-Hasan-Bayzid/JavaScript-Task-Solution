/* 
Write a function named checkAdult:
Take an age as a parameter.
If age is 18 or older, return "You are an adult."
Otherwise, return nothing.
Call the function with different ages and print the result.
 */
//  const checkAdult = (age) {
//     return age >= 18 ? "You are an adult":"";
//  }


const checkAdult = (age) =>{
    if (age >= 18) {
        console.log("YOU're an ADULT");
        
    }
    else{
        console.log("YOU're an Bacha");
    }
}
console.log(checkAdult(12));
