console.clear()
//Undefined
var variable
console.log(variable);
//null
variable = null;
console.log(variable);
//What number's bigger?
var numOne, numTwo;
numOne = prompt("what is your first number please enter?");
numTwo = prompt("what is your second number?");
if (numOne>numTwo){
    console.log("numOne"+numOne + "is bigger than numTwo" + numTwo);   
} else
 {console.log("numTwo"+numTwo + "is bigger than numOne" + numOne);     
} 
//Driving Age
var personName, age;
personName = prompt("what is your first name?");
age =  prompt("what is your first number?");
if (age<16) {
    console.log("Sorry "+ personName+", you can't drive yet!");
}else{
    console.log(personName+",Drive into the sunset!");
}
//Say Hi!
console.clear();
var language,personName;
personName = prompt("what is your first name?");
language = prompt("which language you speak?");
if (language.toUpperCase === "ENGLISH") {
    console.log("HI"+ personName);
}
else if (language.toUpperCase === "FRENCH") {

    console.log("Bonjour"+ personName);
}else if (language.toUpperCase === "NORWEGIAN") {
    console.log("HALLO"+ personName);
}else if (language.toLowerCase === "turkish")
 {
    console.log("Merhaba"+ personName);
} 
else {
    console.log(personName+"Namaste, Hola, Guten Tag, Ola");
}
//Southern or Northern Hemisphere?
var latitude;
latitude = prompt("enter the latitude you want to know?");
if (latitude<0) {
    console.log('you wanted to know about "Southern Hemisphere"');
}else if (latitude>0)  {
    console.log('you wanted to know about "Southern Hemisphere"');
}else  {
    console.log('you wanted to know about "Equator"');
}
//Year in the 19th, 20th or 21st Century?
var Year;
Year = prompt("Please tell me a year you like in 19th,20th,21st?");
if (Year>=1801 && Year<=1900) {
    console.log("you like 19th Century");
}else if (Year>=1901 && Year<=2000)  {
    console.log("you like 20th Century");
}else if (Year>=2001 && Year<=2100)  {
    console.log("you like 20th Century");
}else
{
    console.log("Sorry! "+Year+" must be other century Century");
}
//Greet
console.clear();
var time,personName;
personName = prompt("what is your first name?");
time = prompt("what is the time now?");
if (time>0 && time <=10) {
console.log("Good Morning "+ personName);
} else if(time<=19)
{
    console.log("Good Day " +personName);
} else if(time<=24)
{
    console.log("Good Evening "+ personName);
}
else {
    console.log("we asked for the time not a random number "+ personName);
}