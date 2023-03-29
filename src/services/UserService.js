import $api from "http";

export default class UserService {
    static async get() {
        return $api.get("/user");
    }

    static async uploadAvatar(image) {
        let form = new FormData();
        form.append('file', image);
        return $api.post('/upload-avatar', form);
    }

    static async updateName(name) {
        return $api.patch("/user", {name: name})
    }

    static async updateEmail(email) {
        return $api.patch("/user", {email: email})
    }
}