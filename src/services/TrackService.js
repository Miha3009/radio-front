import $api from "http";

export default class TrackService {
    static async getTrack(trackId) {
        return $api.get(`/tracks/${trackId}`);
    }

    static async setLike(trackId, isLike) {
        return $api.post(`/tracks/${trackId}/like`, {isLike: isLike});
    }
}