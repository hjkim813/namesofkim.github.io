const data = [
  {
    "1": {
      "SearchResult": 10713,
      "Bodies": 6,
      "Dancing Bodies": 64278,
      "Total Bodies": 64278,
      "Company": "Cube Entertainment",
      "Artist": "(G)I-dle ((여자)아이들)",
      "Song Title": "Oh My God",
      "Date": "06.04.2020",
      "Viewcount": 91222062,
      "Countries": "1. Thailand  2. Vietnam  3. Indonesia  4. United States  5. Brazil  6. Taiwan  7. India  8. Mexico  9. Philippines"
    },
    "2": {
      "SearchResult": 51082,
      "Bodies": 5,
      "Dancing Bodies": 255410,
      "Total Bodies": 319688,
      "Company": "JYP Entertainment ",
      "Artist": "ITZY (있지)",
      "Song Title": "Wannabe",
      "Date": "09.03.2020",
      "Viewcount": 136934108,
      "Countries": "1. Indonesia  2. Japan  3. Thailand  4. Phillipines  5. Vietnam,  6. United States  7. Brazil  8. Mexico  9. Taiwan"
    },
    "3": {
      "SearchResult": 21198,
      "Bodies": 5,
      "Dancing Bodies": 105990,
      "Total Bodies": 425678,
      "Company": "Big Hit Entertainment",
      "Artist": "BTS (방탄소년단)",
      "Song Title": "On",
      "Date": "27.02.2020",
      "Viewcount": 136950417,
      "Countries": "1. United States  2. Indonesia  3. Brazil  4. Mexico  5. Japan  6. Vietnam  7. Thailand  8. Philippines  9. India"
    },
    "4": {
      "SearchResult": 29531,
      "Bodies": 6,
      "Dancing Bodies": 177186,
      "Total Bodies": 602864,
      "Company": "Yuehua Entertainment",
      "Artist": "Everglow (에버글로우)",
      "Song Title": "Dun Dun",
      "Date": "03.02.2020",
      "Viewcount": 123784414,
      "Countries": "1. Vietnam  2. Indonesia  3. Thailand  4. Brazil  5. Mexico  6. United States  7. Philippines  8. Japan  9. Russia"
    },
    "5": {
      "SearchResult": 49555,
      "Bodies": 4,
      "Dancing Bodies": 198220,
      "Total Bodies": 801084,
      "Company": "RBW",
      "Artist": "Mamamoo (마마무)",
      "Song Title": "Hip",
      "Date": "14.11.2019",
      "Viewcount": 119826496,
      "Countries": "1. Japan  2. United States  3. Mexico  4. Taiwan  5. Brazil  6. Thailand  7. Vietnam  8. Indonesia  9. Philippines"
    },
  },
];

function visualiseOutput(id) {

  let countries = document.getElementById('topcountries');
  let numDancingBodies = document.getElementById('num-dancingbodies');
  let firstline = document.getElementById('firstline'); 
  let secondline = document.getElementById('secondline'); 
  let thirdline = document.getElementById('thirdline'); 
  let totalBodies = document.getElementById('num-total'); 

  entry = data[0][id];
  countries.innerHTML = entry['Countries'];
  numDancingBodies.innerHTML = `Dancing Bodies: ${entry['Dancing Bodies']}`;
  totalBodies.innerHTML = entry['Total Bodies']
  firstline.innerHTML = `${entry['Artist']} – ${entry['Song Title']}`;
  secondline.innerHTML =`${entry['Company']}   ${entry['Date']}`;
  thirdline.innerHTML = entry['Viewcount'];

}


function changeContent(time) {
  if (time > 0 && time < 5) {
    visualiseOutput(1);
  } 
   else if (time > 5 && time < 10) {
    visualiseOutput(2);
  }
  else if (time > 10 && time < 15) {
    visualiseOutput(3);
  }
  else if (time > 15 && time < 20) {
    visualiseOutput(4);
  }
  else if (time > 20 && time < 25) {
    visualiseOutput(5);
  }

// position = 0;
// function scrollText() {
//     document.countries = countries.substring(position, countries.length) + countries.substring(0, position); 
//     position++;
//     if (position > title.length) position = 0;
//     textScroll = window.setTimeout(scrollText,170);
// }
// scrollText();


}





  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
      
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '0',
      width: '0',
      videoId: 'b9M2CwUr0KU',
      playerVars: {
        'controls': 1,
        'autoplay':0,
        'iv_load_policy':3,
        'loop':1,
        'fs':0,
        // 'rel':0,
        'modestbranding':1
    },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.playVideo();
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
      event.target.setPlaybackQuality('hd1080'); 
      setInterval(()=>{
        let time = player.getCurrentTime()
        changeContent(time)
      }, 1000)
      
    }
  }
  function stopVideo() {
    console.log('asdds');
  }




