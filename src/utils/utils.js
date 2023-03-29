import avatarDefaultImg from 'images/avatar.png';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/ru';

export const MainLink = { url: "/", name: "Эфир" }
export const NewsLink = { url: "/news", name: "Новости" }
export const PodcastsLink = { url: "/podcasts", name: "Подкасты" }
export const ProgramsLink = { url: "/programs", name: "Программы" }
export const AboutLink = { url: "/about", name: "О радио" }
export const ContactsLink = { url: "/contacts", name: "Контакты" }

export function isEmailValid(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

export function getAvatarUrl(src) {
    return src ? src : avatarDefaultImg;
}

TimeAgo.addDefaultLocale(en)

export const timeformatter = new TimeAgo('ru');

export function dateToString(date) {
    const now = new Date();
    const pad = (i) => (i < 10) ? "0" + i : "" + i;

    if(now.getFullYear() === date.getFullYear() && now.getMonth() === date.getMonth() && now.getDay() === date.getDay()) {
        return pad(date.getHours()) + ":" + pad(date.getMinutes());
    }

    return pad(date.getDate()) + "." + pad(1 + date.getMonth()) + "." + date.getFullYear();
}

export function timeToString(time) {
    const pad = (i) => (i < 10) ? "0" + i : "" + i;
    return pad(time.getHours()) + ":" + pad(time.getMinutes());
}

export const errorsMap = new Map([
    ['error.user.exist', 'Пользователь уже существует'],
    ['error.user.notFound', 'Пользователь не найден'],
    ['error.password.wrong', 'Неверный пароль']
]);
