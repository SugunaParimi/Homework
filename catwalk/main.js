let image=document.querySelector("img");
let left=image.offsetLeft;
//console.log(left);
let max= window.innerWidth-300;
function catWalk()
{
    left+=20;
       image.src="http://www.anniemation.com/clip_art/images/cat-walk.gif";
        image.style.left = left+"px";
        let x=(max/2)-left;
        if(x<20&&x>-20)
        {
            image.src="https://animated.name/uploads/posts/2016-08/1471202361_604.gif"
         setTimeout(catWalk, 5000)
               }
        else    if(left<max)
    {
        flipBack();
       setTimeout(catWalk,250);
    } else {flipImage();
        walkBack();
}
}
//let image1= document.querySelector("img");
function flipImage(){
    image.style.transform = "rotateY(180deg)";
}
//let image=document.querySelector("img");
function flipBack() { 
    image.style.transform="rotateX(0deg)";
}
//let image3=document.querySelector("img");
//function dancingCat(){
    catWalk();
//flipImage();
//flipImage();
right=0;
function walkBack(){
    //console.log(left);    
    left-=20;
    image.src="http://www.anniemation.com/clip_art/images/cat-walk.gif";
    image.style.left=left+'px'
    flipImage();
    let y=(max/2)-left;
    if(y>-20&&y<20){
        image.src="https://animated.name/uploads/posts/2016-08/1471202361_604.gif"
         setTimeout(walkBack, 5000)
        
    }
    else{
        flipImage();
    image.style.left=left+'px';}
    if(left>0)
    
   {setTimeout(walkBack,250);}
    else{
        flipBack();
        catWalk();
    }
    }
    

