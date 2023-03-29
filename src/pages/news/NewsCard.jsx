import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { timeformatter } from "utils/utils";

const NewsCard = ({ news }) => {
    const navigate = useNavigate();

    return (
        <Card className="bg-light text-white m-2 p-0" style={{ width: '30rem' }}>
            <a onClick={() => navigate(`/news/${news.id}`)} role="button">
                <Card.Img src={news.image}/>
                <Card.ImgOverlay className="d-flex flex-column">
                    <Card.Title><b>{news.title}</b><span className="fs-6"> • {timeformatter.format(new Date(news.date))}</span></Card.Title>
{/*                    <Card.Text className="mt-auto">
                        {news.text}
                    </Card.Text>
    */}
                </Card.ImgOverlay>
            </a>
        </Card>
    );
}

export default NewsCard;