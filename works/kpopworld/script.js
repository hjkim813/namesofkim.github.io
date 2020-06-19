
// const local_data = data;
// var data = require('./datacomma.json'); //(with path)

const progressBar = document.getElementById('progress');
const progressBarContainer = document.getElementsByClassName('slider')[0];
const desiredTimeSpan = document.getElementById('desired-time');
const currentTimeSpan = document.getElementById('current-time');
let progress = 0;

function visualiseOutput(id) {
  let countries= document.getElementById('topcountries');
  let numDancingBodies = document.getElementById('num-dancingbodies');
  let firstcol = document.getElementById('firstcol');
  let secondcol = document.getElementById('secondcol');
  let totalBodies = document.getElementById('num-total');

  entry = data[0][id];
  countries.innerHTML = `${entry['Countries']}`;
  numDancingBodies.innerHTML = entry['Dancing Bodies'];
  totalBodies.innerHTML = entry['Total Bodies'];
  firstcol.innerHTML = entry['Viewcount'];
  secondcol.innerHTML = `<p> ${entry['Artist']} – ${entry['Song Title']} &ensp; ${entry['Date']} &ensp; ${entry['Company']} </p>`;
}

function changeContent(time) {
  if (time > 0 && time < 5) {
    visualiseOutput(1);
  } else if (time > 5 && time < 10) {
    visualiseOutput(2);
  } else if (time > 10 && time < 15) {
    visualiseOutput(3);
  } else if (time > 15 && time < 20) {
    visualiseOutput(4);
  } else if (time > 20 && time < 25) {
    visualiseOutput(5);
  }
}

function updatePlayer(currentTime, totalTime) {
  progress = (currentTime / totalTime) * 100;
  progressBar.style.width = `${progress}%`;

  let currentTimeFormatted = new Date(currentTime * 1000)
    .toISOString()
    .substr(11, 8);

  let totalTimeFormatted = new Date(totalTime * 1000)
    .toISOString()
    .substr(11, 8);

  currentTimeSpan.innerHTML = `${currentTimeFormatted} / ${totalTimeFormatted}`;
}

function clickOnPlayer(player, totalTime) {
  let progressBarWidth = progressBarContainer.clientWidth;

  progressBarContainer.addEventListener('mousemove', (e) => {
    let desiredTimeSpanPosition = e.offsetX - desiredTimeSpan.clientWidth / 2;
    let desiredTime = (e.offsetX / progressBarWidth) * totalTime;
    let desiredTimeFormatted = new Date(desiredTime * 1000)
      .toISOString()
      .substr(11, 8);

    desiredTimeSpan.classList.add('active');
    desiredTimeSpan.style.left = `${desiredTimeSpanPosition}px`;
    desiredTimeSpan.innerHTML = desiredTimeFormatted;
  });

  progressBarContainer.addEventListener('mouseleave', () => {
    desiredTimeSpan.classList.remove('active');
  });

  progressBarContainer.addEventListener('click', (e) => {
    let desiredTime = (e.offsetX / progressBarWidth) * totalTime;
    player.seekTo(desiredTime);
  });
}


// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

$(document).ready(function(){
  setTimeout(function(){
     $("#pleaseWait").css({"opacity":"1"})
   }, 1000);
   setTimeout(function(){
    $("#pleaseClick").css({"opacity":"1"})
  }, 8000);
});

// document.getElementById("placeholder").addEventListener("click", function(){
//   this.style.display = 'none';
//   player.playVideo();
//   console.log("video plays")
// });


document.getElementById("pleaseClick").addEventListener("click", function(){
  $(".instructions").css({"opacity":"0"})
  document.getElementById('placeholder').style.display = 'none';
  player.playVideo();
  console.log("video plays")
});

