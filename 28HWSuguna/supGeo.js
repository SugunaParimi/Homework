//**********The Lifetime Supply Calculator********************
//Ever wonder how much a "lfetime supiply" of your favorite snack is? Wonder no more!
//Write a function named calculateSupply that:
//Takes 2 arguments: age, and amountPerDay.
function calculateSupply(age, amountPerDay){
    //Calculates the amount consumed for rest of the life (based on a constant max age).
    const ageLeft= (100- age);
    let lifeSuply = (ageLeft * amountPerDay); 
    //Outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
    console.log("You will need " +lifeSuply + " to last you until the ripe old age of 100")}
//Call that function three times, passing in different values each time.
calculateSupply(10, 5);
calculateSupply(23, 2.5);
calculateSupply(40, 3);
//Bonus: Accept floating point values for amountPerDay, and round the result to a round number.

//*************The Geometrizer********************
//Create 2 functions that calculate properties of a circle, using the definitions here.
//Create a function called calcCircumference:
//Pass the radius to the function.
function calcCircumference(radius){
    //Calculate the circumference based on the radius, and output "The circumference is NN".
    var circumference = 2 * Math.PI * radius;
    
    console.log("circles Circumference is: " + circumference);
}
calcCircumference(5);
//Create a function called calcArea:
//Pass the radius to the function.
function calcArea(radius){
    //Calculate the area based on the radius, and output "The area is NN".
    var area = Math.PI * Math.pow(radius,2);    
    console.log("The circles area is: " + area);
}
calcArea(5);

//The Temperature Converter
//It's hot out! Let's make a converter based on the steps here.
//Create a function called celsiusToFahrenheit:
function celsiusToFahrenheit(celsius){
//Store a celsius temperature into a variable.
let celsious1= celsius;
//Convert it to fahrenheit and output "NN°C is NN°F".
fahrenHeit= celsious1* (9 / 5) + 32;
console.log(celsious1+'°C is '+fahrenHeit+'°F')
}
//Create a function called fahrenheitToCelsius:
function fahrenheitToCelsius(fahrenheit){
//Now store a fahrenheit temperature into a variable.
let fahrenHeit1= fahrenheit;
//Convert it to celsius and output "NN°F is NN°C".
celsious2= (fahrenHeit1-32)*(5 / 9);
console.log(fahrenHeit1 +"°F is "+celsious2+ "°C")
}
celsiusToFahrenheit(32);
celsiusToFahrenheit(45);
fahrenheitToCelsius(120);
fahrenheitToCelsius(250);