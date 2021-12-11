//The Age Calculator
//Forgot how old you are? Calculate it!
//Write a function named calculateAge that:
//Takes 2 arguments: birthYear, and currentYear.
function calculateAge1(birthYear1, currentYear1)
{

    if(currentYear1<birthYear1)
    { console.log('you are not born yet')}
    else if(currentYear1!==2021 || birthYear1<0)    
    { console.log('enter the year we are in and enter the year you are born')}
    else {let age1=(currentYear1-birthYear1)
        console.log('your age is ' + age1 + ' years old or you are '+ (age1-1) + ' years old' );
    }
}
    calculateAge1(2010,2021);
    calculateAge1(2010,2024);
    calculateAge1(-2010,2021);
    calculateAge1(2024,2021);
//Calculates the 2 possible ages based on those years.
//Outputs the result: "You are either NN or NN"
//Call the function three times with different sets of values.
//Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
let currentYear = new Date().getFullYear();
    console.log(currentYear);
function calculateAge(yearOfBirth)
   {
   
    if(yearOfBirth<0 || yearOfBirth > currentYear)
    {
        console.log("you are not exist");
    }
    else 
    {
    let age = currentYear - yearOfBirth;   
    console.log("your age is " + age +" years") 
    }
   }
    calculateAge(1980);
    calculateAge(-1987);
    calculateAge(2123);
    