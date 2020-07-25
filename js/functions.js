/*
Amplitude.init({
  "songs": [
    {
      "name": "Perf Publique - Le Ciel",
      "artist": "Orcæ",
      "date": "18 / 01 / 2020",
      "url": "http://arcan.io/orcae/orcæ_publicperf_Ciel_200118.mp3",
      "cover_art_url": "http://arcan.io/orcae/D.O.S./art.jpg"
    },
    {
      "name": "Perf Publique - Festival Modulations",
      "artist": "Orcæ",
      "date": "09 / 03 / 2019",
      "url": "http://arcan.io/orcae/orcæ_publicperf_Modulations_190309.mp3",
      "cover_art_url": "http://arcan.io/orcae/D.O.S./art.jpg"
    },
    {
      "name": "Perf Publique - La Belle Électrique",
      "artist": "Orcæ",
      "date": "19 / 10 / 2018",
      "url": "http://arcan.io/orcae/orcæ_publicperf_BelleElectrique_181019.mp3",
      "cover_art_url": "http://arcan.io/orcae/D.O.S./art.jpg"
    }
  ],
  "playlists": {
    "futureplaylist": {
      songs: [
        {
          "name": "First",
          "artist": "Orcæ",
          "album": "Soon It Will Be Cold Enough",
          "url": "../songs/FirstSnow-Emancipator.mp3",
          "cover_art_url": "../tmpimg/soon-it-will-be-cold-enough.jpg"
        },
        {
          "name": "Second",
          "artist": "Orcæ",
          "album": "Dusk To Dawn",
          "url": "../songs/DuskToDawn-Emancipator.mp3",
          "cover_art_url": "../tmpimg/from-dusk-to-dawn.jpg"
        },
        {
          "name": "Third",
          "artist": "Orcæ",
          "album": "Soon It Will Be Cold Enough",
          "url": "../songs/Anthem-Emancipator.mp3",
          "cover_art_url": "../tmpimg/soon-it-will-be-cold-enough.jpg"
        }
      ]
    },
    "D.O.S.": {
      songs: [
        {
          "name": "Captain Scarlet",
          "artist": "Orcæ",
          "album": "D.O.S.",
          "url": "http://arcan.io/orcae/D.O.S./01 - Captain Scarlet.mp3",
          "cover_art_url": "http://arcan.io/orcae/D.O.S./art.jpg"
        },
        {
          "name": "Undercurrents",
          "artist": "Orcæ",
          "album": "D.O.S.",
          "url": "http://arcan.io/orcae/D.O.S./02 - Undercurrents.mp3",
          "cover_art_url": "http://arcan.io/orcae/D.O.S./art.jpg"
        },
        {
          "name": "LaosPad",
          "artist": "Orcæ",
          "album": "D.O.S.",
          "url": "http://arcan.io/orcae/D.O.S./03 - LaosPad.mp3",
          "cover_art_url": "http://arcan.io/orcae/D.O.S./art.jpg"
        },
        {
          "name": "Vitrified Orchard",
          "artist": "Orcæ",
          "album": "D.O.S.",
          "url": "http://arcan.io/orcae/D.O.S./04 - Vitrified Orchard.mp3",
          "cover_art_url": "http://arcan.io/orcae/D.O.S./art.jpg"
        },
        {
          "name": "Aeromancy",
          "artist": "Orcæ",
          "album": "D.O.S.",
          "url": "http://arcan.io/orcae/D.O.S./05 - Aeromancy.mp3",
          "cover_art_url": "http://arcan.io/orcae/D.O.S./art.jpg"
        },
        {
          "name": "Hang Son Doong",
          "artist": "Orcæ",
          "album": "D.O.S.",
          "url": "http://arcan.io/orcae/D.O.S./06 - Hang Son Doong.mp3",
          "cover_art_url": "http://arcan.io/orcae/D.O.S./art.jpg"
        },
        {
          "name": "Don't Let The Bugs Bite",
          "artist": "Orcæ",
          "album": "D.O.S.",
          "url": "http://arcan.io/orcae/D.O.S./07 - Don't Let The Bugs Bite.mp3",
          "cover_art_url": "http://arcan.io/orcae/D.O.S./art.jpg"
        }
      ]
    }
  }
});
*/

document.getElementById('song-played-progress-1').addEventListener('click', function( e ){
  if( Amplitude.getActiveIndex() == 0 ){
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;

    Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
  }
});

document.getElementById('song-played-progress-2').addEventListener('click', function( e ){
  if( Amplitude.getActiveIndex() == 1 ){
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;

    Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
  }
});

document.getElementById('song-played-progress-3').addEventListener('click', function( e ){
  if( Amplitude.getActiveIndex() == 2 ){
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;

    Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
  }
});

document.getElementById('song-played-progress-4').addEventListener('click', function( e ){
  if( Amplitude.getActiveIndex() == 3 ){
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;

    Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
  }
});

document.getElementById('song-played-progress-5').addEventListener('click', function( e ){
  if( Amplitude.getActiveIndex() == 4 ){
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;

    Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
  }
});

document.getElementById('song-played-progress-6').addEventListener('click', function( e ){
  if( Amplitude.getActiveIndex() == 5 ){
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;

    Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
  }
});


/*

document.getElementsByClassName('show-playlist')[0].addEventListener('click', function(){
  document.getElementById('white-player-playlist-container').classList.remove('slide-out-top');
  document.getElementById('white-player-playlist-container').classList.add('slide-in-top');
  document.getElementById('white-player-playlist-container').style.display = "block";
});


document.getElementsByClassName('close-playlist')[0].addEventListener('click', function(){
  document.getElementById('white-player-playlist-container').classList.remove('slide-in-top');
  document.getElementById('white-player-playlist-container').classList.add('slide-out-top');
  document.getElementById('white-player-playlist-container').style.display = "none";
});


*/
