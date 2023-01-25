import avatarDefaultImg from 'images/avatar.png';

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
