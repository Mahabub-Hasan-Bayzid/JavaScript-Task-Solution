/* 
Write a function named countEvenNumbers:
- Prompt the user to input 20 numbers one by one.
- After all numbers are entered, log how many of them were even.
Display the result in the console. 
*/

const countEvenNumbers= ()=>{
    let count;
    for ( i = 1; i<=5; i++) {
        let input= Number(prompt("Please Input 5 Numbers....."))
        let number = parseInt(input);
        if (!isNaN && number % 2 == 0) {
            count++;
            
        }
        console.log(`Total even numbers entered: ${count}`);
    }
    
    
}
countEvenNumbers();