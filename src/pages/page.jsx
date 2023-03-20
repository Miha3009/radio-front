import Footer from "components/Footer";
import Header from "components/Header";
import ForgetPasswordModal from "components/modal/ForgetPasswordModal";
import LoginModal from "components/modal/LoginModal";
import ProfileModal from "components/modal/ProfileModal";
import RegistrationModal from "components/modal/RegistrationModal";
import { Container } from "react-bootstrap";
import webrtcStore from "store/webrtcStore";
import './Page.css';

const Page = ({ content }) => {
    return (
        <>
            <button onClick={() => webrtcStore.connect(1)}>Подключится к 1 каналу</button>
            <Header />
            <Container className="my-2 mw-75">
                {content}
            </Container>
            <hr className="hr-footer my-1" />
            <Footer />
            <LoginModal />
            <RegistrationModal />
            <ProfileModal />
            <ForgetPasswordModal />
        </>
    );
}

export default Page;
