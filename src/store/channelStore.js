import { makeAutoObservable } from "mobx";
import ChannelService from "services/ChannelService";
import trackStore from "store/trackStore";

class ChannelStore {
    channels = [];
    current = {};

    constructor() {
        makeAutoObservable(this, {}, {deep: true});
        this.fetchChannels();
    }

    async selectChannel(channelId) {
        try {
            this.current = this.channels.filter(channel => channel.id == channelId)[0];
            this.current.programNext = [{ time: "14:05", name: "Dharia - Left Untold" }, { time: "14:08", name: "Sigher - On time" }, { time: "14:11", name: "Sport podcasts" }, { time: "14:16", name: "FullerG - Boodbye" }];
            this.current.programPrev = [{ time: "14:03", name: "Dharia - Left Untold" }, { time: "14:00", name: "Новости" }, { time: "13:57", name: "Pvshv - Believe" }];
            trackStore.fetchTrack(1);
        } catch (e) {
            console.error(e.message);
        }
    }

    async fetchChannels() {
        try {
            const response = await ChannelService.getChannelList();
            this.channels = response.data;
            if (this.channels.length > 0 && !this.current.id) {
                this.selectChannel(0);
            }
        } catch (e) {
            console.error(e.message);
        }
    };
}

export default new ChannelStore()