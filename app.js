function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
      let nameSearch = searchByName(people);
      nameSearch = displayPerson(nameSearch, people);
      mainMenu(nameSearch, people);
      break;
    case 'no':
      let isSearching = true;
      while(isSearching){
        people = searchByTraits(people);
        isSearching = isDoneSearching();
      }
      break;
    default:
      alert("Invalid input. Please try again!");
      app(people);
    break;
  }
}

function mainMenu(person, people){

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
      displayPerson(person, people);
      mainMenu(person, people);
      break;
    case "family":
      displayFamily(person, people);
      mainMenu(person, people);
      break;
    case "descendants":
      displayDescend(person, people);
      mainMenu(person, people);
      break;
    case "restart":
      app(people);
      break;
    case "quit":
      return;
    default:
      return mainMenu(person, people);
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
  if (el === null){
    alert ("No person was found.");
    searchByName(people);
  }
  return filteredPeople[0];
}

// alerts a list of people
function displayPeople(people){
    alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person, people){

  var peoplePackage = spouseFilter(person, people);
  var cSpouseFN = peoplePackage[0];
  var cSpouseLN = peoplePackage[1];
  person.parents = peoplePackage[2];

  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Gender: " + person.gender + "\n";
  personInfo += "Date of Birth: " + person.dob + "\n";
  personInfo += "Height: " + person.height + " in." + "\n";
  personInfo += "Weight: " + person.weight + " lb." + "\n";
  personInfo += "Eye Color: " + person.eyeColor + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";
  personInfo += "Parents: " + person.parents + "\n";
  personInfo += "Current Spouse: " + cSpouseFN + " " + cSpouseLN + "\n";
  console.log("ID: " + person.id + "\n" + personInfo);
  alert(personInfo);
  return personInfo;
}

// function that prompts and validates user input
function promptFor(question, callback){
  do{
    var response = prompt(question).trim();
  } while(!response || !callback(response));
  return response;
}

function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

function chars(input){
  return true;
}

function isAgeValid(input){
   if(isNaN(input)||input.length>3||input>120){
    alert("Please Enter a Valid Age");
   }
   else{
  return true;
  }
}

// function age(input){
//  let dateFormat = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  
//}

//validation of gender
function gender(people,personGender){
  var personGender=promptFor("Please enter male or female."),chars;

  if(personGender.toLowerCase() !="male" && personGender.toLowerCase() !="female"){
  return false;
}
  alert("The person's gender is: ") +personGender;
  return true;
}  
//validation of height-M
function height(input, personHeight){
  do{
  var heightInput;
  var personHeight=promptFor("Please Enter Person's Height.");
  }
  while(height_ft=="" || height_in =="" || isNan(height_ft) || isNaN(height_in),numerical){
    alert("Error! Please enter height, must be numerical!");
    return false;
  }
}
//validation of weight-M
function weight(input, personWeight) {
  do{
  var weightInput;
  var personWeight=promptFor("Please Enter Person's Weight.");
  }
  while(weight =="" || isNan(weight),numerical){
    alert("Error! Please enter weight, must be numerical!");
      return false;
  }
}
//validation of eyecolor-M
function eyeColor(input, personEyeColor,peopleEyeColor){
  do{
  var eyeColorInput;
  var personEyeColor=promptFor("Please Choose Person's Eye Color",eyeColor);
  var colors= peopleEyeColor.map(function(el){
    if(el.eyeColor == personEyeColor)
    {
      return el;
    }
  });
  }
  while(personEyeColor.toLowerCase == null ){
    var personEyeColor ="";
    alert("Error! Enter A Valid Color!");
      return false;
    }
  }
//validation of Occupation -M
function occupation(input,personOccupation){
  do{
  var personOccupation;
  var personOccupation=promptFor("Please Enter Person's Occupation"),occupation;
  var occupation=personOccupation.map(function(el){
    if(el.occupation == personOccupation)
    {
      return el;
    }
  //"Nurse","Doctor","Assistant","Landscaper","Politician","Programmer","Student","Architect");
});
}
  while (personOccupation.toLowerCase == null){
    var personOccupation="";
    alert("Error! Enter Valid Occupation!");
      return false;
    }
  }
//validation of Spouse-M
function spouse(input,personCSpouse,people){
  do{
  var personCSpouse=promptFor("Please Enter Your Spouses Name."),numericId;
  var id=personCSpouse(function(el){
    });
}
    while (personCSpouse.toLowerCase == null){
    var personOccupation="";
      alert("Error! Enter vaild ID or Name!");
      return false;  
    }
  }


//Needs to be completed -K
// can be used in later stages 
function searchByMul(people){
    alert("Please Enter atleast 2 fields from the following");
    let personId = promptFor("Enter the ID", numericId);        
    let personAge = promptFor("Enter the Person's Age", age);

}

