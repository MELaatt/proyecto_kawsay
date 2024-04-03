const kawsay = document.getElementById("kawsay")



window.addEventListener('scroll', function () {

let miScroll = window.scrollY /8;

    if(window.scrollY >= 300){
        kawsay.style.transitionDuration=`1s`
        kawsay.classList.remove (`opacity-0`);
        kawsay.classList.remove(`mt-5`);
    }

    else {
        kawsay.style.transitionDuration = '1s';
        kawsay.classList.add('opacity-0');
        kawsay.classList.add('mt-5');
    }
});


const piedepaginaok = document.getElementById("piedepaginaok");

window.addEventListener('scroll', function () {
    let miScroll = window.scrollY / 8;

    if (window.scrollY >= 2445.45458984375) {
        piedepaginaok.style.transitionDuration = '1s';
        piedepaginaok.classList.remove('opacity-0');
        piedepaginaok.classList.remove('mt-5');
    } else {
        piedepaginaok.style.transitionDuration = '1s';
        piedepaginaok.classList.add('opacity-0');
        piedepaginaok.classList.add('mt-5');
    }
});


function playVideo(videoId) {
    var video = document.getElementById(videoId);
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }