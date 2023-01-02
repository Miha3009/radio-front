import $api from "http";

export default class UserService {
    static uploadAvatar(image) {
        let form = new FormData();
        form.append('image', image);
        return $api.post('/uploadAvatar', form);
    }
}