function searchByTraits(people){
  let traitsOption = prompt("What would you like to search by? Press '1' for Age, Press '2' for Gender, Press '3' for Occupation, Press '4' for Height, Press '5' for  Weight, Press '6' for Eye Color");
  let peopleFiltered = [];
  switch (traitsOption){
    case "1":
      peopleFiltered = searchByAge(people);
      return peopleFiltered;
    case "2" :
      peopleFiltered = searchByGender(people);
      return peopleFiltered;
    case "3" :
      peopleFiltered = searchByOccupation(people);
      return peopleFiltered;
    case "4" :
      peopleFiltered = searchByHeight(people);
      return peopleFiltered;
    case "5":
      peopleFiltered = searchByWeight(people);
      return peopleFiltered;
    case "6":
      peopleFiltered = searchByEyeColor(people);
      return peopleFiltered;
  }
}

function displayTraitSearchResults(peoplefiltered){
var traitSearchResults 
var

}
function searchByAge(people){
  let ageInput = promptFor("Please Enter the Age.", isAgeValid);
  people = dobToAge(ageInput, people);
}

function dobToAge(ageInput, people){
  var ageInput;
  var semiFiltered = [];
  var todaysDate = new Date();
  var todaysYear = todaysDate.getFullYear();
  var todaysMonth = todaysDate.getMonth() + 1;
  var todaysDay = todaysDate.getDate() + 1;

  semiFiltered = people.map(function(person){
    var dobArray = person.dob.split("/");

    for (var i = 0; i < people.length; i++){
      var fAge = todaysYear - dobArray[2];
        if (dobArray[0] > todaysMonth || dobArray[1] > todaysDay){
          fAge = fAge + 1;
        }
      people[i].age = fAge;
    }
  });
  return people;
}

function disaplayFamily(person, people){

  var peoplePackage = spouseFilter(person, people);
  var cSpouseFN = peoplePackage[0];
  var cSpouseLN = peoplePackage[1];
  var filteredSiblings = [];
  if (person.parents.length != 0){
    filteredSiblings = people.filter(function(el){
      if(el.id === person.parents){
      return el;
      }
    });
  }
  else{
    person.parents = "N/A";
  }

  var personFamily = "Current Spouse: " + cSpouseFN + cSpouseLN + "\n";
  personFamily += "Parents: " + person.parents + "\n";
  for (var n = 0; n < filteredSiblings.length; n++){
    personFamily += "Sibling: " + filteredSiblings[n].firstName + " " + filteredSiblings[n].lastName + "\n";
  }
  personFamily += "Children: " + "\n";
  console.log("id: " + person.id + personFamily);
  alert(personFamily);
  return personFamily;
}

function displayDecend(person, people){

}

function getChildren(person, people){
  var descendants = [];
  children = people.filter(function(el){
  });

  for(var i = 0; i < descendants.length; i++){
    return descendants.concat(getChildren(descendants[i], people));
  }
  return descendants;
}

function spouseFilter(person, people){
  var peoplePackage = [];
  var id = person.currentSpouse;
  var filteredSpouse = people.filter(function(el){
    if(el.id === id){
    return el;
    }
  });
  if (cSpouseFN == null || cSpouseLN == null) {
    var cSpouseFN = "N/A";
    var cSpouseLN = "";
  }
  else{
    cSpouseFN = filteredSpouse[0].firstName;
    cSpouseLN = filteredSpouse[0].lastName;
  }
  if (person.parents.length == 0){
      person.parents = "N/A";
  }
  peoplePackage.push(cSpouseFN, cSpouseLN, persons.parents);
  return peoplePackage;

function searchByOccupation(people){
    var userInput = prompt("Enter occupation.");
    let filteredPeople = people.filter(function(el){
      if(el.occupation.toLowerCase === userInput.toLowerCase){
        return true;
      }
    });
  return filteredPeople;
}

function searchByHeight(input, people){
  var heightInput = parseInt(prompt("Enter the person's height."));
//   var personHeight = (height_ft=="" || height_in =="" || isNan(height_ft) || (isNaN(height_in),numerical){
//   if (heightInput === userInput){
//     return true;
//   }
// });
  let filteredPeople = people.filter(function(el){
      if(el.height === heightInput){
        return true;
      }
    });
  return filteredPeople;
}

function searchByWeight(input, people){
  var weightInput = parseInt(prompt("Enter the person's weight."));
  // var personWeight == "" || (isNan(weight),numerical{
  // if(weightInput === userInput){
  //   return true;
  //   }
  // });
  let filteredPeople = people.filter(function(el){
    if(el.weight === userInput){
      return true;
      }
  });
  return filteredPeople;
}


function searchByGender(people){
  var userInput =  prompt("Enter male or female.");
  let filteredPeople = people.filter(function(el){
    if(el.gender.toLowerCase === userInput){
      return true;
      }
  });
  return filteredPeople; 
}

function searchByEyeColor(people){
  var userInput = prompt("Enter Eye Color.");
  let filteredPeople = people.filter(function(el){
    if(el.eyeColor.toLowerCase === userInput){
      return true;
    }
  });
      return filteredPeople;
}

function isDoneSearching(){
  var userInput = prompt("Are you done with your search?");
  if  (userInput === "yes"){
    return false;
  }
  else {
    return true;
  }
}