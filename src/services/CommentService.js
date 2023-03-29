import $api from "http";

export default class CommentService {
    static async getTrackComments(trackId) {
        return $api.get(`/track/${trackId}/comment`);
    }

    static async postTrackComment(trackId, comment) {
        return $api.post(`/track/${trackId}/comment`, comment)
    }

    static async getNewsComments(newsId) {
        return $api.get(`/news/${newsId}/comment`);
    }

    static async postNewsComment(newsId, comment) {
        return $api.post(`/news/${newsId}/comment`, comment)
    }
}