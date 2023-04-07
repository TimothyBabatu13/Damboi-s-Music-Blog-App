let dayHTML = document.querySelector("#date");

let newDate = new Date();
let dayDate = newDate.getDay();
let jsDay = newDate.getDate();
let jsMonth = newDate.getMonth();



const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"];
const monthsOfYear = [
    "January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
]

let day = daysOfWeek[dayDate];
let month = monthsOfYear[jsMonth];
dayHTML.innerText = `${day} ${jsDay} ${month}`
