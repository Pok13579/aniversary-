let slideIndex = 1;
let slide1Timeout;
let isVideoPlaying = false;
const audio = document.getElementById('audio-player');
const progress = document.getElementById('progress');
const currentTimeElem = document.getElementById('current-time');
const totalTimeElem = document.getElementById('total-time');

showSlides(slideIndex);

// Automatically play the audio on page load
//window.onload = () => {
//    setTimeout(() => {
//        audio.play().catch(error => {
//            console.log('Autoplay was prevented:', error);
//        });
//    }, 2000); // Delay of 1 second
//};

window.onload = () => {
    if (document.readyState === 'complete') {
        // Page has fully loaded
        audio.play().catch(error => {
            console.log('Autoplay was prevented:', error);
        });
    } else {
        // Check if the page loads later
        document.onreadystatechange = () => {
            if (document.readyState === 'complete') {
                audio.play().catch(error => {
                    console.log('Autoplay was prevented:', error);
                });
            }
        };
    }
};


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";

    // Show video if it's the first slide
    if (slideIndex === 1) {
        const video = document.getElementById('slide1-video');
        const img = document.getElementById('slide1-img');
        if (isVideoPlaying) {
            video.pause();
            video.style.display = "none";
            img.style.display = "block";
            isVideoPlaying = false;
        } else {
            img.style.display = "none";
            video.style.display = "block";
            video.play();
            isVideoPlaying = true;
        }
    } else {
        const video = document.getElementById('slide1-video');
        const img = document.getElementById('slide1-img');
        video.pause();
        video.style.display = "none";
        img.style.display = "block";
        isVideoPlaying = false;
    }
}

// Update the progress bar and current time
audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    progress.style.width = (currentTime / duration) * 100 + '%';
    currentTimeElem.textContent = formatTime(currentTime);
    totalTimeElem.textContent = formatTime(duration);
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function playPause() {
    if (audio.paused) {
        audio.play();
        document.getElementById('play-button').innerHTML = '&#10074;&#10074;';
    } else {
        audio.pause();
        document.getElementById('play-button').innerHTML = '&#9654;';
    }
}

function prevSong() {
    // Logic for previous song
    alert("Previous song feature is not implemented yet.");
}

function nextSong() {
    // Logic for next song
    alert("Next song feature is not implemented yet.");
}