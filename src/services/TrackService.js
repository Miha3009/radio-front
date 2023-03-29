import $api from "http";

export default class TrackService {
    static async getTrack(trackId) {
        return $api.get(`/track/${trackId}`);
    }

    static async setLike(trackId, like) {
        return $api.post(`/track/${trackId}/like`, {like: like});
    }

    static async getCurrentTrack(channelId) {
        return $api.get(`/channel/${channelId}/track`);
    }
}