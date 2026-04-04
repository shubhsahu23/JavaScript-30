const secondHand=document.querySelector(".second-hand")
const minuteHand=document.querySelector(".minute-hand")
const hourHand=document.querySelector(".hour-hand")
function setDate(){
    const now=new Date();
    const seconds=now.getSeconds();
    const mins=now.getMinutes();
    const hour=now.getHours();
    
    const secondsDegrees=(seconds/60)*360+90;
    const minsDegrees=(mins/60)*360+90;
    const hourDegrees=(hour/12)*360+90;
    secondHand.style.transform=`rotate(${secondsDegrees}deg)`
    if (seconds === 0) {
        secondHand.style.transition = "none";
    } else {
        secondHand.style.transition = "all 0.05s cubic-bezier(0.68, 0.55, 0.265, 1.55)";
    }
    hourHand.style.transform=`rotate(${hourDegrees}deg)`
    if (hour === 0) {
        hourHand.style.transition = "none";
    } else {
        hourHand.style.transition = "all 0.05s cubic-bezier(0.68, 0.55, 0.265, 1.55)";
    }
    minuteHand.style.transform=`rotate(${minsDegrees}deg)`
    if (mins === 0) {
        minuteHand.style.transition = "none";
    } else {
        minuteHand.style.transition = "all 0.05s cubic-bezier(0.68, 0.55, 0.265, 1.55)";
    }

}
setDate();
setInterval(setDate, 1000);