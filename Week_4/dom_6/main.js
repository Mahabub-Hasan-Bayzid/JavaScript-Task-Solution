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
<<<<<<< HEAD
    if (yname.value === '' || email.value === '') {
        error.textContent = "Name Cannot be null";
=======
    if (yname.value === '' || email === '') {
        message.textContent = "Name Cannot be null";
>>>>>>> 676da5ebddf89d9ec869e495a35ac5737d5d78cf
    }
}

document.getElementById('submit').addEventListener('click', validate);