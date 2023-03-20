import { dateToString } from "utils/utils";

const { makeAutoObservable } = require("mobx");

class CommentStore {
    comments = [];
    commentsCount = 0;
    textInArea = "";
    messageText = "";
    reply = {};
    objectType = "";
    id = "";

    constructor() {
        makeAutoObservable(this, {}, { deep: true });
    }

    async fetchComments(objectType, id) {
        this.objectType = objectType;
        this.id = id;
        this.clearText();
        this.comments = [{ id: 0, text: "Привет" + id, username: "user1", avatar: "", time: "22:03", children: [] },
        {
            id: 1, text: "Подскажите как трек называется. Никак не могу найти", username: "user2", time: "22:03", avatar: "https://w-dog.ru/wallpapers/2/12/517460349478812/kovr-iz-xolmistyx-letnix-polej.jpg", children: [
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

    sendComment(user) {
        if(this.messageText !== "") {
            this.insertComment(user);
            this.clearText();
        }
    }

    setReply(reply) {
        if(this.reply.id === reply.id) {
            this.reply = {};
        } else {
            this.reply = reply;
        }
        this.updateTextInArea();
    }

    setMessageText(text) {
        if (this.reply.username) {
            this.messageText = text.substring(this.reply.username.length + 2);
        } else {
            this.messageText = text;
        }
        this.updateTextInArea();
    }

    updateTextInArea() {
        this.textInArea = this.reply.username ? `@${this.reply.username} ${this.messageText}` : this.messageText;
    }

    insertComment(user) {
        const msg = {id: this.commentsCount, text: this.messageText, username: user.username, avatar: user.avatar, time: dateToString(new Date()), children: [] }
        this.commentsCount = this.commentsCount + 1;
        if(this.reply.username) {
            for(let i = 0; i < this.comments.length; i += 1) {
                if(this.comments[i].id === this.reply.id) {
                    this.comments[i].children.push(msg);
                    return;
                }
                for(let j = 0; j < this.comments[i].children.length; j += 1) {
                    if(this.comments[i].children[j].id === this.reply.id) {
                        this.comments[i].children.push(msg);
                        return;
                    }
                }
            }    
        } else {
            this.comments.push(msg);
        }
    }

    clearText() {
        this.setReply({});
        this.setMessageText("");
        this.updateTextInArea();
    }
}

export default new CommentStore();