const users = [
    {
      email: "groucho@ga.co",
      password: "chicken",
      isAdmin: true
    },
    {
      email: "harpo@ga.co",
      password: "elephant",
      isAdmin: false
    },
    {
      email: "gummo@ga.co",
      password: "pinkFairyArmadillo",
      isAdmin: true
    },
    {
      email: "zeppo@ga.co",
      password: "dumboOctopus",
      isAdmin: false
    }
  ];
  //Create a function that receives an ID (index), an email and a password. 
  function loginUser(email, password){
      let l= users.length, i, login;
  //If the function was provided with an email and a password that matches up, log "You are logged in". Otherwise, log "Sorry, something went wrong".

      for(i=0;i<l;i++)
      {
        let email1=users[i].email;
        let password1=users[i].password;
        if(email1===email && password1===password)
        {   login =true;
            console.log('You are logged in')
        }
      }
      if(login != true)
       {console.log('Sorry, something went wrong')}      
  }
  loginUser('groucho@ga.co','chicken');
  loginUser('John@dp.ac','dumboOctopu');
  loginUser("harpo@ga.co","elephant",)  
//Bonus: Working with Users
//Don't receive an ID! Find the user based on the email
function findUser(email){
let l=users.length, i, find;
for(i=0;i<l;i++){
    let email1=users[i].email;
    let isAdmin1 =users[i].isAdmin;
    if(email1===email && isAdmin1===true)
    {  find= true;
        console.log('user found '+users[i].email+' is an admin')}
    else if(email1===email)
    {
        find=true;
        console.log('user found '+users[i].email+' is not an admin')  
    }
}
 if(find!=true)
{console.log(email+'user not found ') }
}
findUser("zeppo@ga.co");
findUser('gummo@ga.co');
findUser("laugh@ga.co");
//Make a function that creates an account. e.g. createAccount("chico@gmail.com", "redLippedBatfish", false);
//This should just add another object into the array
function createAccount(){
    let email1= prompt("enter your email");
    let password1= prompt("enter your password");
    let isAdmin1=prompt("Are admin (true/false)?");
    let l=users.length;
    const newUser={email: email1,
    password: password1, 
    isAdmin: isAdmin1}
    users.push(newUser);
    console.log("account created");
    console.log(users);
}
createAccount();
createAccount();
//Make a function that deletes an account. e.g. deleteAccount("zeppo@ga.co");
//This should just remove an object from the array
//Bonus: Make this only work if the correct password was provided as a parameter too
function deleteAccount(email,password)
{
    let l= users.length, i, login;
    console.log(l)
    for(i=0;i<l;i++)
    {
      let email1=users[i].email;
      let password1=users[i].password;
      if(email1===email && password1===password)
      {   users.splice(i,1)
          console.log('Account got deleted '+ email)

      }
    }
    if(login != true)
     {console.log("Sorry, something went wrong account can't be deleted")}      
}
deleteAccount('groucho@ga.co','chicken');
//Make a function that updates an account. e.g. updateAccount("harpo@ga.co", "password", "ayeAye");
//Bonus: Instead of receiving two strings to illustrate the change (like above), receive an object so you could potentially change multiple things at once. e.g. updateAccount("harpo@ga.co", { password: "gharial", isAdmin: false });
function updateAccount(email,password)
{ 

let l=users.length, i, find;
    for(i=0;i<l;i++)
    {
      let email1=users[i].email;
      let password1=users[i].password;
      if(email1===email && password1===password)
      {   let email1= prompt("enter your email");
          if(email1=== " ")
          {email1===users[i].email}
          else {users[i]=email1;}
          let password1= prompt("enter your password");
          let isAdmin1=prompt("Are admin (true/false)?");
          const updatedUser={email: email1,
            password: password1, 
            isAdmin: isAdmin1}
          find=true;        
          console.log(email+'Account updated ')

      }
    }
    if(find!=true){
    console.log(email+"user account not found");

}
}
updateAccount("harpo@ga.co","elephant");
updateAccount('srree@hotmail.co.in', 'sdgafdf');
//Bonus: Make this work only if the current password was also provided as a parameter. e.g. updateAccount("harpo@ga.co", "elephant", { password: "gharial", isAdmin: true });
//Add a few extra users and make a search function. I'll let you decide on the interface or the function signature
//search by email using find
function searchUser(email){
   const objIndex = users.findIndex((obj => obj.email == email));
   console.log(objIndex);
}
searchUser('gummo@ga.co');