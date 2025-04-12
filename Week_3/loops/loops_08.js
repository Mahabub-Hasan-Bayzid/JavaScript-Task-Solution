/* 
Write a function named findMinMax:
- Ask the user how many numbers they want to input.
- Then prompt them to enter that many numbers.
- Once all numbers are entered, determine and log:
- The smallest number.
- The largest number.
Display the results in the console. 
*/

const findMinMax = ()=>{
    let numbers = parseFloat(prompt("How Many Numbers You want to Input?"));
    let smallest= Infinity;
    let largest= -Infinity;

    for (let i = 0; i < numbers; i++) {

        let userInput = parseFloat(prompt("Please Entered the numbers!"));
        
        if (userInput < smallest) {
            smallest = userInput;
        }
        if (userInput > largest) {
            largest = userInput;
        }
    }
    console.log("The smallest number is : ", smallest);
    console.log("The largest number is : ", largest);
    
}

findMinMax();