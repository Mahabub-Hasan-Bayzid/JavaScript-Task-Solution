/* Task 1
Create a JavaScript object named `student` with properties:
- `name`
- `age`
- `grade`
Convert the object into a JSON string and log it to the console.
*/

// Your code here
const student= {
    name : "Mahabub",
    age : 21,
    grade : "A+",
}
const jsonString= JSON.stringify(student);
console.log(jsonString);


/* Task 2
Take the JSON string from Task 1 and convert it back into a JavaScript object.
Log the `name` property of the converted object.
*/

// Your code here

const backTOjavaScript = JSON.parse(jsonString);
console.log(backTOjavaScript);


/* Task 3
Create an array named `classroom`, where each element is an object representing a student.
Each student object should have properties for `name`, `age`, and `grade`.
Convert the array into a JSON string and log it to the console.
*/

// Your code here
const classroom = [
    { name: "Bayzid", age: 24, grade: "A" },
    { name: "Hasan", age: 23, grade: "B" },
    { name: "Mahbub", age: 25, grade: "A+" },
    { name: "John", age: 22, grade: "C" }
  ];
  
  const jsonClassroom = JSON.stringify(classroom);
  console.log(jsonClassroom);
  
  

/* Task 4
Take the JSON string from Task 3, convert it back into a JavaScript array,
and log the names of all students in the classroom.
*/

// Your code here
const backTOclassRoom = JSON.parse(jsonClassroom);
console.log(backTOclassRoom);


/* Task 5
Create an object named `weatherReport` with the following properties:
- `temperature`
- `humidity`
- `conditions` (e.g., "Sunny", "Rainy")

Convert the object into a JSON string and store it in a variable named `weatherJSON`.
Then, parse the JSON string back into an object and log the `conditions` property.
*/

// Your code here
const weatherReport = {
    temperature: 25,
    humidity: 60,
    conditions: "Sunny"
  };
  const weatherJSON= JSON.stringify(weatherReport);
  const backtojjs= JSON.parse(weatherJSON);
  console.log(backtojjs.conditions);
  
    

/* Task 6
Define an array named `movies`, where each movie has:
- `title`
- `director`
- `rating`

Convert this array into a JSON string, then parse it back into a JavaScript object.
Log all movie titles with a rating higher than 8.
*/

// Your code here
const movies = [
    { title: "Inception", director: "Christopher Nolan", rating: 9.0 },
    { title: "Interstellar", director: "Christopher Nolan", rating: 8.6 },
    { title: "The Shawshank Redemption", director: "Frank Darabont", rating: 9.3 },
    { title: "The Godfather", director: "Francis Ford Coppola", rating: 9.2 }
  ];
  

  function higherRating() {
    const jsonMovies = JSON.stringify(movies);
    const backtoMOvies= JSON.parse(jsonMovies);
    backtoMOvies.forEach(movie => {
        if (movie.rating >= 8) {
            console.log(movie.title);
            
        }
    });
  }
  higherRating();

/* Task 7
Write a function `filterHighRatedMovies(jsonString)` that:
- Takes a JSON string representing an array of movie objects.
- Converts it into a JavaScript array.
- Returns a new array containing only movies with a rating higher than 8.
*/

// Your code here
const movies2 = [
    { title: "Inception", director: "Christopher Nolan", rating: 9.0 },
    { title: "Interstellar", director: "Christopher Nolan", rating: 8.6 },
    { title: "The Shawshank Redemption", director: "Frank Darabont", rating: 9.3 },
    { title: "The Godfather", director: "Francis Ford Coppola", rating: 9.2 }
  ];
const jsonMovies = JSON.stringify(movies2);
function filterHighRatedMovies(jsonString) {
    const covertJS= JSON.parse(jsonString);
    covertJS.forEach(movie => {
        if (movie.rating >= 8) {
            console.log(movie.title);
            
        }
    });
}
filterHighRatedMovies(jsonMovies)


/* Task 8
Define an object named `shoppingCart` with:
- `items` (an array of product objects, each with `name` and `price`)
Convert `shoppingCart` into a JSON string and log it to the console.
*/

// Your code here
const shoppingCart = {
    items: [
      { name: "Laptop", price: 1200 },
      { name: "Headphones", price: 200 },
      { name: "Mouse", price: 50 },
      { name: "Keyboard", price: 100 }
    ]
  };
  const shoppingCartJson = JSON.stringify(shoppingCart);
  console.log(shoppingCartJson);
  
  

/* Task 9
Write a function `totalCartValue(jsonString)` that:
- Takes a JSON string representing a shopping cart.
- Converts it into a JavaScript object.
- Returns the total price of all items in the cart.
*/

// Your code here
const shoppingCart2 = [

      { name: "Laptop", price: 1200 },
      { name: "Headphones", price: 200 },
      { name: "Mouse", price: 50 },
      { name: "Keyboard", price: 100 },
]
const jsonShoppingCart = JSON.stringify(shoppingCart2)
function totalCartValue(jsonString) {
    const covertJS= JSON.parse(jsonString);
    covertJS.forEach(element => {
        console.log(element.price);
        
    });
}
totalCartValue(jsonShoppingCart);

/* Task 10
Create an object named `gameProgress` with:
- `level`
- `score`
- `livesRemaining`

Convert the object into a JSON string and log it.
Parse the JSON back into an object and update the `score` property by adding 100 points.
Log the updated object.
*/

// Your code here
const gameProgress = {
    level : 99,
    score : 99999,
    livesRemaining : 1,
}

const jsonGame = JSON.stringify(gameProgress);
const parseGame = json.parse(jsonGame);
parseGame.score += 100;
console.log(parseGame);



