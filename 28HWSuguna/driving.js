//************Driving Age************************
//Write a function that receives a userAge called canDrive
function drivingAge(){
    let personName = prompt("what is your first name?")
    let personAge = prompt("what is your Age?")  
    //If the received age is less than 16, print "Sorry, you can't drive yet"
    if (personAge<16)
     {
         console.log('Sorry '+ personName +" , you can't drive yet")
         //Bonus: If the user can't drive yet, tell them how many years they will have to wait (e.g. "Sorry, you have 4 years to wait until you can drive")
         let wait= (16-personAge)
         console.log(wait +" years you will have to Wait until you can drive")
     } else
     //If the received age is equal to or over 16, print "Drive away!"
     {console.log(personName+" rive away!")}
}
drivingAge();

//**************The World Translator******************
//Write a function called translator that receives a language (e.g. "fr", "eng" etc.). Log out the translated version 
//(e.g. if the language is "eng" - log "Hello World", if the language is "fr" - log "Bonjour le monde" etc.)
function translator(language){
    if (language==="English")
    {console.log("'Hello World!'")}
    else if (language==="German")
    {console.log("'Hallo Welt!'")}
    else if (language==="French")
    {console.log("'Bonjour monde!'")}
    else if (language==="Italian:")
    {console.log("'Ciao mondo!'")}
    else if (language==="Indonesian")
    {console.log("'Halo Dunia!'")}
    else {
        console.log("Hello, Namaste, Hola, Salam,.......")
    }     
}
translator("English");
translator("German");
translator("French");
translator("Italian:");
translator("Indonesian");
translator("Telugu");
