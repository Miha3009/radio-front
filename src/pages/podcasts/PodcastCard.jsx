import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { timeformatter } from "utils/utils";

const PodcastCard = ({ podcast }) => {
    const navigate = useNavigate();

    return (
        <Card className="bg-light text-white m-2 p-0" style={{ width: '30rem' }}>
            <a onClick={() => navigate(`/podcasts/${podcast.id}`)} role="button">
                <Card.Img src={podcast.image} />
                <Card.ImgOverlay className="d-flex flex-column">
                    <Card.Title><b>{podcast.title}</b><span className="fs-6"> • {timeformatter.format(podcast.date)}</span></Card.Title>
                    <Card.Text className="mt-auto">
                        {podcast.text}
                    </Card.Text>
                </Card.ImgOverlay>
            </a>
        </Card>
    );
}

export default PodcastCard;