import Ad from "components/Ad";
import CommentSection from "components/CommentSection";
import Player from "components/Player";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import { useParams } from "react-router-dom";
import podcastStore from "store/podcastStore";
import { timeformatter } from "utils/utils";

const Podcast = () => {
    let { id } = useParams();

    useEffect(() => {
        var fetch = async () => podcastStore.fetchPodcast(id);
        fetch();
    }, [id]);

    if (podcastStore.podcast.id !== id) {
        return <></>
    }

    return (
        <Container>
            <Row>
                <Col className="pb-3">
                    <div className="bg-light rounded px-5 mt-2 mb-3 pb-2">
                        <h2 className="text-center fs-2"><b>{podcastStore.podcast.title}</b></h2>
                        <Image src={podcastStore.podcast.image} width="100%" className="rounded mb-3" />
                        <p className="text fs-5">{podcastStore.podcast.text}</p>
                        <div className="p-2 mb-2 rounded border border-3 d-flex justify-content-between">
                            <Stack direction="horizontal">
                                <Player src={podcastStore.podcast.audioSrc} title={podcastStore.podcast.title}/>
                            </Stack>
                            <span className="my-auto text-end">{timeformatter.format(podcastStore.podcast.date)}</span>
                        </div>
                    </div>
                    <div className="w-75 mx-auto">
                        <CommentSection objectType="podcast" id={id} />
                    </div>
                </Col>
                <Col md={2} className="m-auto">
                    <Ad width="100px" height="400px"  />
                </Col>
            </Row>
        </Container>
    );
}

export default observer(Podcast);
//