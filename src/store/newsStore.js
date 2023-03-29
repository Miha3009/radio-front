import NewsService from "services/NewsService";
import commentStore from "store/commentStore";

const { makeAutoObservable } = require("mobx");

class NewsStore {
    page = -1;
    pageCount = 1;
    newsList = [];
    news = {};

    constructor() {
        makeAutoObservable(this);
    }

    async fetchNewsList(page) {
        if (this.page === page) {
            return;
        }
        this.page = page;
        try {
            const response = await NewsService.getNewsList((page - 1) * 6, 6);
            this.newsList = response.data.news;
            this.pageCount = Math.ceil(response.data.count / 6);
        } catch (e) {
            console.error(e.message);
        }
    }

    async fetchNews(id) {
        commentStore.fetchComments("news", id);
        try {
            const response = await NewsService.getNews(id);
            this.news = response.data;
        } catch (e) {
            console.error(e.message);
        }
    }

    toggleLike() {
        if (Object.keys(this.news).length !== 0) {
            this.news.liked = !this.news.liked;
            if (this.news.liked) {
                this.news.likeCount += 1;
            } else {
                this.news.likeCount -= 1;
            }
            NewsService.setLike(this.news.id, this.news.liked);
        }
    }
}

export default new NewsStore();