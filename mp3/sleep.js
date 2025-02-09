import {Howl} from 'howler';


const sound = new Howl({
    src: ['static/soundFiles/sleepTwo.mp3']
});

sound.play();