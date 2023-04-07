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
*/
const data = [
    {
        author: "Davido",
        title: "Temptation",
        img: "Images/1641602311795.jpg",
        timePosted: "12:40"
    },
    {
        author: "Davidoo",
        title: "Temptation",
        img: "Images/1641602311795.jpg",
        timePosted: "12:40"
    },
    {
        author: "Davido",
        title: "Temptation",
        img: "Images/1641602311795.jpg",
        timePosted: "12:40"
    },
    {
        author: "Davido",
        title: "Temptation",
        img: "Images/1641602311795.jpg",
        timePosted: "12:40"
    },
    {
        author: "Davido",
        title: "Temptation",
        img: "Images/1641602311795.jpg",
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
    <a href="" class="card">
        <div class="glasseffect">
            <h3>${datum.title}</h3>
            <div class="info">
                <div class="artist-info">
                    <img src=${datum.img} alt="">
                    <p>${datum.author}</p>
                </div>
                <div class="time-info">
                    <img src=${datum.img} alt="" width="100">
                    <p>${datum.timePosted}</p>
                </div>
            </div>
        </div>
    </a>
    `
    let ahref = document.querySelectorAll("#one a");
    ahref.forEach(x =>{
        x.style.background = `url("Images/1641602311795.jpg")`
        x.style.backgroundSize = 100+"%";
        x.style.backgroundPosition = `center/center`

        console.log(x)
    })
    // console.log(hello)
    sectionOneContent.innerHTML += hello;

});




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
            <img class="banner" src="Images/1641602395716.jpg" alt="banner" width="70px">
            <div class="popular-song-info">
                <p class="song-type">
                    <!--This is to know if it is single or album-->
                    NEW ALBUM
                </p>
                <p class="song-title">
                    ${datum.title}
                </p>
                <div class="time">
                    <img src="Images/NaijaRugged - Copy.png" width="100px" alt="">
                    <span>${datum.timePosted}</span>
                </div>
            </div>
        </a>
    `
    popularSongHTML.innerHTML += hello;
})


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