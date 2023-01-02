import axios from "axios";
import { API_URL } from "http";
import { makeAutoObservable } from "mobx";
import AuthService from "services/AuthService";
import ChannelService from "services/ChannelService";

export default class Store {
    user = {};
    isAuth = false;
    isLoading = false;
    currentChannel = {};

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

    setCurrentChannel(channel) {
        this.currentChannel = channel;
    }

    async login(email, password, callback) {
        try {
            const response = await AuthService.login(email, password);
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
            await AuthService.logout();
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
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.error(e.message);
        } finally {
            this.setLoading = false;
        }
    }

    async selectChannel(channelId) {
        try {
            const response = await ChannelService.getChannelInfo(channelId);
            this.setCurrentChannel(response.data);
        } catch (e) {
            console.error(e.message);
        }
    }
}