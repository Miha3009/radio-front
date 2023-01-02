import Footer from "components/Footer";
import Header from "components/Header";
import { Container } from "react-bootstrap";
import './page.css';

const Page = ({ content }) => {
    return (
        <div className="page">
            <Header />
            <Container className="content m-2">
                {content}
            </Container>
            <Footer />
        </div>
    );
}

export default Page;
