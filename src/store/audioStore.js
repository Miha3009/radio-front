import { makeAutoObservable } from "mobx";

class AudioStore {
    audio = new Audio("");
    title = "";
    isPlaying = false;
    duration = 0;
    currentTime = 0;

    constructor() {
        this.audio.parent = this;
        this.audio.addEventListener('canplaythrough', (e) => e.target.parent.setDuration(e.target.duration), false);
        setInterval(this.updateCurrentTime.bind(this), 1000);
        makeAutoObservable(this);
    }

    load(src, title) {
        this.audio.src = src;
        this.audio.load();
        this.title = title;
    }

    play() {
        this.isPlaying = true;
        this.audio.play();
    }

    pause() {
        this.isPlaying = false;
        this.audio.pause();
    }

    setVolume(volume) {
        this.audio.volume = volume;
    }

    setDuration(duration) {
        this.duration = duration;
    }

    updateCurrentTime() {
        if (this.audio?.currentTime) {
            this.currentTime = this.audio.currentTime;
        } else {
            this.currentTime = 0;
        }
    }
}

export default new AudioStore();