import Hls from "hls.js";
import { makeAutoObservable } from "mobx";
import channelStore from "store/channelStore";
import trackStore from "store/trackStore";

class AudioStore {
    audio = null;
    title = "";
    isPlaying = false;
    duration = 0;
    currentTime = 0;
    hls = null;

    constructor() {
        this.audio = document.getElementById("audio");
        this.audio.parent = this;
        setInterval(this.updateCurrentTime.bind(this), 1000);
        makeAutoObservable(this);
    }

    loadhls(src) {
        if (this.hls) {
            this.hls.destroy();
        }
        this.hls = new Hls();
        this.hls.attachMedia(this.audio);
        this.hls.loadSource(src);
        this.hls.on(Hls.Events.ERROR, function (event, data) {
            if(data.response.code === 404) {
                setTimeout(() => AudioStore.loadhls(src), 1000)}
            }
        );
        if (this.isPlaying) {
            this.audio.play();
        } else {
            this.audio.pause();
        }
    }

    play() {
        this.isPlaying = true;
        this.audio.play();
        trackStore.fetchCurrentTrack(channelStore.current.id);
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

    setCurrentTime(currentTime) {
        this.currentTime = currentTime;
    }

    updateCurrentTime() {
        if(!this.isPlaying) return;
        if(this.currentTime < this.duration) {
            this.setCurrentTime(this.currentTime + 1);
        } else {
            if (channelStore.current?.id) {
                trackStore.fetchCurrentTrack(channelStore.current.id);
            }
        }
    }

    setSource(src) {
        this.audio.srcObject = src;
        if(this.isPlaying) {
            this.audio.play();
        } else {
            this.audio.pause();
        }
    }
}

export default new AudioStore();