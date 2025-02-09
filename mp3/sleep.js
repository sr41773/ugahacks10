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
  onplay: function () {
    console.log("Sound started playing.");
    const duration = sound.duration();
    setDuration(duration); // Set duration when audio starts
  },
  onseek: function () {
    const currentTime = sound.seek();
    setCurrentTime(currentTime); // Update currentTime
  },
  onend: function () {
    console.log("Audio ended");
    playNextSound(setProgress, setDuration, setCurrentTime);
  },
});

export const playSound = (setProgress, setDuration, setCurrentTime) => {
  console.log("playSound function called");
  sound.play();
  setInterval(() => {
    const currentProgress = sound.seek() / sound.duration() * 100;
    setProgress(currentProgress);
    setCurrentTime(sound.seek()); // Update currentTime
  }, 1000);
};

export const pauseSound = () => {
  console.log("pauseSound function called");
  sound.pause();
};

export const playNextSound = (setProgress, setDuration, setCurrentTime) => {
  console.log("playNextSound function called");
  sound.stop();
  currentIndex = (currentIndex + 1) % playlist.length;
  sound = new Howl({
    src: [playlist[currentIndex]],
    html5: true,
    onplay: function () {
      const duration = sound.duration();
      setDuration(duration); // Set duration for the next track
    },
    onseek: function () {
      const currentTime = sound.seek();
      setCurrentTime(currentTime); // Update currentTime
    },
  });
  sound.play();
};
