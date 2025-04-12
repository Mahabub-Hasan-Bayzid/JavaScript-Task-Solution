/*
Create an HTML file with a <p> element and a button.
Write JavaScript to toggle the visibility of the paragraph each time the button is clicked.
 */


// const button= document.getElementById('vibtn');

// const visibility = ()=> {
//    const text = document.getElementById('text');
//    text.remove();
// }

// button.addEventListener('click',visibility);

const button= document.getElementById('vibtn'); 

function togglelement() {
   const paragraph = document.
       getElementById('text');
   if (paragraph.style.display === 'none') {
       paragraph.style.display = "block";
   }
   else {
       paragraph.style.display = "none"
   }
}

button.addEventListener('click',togglelement)