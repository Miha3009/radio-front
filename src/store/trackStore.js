import { makeAutoObservable } from "mobx";
import TrackService from "services/TrackService";
import audioStore from "store/audioStore";
import channelStore from "store/channelStore";

class TrackStore {
    current = {};

    constructor() {
        makeAutoObservable(this);
    }

    async fetchTrack(trackId) {
    }

    async fetchCurrentTrack(channelId) {
        if (!channelId) {
            return;
        }
        try {
            const response = await TrackService.getCurrentTrack(channelId);
            this.current = response.data;
            channelStore.setListeners(response.data.listeners);
            audioStore.duration = this.current.duration / 1000000000;
            audioStore.currentTime = this.current.currentTime / 1000000000;
            audioStore.title = this.current.title;
        } catch (e) {
            console.error(e.message);
        }
    }

    toggleLike() {
        if (Object.keys(this.current).length !== 0) {
            this.current.liked = !this.current.liked;
            if (this.current.liked) {
                this.current.likeCount += 1;
            } else {
                this.current.likeCount -= 1;
            }
            TrackService.setLike(this.current.id, this.current.liked);
        }
    }

    setLikes(likes) {
        this.current.likeCount = likes;
    }
}

export default new TrackStore();