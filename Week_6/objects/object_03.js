/* Task 1
Create a constructor function `User` that takes `username` and `email` as parameters.
It should create an object with these properties and a method `showInfo` that logs user details.
Instantiate a new user and call `showInfo()`.
*/
function User(username, email) {
    this.username = username;
    this.email = email;
    this.showInfo = function () {
        console.log("Username: " + this.username + ", Email: " + this.email);
    };
}

const user1 = new User("johnDoe", "john@example.com");
user1.showInfo();

/* Task 2
Modify Task 1: Use an ES6 `class` instead of a constructor function to define `User`.
Add a method `changeEmail(newEmail)` that updates the user's email.
*/
class UserClass {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    showInfo() {
        console.log("Username: " + this.username + ", Email: " + this.email);
    }

    changeEmail(newEmail) {
        this.email = newEmail;
    }
}

const user2 = new UserClass("janeDoe", "jane@example.com");
user2.changeEmail("janeNew@example.com");
user2.showInfo();

/* Task 3
Create an object `theme` with properties `name` (light or dark) and `isActive`.
Add a button in HTML. When clicked, toggle the theme between light and dark, updating the `isActive` property.
*/
const theme = {
    name: "light",
    isActive: true
};

document.getElementById("toggleThemeBtn").addEventListener("click", function () {
    if (theme.name === "light") {
        theme.name = "dark";
        theme.isActive = false;
    } else {
        theme.name = "light";
        theme.isActive = true;
    }
    console.log("Theme is now:", theme.name);
});

/* Task 4
Create an object `counter` with a `value` property.
Add two buttons in HTML: one to increase `value`, another to decrease it.
Display `value` in an HTML element and update it dynamically when buttons are clicked.
*/
const counter = {
    value: 0
};

const display = document.getElementById("counterDisplay");
const incBtn = document.getElementById("incrementBtn");
const decBtn = document.getElementById("decrementBtn");

function updateCounter() {
    display.textContent = counter.value;
}

incBtn.addEventListener("click", function () {
    counter.value++;
    updateCounter();
});

decBtn.addEventListener("click", function () {
    counter.value--;
    updateCounter();
});

updateCounter();

/* Task 5
Create an object `product` with `name`, `price`, and `quantity`.
Add an input field in HTML where the user can enter a quantity to purchase.
Update the `quantity` property and display the total price dynamically.
*/
const product = {
    name: "Pen",
    price: 2,
    quantity: 0
};

document.getElementById("quantityInput").addEventListener("input", function (e) {
    product.quantity = parseInt(e.target.value);
    const totalPrice = product.price * product.quantity;
    document.getElementById("totalPriceDisplay").textContent = "Total: $" + totalPrice;
});

/* Task 6
Define a `Task` constructor that takes `title`, `description`, and `completed`.
Add a button in HTML that, when clicked, adds a new `Task` object to a `tasks` array and displays it on the page.
*/
function Task(title, description, completed) {
    this.title = title;
    this.description = description;
    this.completed = completed;
}

const tasks = [];

document.getElementById("addTaskBtn").addEventListener("click", function () {
    const newTask = new Task("Learn JS", "Practice constructors", false);
    tasks.push(newTask);

    const list = document.getElementById("taskList");
    const item = document.createElement("li");
    item.textContent = newTask.title + ": " + newTask.description;
    list.appendChild(item);
});

