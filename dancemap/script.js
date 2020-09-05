
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
  secondcol.innerHTML = `<p> ${entry['Artist']} – ${entry['Song Title']} &thinsp; ${entry['Date']} &thinsp; ${entry['Company']} &ensp;</p>`;
}

function changeContent(time) {
  if (time > 0 && time < 32) {
    visualiseOutput(64);
  } else if (time > 33 && time < 58) {
    visualiseOutput(63);
  } else if (time > 59 && time < 89) {
    visualiseOutput(62);
  } else if (time > 90 && time < 115) {
    visualiseOutput(61);
  } else if (time > 116 && time < 145) {
    visualiseOutput(60);
  } else if (time > 146 && time < 165) {
    visualiseOutput(59);
  } else if (time > 166 && time < 201) {
    visualiseOutput(58);
  } else if (time > 202 && time < 220) {
    visualiseOutput(57);
  } else if (time > 221 && time < 241) {
    visualiseOutput(56);
  } else if (time > 242 && time < 262) {
    visualiseOutput(55);
  } else if (time > 263 && time < 284) {
    visualiseOutput(54);
  } else if (time > 285 && time < 311) {
    visualiseOutput(53);
  } else if (time > 312 && time < 342) {
    visualiseOutput(52);
  } else if (time > 343 && time < 364) {
    visualiseOutput(51);
  } else if (time > 365 && time < 393) {
    visualiseOutput(50);
  } else if (time > 394 && time < 418) {
    visualiseOutput(49);
  } else if (time > 418 && time < 434) {
    visualiseOutput(48);
  } else if (time > 435 && time < 464) {
    visualiseOutput(47);
  } else if (time > 465 && time < 490) {
    visualiseOutput(46);
  } else if (time > 491 && time < 515) {
    visualiseOutput(45);
  } else if (time > 516 && time < 553) {
    visualiseOutput(44);
  } else if (time > 554 && time < 573) {
    visualiseOutput(43);
  } else if (time > 574 && time < 591) {
    visualiseOutput(42);
  } else if (time > 592 && time < 619) {
    visualiseOutput(41);
  } else if (time > 620 && time < 632) {
    visualiseOutput(40);
  } else if (time > 633 && time < 651) {
    visualiseOutput(39);
  } else if (time > 652 && time < 691) {
    visualiseOutput(38);
  } else if (time > 692 && time < 739) {
    visualiseOutput(37);
  } else if (time > 740 && time < 755) {
    visualiseOutput(36);
  } else if (time > 756 && time < 786) {
    visualiseOutput(35);
  } else if (time > 787 && time < 818) {
    visualiseOutput(34);
  } else if (time > 819 && time < 843) {
    visualiseOutput(33);
  } else if (time > 844 && time < 864) {
    visualiseOutput(32);
  } else if (time > 865 && time < 881) {
    visualiseOutput(31);
  } else if (time > 882 && time < 901) {
    visualiseOutput(30);
  } else if (time > 902 && time < 934) {
    visualiseOutput(29);
  } else if (time > 935 && time < 968) {
    visualiseOutput(28);
  } else if (time > 969 && time < 995) {
    visualiseOutput(27);
  } else if (time > 996 && time < 1024) {
    visualiseOutput(26);
  } else if (time > 1025 && time < 1042) {
    visualiseOutput(25);
  } else if (time > 1043 && time < 1059) {
    visualiseOutput(24);
  }else if (time > 1060 && time < 1091) {
    visualiseOutput(23);
  } else if (time > 1092 && time < 1111) {
    visualiseOutput(22);
  } else if (time > 1112 && time < 1139) {
    visualiseOutput(21);
  } else if (time > 1140 && time < 1172) {
    visualiseOutput(20);
  } else if (time > 1173 && time < 1201) {
    visualiseOutput(19);
  } else if (time > 1202 && time < 1234) {
    visualiseOutput(18);
  } else if (time > 1235 && time < 1280) {
    visualiseOutput(17);
  } else if (time > 1281 && time < 1312) {
    visualiseOutput(16);
  } else if (time > 1313 && time < 1347) {
    visualiseOutput(15);
  } else if (time > 1348 && time < 1376) {
    visualiseOutput(14);
  } else if (time > 1377 && time < 1405) {
    visualiseOutput(13);
  } else if (time > 1406 && time < 1437) {
    visualiseOutput(12);
  } else if (time > 1438 && time < 1468) {
    visualiseOutput(11);
  } else if (time > 1469 && time < 1505) {
    visualiseOutput(10);
  } else if (time > 1506 && time < 1536) {
    visualiseOutput(9);
  } else if (time > 1537 && time < 1559) {
    visualiseOutput(8);
  }else if (time > 1560 && time < 1586) {
    visualiseOutput(7);
  } else if (time > 1587 && time < 1614) {
    visualiseOutput(6);
  } else if (time > 1615 && time < 1637) {
    visualiseOutput(5);
  } else if (time > 1638 && time < 1656) {
    visualiseOutput(4);
  } else if (time > 1567 && time < 1672) {
    visualiseOutput(3);
  } else if (time > 1673 && time < 1692) {
    visualiseOutput(2);
  } else if (time > 1693 && time < 1717) {
    visualiseOutput(1);
  } 
}

