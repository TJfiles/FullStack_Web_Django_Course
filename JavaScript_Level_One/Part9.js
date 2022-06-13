//Here are the four conditions you will check for the spy:

//The Spy has the same first letter of her First Name and Last Name
//The Spy is between the Age of 20 and 30 (exclusive of 20 and 30)
//The Spy is at least 170 centimeters tall.
//The Spy has a pet name that ends with the letter "y".

var name = new Boolean(false)
var age = new Boolean(false)
var height = new Boolean(false)
var pet = new Boolean(false)
var alltrue = 0

//Hello and Welcome. Please enter your first name:
//Please enter your Last Name:
//How old are you?
//How tall are you in centimeters?
//What is the name of your pet?
//Thank you so much for the information.

//Sorry, nothing to see here.
//Welcome Comrade! You've passed the Spy Test

//NAME CONDITION
var fname = prompt("Hello and Welcome. Please enter your first name:")
var lname = prompt("Please enter your Last Name:")
if (fname[0] === lname[0]){
    name = true
    alltrue++
}

//AGE CONDITION

var agee = prompt("How old are you?")
if (agee >= 20 && agee <= 30){
    age = true
    alltrue++
}

//HEIGHT CONDITION

var cm = prompt("How tall are you in centimeters?")
if (cm >= 170){
    height = true
    alltrue++
}

//PET CONDITION

var p = prompt("What is the name of your pet?")
if (p[p.length -1] === "y"){
    pet = true
    alltrue++
}


alert("Thank you so much for the information.")

if (alltrue === 4){
    console.log("Welcome Comrade! You've passed the Spy Test")
}
else{
    console.log("Sorry, nothing to see here.")
}



