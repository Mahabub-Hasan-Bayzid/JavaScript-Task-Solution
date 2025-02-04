document.getElementById("askButton").addEventListener("click", function () {
  // Get the question from the input field
  const question = document.getElementById("questionInput").value.trim();

  // Check if the user entered a question
  if (question === "") {
      alert("Please ask a question!");
      return;
  }

  // Log the question to the console
  console.log(`Question: ${question}`);

  // Generate a random number between 1 and 8
  const randomNumber = Math.floor(Math.random() * 8) + 1;

  let answer;

  // Use a switch statement to determine the answer
  switch (randomNumber) {
      case 1:
          answer = "Yes, definitely!";
          break;
      case 2:
          answer = "It is certain.";
          break;
      case 3:
          answer = "Reply hazy, try again.";
          break;
      case 4:
          answer = "Ask again later.";
          break;
      case 5:
          answer = "Paisa de, tab bataunga.";
          break;
      case 6:
          answer = "My sources say no.";
          break;
      case 7:
          answer = "Chal Gandu.";
          break;
      case 8:
          answer = "Tera Marzi.";
          break;
      default:
          answer = "Error: Unable to generate an answer.";
          break;
  }

  // Log the answer to the console
  console.log(`Answer: ${answer}`);

  // Get the Magic 8-Ball element
  const magicBall = document.getElementById("magicBall");

  // Add the shake animation
  magicBall.classList.add("shake");

  // Wait for the animation to finish, then display the answer
  setTimeout(() => {
      magicBall.classList.remove("shake");
      document.getElementById("answerText").textContent = answer;
  }, 500); // 500ms matches the duration of the shake animation
});