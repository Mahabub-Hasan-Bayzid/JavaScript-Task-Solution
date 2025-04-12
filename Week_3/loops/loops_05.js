/* 
Write a function named calculateAverageUntilZero:
- Continuously prompt the user to input numbers.
- Stop asking for inputs when the user enters 0.
- Calculate and log the average of all entered numbers in the console once the loop ends.
 */
// const calculateAverageUntilZero = () =>{
//     let sum= 0;
//     let count= 0;
//     for (i= 0;i<=3; i++) {
//         let input = prompt("Please Input Numbers.....");
//         if (input === 0) {
//             console.log("No Numbers to sum");
            
            
//         }
//         else{
//           let addition=  sum + input;
//           count++;
          
          
//         }
        
//     }
//     console.log(`The sum is ${addition}`);

// }
// calculateAverageUntilZero();


// const calculateAverageUntilZero = () => {
//     let sum = 0; 
//     let count = 0; 

//     while (true) {
//         let input = prompt("Enter a number (Enter 0 to stop):");
//         let number = parseFloat(input); 
        
//         if (number === 0) {
//             break; 
//         }

//         if (!isNaN(number)) { 
//             sum += number; 
//             count++; 
//     }

//     if (count > 0) {
//         let average = sum / count; 
//         console.log(`The average of the entered numbers is: ${average}`);
//     } else {
//         console.log("No numbers were entered.");
//     }
// };
// }

// calculateAverageUntilZero();


/* 
Write a function named calculateAverageUntilZero:
- Continuously prompt the user to input numbers.
- Stop asking for inputs when the user enters 0.
- Calculate and log the average of all entered numbers in the console once the loop ends.
 */

const calculateAverageUntilZero =()=>{
    let count = 0;
    let sum = 0;    
    while (true) {
        let input = prompt("Input Numbers! 0 to stop");
        let number = parseFloat(input);
        
        if (number === 0) {
            break;
        }
        else {
           sum += number;
           count ++;
            
        }
        
    }
    if (count > 0) {
        let average = sum/count;
        console.log("The Avarage of Entered Numbers : ",average);
    }
    else{
        console.log("No Numbers Were Entered!");
        
    }


}

calculateAverageUntilZero();