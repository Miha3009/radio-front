import axios from "axios";
import { API_URL } from "http";
import { makeAutoObservable } from "mobx";
import AuthService from "services/AuthService";

export default class Store {
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

    setLoading(isLoading) {
        this.isLoading = isLoading;
    }

    async login(email, password, callback) {
        try {
            const response = await AuthService.login(email, password);
            console.log(response)
            if (response.data.accessToken) {
                localStorage.setItem('token', response.data.accessToken);
                this.setAuth(true);
                this.setUser(response.data.user);
            }
            callback(response);
        } catch (e) {
            console.error(e.message);
        }
    }

    async registration(username, email, password, callback) {
        try {
            const response = await AuthService.registration(username, email, password);
            console.log(response);
            if (response.data.accessToken) {
                localStorage.setItem('token', response.data.accessToken);
                this.setAuth(true);
                this.setUser(response.data.user);
            }
            callback(response);
        } catch (e) {
            console.error(e.message);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({});
        } catch (e) {
            console.error(e.message);
        }
    }

    async checkAuth() {
        this.setLoading = true;
        try {
            const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.error(e.message);
        } finally {
            this.setLoading = false;
        }
    }
}