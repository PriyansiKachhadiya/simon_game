let gameSeq = [];
let userSeq = [];

let highscore = 0;


let btns = ["yellow","red","blue","green"];


let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener('keypress',function(){
    if(started==false){
        started = true;

        levelUp();
    }
});
function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },300);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
      btn.classList.remove("userFlash");
    },300);
  };
function levelUp(){
   userSeq = [];
   level++;
   
  
   h2.innerText = `Level ${level}`;

   let randInd = Math.floor(Math.random()*3);
   let randColor = btns[randInd];

   let randBtn = document.querySelector(`.${randColor}`);
  //  console.log(randInd);
  //  console.log(randColor);
  //  console.log(randBtn);

   gameSeq.push(randColor);
   console.log(gameSeq)


   
   gameFlash(randBtn);
};

function checkAns(idx){
    // console.log(`level: `, level);
    
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
          setTimeout(levelUp,1000)
          
        }
    }else{
      h2.innerHTML = `game over!your score was <b>${level}</b><br>  press any key to start`;
      document.querySelector("body").style.backgroundColor = "red";
      setTimeout(function()
        {document.querySelector("body").style.backgroundColor = "white";}
      , 150);
      score = level;
     
      if(highscore<score){
       
        alert("congrats!!! you broke your previous score")
        highscore = score;
      }

      reset();
      
      
      }  
    
}

function  btnPress(){
  //  console.log(this);
   let btn = this;
   userFlash(btn);

  let userColor = btn.getAttribute('id');

   userSeq.push(userColor);
   
   checkAns(userSeq.length-1);
   console.log(userSeq);
   
}

let allbtns = document.querySelectorAll(".btn");
for(key of allbtns){
    key.addEventListener("click",btnPress)
}

function reset(){

  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
 
 
}
