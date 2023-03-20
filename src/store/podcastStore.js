import commentStore from "store/commentStore";

const { makeAutoObservable } = require("mobx");

class PodcastStore {
    page = -1;
    pageCount = 1;
    podcastList = [];
    podcast = {};

    constructor() {
        makeAutoObservable(this);
    }

    async fetchPodcastList(page) {
        if (this.page === page) { 
            return;
        }
        this.page = page;
        this.pageCount = 21;
        if (this.page <= 20) {
            this.podcastList = [
                { id: 0 + (this.page-1) * 6, title: "Очень крутой подкаст", image: "https://w-dog.ru/wallpapers/11/2/436430609124457/gory-ozero-zvezdy.jpg", text: "Свежий и очень интересный подкаст. Повторяю. Свежий и очень интересный подкаст. Повторяю. Свежий и очень интересный подкаст." },
                { id: 1 + (this.page-1) * 6, title: "Очень крутой подкаст", image: "https://w-dog.ru/wallpapers/11/2/436430609124457/gory-ozero-zvezdy.jpg", text: "Свежий и очень интересный подкаст. Повторяю. Свежий и очень интересный подкаст. Повторяю. Свежий и очень интересный подкаст." },
                { id: 2 + (this.page-1) * 6, title: "Очень крутой подкаст", image: "https://w-dog.ru/wallpapers/11/2/436430609124457/gory-ozero-zvezdy.jpg", text: "Свежий и очень интересный подкаст. Повторяю. Свежий и очень интересный подкаст. Повторяю. Свежий и очень интересный подкаст." },
                { id: 3 + (this.page-1) * 6, title: "Очень крутой подкаст", image: "https://w-dog.ru/wallpapers/11/2/436430609124457/gory-ozero-zvezdy.jpg", text: "Свежий и очень интересный подкаст. Повторяю. Свежий и очень интересный подкаст. Повторяю. Свежий и очень интересный подкаст." },
                { id: 4 + (this.page-1) * 6, title: "Очень крутой подкаст", image: "https://w-dog.ru/wallpapers/11/2/436430609124457/gory-ozero-zvezdy.jpg", text: "Свежий и очень интересный подкаст. Повторяю. Свежий и очень интересный подкаст. Повторяю. Свежий и очень интересный подкаст." },
                { id: 5 + (this.page-1) * 6, title: "Очень крутой подкаст", image: "https://w-dog.ru/wallpapers/11/2/436430609124457/gory-ozero-zvezdy.jpg", text: "Свежий и очень интересный подкаст. Повторяю. Свежий и очень интересный подкаст. Повторяю. Свежий и очень интересный подкаст." }
            ];
        } else {
            this.podcastList = [
                { id: 120, title: "Очень крутой подкаст", image: "https://w-dog.ru/wallpapers/11/2/436430609124457/gory-ozero-zvezdy.jpg", text: "Свежий и очень интересный подкаст. Повторяю. Свежий и очень интересный подкаст. Повторяю. Свежий и очень интересный подкаст." },
                { id: 121, title: "Очень крутой подкаст", image: "https://w-dog.ru/wallpapers/11/2/436430609124457/gory-ozero-zvezdy.jpg", text: "Свежий и очень интересный подкаст. Повторяю. Свежий и очень интересный подкаст. Повторяю. Свежий и очень интересный подкаст." }
            ];
        }
        this.podcastList = this.podcastList.map(n => {n.title = n.title + " " + n.id; n.date = Date.now() - n.id * 10000000; return n});
    }

    async fetchPodcast(id) {
        commentStore.fetchComments("podcast", id);
        this.podcast = {
            id: id,
            title: "Очень крутой подкаст",
            image: "https://w-dog.ru/wallpapers/11/2/436430609124457/gory-ozero-zvezdy.jpg",
            text: "Не очень длинное описание подкаста, Не очень длинное описание подкаста, Не очень длинное описание подкаста, Не очень длинное описание подкаста, Не очень длинное описание подкаста, Не очень длинное описание подкаста, Не очень длинное описание подкаста, Не очень длинное описание подкаста, Не очень длинное описание подкаста, Не очень длинное описание подкаста, ",
            audioSrc: "https://randommusic.insomnia247.nl/1000/Three Days Grace - Pain.mp3",
            date: Date.now() - id * 10000000
        }
    }
}

export default new PodcastStore();