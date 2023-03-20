import Ad from "components/Ad";
import CommentSection from "components/CommentSection";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import newsStore from "store/newsStore";
import { timeformatter } from "utils/utils";

const News = () => {
    let { id } = useParams();

    useEffect(() => {
        var fetch = async () => newsStore.fetchNews(id);
        fetch();
    }, [id]);

    if (newsStore.news.id !== id) {
        return <></>
    }

    return (
        <Container>
            <Row>
                <Col className="pb-3">
                    <div className="bg-light rounded px-5 mt-2 mb-3 pb-2">
                        <h2 className="text-center fs-2"><b>{newsStore.news.title}</b></h2>
                        <Image src={newsStore.news.image} width="100%" className="rounded mb-3" />
                        <p className="text fs-5">{newsStore.news.text}</p>
                        <div className="text-end">{timeformatter.format(newsStore.news.date)}</div>
                    </div>
                    <div className="w-75 mx-auto">
                        <CommentSection objectType="news" id={id} />
                    </div>
                </Col>
                <Col md={2} className="m-auto">
                    <Ad />
                </Col>
            </Row>
        </Container>
    );
}

export default observer(News);
