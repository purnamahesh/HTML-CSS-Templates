const time = document.getElementById('time')
greeting = document.getElementById('greeting')
focus = document.getElementById('focus')
name = document.getElementById('name')
function showTime(){
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
    
    setBgGreet(hour);

    const amPm = hour>=12 ? "PM" : "AM";
    hour= hour%12 || 12;

    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    setTimeout(showTime,1000);
}
function addZero(x){
    return ((parseInt(x,10)<10)?'0':'')+x;
}

function setBgGreet(h){
    if(h<12){
        greeting.innerHTML = "Good Morning";
        document.body.style.backgroundImage = 'url(./images/morning.jpg)';
        document.body.style.color = "white";
    }
    else if(h<18){
        greeting.innerHTML = "Good Afternoon";
        document.body.style.backgroundImage = 'url(./images/afternoon.jpg)';
    }
    else{
        greeting.innerHTML = "Good Evening";
        document.body.style.backgroundImage = 'url(./images/evening.jpg)';
        document.body.style.color = "white";
    }
}
showTime();
