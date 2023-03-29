import $api from "http";

export default class NewsService {
    static async getNewsList(offset, limit) {
        return $api.get(`/news?offset=${offset}&limit=${limit}`);
    }

    static async getNews(newsId) {
        return $api.get(`/news/${newsId}`);
    }

    static async setLike(newsId, like) {
        return $api.post(`/news/${newsId}/like`, {like: like});
    }
}