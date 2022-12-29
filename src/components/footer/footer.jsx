import { AboutLink, ContactsLink, MainLink, NewsLink, PodcastsLink, ProgramsLink } from "../../utils/links";
import Navbar from "../navbar/navbar";
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <Navbar className="bottom-nav"  links={[ContactsLink, MainLink, NewsLink, PodcastsLink, ProgramsLink, AboutLink]}></Navbar>
        </footer>
    );
}

export default Footer;
