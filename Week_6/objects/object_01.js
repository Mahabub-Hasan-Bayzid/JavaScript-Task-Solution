/* Task 1
Create a JavaScript array named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`.
Add at least two book objects to this collection.
*/

// Your code here

const libraryBooks = [
        { title: "Become a Genius with JavaScript", author: "Bayzid", yearPublished: 2024 },
        { title: "Mastering Python in 30 Days", author: "James Oliver", yearPublished: 2021 },
        { title: "Web Development with React", author: "Emma Johnson", yearPublished: 2023 },
        { title: "The Art of Game Design", author: "Michael Smith", yearPublished: 2020 },
        { title: "Introduction to Cyber Security", author: "Sophia Lee", yearPublished: 2022 }
      
  ];


/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/

// Your code here


    console.log('Title: ',libraryBooks[0].title);
    let modifyYear = libraryBooks[1].yearPublished= "2028";
    console.log(libraryBooks[1]);
    



/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

// Your code here

libraryBooks[0].genres= ['VegaFry','Coding'];
console.log(libraryBooks[0]);
libraryBooks[0]["isAvailable"]= true;
console.log(libraryBooks[0]);

/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

// Your code here

function Book(title, author, yearPublished, genres) {
    this.title = title; // think of this as let title = title   
    this.author = author;      
    this.yearPublished = yearPublished; 
    this.genres = genres; 
  }

  const book1= new Book("REACT25K","STUDENTS",2025,"Foxes Forever");
  libraryBooks.push(book1);
  console.log(libraryBooks);
  
  

/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

// Your code here

 function createBook  (title, author, yearPublished, genres) {
    return {
      title: title,
      author: author,
      yearPublished: yearPublished,
      genres: genres
    };
  }
  
/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/

// Your code here

const convertJason = JSON.stringify(libraryBooks);
console.log('Jason - ',convertJason);

const convertJavaScript = JSON.parse(convertJason);
console.log('JavaScript - ',convertJavaScript);


/* Task 7
Create an array named `students`, where each student has a `name`, `age`, and `grade`.
Log the name of any student who has a grade higher than 90.
*/

// Your code here

const students= [
    {name:"Mahabub", age: 21, grade: 91},
    {name:"Hasan", age: 22, grade: 90},
    {name:"Bayzid", age: 23, grade: 89},
];
    students.forEach(student => {
        if (student.grade > 90) {
            console.log(`${student.name}- Grade is : ${student.grade}`);
            
        }
    });

/* Task 8
Define an object named `car` with properties for `brand`, `model`, `year`, and `isElectric`.
Use a function to check if the car is electric. If it is, log `"This car is eco-friendly!"`. Otherwise, log `"This car runs on fuel."`
*/

// Your code here
const cars = [
    { brand: "Toyota", model: "Camry", year: 2022, isElectric: false },
    { brand: "Tesla", model: "Model 3", year: 2024, isElectric: true },
    { brand: "BMW", model: "iX3", year: 2023, isElectric: true },
];

const checkEcoFriendly = ()=>{
    cars.forEach(car=> {
        if (car.isElectric == true) {
            console.log(car.brand ,"This car is eco-friendly!");
            
        } else {
            console.log("NAHHHH!");
            
        }
    })
}
checkEcoFriendly();

/* Task 9
Create a `movies` array where each movie is an object with properties for `title`, `director`, and `rating`.
Write a loop that logs all movie titles with a rating higher than 8.
*/

// Your code here
const movies = [
    { title: "Inception", director: "Christopher Nolan", rating: 9.0 },
    { title: "The Shawshank Redemption", director: "Frank Darabont", rating: 9.3 },
    { title: "Interstellar", director: "Christopher Nolan", rating: 8.6 }
  ];
  movies.forEach(movie => {
    if (movie.rating >= 8) {
        console.log(movie.title);
        
    } 
  });


/* Task 10
Write a function `findOldestCar` that takes an array of car objects and returns the car with the earliest `year`.
*/

// Your code here
const findOldestCar = ()=>{
    const oldestCar = cars[0];
    cars.forEach(car=>{
        if (car.year < oldestCar.year) {
            console.log(car.brand);
        }
    })
}

/* Task 11
Define a `userProfiles` array containing objects representing users.
Each user should have a `username`, `email`, and `isAdmin` property.
Write a function that filters and returns only the users who are administrators.
*/

// Your code here
const userProfiles = [
    { username: "Bayzid", email: "bayzid@gmail.com", isAdmin: true },
    { username: "JohnDoe", email: "john@gmail.com", isAdmin: false },
    { username: "Alice", email: "alice123@gmail.com", isAdmin: false },
    { username: "Admin007", email: "admin007@gmail.com", isAdmin: true },
    { username: "Emily", email: "emily56@gmail.com", isAdmin: false }
  ];
const userAdmin =()=>{
    let admin = userProfiles.filter(user=> user.isAdmin === true)
    console.log(admin);
    
}
userAdmin()
/* Task 12
Define an array named `orders`, where each order contains `orderId`, `customerName`, `totalAmount`, and `status` (either "pending" or "completed").
Write a function that returns only the completed orders.
*/

// Your code here
const orders = [
    { orderId: 101, customerName: "Bayzid", totalAmount: 150, status: "pending" },
    { orderId: 102, customerName: "John", totalAmount: 250, status: "completed" },
    { orderId: 103, customerName: "Alice", totalAmount: 300, status: "pending" },
    { orderId: 104, customerName: "Emily", totalAmount: 120, status: "completed" },
    { orderId: 105, customerName: "David", totalAmount: 500, status: "pending" }
  ];
  function completedOrder() {
    orders.forEach(order => {
        if (order.status === "completed") {
            console.log(order.customerName);
            
        }
    });
  }
  completedOrder();


/* Task 13
Create an object named `smartphone` with properties for `brand`, `model`, `batteryLife`, and `is5GEnabled`.
Write a function that logs `"This phone supports 5G!"` if `is5GEnabled` is `true`, otherwise logs `"This phone does not support 5G."`
*/

// Your code here
const smartphone = {
    brand: "Samsung",
    model: "Galaxy S90",
    batteryLife: "infinity hours",
    is5GEnabled: true,
  };
  function fiveG() {
    
        if (smartphone.is5GEnabled === true) {
            console.log("This phone supports 5G!");
            
        } else {
            console.log("This phone does not support 5G.");
            
        }
  }
  fiveG();

/* Task 14
Define an object named `fox` with properties `name`, `age`, and `habitat`.
Write a function that logs `"This fox is young"` if its age is under 3, `"This fox is an adult"` if 3 or older.
*/

// Your code here

const fox ={
    name: 'XYZ',
    age: 8,
    habitat: 'something',
}
function foxFunction() {
    
    
}


/* Task 15
Define an array named `employees`, where each employee has `name`, `position`, and `salary`.
Write a function that calculates the total salary of all employees in the company.
*/

// Your code here