import { makeAutoObservable } from "mobx";

class ModalStore {
    isShowLogin = false;
    isShowRegistration = false;
    isShowForgetPassword = false;
    isShowProfile = false;

    constructor() {
        makeAutoObservable(this);
    }

    showLogin(show) {
        this.isShowLogin = show;
    }

    showRegistration(show) {
        this.isShowLogin = false;
        this.isShowRegistration = show;
    }

    showForgetPassword(show) {
        this.isShowLogin = false;
        this.isShowForgetPassword = show;
    }

    showProfile(show) {
        this.isShowProfile = show;
    }
}

export default new ModalStore();