import $api from "http";

export default class ChannelService {
    static async getChannelList() {
        return $api.get('/channel?status=active');
    }

    static async getChannelInfo(channelId) {
        return $api.get(`/channel/${channelId}`);
    }

    static async connect(channelId, sdp) {
        return $api.post(`/channel/${channelId}/connect`, {sdp: sdp});
    }

    static async getSchedule(channelId) {
        return $api.get(`/channel/${channelId}/schedule?past=4&next=4`);
    }
}