import $api from "http";

export default class UserService {
    static uploadAvatar(image) {
        let form = new FormData();
        form.append('image', image);
        $api.post('/uploadAvatar', form);
    }
}