import $api from "http";

export default class AuthService {
    static async login(email, password) {
        return $api.post('/login', { Email: email, Password: password });
    }

    static async register(username, email, password) {
        return $api.post('/register', { Name: username, Email: email, Password: password });
    }

    static async logout() {
        return $api.post('/logout');
    }
}