/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// Group discussion topic: Having the ages be added the "people" array at the start of the script
// then referrenced later in the other functions when age is needed to be looked up.

// app is the function called to start the entire application link to search button 

function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
      // TODO: search by name
      let nameSearch = searchByName(people);
      displayPerson(nameSearch, people);
      break;
    case 'no':
      let traitSearch = searchByTraits();
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
    if(el.firstName.toLowerCase() === firstName.toLowerCase() && el.lastName.toLowerCase() === lastName.toLowerCase()) {
      return el;
    }
  });
  return filteredPeople[0];

  return filteredGender[0];
  
  
  }

// alerts a list of people
function displayPeople(people){
    alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person, people){

  var id = person.currentSpouse;
  var filteredSpouce = people.filter(function(el){
    if(el.id === id){
    return el;
    }
  });
  if (cSpouseFN == null || cSpouseLN == null) {
    var cSpouseFN = "N/A";
    var cSpouseLN = "";
  }
  else{
    cSpouseFN = filteredSpouce[0].firstName;
    cSpouseLN = filteredSpouce[0].lastName;
    }
  if (person.parents.length == 0){
      person.parents = "N/A";
  }

  personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Gender: " + person.gender + "\n";
  personInfo += "Date of Birth: " + person.dob + "\n";
  personInfo += "Height: " + person.height + "\n";
  personInfo += "Weight: " + person.weight + "\n";
  personInfo += "Eye Color: " + person.eyeColor + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";
  personInfo += "Parents: " + person.parents + "\n";
  personInfo += "Current Spouse: " + cSpouseFN + " " + cSpouseLN + "\n";
  console.log("ID: " + person.id + "\n" + personInfo);
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
//for validation of Age 
function isAgeValid(input){
   if(isNaN(input)||input.length>3||input>120){
    alert("Please Enter a Valid Age");
   }
   else{
  return true;
  }
}

//for Date of Birth Validation in Format xx/xx/xxxx
function age(input){
  let dateFormat = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  
}

//for validation of gender -M
function gender(input, personGender){
  let genderM=promptFor("Please Enter Gender" );
  let genderF=promptFor("Please Enter Gender");
  if (genderM.checked==false && genderF.checked==false)
      { 
        alert("You must select Male or Female");
          return false;
      }
}
//for validation of height-M
function height(input, personHeight){
  let personHeight=promptFor("Please Enter Person's Height.",height);
  if(height_ft=="" || height_in =="" || isNan(height_ft) || isNaN(height_in)){
  alert("Please enter height, must be numerical!");
        return false;
  }
}
//validation of weight-M
function weight(input, personWeight) {
  let personWeight=promptFor("Please Enter Person's Weight.",weight);
  if(weight =="" || isNan(weight)){
    alert ("Please enter weight, must be numerical!");
      return false;
  }
}
//validation of eyecolor-M
function eyeColor(input, personEyeColor,peopleEyeColor){
  let personEyeColor=promptFor("Please Choose Person's Eye Color",eyeColor);
  let colors= eyeColor["Black","Brown","Green","Blue","Hazel"];

  if (personEyeColor =="" () ){
    alert("Please Enter A Valid Color!");
      return false;
  }
}
//validation of Occupation
function occupation(input,personOccupation){



}

//Needs to be completed -K
// can be used in later stages 
function searchByMul(people){
    alert("Please Enter atleast 2 fields from the following")
    let personId = promptFor("Enter the ID", numericId);        
    let personAge = promptFor("Enter the Person's Age", age);
    let personSpouse = prompt("Enter Spouse's Full Name: ", firstName, lastName)
    let personEyeColor = promptFor("Please Choose Person's Eye Color");
    let personOcc = prompt("Enter person's Occupation");

}

// search by individual trait
function searchByTraits(people){
  let traitsOption = prompt("How Do you want to search by? Press '1' for Age, Press '2' for Gender, Press '3' for Eye Color, Press '4' for Height, Press '5' for  Spouse Name");
  switch (traitsOption){
    case "1":
      searchByAge();
      //filter person by Age
    case "2" :
      //filter person by Gender
    case "3" :
      // filter person by Occupation
    case "4" :
      // filter person by Height
    case "5":
      // filter person by spouse name
    
  }

}
function searchByAge(people){
  let ageInput = promptFor("Please Enter the Age.", isAgeValid);
  dobToAge(ageInput, people);

}

function dobToAge(ageInput, people){ // To be continued...
  var ageInput;
  var semiFiltered = [];
  var todaysDate = new Date();
  var todaysYear = todaysDate.getFullYear();
  var todaysMonth = todaysDate.getMonth() + 1;
  var todaysDay = todaysDate.getDay() + 1;

  semiFiltered = people.map(function(person){
      let dobArray = person.dob.split("/");
      var fMonth = todaysMonth - dobArray[0];
      var fday = todaysDay - dobArray[1];
      var fYear = todaysYear - dobArray[2];
      //person.age =

  });

  // return totalAge;
}