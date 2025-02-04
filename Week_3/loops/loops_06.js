    /* 
Write a function named askToContinue:
- Prompt the user to enter a number.
- Then, ask: "Do you want to continue giving numbers? (y/n)".
- If the user answers "y", ask for another number.
- If the user answers "n", stop asking and log the average of all entered numbers in the console. 
*/

const askToContinue = ()=>{
    let sum = 0;
    let count = 0;
    while (true){
        let input = prompt("Do you want to continue giving numbers? (y/n)");
        if (input == 'n') {
            break;
        }
        else if (input == 'y') {
            let no = Number(input);
            sum += no;
            count++;   
        }
        if (count > 0){
            let average = sum / count;
            console.log(`Average of all entered numbers is ${average}`);
            
        }
        else {
            console.log(`No numbers were entered.`);
        }
    }
}

askToContinue();