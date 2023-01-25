import { Nav, Navbar, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AboutLink, ContactsLink, MainLink, NewsLink, PodcastsLink, ProgramsLink } from 'utils/utils';

const Footer = () => {
    let links = [ContactsLink, MainLink, NewsLink, PodcastsLink, ProgramsLink, AboutLink];

    const navigate = useNavigate();

    return (
        <Stack className="w-75 mx-auto" direction="horizontal">
            <div className="ms-0 text-secondary">© 2023, best radio</div>
            <Navbar className="p-0 w-75 mx-auto">
                <Nav className="d-flex justify-content-between container-fluid">
                    {links.map(link =>
                        <Nav.Link className="fs-6 btn-link" key={link.name} onClick={() => navigate(link.url)}>
                            {link.name}
                        </Nav.Link>
                    )}
                </Nav>
            </Navbar>
        </Stack>
    );
}

export default Footer;
