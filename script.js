let timeBox = document.getElementById("time-show");
let dayBox = document.getElementById("date-show");
let sechand = document.getElementById("sc");
let hrhand = document.getElementById("hr");
let minhand = document.getElementById("min");
let toggle = document.getElementById("toggle");

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saurday"];
var mon = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];

toggle.addEventListener("click",togglePage);


function togglePage()
{
    let html = document.querySelector("html");
    if(this.textContent == "DARK MODE")
    {
        html.classList.add('dark');
        this.textContent = "LIGHT MODE";
    }
    else{
        html.classList.remove('dark');
        this.textContent = "DARK MODE";
    }
}



function setTime(){
    var day=new Date();
    var dayy = day.getDay();
    var month= day.getMonth();
    var date = day.getDate();
    let hr=day.getHours();
    let min=day.getMinutes();
    let sec=day.getSeconds();
    let milsec=day.getMilliseconds();
    let ampm=(hr>=12) ? "PM" :"AM";

    timeBox.innerHTML=`${hr%12} : ${min<10 ? "0"+min : min } ${ampm}`;
    dayBox.innerHTML=`${days[dayy].toUpperCase()} , ${mon[month].toUpperCase()}<span>${date}</span>`;



    sechand.style.rotate= `${(6*sec)+(.006*milsec)}deg`;
    minhand.style.rotate= `${(6*min) + (.1*sec)}deg`;
    hrhand.style.rotate= `${(hr%12)*30  + (.5*min)}deg`;
    
}

setTime();

setInterval(setTime, 16.67)


