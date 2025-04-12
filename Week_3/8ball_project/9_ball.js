// Task: Magic 8 - Ball with switch
// Create a Magic 8 - Ball program that uses a switch statement to provide random answers based on a generated number.

// Follow these steps:

// Write a function named magic8Ball:
// Useprompt() to ask the user for a "Yes or No" question.
// Log the question to the console.
// Generate a random number:
// UseMath.random() to generate a random number between 1 and8.
// UseMath.floor() to ensure the number is a whole number.
// Use a switch statement:
// Based on the random number(1 to8), return one of the following responses:
// 1: "Yes, definitely!"
// 2: "It is certain."
// 3: "Reply hazy, try again."
// 4: "Ask again later."
// 5: "Better not tell you now."
// 6: "My sources say no."
// 7: "Outlook not so good."
// 8: "Signs point to yes.";
// Display the result:
// Log the randomly selected answer to the console.
// Show the answer in analert().


const magic8Ball = ()=>{
    let userInput = prompt("Yes or No question : ");

    let randomNumber = Math.floor(Math.random()*9)+1 ;
   let result;
switch (randomNumber) {
        case 1:
            result= "Yes, definitely!";
            break;
        case 2:
            result= "It is certain.";
            break;
        case 3:
            result= "Reply hazy, try again.";
            break;
        case 4:
            result= "Ask again later.";
            break;
        case 5:
            result= "Better not tell you now.";
            break;
        case 6:
            result= "My sources say no.";
            break;
        case 7:
            result= "Outlook not so good.";
            break;
        case 8:
            result= "Signs point to yes.";
            break;
        case 9:
            result= "Yes, BAL!";
            break;
    }
    console.log(result);
    alert("9Ball poll says : "+ result)
    
    
}

magic8Ball();