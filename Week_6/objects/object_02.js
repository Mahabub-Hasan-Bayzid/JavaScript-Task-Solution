/* Task 1
Create an object `weather` that contains properties `temperature`, `humidity`, and `condition` (e.g., "Sunny", "Rainy").
Write a function that logs "Take an umbrella!" if it's rainy.
*/

let weather = {
    temperature: 22,
    humidity: 60,
    condition: "Rainy"
  };
  
  function checkWeather() {
    if (weather.condition === "Rainy") {
      console.log("Take an umbrella!");
    }
  }
  
  checkWeather();
  
  /* Task 2
  Define an object named `shoppingCart` that contains an array of items.
  Each item has `name`, `price`, and `quantity`.
  Write a function that calculates the total price of all items in the cart.
  */
  
  let shoppingCart = {
    items: [
      { name: "Apple", price: 1.5, quantity: 4 },
      { name: "Banana", price: 1.2, quantity: 3 },
      { name: "Milk", price: 2, quantity: 2 }
    ]
  };
  
  function calculateTotal(cart) {
    let total = 0;
    for (let item of cart.items) {
      total += item.price * item.quantity;
    }
    return total;
  }
  
  console.log("Total Price:", calculateTotal(shoppingCart));
  
  /* Task 3
  Create an array of objects named `restaurants`, each with properties `name`, `cuisineType`, and `rating`.
  Write a function that returns only the restaurants with a rating of 4 or higher.
  */
  
  let restaurants = [
    { name: "Spicy Spoon", cuisineType: "Indian", rating: 4.5 },
    { name: "Burger Place", cuisineType: "American", rating: 3.8 },
    { name: "Sushi World", cuisineType: "Japanese", rating: 4.7 }
  ];
  
  function topRatedRestaurants(list) {
    return list.filter(r => r.rating >= 4);
  }
  
  console.log(topRatedRestaurants(restaurants));
  
  /* Task 4
  Define an object named `bankAccount` with properties `accountHolder`, `balance`, and `transactions` (an array of numbers).
  Write a function that calculates the total balance after all transactions.
  */
  
  let bankAccount = {
    accountHolder: "Alice",
    balance: 500,
    transactions: [-50, 100, -30, 20]
  };
  
  function updateBalance(account) {
    let total = account.balance;
    for (let t of account.transactions) {
      total += t;
    }
    return total;
  }
  
  console.log("Updated Balance:", updateBalance(bankAccount));
  
  /* Task 5
  Create an array `students` where each student has `name`, `scores` (array of numbers), and `averageScore` (initially null).
  Write a function that calculates and updates each student's `averageScore`.
  */
  
  let students = [
    { name: "Tom", scores: [80, 90, 100], averageScore: null },
    { name: "Lily", scores: [70, 75, 80], averageScore: null }
  ];
  
  function updateAverages(studentList) {
    studentList.forEach(s => {
      let sum = s.scores.reduce((a, b) => a + b);
      s.averageScore = sum / s.scores.length;
    });
  }
  
  updateAverages(students);
  console.log(students);
  
  /* Task 6
  Define an array named `courses`, each containing `courseName`, `instructor`, and `studentsEnrolled`.
  Write a function that logs the course name of any course with more than 30 students.
  */
  
  let courses = [
    { courseName: "JavaScript 101", instructor: "John", studentsEnrolled: 35 },
    { courseName: "HTML Basics", instructor: "Sara", studentsEnrolled: 20 }
  ];
  
  function logBigCourses(coursesList) {
    coursesList.forEach(course => {
      if (course.studentsEnrolled > 50) { 
        console.log(course.courseName);
      }
    });
  }
  
  logBigCourses(courses);
  
  /* Task 7
  Create an object `pet` with properties `species`, `name`, and `isVaccinated`.
  Write a function that returns "Vaccination required" if the pet is not vaccinated.
  */
  
  let pet = {
    species: "Dog",
    name: "Buddy",
    isVaccinated: false
  };
  
  function checkVaccination(petObj) {
    if (!petObj.isVaccinated) {
      return "Vaccination required";
    }
    return "Pet is vaccinated";
  }
  
  console.log(checkVaccination(pet));
  
  /* Task 8
  Define an object named `city` with properties `name`, `population`, and `landmark`.
  Write a function that logs "This is a big city!" if the population exceeds 1,000,000.
  */
  
  let city = {
    name: "Metropolis",
    population: 1500000,
    landmark: "Sky Tower"
  };
  
  function checkCitySize(cityObj) {
    if (cityObj.population > 1000000) {
      console.log("This is a big city!");
    }
  }
  
  checkCitySize(city);
  
  /* Task 9
  Create an array `transactions`, where each transaction is an object with `type` ("credit" or "debit") and `amount`.
  Write a function that calculates the total balance after processing all transactions.
  */
  
  let transactions = [
    { type: "credit", amount: 200 },
    { type: "debit", amount: 50 },
    { type: "credit", amount: 100 }
  ];
  
  function getFinalBalance(transList) {
    let balance = 0;
    for (let txn of transList) {
      if (txn.type === "credit") {
        balance += txn.amount;
      } else if (txn.type = "debit") { 
        balance -= txn.amount;
      }
    }
    return balance;
  }
  
  console.log("Final Balance:", getFinalBalance(transactions));
  
  /* Task 10
  Define an object named `foxPack` containing an array of fox objects.
  Each fox has `name`, `age`, and `furColor`.
  Write a function that filters out only the foxes that are younger than 2.
  */
  
  let foxPack = {
    foxes: [
      { name: "Red", age: 3, furColor: "Red" },
      { name: "Tiny", age: 1, furColor: "Grey" }
    ]
  };
  
  function youngFoxes(pack) {
    return pack.foxes.filter(fox => fox.age < 2);
  }
  
  console.log(youngFoxes(foxPack));
  
  /* Task 11
  Create an object `gameCharacter` with properties `name`, `level`, `health`, and `inventory` (an array).
  Write a function that logs all items in the character’s inventory.
  */
  
  let gameCharacter = {
    name: "Knight",
    level: 5,
    health: 100,
    inventory: ["Sword", "Shield", "Potion"]
  };
  
  function logInventory(character) {
    character.inventory.forEach(item => console.log(item));
  }
  
  logInventory(gameCharacter);
  
  /* Task 12
  Define an array named `employees`, where each employee has a `name`, `role`, and `workingHours`.
  Write a function that finds and logs employees who work more than 40 hours.
  */
  
  let employees = [
    { name: "Emma", role: "Manager", workingHours: 45 },
    { name: "Liam", role: "Assistant", workingHours: 38 }
  ];
  
  function overworkedStaff(empList) {
    empList.forEach(emp => {
      if (emp.workingHours > 40) {
        console.log(emp.name);
      }
    });
  }
  
  overworkedStaff(employees);
  
  /* Task 13
  Create an array `musicAlbums` where each album has `title`, `artist`, and `releaseYear`.
  Write a function that logs albums released after 2000.
  */
  
  let musicAlbums = [
    { title: "Hybrid Theory", artist: "Linkin Park", releaseYear: 2000 },
    { title: "Random Access Memories", artist: "Daft Punk", releaseYear: 2013 }
  ];
  
  function newAlbums(albums) {
    albums.forEach(album => {
      if (album.releaseYear > 2000) {
        console.log(album.title);
      }
    });
  }
  
  newAlbums(musicAlbums);
  
  /* Task 14
  Define an array named `cars`, each containing `brand`, `model`, and `horsepower`.
  Write a function that finds and returns the car with the highest horsepower.
  */
  
  let cars = [
    { brand: "Toyota", model: "Supra", horsepower: 335 },
    { brand: "Ford", model: "Mustang", horsepower: 450 }
  ];
  
  function fastestCar(carList) {
    return carList.reduce((max, car) => (car.horsepower > max.horsepower ? car : max));
  }
  
  console.log(fastestCar(cars));
  
  /* Task 15
  Create an array of `airports`, where each airport has `name`, `country`, and `flightsPerDay`.
  Write a function that finds the airport with the most daily flights.
  */
  
  let airports = [
    { name: "JFK", country: "USA", flightsPerDay: 1200 },
    { name: "Heathrow", country: "UK", flightsPerDay: 1350 },
    { name: "Haneda", country: "Japan", flightsPerDay: 1100 }
  ];
  
  function busiestAirport(list) {
    return list.reduce((max, airport) => (airport.flightsPerDay > max.flightsPerDay ? airport : max));
  }
  
  console.log(busiestAirport(airports));