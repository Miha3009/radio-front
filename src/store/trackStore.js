import { makeAutoObservable } from "mobx";
import TrackService from "services/TrackService";
import audioStore from "store/audioStore";

class TrackStore {
    current = {};

    constructor() {
        makeAutoObservable(this);
    }

    async fetchTrack(trackId) {
        this.current = {
            id: trackId,
            title: "You’re Gonna Go Far, Kid",
            author: "The Offspring",
            src: "https://randommusic.insomnia247.nl/1000/The Offspring - You're Gonna Go Far, Kid.mp3",
            year: 2008,
            likeCount: 125,
            isLiked: false,
        };
        audioStore.load(this.current.src, this.current.title);
        audioStore.pause();
    }

    toggleLike() {
        if (Object.keys(this.current).length !== 0) {
            this.current.isLiked = !this.current.isLiked;
            if (this.current.isLiked) {
                this.current.likeCount += 1;
            } else {
                this.current.likeCount -= 1;
            }
            TrackService.setLike(this.current.id, this.current.isLiked);
        }
    }
}

export default new TrackStore();