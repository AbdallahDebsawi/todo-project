let name = prompt("Please enter your name:");

let gender = prompt("Please enter your gender \n the gender should be either (male or female):");

let age = parseInt(prompt("Please enter your age:"));

if (age <= 0) {
    alert("Invalid age! Age must be a positive number.");
} else {
    let skipWelcome = confirm("Do you want to skip the welcoming message?");

    // if user click ok the value will be true and skip this code.
    if (!skipWelcome) {
        if (gender.toLowerCase() === "male") {
            alert("Welcome, Mr. " + name + "!");
        } else if (gender.toLowerCase() === "female") {
            alert("Welcome, Ms. " + name + "!");
        } else {
            alert("Welcome, " + name + "!");
        }
    }
}
