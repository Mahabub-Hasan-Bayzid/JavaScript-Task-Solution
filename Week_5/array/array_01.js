/* 
Initial data:
let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];

1. Loop through the `teamMembers` array and log each name to the console.  
2. Remove the first member of the array.  
3. Remove the last member of the array.  
4. Add a new member "Alex" to the front of the array.  
5. Append a new member "Linda" to the end of the array.  
6. Create a new array that excludes the first two members, keeping the original array unchanged.  
7. Find the index of "Mike" in the array.  
8. Try to find the index of "Jake" (who is not in the array).  
9. Replace "Mike" with "Carol" and "Bruce" in the same position.  
10. Concatenate "Bob" to the array and create a new array, keeping the original array unchanged.  
11. Copy the entire `teamMembers` array using `slice` and store it in a new variable.  
12. Create a `newMembers` array with `"Tina"` and `"Dean"`, then merge it with `teamMembers` into a new array.  
13. Find all occurrences of "John" in the array and store their positions in a new array.  
14. Transform all names in the array to be uppercase while keeping the original array unchanged.  
15. Sort `teamMembers` in alphabetical order.  
16. Reverse the `teamMembers` array.  
17. Check if at least one member in the array is named "John".  
18. Check if all names in the array have more than three letters. 
*/

// Task 01
let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];

teamMembers.forEach(members => {
    console.log(members);
    
});

// Task 02
    teamMembers.shift();
    console.log('Removed First member: ',teamMembers);

// Task 03
    teamMembers.pop();
    console.log('Removed Last member: ',teamMembers);

// Task 04
    teamMembers.unshift('Alex');
    console.log('Added member in the begaining: ',teamMembers);

// Task 05
    teamMembers.push('Linda');
    console.log('Added member in the last: ',teamMembers);

// Task 06
    teamMembers.push('Linda');
    console.log('Added member in the last: ',teamMembers);

// Task 05
    teamMembers.push('Linda');
    console.log('Added member in the last: ',teamMembers);
// Task 05
    teamMembers.push('Linda');
    console.log('Added member in the last: ',teamMembers);
// Task 05
    teamMembers.push('Linda');
    console.log('Added member in the last: ',teamMembers);
// Task 05
    teamMembers.push('Linda');
    console.log('Added member in the last: ',teamMembers);
// Task 05
    teamMembers.push('Linda');
    console.log('Added member in the last: ',teamMembers);
// Task 05
    teamMembers.push('Linda');
    console.log('Added member in the last: ',teamMembers);
// Task 05
    teamMembers.push('Linda');
    console.log('Added member in the last: ',teamMembers);
// Task 05
    teamMembers.push('Linda');
    console.log('Added member in the last: ',teamMembers);
// Task 05
    teamMembers.push('Linda');
    console.log('Added member in the last: ',teamMembers);
