/* 
    Author- Name of artist
    Title- name or title of song or album
    Album- This takes a boolean value. True if it is an album track
    Img- Link to the banner image
    TimePosted- Time the song was posted to blogsite
*/
let sectionOneContent = document.querySelector("#one");
/* 
    Data is simply the lists of newest songs uploaded to server.
    6 songs to be precise
    New array will be created and 6 new songs will be pushed to the array
*/
let data = [
    {
        author: "Davido",
        title: "Temptation",
        img: "Images/1641602311795.jpg",
        timePosted: "12:40"
    },
    {
        author: "Davidoo",
        title: "Temptation",
        img: "Images/1641602361529.jpg",
        timePosted: "12:40"
    },
    {
        author: "Davido",
        title: "Temptation",
        img: "Images/1641602395716.jpg",
        timePosted: "12:40"
    },
    {
        author: "Davido",
        title: "Temptation",
        img: "Images/1641602432202.jpg",
        timePosted: "12:40"
    },
    {
        author: "Davido",
        title: "Temptation",
        img: "Images/1643210649558.jpg",
        timePosted: "12:40"
    },
    {
        author: "Davido",
        title: "Temptation",
        img: "Images/1641602311795.jpg",
        timePosted: "12:40"
    }
];

data.map(datum =>{
  let hello =
    `
    <a href="" class="card" style="background: url(${datum.img})">
        <div class="glasseffect">
            <h3 class="card-title">${datum.title}</h3>
            <div class="info">
                <div class="artist-info">
                    <img src=${datum.img} alt="">
                    <p>${datum.author}</p>
                </div>
                <div class="time-info">
                    <img src='Images/icons/clock.svg' alt="" width="15">
                    <p>${datum.timePosted}</p>
                </div>
            </div>
        </div>
    </a>
    `
    sectionOneContent.innerHTML += hello;
});

let ahref = document.querySelectorAll("#one a");
ahref.forEach((element)=>{
    element.style.backgroundSize = 100+"%";
    element.style.backgroundPosition = `center/center`;
})


    
/* 
    PopularSong songs can be edited by the owner of this blog.
*/
let popularSong = [
    {
        author: "Davido",
        title: "Temptation",
        img: "Images/1641602311795.jpg",
        timePosted: "12:40",
        album: false,
        /*
            create a key "album" that returns a function that checks if album
            is true or false. If it's true, text should be album, otherwise, 
            it should be single
        */ 
    },
    {
        author: "Davido",
        title: "Temptation",
        img: "Images/1641602311795.jpg",
        timePosted: "12:40",
        album: false,
        /*
            create a key "album" that returns a function that checks if album
            is true or false. If it's true, text should be album, otherwise, 
            it should be single
        */ 
    },
    {
        author: "Davido",
        title: "Temptation",
        img: "Images/1641602311795.jpg",
        timePosted: "12:40",
        album: false,
        /*
            create a key "album" that returns a function that checks if album
            is true or false. If it's true, text should be album, otherwise, 
            it should be single
        */ 
    },
    {
        author: "Davido",
        title: "Temptation",
        img: "Images/1641602311795.jpg",
        timePosted: "12:40",
        album: false,
        /*
            create a key "album" that returns a function that checks if album
            is true or false. If it's true, text should be album, otherwise, 
            it should be single
        */ 
    },
    {
        author: "Davido",
        title: "Temptation",
        img: "Images/1641602311795.jpg",
        timePosted: "12:40",
        album: false,
        /*
            create a key "album" that returns a function that checks if album
            is true or false. If it's true, text should be album, otherwise, 
            it should be single
        */ 
    }
]

let popularSongHTML = document.querySelector("#popular-songs");
popularSong.map(datum =>{
    let hello =
    `
        <a class="popular-main-a" href="">
            <img class="banner" src=${datum.img} alt="banner" width="70px">
            <div class="popular-song-info">
                <p class="song-type">
                    <!--This is to know if it is single or album-->
                    NEW ALBUM
                </p>
                <p class="song-title">
                    ${datum.title}
                </p>
                <div class="time">
                    <img src='Images/icons/clock.svg' alt="" width="15">
                    <span>${datum.timePosted}</span>
                </div>
            </div>
        </a>
    `
    popularSongHTML.innerHTML += hello;
})

let count = 0;
let scale = 0;
function scrolllLeft(){
    ahref[0].style.transform = "scale(1.1)";
    count++
    if(count === 11) count = 1;
    if(count % 5 === 0){
        scale++
        if(scale === ahref.length) scale = 0;
        ahref.forEach(item => {
            item.style.transform = "scale(1)";
        })
        ahref[scale].style.transform = "scale(1.1)"
        /* Try and add transition to make the scale property work so well*/
        sectionOneContent.scrollLeft+= 279;
    }
    let maxwidth = sectionOneContent.scrollWidth - sectionOneContent.clientWidth
    if(sectionOneContent.scrollLeft === maxwidth) sectionOneContent.scrollLeft = 0;
    setTimeout(scrolllLeft, 1000)


   //This will be used to my satisfaction 
// .card:hover{
//     transform: scale(1.1);
// }
}


scrolllLeft()

{/* <a class="popular-main-a" href="">
    <img class="banner" src="Images/1641602395716.jpg" alt="banner" width="70px">
    <div class="popular-song-info">
        <p class="song-type">
            <!--This is to know if it is single or album-->
            NEW ALBUM
        </p>
        <p class="song-title">
            Armin van Buuren - High On Your Love
        </p>
        <div class="time">
            <img src="Images/NaijaRugged - Copy.png" width="100px" alt="">
            <span>10 min ago</span>
        </div>
    </div>
</a> */}
