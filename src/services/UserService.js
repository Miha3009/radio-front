import $api from "http";

export default class UserService {
    static async uploadAvatar(image) {
        let form = new FormData();
        form.append('image', image);
        return $api.post('/uploadAvatar', form);
    }
}