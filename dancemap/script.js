
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
  if (time > 0 && time < 33) {
    visualiseOutput(64);
  } else if (time > 33 && time < 59) {
    visualiseOutput(63);
  } else if (time > 59 && time < 88) {
    visualiseOutput(62);
  } else if (time > 88 && time < 116) {
    visualiseOutput(61);
  } else if (time > 116 && time < 146) {
    visualiseOutput(60);
  } else if (time > 146 && time < 166) {
    visualiseOutput(59);
  } else if (time > 166 && time < 202) {
    visualiseOutput(58);
  } else if (time > 202 && time < 221) {
    visualiseOutput(57);
  } else if (time > 221 && time < 242) {
    visualiseOutput(56);
  } else if (time > 242 && time < 263) {
    visualiseOutput(55);
  } else if (time > 263 && time < 285) {
    visualiseOutput(54);
  } else if (time > 285 && time < 310) {
    visualiseOutput(53);
  } else if (time > 310 && time < 341) {
    visualiseOutput(52);
  } else if (time > 341 && time < 365) {
    visualiseOutput(51);
  } else if (time > 365 && time < 394) {
    visualiseOutput(50);
  } else if (time > 394 && time < 419) {
    visualiseOutput(49);
  } else if (time > 419 && time < 435) {
    visualiseOutput(48);
  } else if (time > 435 && time < 465) {
    visualiseOutput(47);
  } else if (time > 465 && time < 491) {
    visualiseOutput(46);
  } else if (time > 491 && time < 516) {
    visualiseOutput(45);
  } else if (time > 516 && time < 554) {
    visualiseOutput(44);
  } else if (time > 554 && time < 574) {
    visualiseOutput(43);
  } else if (time > 574 && time < 592) {
    visualiseOutput(42);
  } else if (time > 592 && time < 610) {
    visualiseOutput(41);
  } else if (time > 610 && time < 633) {
    visualiseOutput(40);
  } else if (time > 633 && time < 652) {
    visualiseOutput(39);
  } else if (time > 652 && time < 692) {
    visualiseOutput(38);
  } else if (time > 692 && time < 730) {
    visualiseOutput(37);
  } else if (time > 730 && time < 756) {
    visualiseOutput(36);
  } else if (time > 756 && time < 787) {
    visualiseOutput(35);
  } else if (time > 787 && time < 819) {
    visualiseOutput(34);
  } else if (time > 819 && time < 844) {
    visualiseOutput(33);
  } else if (time > 844 && time < 865) {
    visualiseOutput(32);
  } else if (time > 865 && time < 882) {
    visualiseOutput(31);
  } else if (time > 882 && time < 902) {
    visualiseOutput(30);
  } else if (time > 902 && time < 935) {
    visualiseOutput(29);
  } else if (time > 935 && time < 969) {
    visualiseOutput(28);
  } else if (time > 969 && time < 996) {
    visualiseOutput(27);
  } else if (time > 996 && time < 1025) {
    visualiseOutput(26);
  } else if (time > 1025 && time < 1043) {
    visualiseOutput(25);
  } else if (time > 1043 && time < 1060) {
    visualiseOutput(24);
  }else if (time > 1060 && time < 1092) {
    visualiseOutput(23);
  } else if (time > 1092 && time < 1112) {
    visualiseOutput(22);
  } else if (time > 1112 && time < 1140) {
    visualiseOutput(21);
  } else if (time > 1140 && time < 1173) {
    visualiseOutput(20);
  } else if (time > 1173 && time < 1202) {
    visualiseOutput(19);
  } else if (time > 1202 && time < 1235) {
    visualiseOutput(18);
  } else if (time > 1235 && time < 1281) {
    visualiseOutput(17);
  } else if (time > 1281 && time < 1313) {
    visualiseOutput(16);
  } else if (time > 1313 && time < 1348) {
    visualiseOutput(15);
  } else if (time > 1348 && time < 1377) {
    visualiseOutput(14);
  } else if (time > 1377 && time < 1406) {
    visualiseOutput(13);
  } else if (time > 1406 && time < 1438) {
    visualiseOutput(12);
  } else if (time > 1438 && time < 1469) {
    visualiseOutput(11);
  } else if (time > 1469 && time < 1506) {
    visualiseOutput(10);
  } else if (time > 1506 && time < 1537) {
    visualiseOutput(9);
  } else if (time > 1537 && time < 1560) {
    visualiseOutput(8);
  }else if (time > 1560 && time < 1587) {
    visualiseOutput(7);
  } else if (time > 1587 && time < 1615) {
    visualiseOutput(6);
  } else if (time > 1615 && time < 1638) {
    visualiseOutput(5);
  } else if (time > 1638 && time < 1657) {
    visualiseOutput(4);
  } else if (time > 1657 && time < 1673) {
    visualiseOutput(3);
  } else if (time > 1673 && time < 1693) {
    visualiseOutput(2);
  } else if (time > 1693 && time < 1718) {
    visualiseOutput(1);
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

  $('#pleaseWait').hide();
  $('#howto').hide();
  $('#pleaseClick').hide();

  setTimeout(function(){
      $('#pleaseWait').fadeIn(1000);
  },100);
  setTimeout(function(){
    $('#howto').fadeIn(1000);
},300);

  setTimeout(function(){
    $('#pleaseClick').fadeIn(1000);
},1000);
});


