import { makeAutoObservable } from "mobx";
import AuthService from "services/AuthService";
import UserService from "services/UserService";

class UserStore {
    user = {};
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(isAuth) {
        this.isAuth = isAuth;
    }

    setUser(user) {
        this.user = user;
    }

    setUsername(username) {
        this.user.name = username;
    }

    setEmail(email) {
        this.user.email = email;
    }

    async updateUsername() {
        try {
            await UserService.updateName(this.user.name);
        } catch (e) {
            console.error(e.message);
        }
    }

    async updateEmail() {
        try {
            await UserService.updateEmail(this.user.email);
        } catch (e) {
            console.error(e.message);
        }
    }

    async login(email, password, callback) {
        try {
            const response = await AuthService.login(email, password);
            console.log(response)
            if (response.data.accessToken) {
                localStorage.setItem('token', response.data.accessToken);
                window.location.reload();
            }
            callback(response);
        } catch (e) {
            console.error(e.message);
            callback(e.response);
        }
    }

    async register(username, email, password, callback) {
        try {
            const response = await AuthService.register(username, email, password);
            if (response.data.accessToken) {
                localStorage.setItem('token', response.data.accessToken);
                window.location.reload();
            }
            callback(response);
        } catch (e) {
            console.error(e.message);
            callback(e.response);
        }
    }

    async logout() {
        try {
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({});
            await AuthService.logout();
        } catch (e) {
            console.error(e.message);
        } finally {
            window.location.reload();
        }
    }

    async checkAuth() {
        this.setLoading = true;
        try {
            //const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
            //if(!response.data.error) {
            //localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.getUser();
            //}
        } catch (e) {
            console.error(e.message);
        } finally {
            this.setLoading = false;
        }
    }

    async uploadAvatar(image) {
        try {
            const response = await UserService.uploadAvatar(image);
            this.user.avatar = response.data.avatar;
        } catch (e) {
            console.error(e.message);
        }
    }

    async getUser() {
        try {
            const response = await UserService.get();
            this.user = response.data;
        } catch (e) {
            console.error(e.message);
        }
    }
}

export default UserStore;