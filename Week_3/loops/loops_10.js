/* 
Write a function named countdownTimer:
- Take a number (e.g., 10) as input and simulate a countdown in the console.
Log each number in descending order until 0, and then log: "Time's up!".
 */

const countdownTimer = () =>{
    for (i = 0; i <= 10; i++){
        console.log(10-i);
        
    }
    console.log("Time's up!");
    
    
}

countdownTimer();