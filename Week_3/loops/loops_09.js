/* 
Write a function named sumFromOneToHundred:
- Use a loop to calculate the sum of all numbers from 1 to 100.
Log the final sum in the console.
*/

const sumFromOneToHundred = ()=>{
    let sum= 0;

    for (i = 1; i <= 100; i++) {
        sum += i;
        
    }

    console.log('The Final SUM is : ', sum);
    
}

sumFromOneToHundred();