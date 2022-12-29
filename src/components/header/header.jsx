import { AboutLink, MainLink, NewsLink, PodcastsLink, ProgramsLink } from "../../utils/links";
import Avatar from "../avatar/avatar";
import Navbar from "../navbar/navbar";
import Player from "../player/player";
import './header.css';

const Header = () => {
    return (
        <header>
            <div className="top-ad"></div>
            <div className="wrapper">
                <div className="wrapper">
                    <Player className="top-player"/>
                    <Navbar className="top-nav" links={[MainLink, NewsLink, PodcastsLink, ProgramsLink, AboutLink]}/>
                </div>
                <Avatar />
            </div>
        </header>
    );
}

export default Header;
