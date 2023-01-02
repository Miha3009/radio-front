import Ad from 'components/Ad';
import ForgetPasswordModal from 'components/modal/ForgetPasswordModal';
import LoginModal from 'components/modal/LoginModal';
import ProfileModal from 'components/modal/ProfileModal';
import RegistrationModal from 'components/modal/RegistrationModal';
import Player from 'components/Player';
import brandImg from 'images/brand.png';
import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import { useContext, useState } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import { useNavigate } from 'react-router-dom';
import { AboutLink, getAvatarUrl, MainLink, NewsLink, PodcastsLink, ProgramsLink } from 'utils/utils';

const Header = () => {
    let links = [MainLink, NewsLink, PodcastsLink, ProgramsLink, AboutLink];
    let track = { title: "Бульк", src: "https://vk.com/mp3/bb1.mp3?1" };

    const [isShowLogin, setShowLogin] = useState(false);
    const [isShowRegistration, setShowRegistration] = useState(false);
    const [isShowProfile, setShowProfile] = useState(false);
    const [isShowForgetPassword, setShowForgetPassword] = useState(false);
    const store = useContext(Context);
    const navigate = useNavigate();

    const avatarAction = () => {
        if (store.isAuth) {
            setShowProfile(true);
        } else {
            setShowLogin(true);
        }
    }

    return (
        <>
            <Stack gap={2}>
                <Ad />
                <Navbar bg="light" expand="lg" className="p-0">
                    <Container fluid>
                        <Stack direction="horizontal">
                            <Navbar.Brand>
                                <img src={brandImg} width="40" height="40" className="d-inline-block align-top" />
                            </Navbar.Brand>
                            <Player track={track} />
                        </Stack>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                {links.map(link =>
                                    <Nav.Link className="fs-5" key={link.name} onClick={() => navigate(link.url)}>
                                        {link.name}
                                    </Nav.Link>
                                )}
                                <a onClick={avatarAction} className="my-auto ms-auto me-auto" role="button">
                                    <Image height="40px" width="40px" className="rounded-circle my-1" src={getAvatarUrl(store.user?.avatar)} />
                                </a>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Stack>
            {
                isShowLogin ?
                    <LoginModal show={isShowLogin} handleClose={() => setShowLogin(false)} showRegistration={() => setShowRegistration(true)} showForgetPassword={() => setShowForgetPassword(true)} /> :
                    <RegistrationModal show={isShowRegistration} handleClose={() => setShowRegistration(false)} showLogin={() => setShowLogin(true)} />
            }
            <ProfileModal show={isShowProfile} handleClose={() => setShowProfile(false)} />
            <ForgetPasswordModal show={isShowForgetPassword} handleClose={() => setShowForgetPassword(false)} />
        </>
    );
}

export default observer(Header);
