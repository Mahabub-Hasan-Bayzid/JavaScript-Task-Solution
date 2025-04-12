document.getElementById("askButton").addEventListener("click", function () {
  
  const question = document.getElementById("questionInput").value.trim();

  if (question === "") {
      alert("Please ask a question!");
      return;
  }

  console.log(`Question: ${question}`);

  const randomNumber = Math.floor(Math.random() * 8) + 1;

  let answer;

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

  console.log(`Answer: ${answer}`);

  const magicBall = document.getElementById("magicBall");

  magicBall.classList.add("shake");

  setTimeout(() => {
      magicBall.classList.remove("shake");
      document.getElementById("answerText").textContent = answer;
  }, 500); 
});