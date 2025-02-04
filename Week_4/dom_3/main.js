/*
Create an HTML file with an <input> field and a <div> with the ID displayText.
Write JavaScript to:
- Continuously update the <div> with the input field's value as the user types.
- Use the input event for real-time updates.
*/



const textDisplay = (event)=>{
   const live= document.getElementById('displayText');
   live.textContent = event.target.value;
}
document.getElementById("inputText").addEventListener("input", textDisplay);
