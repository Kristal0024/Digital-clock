const timer=document.querySelector(".timer")
const meridiems=document.querySelector('.meridiems')

function showtime(){
const now=new Date()
let hour=now.getHours();
const minutes=String(now.getMinutes()).padStart(2,0);
hour=hour%12;
if(hour===0){
    hour=12;
}
timer.textContent=`${hour}:${minutes}`
const ampm=now.getHours()>=12?"PM":"AM";
meridiems.textContent=`${ampm}`
}
showtime()
setInterval(showtime,1000)