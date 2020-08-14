

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
