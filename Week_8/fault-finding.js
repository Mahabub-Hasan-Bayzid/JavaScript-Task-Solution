'use strict';

/* Task 1: Fix the Greeting Function  
Should return "Hello, [name]!".  
If no name is provided, return "Hello, guest!".  
*/

function greet(name) {
    return "Hello, " + (name || "guest"); // Fix: Use "guest" as default if no name provided
}

// Debug & Test
console.log(greet("Alice")); // Expected: "Hello, Alice!"
console.log(greet()); // Expected: "Hello, guest!"


/* Task 2: Fix the Price Calculation  
Should multiply `price` by `quantity`.  
If `quantity` is missing, default to `1`.  
*/

function calculatePrice(price, quantity = 1) { // Fix: Use default parameter for quantity
    return price * quantity; // Fix: Correct the operation to multiplication
}

// Debug & Test
console.log(calculatePrice(10, 2)); // Expected: 20
console.log(calculatePrice(5)); // Expected: 5


/* Task 3: Fix Even Number Checker  
Should return `true` if number is even, otherwise `false`.  
*/

function isEven(num) {
    return num % 2 === 0; // Fix: Use comparison operator (===) instead of assignment (=)
}

// Debug & Test
console.log(isEven(4)); // Expected: true
console.log(isEven(7)); // Expected: false


/* Task 4: Fix Loop Off-by-One Error  
Should log numbers from 1 to 5.  
*/

function countToFive() {
    for (let i = 1; i <= 5; i++) { // Fix: Correct the loop increment (i++ instead of i--)
        console.log(i);
    }
}

// Debug & Test
countToFive(); // Expected: 1, 2, 3, 4, 5


/* Task 5: Fix Array Indexing Issue  
Should return the last item of the array.  
*/

function getLastItem(arr) {
    return arr[arr.length - 1]; // Fix: Use arr.length - 1 to access the last item
}

// Debug & Test
console.log(getLastItem(["apple", "banana", "cherry"])); // Expected: "cherry"
console.log(getLastItem([1, 2, 3])); // Expected: 3


/* Task 6: Debug JSON Parsing  
Should parse a JSON string into an object.  
*/

function parseJson(jsonString) {
    try {
        return JSON.parse(jsonString); // Fix: Use JSON.parse to parse the JSON string
    } catch (error) {
        console.log("Error parsing JSON: ", error.message); // Add error handling for invalid JSON
        return null;
    }
}

// Debug & Test
console.log(parseJson('{"name": "Alice", "age": 25}')); // Expected: { name: "Alice", age: 25 }
console.log(parseJson("{ name: 'Alice', age: 25 }")); // Expected: Error (invalid JSON)


/* Task 7: Debug Object Property Access  
Should return the user’s email from an object.  
*/

function getEmail(user) {
    return user.email; // Fix: Correct property name to 'email' instead of 'mail'
}

// Debug & Test
console.log(getEmail({ name: "Alice", email: "alice@example.com" })); // Expected: "alice@example.com"


/* Task 8: Debug Nested Function Calls  
Should return the square of a number after doubling it.  
*/

function double(num) {
    return num * 2; // Fix: Correct the logic to multiply by 2
}

function square(num) {
    return num * num; // Fix: Correct the logic to square the number
}

function processNumber(num) {
    return double(square(num)); // Correct function logic
}

// Debug & Test
console.log(processNumber(3)); // Expected: 36
console.log(processNumber(4)); // Expected: 64


/* Task 9: Fix Sorting Algorithm  
Should return an array of numbers sorted in ascending order.  
*/

function sortNumbers(arr) {
    return arr.sort((a, b) => a - b); // Fix: Correct sorting logic to ascending order
}

// Debug & Test
console.log(sortNumbers([5, 3, 9, 1])); // Expected: [1, 3, 5, 9]
console.log(sortNumbers([20, 100, 3, 50])); // Expected: [3, 20, 50, 100]


/* Task 10: Debug Nested Data Processing  
Should return a list of full names from an array of user objects.  
*/

const users = [
    { firstName: "Alice", lastName: "Smith" },
    { firstName: "Bob", lastName: "Jones" },
];

function getFullNames(users) {
    return users.map(user => user.firstName + " " + user.lastName); // Fix: Correct property name to 'lastName'
}

// Debug & Test
console.log(getFullNames(users)); // Expected: ["Alice Smith", "Bob Jones"]


/* Task 11: Debug Object Data Transformation  
Should return an array of user names from a nested data structure.  
*/

const userData = {
    users: [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
    ],
};

function getUserNames(data) {
    return data.users.map(user => user.name); // Fix: Correct property name to 'users'
}

// Debug & Test
console.log(getUserNames(userData)); // Expected: ["Alice", "Bob"]


/* Task 13: Debug LocalStorage Data Saving  
Should save a user object to LocalStorage and retrieve it.  
*/

function saveUser(user) {
    localStorage.setItem("user", JSON.stringify(user)); // Fix: Store the object as a JSON string
}

function getUser() {
    return JSON.parse(localStorage.getItem("user")); // Fix: Parse the string from LocalStorage back to an object
}

// Debug & Test
saveUser({ name: "Alice", age: 25 });
console.log(getUser()); // Expected: { name: "Alice", age: 25 }
