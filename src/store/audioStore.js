import { makeAutoObservable } from "mobx";

class AudioStore {
    audio = null;
    title = "";
    isPlaying = false;
    duration = 0;
    currentTime = 0;

    constructor() {
        this.audio = document.getElementById("audio");
        /*this.audio.parent = this;
        this.audio.addEventListener('canplaythrough', (e) => e.target.parent.setDuration(e.target.duration), false);
        setInterval(this.updateCurrentTime.bind(this), 1000);*/
        makeAutoObservable(this);
    }

    load(src, title) {
        /*this.audio.src = src;
        this.audio.load();
        this.title = title;*/
    }

    play() {
        this.isPlaying = true;
        //this.audio.play();
    }

    pause() {
        this.isPlaying = false;
        //this.audio.pause();
    }

    setVolume(volume) {
        this.audio.volume = volume;
    }

    setDuration(duration) {
        this.duration = duration;
    }

    setCurrentTime(currentTime) {
        this.currentTime = currentTime;
    }

    updateCurrentTime() {
        if (this.audio?.currentTime) {
            this.setCurrentTime(this.audio.currentTime);
        } else {
            this.setCurrentTime(0);
        }
    }

    setSource(src) {
        console.log(src);
        console.log(src.getTracks()[0]);
        this.audio.srcObject = src;
        this.audio.play();
        this.audio.value = 1;
        this.audio.controls = true;
        console.log(this.audio);
    }
}

export default new AudioStore();