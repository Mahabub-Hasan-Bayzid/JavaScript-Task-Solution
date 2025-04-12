/* 
Write a function named sumAndAverage:
- Ask the user to input ten numbers.
- Calculate and log:
    - The sum of the numbers.
    - The average of the numbers.
    - The smallest and largest numbers.
Display all results in the console.
*/

const sumAndAverage = ()=>{
    
    let sum = 0;
    let smallest = Infinity;
    let largest = -Infinity;

    for (let i = 0; i < 10; i++) {
        let userInput = parseFloat(prompt("Enter 10 Digits!"))
        sum += userInput;
        if (userInput < smallest) {
            smallest = userInput;
        }
        if (userInput > largest) {
            largest = userInput;
        }

    }
    let average = sum/10;

    console.log("Sum:", sum);
    console.log("Average:", average);
    console.log("Smallest:", smallest);
    console.log("Largest:", largest);

}

sumAndAverage();