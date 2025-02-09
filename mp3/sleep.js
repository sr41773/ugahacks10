import { Howl } from "howler";

const playlist = [
  "/sound/soundFiles/sleepTwo.mp3",
  "/sound/soundFiles/sleepThree.mp3",
  "/sound/soundFiles/sleepFour.mp3",
];
let currentIndex = 0;

let sound = new Howl({
  src: [playlist[currentIndex]],
  html5: true,
  onload: function () {
    const duration = sound.duration();
    setDuration(duration); // Set the duration once the sound is fully loaded
  },
  onplay: function () {
    playSound(setProgress, setDuration, setCurrentTime); // Start playing the sound
  },
  onseek: function () {
    const currentTime = sound.seek();
    setCurrentTime(currentTime); // Update current time whenever it's updated
  },
  onend: function () {
    playNextSound(setProgress, setDuration, setCurrentTime); // Go to next sound once current track ends
  },
});

export const playSound = (setProgress, setDuration, setCurrentTime) => {
  
  // If the sound is already playing, do not reload it
  if (!sound.playing()) {
    sound.play();
  }
  
  setInterval(() => {
    const currentProgress = sound.seek() / sound.duration() * 100;
    setProgress(currentProgress);
    setCurrentTime(sound.seek()); // Update currentTime every second
  }, 1000);
};

export const pauseSound = () => {
  sound.pause();
};

export const playNextSound = (setProgress, setDuration, setCurrentTime) => {

  sound.stop();
  currentIndex = (currentIndex + 1) % playlist.length;

  // Reload the next sound
  sound = new Howl({
    src: [playlist[currentIndex]],
    html5: true,
    onload: function () {
      const duration = sound.duration();
      setDuration(duration); // Set the duration when new sound is loaded
    },
    onseek: function () {
      const currentTime = sound.seek();
      setCurrentTime(currentTime); // Update current time
    },
    onend: function () {
      playNextSound(setProgress, setDuration, setCurrentTime);
    },
  });

  sound.play();
};
