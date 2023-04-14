let dayHTML = document.querySelector("#date");

let newDate = new Date();
let dayDate = newDate.getDay();
let jsDay = newDate.getDate();
let jsMonth = newDate.getMonth();

// let home = document.querySelector("footer .home");
// let search = document.querySelector("footer .search");

// home.onclick = ()=>{
//     alert("You will be directed to home page in a bit")
// }
// search.onclick = ()=>{
//     alert("Kindly enter the artist or song you are looking for here")
// }

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"];
const monthsOfYear = [
    "January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
]

let day = daysOfWeek[dayDate];
let month = monthsOfYear[jsMonth];
dayHTML.innerText = `${day} ${jsDay} ${month}`

let dayAndNight = document.querySelector("header #brightness");
let dayCount = 0;

dayAndNight.onclick = ()=>{
    dayCount++;
    if(dayCount ===3) dayCount=1
    if(dayCount ===1){
        dayAndNight.setAttribute("src", "Images/icons/sun.svg");
        dayAndNight.style.filter = "invert(100)";
        document.querySelector("body").style.background = "black";
    }
    else{
        dayAndNight.setAttribute("src", "Images/icons/moon.svg");
        document.querySelector("body").style.background = "transparent";
        dayAndNight.style.filter = "invert(0)";
    } 
}
