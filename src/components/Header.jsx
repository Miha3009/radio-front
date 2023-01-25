import Ad from 'components/Ad';
import Player from 'components/Player';
import brandImg from 'images/brand.png';
import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import { useNavigate } from 'react-router-dom';
import modalStore from 'store/modalStore';
import { AboutLink, getAvatarUrl, MainLink, NewsLink, PodcastsLink, ProgramsLink } from 'utils/utils';

const Header = () => {
    let links = [MainLink, NewsLink, PodcastsLink, ProgramsLink, AboutLink];
    let track = { title: "The Offspring - You're Gonna Go Far, Kid", src: "https://randommusic.insomnia247.nl/1000/The Offspring - You're Gonna Go Far, Kid.mp3" };

    const userStore = useContext(Context);
    const navigate = useNavigate();

    const avatarAction = () => {
        if (userStore.isAuth) {
            modalStore.showProfile(true);
        } else {
            modalStore.showLogin(true);
        }
    }

    return (
        <>
            <Stack gap={2}>
                <Ad />
                <Navbar bg="light" expand="lg" className="p-0">
                    <Stack direction="horizontal" className="w-100 mx-2">
                        <Navbar.Brand>
                            <img src={brandImg} width="40" height="40" className="d-inline-block align-top" />
                        </Navbar.Brand>
                        <Player track={track} />
                        <Navbar.Toggle className="ms-auto" />
                        <Navbar.Collapse>
                            <Nav className="ms-auto">
                                {links.map(link =>
                                    <Nav.Link className="fs-5" key={link.name} onClick={() => navigate(link.url)}>
                                        {link.name}
                                    </Nav.Link>
                                )}
                                <a onClick={avatarAction} className="my-auto ms-4 me-auto" role="button">
                                    <Image height="40px" width="40px" className="rounded-circle my-1" src={getAvatarUrl(userStore.user?.avatar)} />
                                </a>
                            </Nav>
                        </Navbar.Collapse>
                    </Stack>
                </Navbar>
            </Stack>
        </>
    );
}

export default observer(Header);
