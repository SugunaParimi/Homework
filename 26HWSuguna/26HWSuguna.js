//Log every number from 0 to 10 using do while loop
let i = 0;
do {
  console.log( i );
  i++;
} while (i <=10);
//Log every number from 4 to -16 using for loop
for(i=4; i>=-16; i =i-1)
{ console.log(i);
}
//Log every fourth number from 8 to 41 using while loop
let num1 = 8;
while (num1<=41)
{ console.log(num1);
    num1 = num1 + 4;
}
//The Classic Fizzbuzz Program
//Loop from 0 to 100.
//If the number is evenly divisible by 3, log the number and "Fizz"
//If the number is evenly divisible by 5, log the number and "buzz"
//If the number is evenly divisible by both 3 AND 5, log the number and "Fizzbuzz"
//I don't know I making it complicated or something, just wanted to see clearly how it works with arrays.
console.clear();
let mul3=[], mul5=[], mul15=[];
var j=0,k=0,l=0;
for (i=0; i<=100; i++)
{ if( i%3 ==0 )
   {
       mul3[j]=i;
       j=j+1;
    }
    if(i%5 == 0)
    {
        mul5[k]=i;
        k=k+1;
    }
    if( i%3 == 0 && i%5 == 0)
     {
        mul15[l]=i;
        l=l+1;
     } 
}
    
     console.log("Fizz numbers between 0-100 are " + mul3 );
     console.log("Buzz numbers between 0-100 are " + mul5 );
     console.log("FizzBuzz numbers between 0-100 are " + mul15 );
     /* i=0;
     while (i<=j-1)
     {     
            let value = mul3[i];
            console.log(value);
            i=i+1;
          }
    i=0;
     console.log("Buzz numbers between 0-100 are")
      while (i<=k-1)
       {     
                 let value = mul5[i];
                 console.log(value);
                 i=i+1;
               }
     console.log("FizzBuzz numbers between 0-100 are")
         i=0;
        while (i<=l-1)
            {     
                let value = mul15[i];
                console.log(value);
                i=i+1;
            } */ 
         
    


    
