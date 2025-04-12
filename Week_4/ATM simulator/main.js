// Basic ATM Simulator
// This project allows users to check their balance, deposit money, and withdraw money using a simple web interface.

// Main features
// - Shows the user's balance on the page.
// - Lets users deposit money by typing an amount and clicking a button.
// - Lets users withdraw money (but only if they have enough balance).
// - Updates the balance instantly without reloading the page.# **Project 2: Basic ATM Simulator
// Steps to build the project
// Create the HTML Structure

// Add a section to show the balance.
// Add an input field and button for depositing money.
// Add an input field and button for withdrawing money.
// Add a message area to show errors (e.g., "Not enough balance").
// Add event listeners

// Use addEventListener() to detect when the user clicks the deposit button.
// Use addEventListener() to detect when the user clicks the withdraw button.
// Write JavaScript functions

// checkBalance() → Displays the current balance.
// deposit() → Adds money to the balance (only if the amount is valid).
// withdraw() → Subtracts money (only if the user has enough balance).
// Validate user input

// Make sure users enter only numbers when depositing or withdrawing.
// Prevent withdrawals if the balance is too low.
// Show error messages when needed.
// Improve the design and styling

// Use a Google Font to make the app look nice.
// Add colors and spacing to make the layout clean.
// Bonus challenge
// Add a PIN login system before the user can access their account.


let userBalance = 0;
const correctPin = "1234"; 

function updateBalance() {
  document.getElementById("balance").textContent = userBalance;
}

function showMessage(text, isError = true) {
  const messageBox = document.getElementById("message");
  messageBox.textContent = text;
  messageBox.style.color = isError ? "red" : "green";
}

function checkPin() {
  const pinInput = document.getElementById("pinInput").value;

  if (pinInput === correctPin) {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("atm-section").style.display = "block";
    showMessage("Login successful!", false);
  } else {
    showMessage("Incorrect PIN. Try again.");
  }
}

function depositMoney() {
  const depositInput = document.getElementById("depositAmount").value;
  const depositValue = Number(depositInput);

  if (depositValue > 0) {
    userBalance += depositValue;
    updateBalance();
    showMessage("Deposit successful!", false);
  } else {
    showMessage("Enter a valid deposit amount.");
  }

  document.getElementById("depositAmount").value = '';
}

function withdrawMoney() {
  const withdrawInput = document.getElementById("withdrawAmount").value;
  const withdrawValue = Number(withdrawInput);

  if (withdrawValue > userBalance) {
    showMessage("Not enough balance.");
  } else if (withdrawValue <= 0) {
    showMessage("Enter a valid amount.");
  } else {
    userBalance -= withdrawValue;
    updateBalance();
    showMessage("Withdrawal successful!", false);
  }

  document.getElementById("withdrawAmount").value = '';
}
