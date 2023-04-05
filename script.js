const monthEL = document.querySelector(".date h1");
const fullDateEL = document.querySelector(".date p");
const daysEl = document.querySelector(".days");

const monthINX = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(),monthINX + 1,0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthINX, 1).getDay() - 1;
// javascript taking date from sunday




const months = [
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
    "December", 
];

monthEL.innerText = months[monthINX];
fullDateEL.innerText = new Date().toDateString()



let days = "";
for (let i = firstDay; i > 0; i--) {
    days += `<div class="empty"></div>`;
  }
  for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate()) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }
  

daysEl.innerHTML = days;