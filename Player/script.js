const videoPlayer = document.getElementById('video-player');
    const back10Button = document.getElementById('back-10');
    const playPauseButton = document.getElementById('play-pause');
    const forward10Button = document.getElementById('forward-10');

    back10Button.addEventListener('click', () => {
      videoPlayer.currentTime -= 10;
    });

    playPauseButton.addEventListener('click', () => {
      if (videoPlayer.paused) {
        videoPlayer.play();
        playPauseButton.textContent = 'Pause';
      } else {
        videoPlayer.pause();
        playPauseButton.textContent = 'Play';
      }
    });

    forward10Button.addEventListener('click', () => {
      videoPlayer.currentTime += 10;
    });

    videoPlayer.addEventListener('loadedmetadata', () => {
      playPauseButton.textContent = 'Play';
    });

    // Delete feature implementation
    const deleteButton = document.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
      if (confirm('Are you sure you want to delete the video?')) {
        videoPlayer.src = '';
        deleteButton.style.display = 'none';
      }
    });