import Paginator from "components/Paginator";
import { observer } from "mobx-react-lite";
import NewsCard from "pages/news/NewsCard";
import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import newsStore from "store/newsStore";

const NewsList = ({ page }) => {
    let { id } = useParams();
    if (page === undefined) {
        page = parseInt(id);
    }

    useEffect(() => {
        var fetch = async () => newsStore.fetchNewsList(page);
        fetch();
    }, [page]);

    return (
        <>
            <Row className="row-cols-auto justify-content-center">
                {newsStore.newsList.map(news => <NewsCard news={news} key={news.id} />)}
            </Row>
            <Paginator pageCount={newsStore.pageCount} currnetPage={page} prefix="/news" />
        </>
    );
}

export default observer(NewsList);
