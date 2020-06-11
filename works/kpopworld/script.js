const data = [
  {
    '1': {
      SearchResult: 10713,
      Bodies: 6,
      'Dancing Bodies': 64278,
      'Total Bodies': 64278,
      Company: 'Cube Entertainment',
      Artist: '(G)I-dle ((여자)아이들)',
      'Song Title': 'Oh My God',
      Date: '06.04.2020',
      Viewcount: 91222062,
      Countries:
        '1. Thailand  2. Vietnam  3. Indonesia  4. United States <br> 5. Brazil  6. Taiwan  7. India  8. Mexico  9. Philippines',
    },
    '2': {
      SearchResult: 51082,
      Bodies: 5,
      'Dancing Bodies': 255410,
      'Total Bodies': 319688,
      Company: 'JYP Entertainment ',
      Artist: 'ITZY (있지)',
      'Song Title': 'Wannabe',
      Date: '09.03.2020',
      Viewcount: 136934108,
      Countries:
        '1. Indonesia  2. Japan  3. Thailand  4. Phillipines  <br>5. Vietnam,  6. United States  7. Brazil  8. Mexico  9. Taiwan',
    },
    '3': {
      SearchResult: 21198,
      Bodies: 5,
      'Dancing Bodies': 105990,
      'Total Bodies': 425678,
      Company: 'Big Hit Entertainment',
      Artist: 'BTS (방탄소년단)',
      'Song Title': 'On',
      Date: '27.02.2020',
      Viewcount: 136950417,
      Countries:
        '1. United States  2. Indonesia  3. Brazil  4. Mexico  <br>5. Japan  6. Vietnam  7. Thailand  8. Philippines  9. India',
    },
    '4': {
      SearchResult: 29531,
      Bodies: 6,
      'Dancing Bodies': 177186,
      'Total Bodies': 602864,
      Company: 'Yuehua Entertainment',
      Artist: 'Everglow (에버글로우)',
      'Song Title': 'Dun Dun',
      Date: '03.02.2020',
      Viewcount: 123784414,
      Countries:
        '1. Vietnam  2. Indonesia  3. Thailand  4. Brazil  <br>5. Mexico  6. United States  7. Philippines  8. Japan  9. Russia',
    },
    '5': {
      SearchResult: 49555,
      Bodies: 4,
      'Dancing Bodies': 198220,
      'Total Bodies': 801084,
      Company: 'RBW',
      Artist: 'Mamamoo (마마무)',
      'Song Title': 'Hip',
      Date: '14.11.2019',
      Viewcount: 119826496,
      Countries:
        '1. Japan  2. United States  3. Mexico  4. Taiwan  <br>5. Brazil  6. Thailand  7. Vietnam  8. Indonesia  9. Philippines',
    },
  },
];

const progressBar = document.getElementById('progress');
const progressBarContainer = document.getElementsByClassName('slider')[0];
const desiredTimeSpan = document.getElementById('desired-time');
const currentTimeSpan = document.getElementById('current-time');
let progress = 0;

function visualiseOutput(id) {
  let countries = document.getElementById('topcountries');
  let numDancingBodies = document.getElementById('num-dancingbodies');
  let firstcol = document.getElementById('firstcol');
  let secondcol = document.getElementById('secondcol');
  let totalBodies = document.getElementById('num-total');

  entry = data[0][id];
  countries.innerHTML = `<p>${entry['Countries']}</p>`;
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

document.getElementById("placeholder").addEventListener("click", function(){
  this.style.display = 'none';
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
    videoId: '8PyoEoCkuVQ',
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
    // Set the onclick event to the button for pause the YouTube video.
    event.target.setPlaybackQuality('hd1080');
    setInterval(() => {
      let currentTime = player.getCurrentTime();
      let totalTime = player.getDuration();
      changeContent(currentTime);
      updatePlayer(currentTime, totalTime);
      clickOnPlayer(player, totalTime);
    }, 1000);

    var get = $("#current-time");
    var txt = get.html();

    // console.log(txt);

    if (txt == ""){
      player.pauseVideo();
      console.log("video paused")
    }

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
