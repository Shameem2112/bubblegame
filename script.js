var score=0;
var hitrn=0;
var timer=60;

 function makeBubble(){
    var clutter="";
for(var i=0;i<=197;i++){
    var rn= Math.floor(Math.random()*10)

    clutter +=`<div class="bubble">${rn}</div>`;
    


}
document.querySelector("#pbtm").innerHTML=clutter;

 }
 function runTimer(){
    var timerint=setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
        }

    },1000)


 }
 function getNewHit(){
    hitrn= Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn

 }
 
 function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;


 }
 document.querySelector("#pbtm").addEventListener("click",function(dets){
     var clickednum = (Number(dets.target.textContent));
      if(clickednum===hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }

 });

getNewHit();
makeBubble();
runTimer();
