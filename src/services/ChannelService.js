import $api from "http";

export default class ChannelService {
    static async getChannelList() {
        return $api.get('/channels');
    }

    static async getChannelInfo(channelId) {
        return $api.get(`/channels/${channelId}`);
    }
}