/* Task 7
Create an object `weatherApp` with a method `fetchWeather(city)`.
Use `fetch` to get weather data from an API and display it in an HTML element.
(API: OpenWeather or any free weather API)
*/
const weatherApp = {
    fetchWeather: function (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`)
            .then(response => response.json())
            .then(data => {
                document.getElementById("weatherDisplay").textContent = "Temp: " + data.main.temp;
            })
            .catch(error => {
                console.log("Error fetching weather:", error);
            });
    }
};

weatherApp.fetchWeather("Helsinki");

/* Task 8
Create a constructor function `Car` that takes `brand`, `model`, and `year`.
In the constructor, add a method `age()` that calculates the car’s age.
Instantiate a new `Car` and display its age on the webpage.
*/
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.age = function () {
        return 2025 - this.year;
    };
}

const myCar = new Car("Toyota", "Corolla", 2010);
document.getElementById("carAgeDisplay").textContent = "Car age: " + myCar.age();

/* Task 9
Create an array `users` where each user has `name` and `score`.
Add a button in HTML that sorts the users by score in descending order and updates the displayed list.
*/
const users = [
    { name: "Ava", score: 85 },
    { name: "Ben", score: 92 },
    { name: "Cara", score: 78 }
];

document.getElementById("sortUsersBtn").addEventListener("click", function () {
    users.sort(function (a, b) {
        return b.score - a.score;
    });

    const userList = document.getElementById("userList");
    userList.innerHTML = "";

    users.forEach(function (user) {
        const li = document.createElement("li");
        li.textContent = user.name + ": " + user.scores; 
        userList.appendChild(li);
    });
});

/* Task 10
Create an object `shoppingList` with an array `items`.
Add an input field and button to allow users to add new items to `items` and display the updated list.
*/
const shoppingList = {
    items: []
};

document.getElementById("addItemBtn").addEventListener("click", function () {
    const item = document.getElementById("itemInput").value;
    shoppingList.items.push(item);

    const list = document.getElementById("shoppingList");
    list.innerHTML = "";
    shoppingList.items.forEach(function (itm) {
        const li = document.createElement("li");
        li.textContent = itm;
        list.appendChild(li);
    });
});

/* Task 11
Create an array of `posts` where each post has `title`, `content`, and `likes`.
Add a "Like" button next to each post that increases the `likes` count and updates the display.
*/
const posts = [
    { title: "Post 1", content: "Hello world!", likes: 0 },
    { title: "Post 2", content: "Learning JS", likes: 0 }
];

const postContainer = document.getElementById("postList");
posts.forEach(function (post, index) {
    const div = document.createElement("div");
    div.innerHTML = `<h4>${post.title}</h4><p>${post.content}</p><p>Likes: <span id="like${index}">${post.likes}</span></p>
    <button onclick="likePost(${index})">Like</button>`;
    postContainer.appendChild(div);
});

function likePost(index) {
    posts[index].likes++;
    document.getElementById("like" + index).textContent = posts[index].likes;
}

/* Task 12
Create a constructor function `Employee` with `name`, `position`, and `salary`.
Add a method `increaseSalary(percent)` that increases the salary by a given percentage.
Create an employee and increase their salary dynamically.
*/
function Employee(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
    this.increaseSalary = function (percent) {
        this.salary += (this.salary * percent) / 100;
    };
}

const emp1 = new Employee("Sara", "Manager", 5000);
emp1.increaseSalary(10);
console.log(emp1.salary);

/* Task 13
Create an object `timer` with `seconds` and a method `start()` that counts seconds up.
Display the timer in an HTML element and update it every second.
*/
const timer = {
    seconds: 0,
    start: function () {
        setInterval(() => {
            this.seconds++;
            document.getElementById("timerDisplay").textContent = this.seconds + "s";
        }, 1000);
    }
};

timer.start();

/* Task 14
Create a constructor function `Book` that takes `title`, `author`, and `pages`.
Create a simple book library that allows users to add books via an HTML form and displays them dynamically.
*/
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

const books = [];

document.getElementById("addBookBtn").addEventListener("click", function () {
    const title = document.getElementById("bookTitle").value;
    const author = document.getElementById("bookAuthor").value;
    const pages = document.getElementById("bookPages").value;

    const newBook = new Book(title, author, pages);
    books.push(newBook);

    const bookList = document.getElementById("bookList");
    const li = document.createElement("li");
    li.textContent = `${title} by ${author} - ${pages} pages`;
    bookList.appendChild(li);
});

/* Task 15
Create an object `foxTracker` with a `foxes` array.
Add an input field and button that allows users to add new foxes (with name and location) to the array.
Display the list of foxes dynamically in an HTML element.
*/
const foxTracker = {
    foxes: []
};

document.getElementById("addFoxBtn").addEventListener("click", function () {
    const name = document.getElementById("foxName").value;
    const location = document.getElementById("foxLocation").value;
    foxTracker.foxes.push({ name: name, location: location });

    const list = document.getElementById("foxList");
    list.innerHTML = "";
    foxTracker.foxes.forEach(function (fox) {
        const li = document.createElement("li");
        li.textContent = `${fox.name} spotted at ${fox.location}`;
        list.appendChild(li);
    });
});
