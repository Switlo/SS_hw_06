`use strict`;

function currentTime() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
    
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);

function updateTime(k) {  // додаємо нуль у числах з однією цифрою
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

document.querySelector("#clock").innerHTML = hour + ` : ` + min + ` : ` + sec;

  let t = setTimeout(function(){ currentTime() }, 1000); // налаштування таймеру
}
currentTime(); 