function updatePlayer(currentTime, totalTime) {

  // console.log(currentTime);
  
  progress = (currentTime / totalTime) * 100;
  progressApx = progress.toFixed(1);
  progressBar.style.width = `${progressApx}%`;

  let currentTimeFormatted = new Date(currentTime * 1000)
    .toISOString()
    .substr(11, 8);

  let totalTimeFormatted = new Date(totalTime * 1000)
    .toISOString()
    .substr(11, 8);

  currentTimeSpan.innerHTML = `${currentTimeFormatted} / ${totalTimeFormatted}`;
  // if (currentTimeSpan.innerHTML == `${currentTimeFormatted} / ${totalTimeFormatted}`){
  //   clearInterval();
  //   }
};


function clickOnPlayer(player, totalTime) {
  let progressBarWidth = progressBarContainer.clientWidth;

  progressBarContainer.addEventListener('mousemove', (e) => {
    let desiredTimeSpanPosition = e.offsetX - desiredTimeSpan.clientWidth / 2;
    let desiredTimeSpanPositionApx = desiredTimeSpanPosition.toFixed(1);
    let desiredTime = (e.offsetX / progressBarWidth) * totalTime;
    let desiredTimeFormatted = new Date(desiredTime * 1000)
      .toISOString()
      .substr(11, 8);

    desiredTimeSpan.classList.add('active');
    desiredTimeSpan.style.left = `${desiredTimeSpanPositionApx}px`;
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

  // document.getElementById("placeholder").addEventListener("load", function(){
  //   player.playVideo();
  //   console.log("video autoplays")
  // });

  $('#pleaseWait').hide();
  $('#howto').hide();
  $('#pleaseClick').hide();

setTimeout(function(){
  $('#pleaseWait').fadeIn(1000);
},100);
setTimeout(function(){
$('#howto').fadeIn(1000);
},500);

setTimeout(function(){
$('#pleaseClick').fadeIn(1000);
},1000);
});

document.getElementById("placeholder").addEventListener("click", function(){
  $(".instructions").css({"display":"none"})
  document.getElementById('placeholder').style.display = 'none';
  player.playVideo();
  console.log("video plays on click box")
});

document.getElementById("pleaseClick").addEventListener("click", function(){
  player.pauseVideo();
  console.log("video pauses on click box")
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
      controls: 0,
      autoplay: 1,
      iv_load_policy: 3,
      loop: 1,
      playlist: 'YSrMqiHlQZI',
      fs: 0,
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
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    var get = $("#current-time");
    var txt = get.html();
    if (txt == "00:00:00 / 00:28:37"){
      player.pauseVideo();
      console.log("video paused for load")
    }
      setInterval(() => {
        let currentTimeMax = player.getCurrentTime();
        let currentTime = parseInt(currentTimeMax);
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
        console.log("video plays on click")
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
  console.log('initial video pause');
}


document.getElementById("plus").addEventListener("click", function(){
  
  var div = document.getElementsByClassName('video')[0];
  var container = document.getElementsByClassName('container')[0];
  var matrix = $('.container').css('transform');


  // if (matrix==`matrix(0.5, 0, 0, 0.5, 0, 0)`){
  //   container.style.setProperty('transform', 'scale(0.75)');
  //   div.style.top = "-20%";
  //   div.style.left = "-55%";
  //   }
  if (matrix==`matrix(0.75, 0, 0, 0.75, 0, 0)`){
    container.style.setProperty('transform', 'scale(1)');
    div.style.top = "-20%";
    div.style.left = "-40%";
    }
  else if (matrix==`matrix(1, 0, 0, 1, 0, 0)`){
    container.style.setProperty('transform', 'scale(1.5)');
    div.style.top = "-5%";
    div.style.left = "-30%";
    }
  else if (matrix==`matrix(1.5, 0, 0, 1.5, 0, 0)`) {
    container.style.setProperty('transform', 'scale(2)');
    div.style.top = "5%";
    div.style.left = "-15%";
  }
});

document.getElementById("minus").addEventListener("click", function(){
  var matrix = $('.container').css('transform');
  var div = document.getElementsByClassName('video')[0];
  var container = document.getElementsByClassName('container')[0];

  // if (matrix==`matrix(0.75, 0, 0, 0.75, 0, 0)`){
  //   container.style.setProperty('transform', 'scale(0.5)');
  //   div.style.top = "-65%";
  //   div.style.left = "-120%";
  // }
  if (matrix==`matrix(1, 0, 0, 1, 0, 0)`){
    container.style.setProperty('transform', 'scale(0.75)');
    div.style.top = "-20%";
    div.style.left = "-55%";
  }
  else if (matrix==`matrix(1.5, 0, 0, 1.5, 0, 0)`){
    container.style.setProperty('transform', 'scale(1)');
    div.style.top = "-20%";
    div.style.left = "-40%";
  }
  else if (matrix==`matrix(2, 0, 0, 2, 0, 0)`) {
    container.style.setProperty('transform', 'scale(1.5)');
    div.style.top = "-5%";
    div.style.left = "-30%";
  }
  // else if (matrix==`matrix(2.5, 0, 0, 2.5, 0, 0)`) {
  //   container.style.setProperty('transform', 'scale(2)');
  //   div.style.top = "0";
  //   div.style.left = "-15%";
  // }
});

var idleTime = 0;
$(document).ready(function () {
    //Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

    //Zero the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        idleTime = 0;
    });
    $(this).keypress(function (e) {
        idleTime = 0;
    });
});

function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 3) { // 3 minutes
        window.location.reload();
    }
}