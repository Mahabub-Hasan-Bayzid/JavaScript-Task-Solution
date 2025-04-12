/* 

Write a function named generateMultiplicationTable:
- Take a number (e.g., 5) as input.
- Use a loop to generate the multiplication table for that number.
Log the table in the console.

Example for 5:

5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
 */

const generateMultiplicationTable =()=>{
    let input = parseFloat(prompt("Enter a Number...!"));

    for (i=1; i<=10; i++){
        console.log(`${input} x ${i} = ${input * i}`);
        
    }
}
generateMultiplicationTable();