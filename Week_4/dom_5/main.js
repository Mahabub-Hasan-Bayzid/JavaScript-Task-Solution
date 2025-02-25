/*
Create an HTML file with:
- A <button> to change the background color.
- A <input> field for users to enter a color.
- A <p> element where the text color changes based on the input.

Write JavaScript to:
- Change the background color to a random color when the button is clicked.
- Update the paragraph’s text color to match the user’s input valu
*/

const input = document.getElementById('color');
const button = document.getElementById('colorBtn');
const bg = document.getElementById('bgcolor');


const changeBackground = ()=>{
   bg.style.color = input.value;
   input.value = '';
}
button.addEventListener('click', changeBackground)