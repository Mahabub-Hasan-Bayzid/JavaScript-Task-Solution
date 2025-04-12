/* Task 1
Store a string `"Hello, LocalStorage!"` in LocalStorage under the key `"message"`.
Retrieve it and log it to the console.
*/

// Your code here
localStorage.setItem('message', "Hello, LocalStorage!");
let message = localStorage.getItem('message');
console.log(message); 


/* Task 2
Create an object `userSettings` with:
- `theme` ("dark" or "light")
- `language` ("English", "Spanish", etc.)

Convert it to a JSON string and store it in LocalStorage.
Retrieve it, parse it, and log the `theme` property.
*/

// Your code here
let userSettings = {
  theme: "dark",
  language: "English"
};

localStorage.setItem('userSettings', JSON.stringify(userSettings));

let retrievedSettings = localStorage.getItem('userSettings');
let parsedSettings = JSON.parse(retrievedSettings);
console.log(parsedSettings.them); // Mistake: should be parsedSettings.theme


/* Task 3
Define an array `favoriteBooks` with at least three book objects (`title` and `author`).
Store the array in LocalStorage.
Retrieve and parse it, then log the titles of all books.
*/

// Your code here
let favoriteBooks = [
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
];

localStorage.setItem('favoriteBooks', JSON.stringify(favoriteBooks));

let retrievedBooks = localStorage.getItem('favoriteBooks');
let parsedBooks = JSON.parse(retrievedBooks);
parsedBooks.forEach(book => {
  console.log(book.title);
});


/* Task 4
Write a function `saveToLocalStorage(key, object)` that:
- Converts an object to JSON.
- Stores it in LocalStorage under the provided key.
Test it by saving an object and retrieving it.
*/

// Your code here
function saveToLocalStorage(key, object) {
  localStorage.setItem(key, JSON.stringify(object));
}

let person = { name: "John", age: 30 };
saveToLocalStorage("person", person);

let retrievedPerson = localStorage.getItem("person");
console.log(JSON.parse(retrievedPerson));


/* Task 5
Write a function `getFromLocalStorage(key)` that:
- Retrieves a value from LocalStorage.
- Parses it if it's JSON.
- Logs the retrieved value.
*/

// Your code here
function getFromLocalStorage(key) {
  let item = localStorage.getItem(key);
  try {
    return JSON.parse(item);
  } catch (error) {
    return item;
  }
}

console.log(getFromLocalStorage('person')); 


/* Task 6
Create an object `userProfile` with:
- `username`
- `email`
- `preferences` (an object with `theme` and `notifications`)

Save it to LocalStorage.
Retrieve and update the `theme` property to `"dark mode"`, then log the updated object.
*/

// Your code here
let userProfile = {
  username: "johndoe",
  email: "john@example.com",
  preferences: {
    theme: "light",
    notifications: true
  }
};

localStorage.setItem('userProfile', JSON.stringify(userProfile));

let retrievedProfile = JSON.parse(localStorage.getItem('userProfile'));
retrievedProfile.preferences.theme = "dark mode"; 
console.log(retrievedProfile); 


/* Task 7
Define an object `shoppingList` with an array `items` (strings).
Save it to LocalStorage.
Write a function `addItemToList(item)` that:
- Retrieves `shoppingList` from LocalStorage.
- Adds a new item.
- Saves the updated list back to LocalStorage.
- Logs the updated list.
*/

// Your code here
let shoppingList = {
  items: ["Milk", "Bread", "Eggs"]
};

localStorage.setItem('shoppingList', JSON.stringify(shoppingList));

function addItemToList(item) {
  let list = JSON.parse(localStorage.getItem('shoppingList'));
  list.items.push(item);
  localStorage.setItem('shoppingList', JSON.stringify(list));
  console.log(list.items); 
}

addItemToList("Butter"); 


/* Task 8
Create a counter object with:
- `count` (starting at 0)
Store it in LocalStorage.
Write a function `incrementCounter()` that:
- Retrieves the counter.
- Increases `count` by 1.
- Saves the updated counter.
- Logs the new count.
*/

// Your code here
let counter = {
  count: 0
};

localStorage.setItem('counter', JSON.stringify(counter));

function incrementCounter() {
  let retrievedCounter = JSON.parse(localStorage.getItem('counter'));
  retrievedCounter.count += 1; 
  localStorage.setItem('counter', JSON.stringify(retrievedCounter));
  console.log(retrievedCounter.count); 
}

incrementCounter(); 


/* Task 9
Create an array `tasks`, where each task is an object (`id`, `description`, `completed`).
Save it to LocalStorage.
Write a function `markTaskComplete(taskId)` that:
- Retrieves `tasks` from LocalStorage.
- Finds the task with the given ID and sets `completed` to `true`.
- Saves the updated tasks.
- Logs the updated list.
*/

// Your code here
let tasks = [
  { id: 1, description: "Do laundry", completed: false },
  { id: 2, description: "Buy groceries", completed: false },
  { id: 3, description: "Clean room", completed: false }
];

localStorage.setItem('tasks', JSON.stringify(tasks));

function markTaskComplete(taskId) {
  
}


/* Task 10
Write a function `clearLocalStorage()` that removes all data stored in LocalStorage.
Call it and confirm LocalStorage is empty.
*/

// Your code here
