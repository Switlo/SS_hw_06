`use strict`;

function currentTime() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
    
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);

  let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Desember",
];
let currentMonth = date.getMonth();
let month = months[currentMonth];
let day = date.getDate();
let year = date.getFullYear();
  
  month = updateTime(month);
  day = updateTime(day);
  year = updateTime(year);
 
function updateTime(k) {  // додаємо нуль у числах з однією цифрою
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}
  document.querySelector("#monthDay").innerHTML = `${month}, ${day}`;
  document.querySelector("#hours").innerHTML = `${hour}:${min}:${sec}`;
  document.querySelector("#year").innerHTML = year;

  let t = setTimeout(function(){ currentTime() }, 1000); // налаштування таймеру
}
currentTime(); 
