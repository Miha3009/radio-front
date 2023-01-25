const { makeAutoObservable } = require("mobx");

class CommentStore {
    comments = [];
    commentsCount = 0;

    constructor() {
        makeAutoObservable(this, {}, { deep: true });
    }

    async fetchComments(objectId) {
        this.comments = [{ id: 0, text: "Привет", username: "user1", avatar: "", time: "22:03", children: [] },
        {
            id: 1, text: "Подскажите как трек называется. Никак не могу найти", username: "user2", time: "22:03", avatar: "https://placepic.ru/wp-content/uploads/2018/03/201408190045-more-u-ostrova-sulavesi-indoneziya-kashamalasha-com.jpg", children: [
                { id: 2, text: "Смотри выше", username: "user1", avatar: "", time: "22:04" }
            ]
        },
        { id: 3, text: "Привет", username: "user1", avatar: "", time: "22:03", children: [] },
        { id: 4, text: "Привет", username: "user1", avatar: "", time: "22:03", children: [] },
        { id: 5, text: "Привет", username: "user1", avatar: "", time: "22:03", children: [] },
        { id: 6, text: "Привет", username: "user1", avatar: "", time: "22:03", children: [] },
        { id: 7, text: "Привет", username: "user1", avatar: "", time: "22:03", children: [] },
        { id: 8, text: "Привет", username: "user1", avatar: "", time: "22:03", children: [] },
        { id: 9, text: "Привет", username: "user1", avatar: "", time: "22:03", children: [] },
        { id: 10, text: "Привет", username: "user1", avatar: "", time: "22:03", children: [] },
        ];
        this.commentsCount = this.comments.reduce((acc, comment) => acc + 1 + comment.children.length, 0);
    }

    sendComment() {

    }
}

export default new CommentStore();