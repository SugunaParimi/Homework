let rainbowColors = [];
//Add "orange" to the end of the array
rainbowColors.push("Orange");
//Add "red" to the start of the array
rainbowColors.unshift("Red");
//Add "yellow" to the end
rainbowColors.push("Yellow");
/*Add "green", "blue", "indigo", and "violet" to the end of the array
Bonus: Do this using one method call*/
rainbowColors.push("Green", "Blue", "Indigo", "Violet");
console.log(rainbowColors);
//Log out the length of the array
console.log(rainbowColors.length);

//Log out the second item
console.log(rainbowColors[1]);
//Log out the last item (make this flexible/dynamic!)
var l = rainbowColors.length;
console.log(rainbowColors[l-1]);
//Log out the index of the string "blue"
console.log(rainbowColors.indexOf ( "Blue" ));

//Bonus: Find out the difference between .slice and .splice
//Create a copy of rainbowColors using an array method and call it twoColors. Essentially pull two colors out of the array (say, between the index of 1 and 3)
var twoColors = rainbowColors.slice(); 
console.log(twoColors); 
var colors =twoColors.splice(1, 2);
console.log(colors +"  deleted");
//Starting with this array const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];, remove the duplicates destructively using slice or splice (whichever one is appropriate). 
//Note: This will have to be done with multiple method calls
const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
nums.splice(3,2);
nums.splice(4,1);
console.log("new array of nums  " +nums);
//Bonus: Work with arrays of arrays
//Starting with this array const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
//Access "inner array first item" and print it out
console.log("inner array 1st item "+arrOfArrs[0][0] );
//Print "third" by using a dynamic index
console.log("inner array getting the third value "+arrOfArrs [1][2]);
//Bonus: Loop through the second inner array! Print out the first item, the second item, then the third item */

for(var i=0; i<=2; i++)
{
    console.log((i+1)+" element in sencond array "+ arrOfArrs[1][i]);
}