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
/* lab06 */

function askQuestion(question) {
    let answer = prompt(question + " (Yes/No)").trim().toLowerCase();
    if (answer === "" || (answer !== "yes" && answer !== "no")) {
        return "invalid";
    }
    return answer;
}

function gatherResponses() {
    let responses = [];
    let questions = [
        "Are you ready to do your tasks?",
        "Do you enjoy our website?",
        "Any recommendations?"
    ];

    questions.forEach(question => {
        let response = askQuestion(question);
        responses.push(response);
    });

    return responses;
}

function printResponses(responses) {
    console.log("User Responses:");
    responses.forEach((response, index) => {
        console.log("Question " + (index + 1) + ": " + response);
    });
}

function main() {
    let userResponses = gatherResponses();
    printResponses(userResponses);
}

main();
