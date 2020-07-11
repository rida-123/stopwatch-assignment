var min=0;
var sec=0;
var msec=0;
var interval;
var minutes=document.getElementById("min");
var seconds=document.getElementById("sec");
var miliseconds=document.getElementById("msec");
function time(){
    msec++;
    miliseconds.innerHTML=msec;
    if(msec>=100){
        sec++;
        seconds.innerHTML=sec;
        msec=0;
    }
    else if(sec>=60){
        min++;
        minutes.innerHTML=min;
        sec=0;
        
    }

}
function start(){
interval=setInterval(time,10);
}
function pause(){
    clearInterval(interval);
    document.getElementById("enable").disabled=false;
}
function reset(){
    min=0;
    sec=0;
    msec=0;
    minutes.innerHTML=min;
    seconds.innerHTML=sec;
    miliseconds.innerHTML=msec;
    pause();
}
