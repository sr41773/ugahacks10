import { Howl } from 'howler';


const playlist = ['/sound/soundFiles/sleepTwo.mp3', '/sound/soundFiles/sleepThree.mp3', '/sound/soundFiles/sleepFour.mp3'];
let currentIndex = 0;


let sound = new Howl({
src: [playlist[currentIndex]],
html5: true,
});

export const playSound = () => {
console.log('playSound function called');
sound.play();
};

export const pauseSound = () => {
console.log('pauseSound function called');
sound.pause();
};

export const playNextSound = () => {
console.log('playNextSound function called');
sound.stop();
currentIndex = (currentIndex + 1) % playlist.length;
sound = new Howl({
src: [playlist[currentIndex]],
html5: true,
})
sound.play();
}