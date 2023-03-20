import Paginator from "components/Paginator";
import { observer } from "mobx-react-lite";
import PodcastCard from "pages/podcasts/PodcastCard";
import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import podcastStore from "store/podcastStore";

const PodcastList = ({ page }) => {
    let { id } = useParams();
    if (page == undefined) {
        page = parseInt(id);
    }

    useEffect(() => {
        var fetch = async () => podcastStore.fetchPodcastList(page);
        fetch();
    }, [page]);

    return (
        <>
            <Row className="row-cols-auto justify-content-center">
                {podcastStore.podcastList.map(podcast => <PodcastCard podcast={podcast} key={podcast.id} />)}
            </Row>
            <Paginator pageCount={podcastStore.pageCount} currnetPage={page} prefix="/podcasts" />
        </>
    );
}

export default observer(PodcastList);
