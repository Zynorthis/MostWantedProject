/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application link to search button 


// Things to do:
//    - Create a new function that handles most of, if not all of, the sorting/filtering/mapping of the people data set
//    - Keep people global and have person be the variable that have information being mapped to it


// app is the function called to start the entire application link to search button 

var people = [];
people = data;


// app is the function called to start the entire application

function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
      // TODO: search by name
      let nameSearch = searchByName(people);
      displayPerson(nameSearch);
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


    let filteredPeople = people.filter(function(el){ 
          if(el.firstName === firstName && el.lastName === lastName){
          return el;
          }
        });  
      

}

  // TODO: What to do with filteredPeople? (array.map)



  let filteredPeople = people.filter(function(el) {         
    if(el.firstName.toLowerCase() === firstName.toLowerCase() && el.lastName.toLowerCase() === lastName.toLowerCase()) {
      return el;
    }
  });
  return filteredPeople[0];
  
  }

      

// alerts a list of people
function displayPeople(people){
    alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(people){

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
//for validation of Age 
function isAgeValid(input){
   if(isNaN(input)&&(input.length==1||input.length==2||input.length==3)){
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

// can be used in later stages 

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
}
//validation of Occupation
function occupation(input,personOccupation){



}

//Needs to be completed -K

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
function searchByAge(){
  let ageInput = promptFor("Please Enter the Age.", isAgeValid);

}