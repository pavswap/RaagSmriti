const header = document.querySelector('header');
const nav = document.querySelector('.navcntnr');
const footer = document.querySelector("footer");
const root = document.documentElement;
const time = new Date().getHours();


//navbar 
const navObserver = new IntersectionObserver((entries) => {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}, {
  rootMargin: "-1px 0px 0px 0px" 
});

navObserver.observe(header);


//Header and footer dynamic background
const backgrounds = {
  3:  "--background3to4",
  4:  "--background4to5",
  5:  "--background5to6",
  6:  "--background6to7",
  7:  "--background7to8",
  8:  "--background8to9",
  9:  "--background9to10",
  10: "--background10to11",
  11: "--background11to12",
  12: "--background12to13",
  13: "--background13to14",
  14: "--background14to15",
  15: "--background15to16",
  16: "--background16to17",
  17: "--background17to18",
  18: "--background18to19",
  19: "--background19to20",
  20: "--background20to21",
  21: "--background21to22",
  22: "--background22to23",
  23: "--background23to24",
  0:  "--background0to1",
  1:  "--background1to2",
  2:  "--background2to3",
};

function setBackground() {
  const time = new Date().getHours();
  const variable = backgrounds[time];
  const gradient = getComputedStyle(root).getPropertyValue(variable).trim();

  header.style.background = gradient;
  footer.style.background = gradient;
}

setBackground();

setInterval(setBackground, 60000);



//YoutubePlayer

let player;

function onYouTubeIframeAPIReady(){

    // width/height are set to fill the .player-wrapper element, which
    // controls the actual on-screen size (and keeps a 16:9 ratio) via CSS.
    // This is what makes the embed scale down correctly on phones/tablets
    // instead of staying locked at a fixed 800x450px.
    player = new YT.Player("player",{

        width:"100%",
        height:"100%",

        playerVars:{
            controls:1,
            playsinline:1
        },

        events:{
            onReady:onPlayerReady,
            onStateChange:onStateChange
        }

    });

}

function onPlayerReady(){

    //const time = new Date().getHours();
    let playlistId;

    if(time >= 3 && time < 6) {
        playlistId = "PLFTrZ7Ymw0Jc";
    } else if(time >= 6 && time < 9) {
        playlistId = "PLNgovL8XJy-s";
    } else if(time >= 9 && time < 12) {
        playlistId = "PLdD9nzJKjcAA";
    } else if(time >= 12 && time < 15) {
        playlistId = "PLUrGZwCANeuI";
    } else if(time >= 15 && time < 18) {
        playlistId = "PLblehBYLOoZc";
    } else if(time >= 18 && time < 21) {
        playlistId = "PLWUn92mfTftQ";
    } else if(time >= 21 && time < 24) {
        playlistId = "PLIl4Cp8EUA54";
    } else {
        playlistId = "PLBNgaURCnGkc"; 
    }

    player.cuePlaylist({
        listType:"playlist",
        list:playlistId
    });

}

function onStateChange(event){

    switch(event.data){

        case YT.PlayerState.PLAYING:
            console.log("Playing");
            break;

        case YT.PlayerState.PAUSED:
            console.log("Paused");
            break;

        case YT.PlayerState.ENDED:
            console.log("Finished");
            break;

    }

}


// buttons :

// Play
const playButton = document.getElementById("playbtn");

playButton.addEventListener("click", () => {
    player.playVideo();
});

// Pause
const pauseButton = document.getElementById("pausebtn");

pauseButton.addEventListener("click", () => {
    player.pauseVideo();
});

// Mute
const muteButton = document.getElementById("mutebtn");

muteButton.addEventListener("click", () => {
    player.mute();
});

// Unmute
const unMuteButton = document.getElementById("unmute");

unMuteButton.addEventListener("click", () => {
    player.unMute();
});

const nextVideo = document.getElementById("nextbtn");

nextVideo.addEventListener("click", () => {
    player.nextVideo();
});
