import Footer from "components/Footer";
import Header from "components/Header";
import { Container } from "react-bootstrap";

const Page = ({ content }) => {
    return (
        <>
            <Header />
            <Container className="w-100 d-flex justify-content-center my-2">
                {content}
            </Container>
            <Footer />
        </>
    );
}

export default Page;
