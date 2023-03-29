import Ad from "components/Ad";
import CommentSection from "components/CommentSection";
import { ReactComponent as Like } from 'images/like.svg';
import { Context } from "index";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import { useParams } from "react-router-dom";
import modalStore from "store/modalStore";
import newsStore from "store/newsStore";
import { timeformatter } from "utils/utils";

const News = () => {
    const userStore = useContext(Context);
    let { id } = useParams();

    useEffect(() => {
        var fetch = async () => newsStore.fetchNews(id);
        fetch();
    }, [id]);

    const toggleLike = () => {
        if (!userStore.isAuth) {
            modalStore.showLogin(true);
        } else {
            newsStore.toggleLike();
        }
    }

    if (newsStore.news.id !== id) {
        return <></>
    }

    return (
        <Container>
            <Row>
                <Col className="pb-3">
                    <div className="bg-light rounded px-5 mt-2 mb-3 pb-2">
                        <h2 className="text-center fs-2 pt-2"><b>{newsStore.news.title}</b></h2>
                        <Image src={newsStore.news.image} width="100%" className="rounded mb-3" />
                        <ReactMarkdown children={newsStore.news.content} />
                        <div className="d-flex justify-content-between align-items-center w-100">
                            <div className="text-end">{timeformatter.format(new Date(newsStore.news.date))}</div>
                            <div className="d-flex align-items-center">
                                <Like role="button" onClick={toggleLike} className={"me-2 " + (newsStore.news.liked ? "like-active" : "like")} />
                                <span className="fs-5">{newsStore.news.likeCount}</span>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <CommentSection objectType="news" id={id} />
                    </div>
                </Col>
                <Col md={2} className="m-auto">
                    <Ad width="100px" height="400px" />
                </Col>
            </Row>
        </Container>
    );
}

export default observer(News);
