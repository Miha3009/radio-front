import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AboutLink, ContactsLink, MainLink, NewsLink, PodcastsLink, ProgramsLink } from 'utils/utils';

const Footer = () => {
    let links = [ContactsLink, MainLink, NewsLink, PodcastsLink, ProgramsLink, AboutLink];

    const navigate = useNavigate();

    return (
        <Navbar bg="light" expand="lg" className="p-0">
            <Container fluid>
                <Nav className="d-flex justify-content-between container-fluid">
                    {links.map(link =>
                        <Nav.Link className="fs-5" key={link.name} onClick={() => navigate(link.url)}>
                            {link.name}
                        </Nav.Link>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Footer;
