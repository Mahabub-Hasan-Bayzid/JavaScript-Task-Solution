/* Create a function named cleanAndTransform that:
Takes one parameter, str.
Trims whitespace, converts the string to lowercase, and replaces "powerful" with "amazing".
Returns the transformed string.
Call the function with " JavaScript is powerful! ".
Print the result using console.log(). 
*/

const cleanAndTransform = (str, newWord) => {

     return str.trim().toLowerCase().replace(str, newWord);;
}
console.log(cleanAndTransform("   JavaScript is Powerful!   ", "Weak"));
