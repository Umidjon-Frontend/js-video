const videoContainer = document.querySelector('.video-container'),
    btnVideo = document. querySelector('.btn-video');

btnVideo.addEventListener('click', ()=>{
    btnVideo.classList.toggle('slide');
    if (btnVideo.classList.contains('slide')) {
        videoContainer.pause();
    }else{
        videoContainer.play();
    }
})