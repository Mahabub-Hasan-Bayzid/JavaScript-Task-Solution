/* 
Write a function named calculateAverageSpeed:
- Continuously prompt the user to input distance (in kilometers) and time (in hours).
- After each input, calculate and log the average speed in the console.
- Stop asking for inputs when the user enters 0 for distance. 
*/

const calculateAverageSpeed = ()=>{
    while (true) {
        let distance = prompt("Please Enter the distance....");
        if (distance === 0) {
            console.log("Distance Can´t be 0");
            break;
        }
        let time = prompt("Please Enter the Time....");
        if (time <= 0) {
            console.log("Time Can´t be 0");
            break;
        }
        let averageSpeed = distance/time;
        console.log("The Average Speed is ",averageSpeed)

    }
}
calculateAverageSpeed();