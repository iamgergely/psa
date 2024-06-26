window.addEventListener('load', () => {
    const playButton = document.getElementById('play-button');
    const audio = document.getElementById('theme-music');
    const starWarsSection = document.querySelector('.star-wars');

    playButton.addEventListener('click', () => {
        audio.play();
        starWarsSection.style.display = 'block';
        playButton.style.display = 'none';
    });
});