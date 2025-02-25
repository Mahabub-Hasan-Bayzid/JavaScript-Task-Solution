/* 
Create a form with a required name and email field.
Write JavaScript to:
- Prevent form submission if either field is empty.
- Display an error message if fields are missing. 
*/

const yname = document.getElementById('name');
const email = document.getElementById('email');
const error= document.getElementById('error1');

const validate = ()=>{
    if (yname.value === '' || email === '') {
        message.textContent = "Name Cannot be null";
    }
}

document.getElementById('submit').addEventListener('click', validate);