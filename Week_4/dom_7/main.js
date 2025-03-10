/* 
Create an HTML file with a button and a counter display.
Write JavaScript to count and display the number of times the button is clicked. 
*/


let btn= document.getElementById('count');
let changes= document.getElementById('counter');

let count = 0;
const addCount = ()=>{
    changes.textContent = count++;
}

btn.addEventListener('click', addCount);