document.getElementById("pleaseClick").addEventListener("click", function(){
  $(".instructions").css({"display":"none"})
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
    videoId: 'YSrMqiHlQZI',
    playerVars: {
      controls: 1,
      autoplay: 1,
      iv_load_policy: 3,
      loop: 1,
      playlist: 'YSrMqiHlQZI',
      fs: 0,
      modestbranding: 1,
      frameborder:0,
      vq:'highres'
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.setPlaybackQuality('highres');
  event.target.playVideo();

}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    event.target.setPlaybackQuality('highres');
    var get = $("#current-time");
    var txt = get.html();
    if (txt == ""){
      player.pauseVideo();
      console.log("video paused")
    }
    
    // Set the onclick event to the button for pause the YouTube video.
    setInterval(() => {
      let currentTime = player.getCurrentTime();
      let totalTime = player.getDuration();
      changeContent(currentTime);
      updatePlayer(currentTime, totalTime);
      clickOnPlayer(player, totalTime);
    }, 1000);

    document.getElementById('box').onclick = function() {
      player.pauseVideo();
      console.log("video paused")
  }

  document.body.onkeyup = function(e){
    if(e.keyCode == 32){
      player.pauseVideo();
    }
  };

  }
    if (event.data == YT.PlayerState.PAUSED) {
      document.getElementById('box').onclick = function() {
        player.playVideo();
        console.log("video plays")
    };           
      document.body.onkeyup = function(e){
        if(e.keyCode == 32){
          player.playVideo();
        }
      };
  }
}

window.onkeydown = function(e) { 
  return !(e.keyCode == 32 && e.target == document.body);
}; 

function stopVideo() {
  console.log('asdds');
}

document.getElementById("plus").addEventListener("click", function(){
  
  var div = document.getElementsByClassName('video')[0];
  var container = document.getElementsByClassName('container')[0];
  var matrix = $('.container').css('transform');

  // console.log(matrix) 

  if (matrix==`matrix(0.5, 0, 0, 0.5, 0, 0)`){
    container.style.setProperty('transform', 'scale(0.75)');
    div.style.top = "-40%";
    div.style.left = "-50%";
    }
  else if (matrix==`matrix(0.75, 0, 0, 0.75, 0, 0)`){
    container.style.setProperty('transform', 'scale(1)');
    div.style.top = "-25%";
    div.style.left = "-50%";
    }
  else if (matrix==`matrix(1, 0, 0, 1, 0, 0)`){
    container.style.setProperty('transform', 'scale(1.5)');
    div.style.top = "-10%";
    div.style.left = "-20%";
    }
  else if (matrix==`matrix(1.5, 0, 0, 1.5, 0, 0)`) {
    container.style.setProperty('transform', 'scale(2)');
    div.style.top = "0";
    div.style.left = "-20%";
  }
});

document.getElementById("minus").addEventListener("click", function(){
  var matrix = $('.container').css('transform');
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
    div.style.left = "-50%";
  }
  else if (matrix==`matrix(1.5, 0, 0, 1.5, 0, 0)`){
    container.style.setProperty('transform', 'scale(1)');
    div.style.top = "-25%";
    div.style.left = "-50%";
  }
  else if (matrix==`matrix(2, 0, 0, 2, 0, 0)`) {
    container.style.setProperty('transform', 'scale(1.5)');
    div.style.top = "-10%";
    div.style.left = "-20%";
  }
  else if (matrix==`matrix(2.5, 0, 0, 2.5, 0, 0)`) {
    container.style.setProperty('transform', 'scale(2)');
    div.style.top = "0";
    div.style.left = "-20%";
  }
});
