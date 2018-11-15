/*
Build all of your functions for displaying and gathering information below (GUI).
*/

<<<<<<< HEAD
// app is the function called to start the entire application link to search button 
=======
var people = [];
people = data;

// app is the function called to start the entire application
>>>>>>> b3f28c2e2daf9bf0fdc09ecb68c22b8c07fea376
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
      // TODO: search by name
      let nameSearch = searchByName();
      break;
    case 'no':
      let traitSearch = searchByMul();

      break;
    default:
      alert("Invalid input. Please try again!");
      app(people); // restart app
    break;
  }
}

// Menu function to call once you find who you are looking for ,call app before if statement from html 
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
      // TODO: get person's info
      break;
    case "family":
      // TODO: get person's family
      break;
    case "descendants":
      // TODO: get person's descendants
      break;
    case "restart":
      app(people); // restart
      break;
    case "quit":
      return; // stop execution
    default:
      return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);

  let filteredPeople = people.filter(function(el) { 
  alert(filteredPeople.map(function(people) {        
    if(el.firstName === firstName && el.lastName === lastName) {
      return el;
    }
<<<<<<< HEAD
   }  
  })
=======
  });

  // TODO: What to do with filteredPeople? (array.map)
>>>>>>> b3f28c2e2daf9bf0fdc09ecb68c22b8c07fea376

  // TODO: What to do with filteredPeople? (array.map)
      
}

// alerts a list of people
function displayPeople(people){
    alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){

  var personInfo = prompt("DEV TEST: Enter in ID");

  personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Gender: " + person.gender + "\n";
  personInfo += "Date of Birth: " + person.dateOfBirth + "\n";
  personInfo += "Height: " + person.height + "\n";
  personInfo += "Weight: " + person.weight + "\n";
  personInfo += "Eye Color: " + person.eyeColor + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";
  personInfo += "Parents: " + person.parents + "\n";
  personInfo += "Current Spouse: " + person.cSpouse + "\n";
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, callback){
  do{
    var response = prompt(question).trim();
  } while(!response || !callback(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}

//Needs to be completed -Kanwar
function searchByMul(people){
    let personId = prompt("Enter ID");
    let personDob = prompt("Enter Date of Birth");
    let personEyeColor = prompt("Enter person's Eye Color");
    let personOcc = prompt("Enter person's Occupation")

}

  