// 2. This code loads the IFrame Player API code asynchronously.

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '0',
    width: '0',
    videoId: '5WY3KBwCVDQ',
    playerVars: {
      controls: 0,
      autoplay: 1,
      iv_load_policy: 3,
      loop: 1,
      fs: 0,
      // mute: 0,
      modestbranding: 1,
      frameborder:0,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    var get = $("#current-time");
    var txt = get.html();
    if (txt == ""){
      player.pauseVideo();
      console.log("video paused")
    }
    
    // Set the onclick event to the button for pause the YouTube video.
    event.target.setPlaybackQuality('highres');
    setInterval(() => {
      let currentTime = player.getCurrentTime();
      let totalTime = player.getDuration();
      changeContent(currentTime);
      updatePlayer(currentTime, totalTime);
      clickOnPlayer(player, totalTime);
    }, 2000);

    document.getElementById('box').onclick = function() {
      player.pauseVideo();
      console.log("video paused")
  }

}
  if (event.data == YT.PlayerState.PAUSED) {
    document.getElementById('box').onclick = function() {
      player.playVideo();
      console.log("video plays")
    };
  }
}

function stopVideo() {
  console.log('asdds');
}

document.getElementById("plus").addEventListener("click", function(){
  var matrix = $('.video').css('transform');
  var div = document.getElementsByClassName('video')[0];
  var container = document.getElementsByClassName('container')[0];

  // console.log(matrix) 
  if (matrix==`matrix(0.5, 0, 0, 0.5, 0, 0)`){
    container.style.setProperty('transform', 'scale(0.75)');
    div.style.top = "-40%";
    div.style.left = "-100%";
    }
  else if (matrix==`matrix(0.75, 0, 0, 0.75, 0, 0)`){
    container.style.setProperty('transform', 'scale(1)');
    div.style.top = "-25%";
    div.style.left = "-100%";
    }
  else if (matrix==`matrix(1, 0, 0, 1, 0, 0)`){
    container.style.setProperty('transform', 'scale(1.5)');
    div.style.top = "-10%";
    div.style.left = "-40%";
    }
  else if (matrix==`matrix(1.5, 0, 0, 1.5, 0, 0)`) {
    container.style.setProperty('transform', 'scale(2)');
    div.style.top = "0";
    div.style.left = "-40%";
  }
  // else if (matrix==`matrix(2, 0, 0, 2, 0, 0)`) {
  //   div.style.setProperty('transform', 'scale(2.5)');
  // }
});

document.getElementById("minus").addEventListener("click", function(){
  var matrix = $('.video').css('transform');
  var div = document.getElementsByClassName('video')[0];
  var container = document.getElementsByClassName('container')[0];

  if (matrix==`matrix(0.75, 0, 0, 0.75, 0, 0)`){
    container.style.setProperty('transform', 'scale(0.5)');
    div.style.top = "-55%";
    div.style.left = "-100%";
  }
  else if (matrix==`matrix(1, 0, 0, 1, 0, 0)`){
    container.style.setProperty('transform', 'scale(0.75)');
    div.style.top = "-40%";
    div.style.left = "-100%";
  }
  else if (matrix==`matrix(1.5, 0, 0, 1.5, 0, 0)`){
    container.style.setProperty('transform', 'scale(1)');
    div.style.top = "-25%";
    div.style.left = "-100%";
  }
  else if (matrix==`matrix(2, 0, 0, 2, 0, 0)`) {
    container.style.setProperty('transform', 'scale(1.5)');
    div.style.top = "-10%";
    div.style.left = "-40%";
  }
  else if (matrix==`matrix(2.5, 0, 0, 2.5, 0, 0)`) {
    container.style.setProperty('transform', 'scale(2)');
    div.style.top = "0";
    div.style.left = "-40%";
  }
});

// function zoomOut() {
//   $('.video').css('transform', 'scale(1)');
//   $('.container').css('width', '130vw');
//   $('.container').css('height', '110vh');
// }



// function zoomIn() {
//   $('.video').css('transform', 'scale(1.5)');
//   $('.container').css('width', '155vw');
//   $('.container').css('height', '135vh');
//   ;
// }
// function zoomOut() {
//   $('.video').css('transform', 'scale(1)');
//   $('.container').css('width', '130vw');
//   $('.container').css('height', '110vh');
// }

