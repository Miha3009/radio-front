import CommentService from "services/CommentService";

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
        if (!objectType || !id) {
            return;
        }
        try {
            this.objectType = objectType;
            this.id = id;
            this.clearText();
            let response;
            if (this.objectType === "track") {
                response = await CommentService.getTrackComments(id);
            } else if (this.objectType === "news") {
                response = await CommentService.getNewsComments(id);
            }
            this.comments = response.data.comments;
            this.commentsCount = this.comments.reduce((acc, comment) => acc + 1 + comment.children.length, 0);
        } catch (e) {
            console.error(e.message);
        }
    }

    async sendComment(objectType, id) {
        if (!objectType || !id) {
            return;
        }
        this.objectType = objectType;
        this.id = id;
        if (this.messageText !== "") {
            try {
                let parent = this.findParent();
                if (this.objectType === "track") {
                    await CommentService.postTrackComment(this.id, { text: this.messageText, parent: parent })
                } else if (this.objectType === "news") {
                    await CommentService.postNewsComment(this.id, { text: this.messageText, parent: parent })
                }
                this.clearText();
                this.fetchComments(this.objectType, this.id);
            } catch (e) {
                console.error(e.message);
            }
        }
    }

    setReply(reply) {
        if (this.reply.id === reply.id) {
            this.reply = {};
        } else {
            this.reply = reply;
        }
        this.updateTextInArea();
    }

    setMessageText(text) {
        if (this.reply.userName) {
            this.messageText = text.substring(this.reply.userName.length + 2);
        } else {
            this.messageText = text;
        }
        this.updateTextInArea();
    }

    updateTextInArea() {
        this.textInArea = this.reply.userName ? `@${this.reply.userName} ${this.messageText}` : this.messageText;
    }

    clearText() {
        this.setReply({});
        this.setMessageText("");
        this.updateTextInArea();
    }

    findParent() {
        let parent = this.reply.id;
        let found = false;
        while (!found) {
            found = true;
            for (let i = 0; i < this.comments.length; i += 1) {
                if (this.comments[i].id === parent) {
                    if (this.comments[i].parent !== -1) {
                        found = false;
                        parent = this.comments[i].parent;
                    }
                    break;
                }
                for (let j = 0; j < this.comments[i].children.length; j += 1) {
                    if (this.comments[i].children[j].id === parent) {
                        if (this.comments[i].children[j].parent !== -1) {
                            found = false;
                            parent = this.comments[i].children[j].parent;
                        }
                        break;
                    }
                }
            }
        }
        parent = parent ? parent.toString() : null;
        return parent;
    }
}

export default new CommentStore();