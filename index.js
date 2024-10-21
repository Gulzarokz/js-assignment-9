// chapter No 21 Changing case;

// toLowercase();

// var city = "PESHAWAR";
// var smallCity = city.toLowerCase();
// console.log(city);
// console.log(smallCity);

// var city = "PESHAWAR";
// console.log(city.toLowerCase());

// var city = "pEShawAr";
// var smallCity = city.toLowerCase();
// console.log(city);
// console.log(smallCity);


// toUpperCase();

// var city = "peshwar";
// const  capitilizedCity = city.toUpperCase();
// // console.log(city);
// // console.log(capitilizedCity);
// console.log(city.toUpperCase());

// // toUpperCase
// var city = "pEshAwaR";
// let capitilizedCity = city.toUpperCase();
// console.log(city);
// console.log(capitilizedCity);


// const eligibleUniversities = [
//     "pehawar",
//     "islamia College",
//     "agriculture",
//     "nust",
//     "kust",
//     "cecos",
//     "cityuniversity",
//     "sarhad",
// ];

// const studentsUniversities = prompt("Enter your unverstiy name please").toLowerCase();
// let isEligible = false;

// for (let i = 0; i < eligibleUniversities.length;  i++){
//     if(studentsUniversities === eligibleUniversities[i]){
//      isEligible = true;
//      console.log("your are eligible");
     
//      break;

//     }

// }
//     if(!isEligible){
//         console.log("your are not eligible");
    
        
//     }
    





// REAL WORLD EXAMPLE
// latptop scheme
// var eligibleUniversities = [
//     "sarhad",
//     "iqra",
//     "islamia",
//     "city",
//     "ims",
//     "cecos",
//     "nust",
//     "agriculture",
// ];
// var studentUniversity = prompt("Please enter your university name");
// var isEligible = false;

// for (var i = 0; i < eligibleUniversities.length; i++) {
//     if (studentUniversity.toLocaleLowerCase() === eligibleUniversities[i]) {
//         isEligible = true;
//         break;
//     }
// }

// if (isEligible) {
//     alert("Eligible!");
// } else {
//     alert("Not Eligible!")
// }

// // Book example
// var cityToCheck = prompt("Enter your city");
// var  cityToCheck = cityToCheck.toLowerCase();

//  var cleanestCities = ["kohat","peshwar", "Mardan", "Saddar" ];


//  for (var i = 0; i <= 3; i++) {
//  if (cityToCheck === cleanestCities[i]) {
//  console.log("It's one of the cleanest cities");
 
//  }



// 22 Strings: Measuring length and extracting parts

// finding length of string

// var channelName = "Yahoo baba";
// var channelNameLength = channelName.length;
// console.log(channelName);
// console.log(channelNameLength);
// console.log('first'.length);
// console.log('second'.length);


//extrct arry parts

// const array = [1, 2, 3, 4, 5];
// const arrayPart = array.slice(0,3);
// console.log(array);
// console.log(arrayPart);

// same goes for string 

// const language = "JavaScript";
// const slicePart = language.slice(0, 4);
// console.log(language);
// console.log(slicePart);

// const city = prompt("Enter city name please");

// const firstLetter = city[0];
// const letterParts = city.slice(0, 3);
// // const firstTLetter = city.slice(0, 3).toUpperCase();
// const capitilizedCity = city.toUpperCase();
// console.log(firstLetter);
// // console.log(firstTLetter);
// console.log(capitilizedCity);
// console.log(letterParts);


// access first three letter of months names

// var monthName = prompt("Enter Months Names");

// if(monthName.length > 3){
//     const shortForm = monthName.slice(0, 3);
//     const firstLetter = monthName.slice(1).toUpperCase();
//     const reamingLetters = monthName.slice(1);
//     const finalResult = firstLetter +reamingLetters;
//     console.log(firstLetter);
//     console.log(reamingLetters);
//     console.log(finalResult);
    
    
    
// //     console.log(shortForm);
    
// }else{
//     console.log(monthName);
    
// }
// book example

// var cityToCheck = prompt("Enter city plese");

//  var firstChar = cityToCheck.slice(0, 1);
//  var otherChars = cityToCheck.slice(1);
//  firstChar = firstChar.toUpperCase();
//  otherChars = otherChars.toLowerCase();
//  var cappedCity = firstChar + otherChars;

// console.log(firstChar);
// console.log(otherChars);
// console.log(cappedCity);



//  var str = prompt("Enter some text");
//  var numChars = str.length;
//  for (var i = 0; i < numChars; i++) {
//  if (str.slice(i, i + 2) === "  ") {
//  console.log("no double spaces!");
 
//  break;

//  }
//  }







