/*Your top choices
Create an array to hold your top five choices of something (dogs, books, presidents, whatever you want).*/
let choice=['drawing', 'swimming', 'gymnastics', 'dance', 'piano'];
let order=[], order1=[];
const suffix=['1st','2nd','3rd','4th','5th']
//For each choice, log to the screen a string like: "My #1 choice is blue."
for(i=0; i<= choice.length-1; i++)
{
order[i]="my "+" #" + (i+1) + "  choice is  "+ choice[i];
console.log(order[i]);
}

//Bonus: Change it to log "My 1st choice", "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
for(i=0; i<= choice.length-1; i++)
{
order[i]= order[i].split(' ');
console.log(order[i]);
//order1[i]=order[i].splice(3,3, suffix[i]);
//order1[i]="my " + suffix[i] + "  choice is  "+ choice[i];
//console.log(order1[i]);
}
