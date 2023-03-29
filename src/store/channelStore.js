import { HOST_IP } from "http";
import { makeAutoObservable } from "mobx";
import ChannelService from "services/ChannelService";
import audioStore from "store/audioStore";
import trackStore from "store/trackStore";

class ChannelStore {
    channels = [];
    current = {};
    listeners = 0;

    constructor() {
        makeAutoObservable(this, {}, {deep: true});
        this.fetchChannels();
    }

    async selectChannel(channelId) {
        try {
            //audioStore.pause();
            audioStore.loadhls(`http://${HOST_IP}:3333/app/channel${channelId}/llhls.m3u8`)
            const response = await ChannelService.getChannelInfo(channelId);
            this.current = response.data;
            this.fetchSchedule(channelId);
            /*this.current.programNext = [{ time: "14:05", name: "Dharia - Left Untold" }, { time: "14:08", name: "Sigher - On time" }, { time: "14:11", name: "Sport podcasts" }, { time: "14:16", name: "FullerG - Boodbye" }];
            this.current.programPrev = [{ time: "14:03", name: "Dharia - Left Untold" }, { time: "14:00", name: "Новости" }, { time: "13:57", name: "Pvshv - Believe" }];*/
            trackStore.fetchCurrentTrack(channelId);
        } catch (e) {
            console.error(e.message);
        }
    }

    async fetchChannels() {
        try {
            const response = await ChannelService.getChannelList();
            this.channels = response.data.channels;
            if (this.channels.length > 0 && !this.current.id) {
                this.selectChannel(this.channels[0].id);
            }
        } catch (e) {
            console.error(e.message);
        }
    };

    async fetchSchedule(channelId) {
        try {
            const response = await ChannelService.getSchedule(channelId);
            this.current.programPrev = response.data.past;
            this.current.programNext = response.data.next;
        } catch (e) {
            console.error(e.message);
        }
    }

    setListeners(listeners) {
        this.listeners = listeners;
    }
}

export default new ChannelStore();