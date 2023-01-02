import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="vh-100 d-flex align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <span className="display-1 d-block">404</span>
                        <div className="mb-4 lead">Страница не найдена</div>
                        <a className="btn btn-link" onClick={() => navigate(-1)}>Вернуться</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PageNotFound;
