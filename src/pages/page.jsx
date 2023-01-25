import Footer from "components/Footer";
import Header from "components/Header";
import ForgetPasswordModal from "components/modal/ForgetPasswordModal";
import LoginModal from "components/modal/LoginModal";
import ProfileModal from "components/modal/ProfileModal";
import RegistrationModal from "components/modal/RegistrationModal";
import { Container } from "react-bootstrap";
import './Page.css';

const Page = ({ content }) => {
    return (
        <>
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
