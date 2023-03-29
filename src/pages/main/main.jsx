import Ad from "components/Ad";
import CommentSection from "components/CommentSection";
import { observer } from "mobx-react-lite";
import ChannelInfo from "pages/main/ChannelInfo";
import ChannelList from "pages/main/ChannelList";
import "pages/main/main.css";
import ProgramSchedule from "pages/main/ProgramSchedule";
import TrackInfo from "pages/main/TrackInfo";
import { Col, Container, Row } from "react-bootstrap";
import trackStore from "store/trackStore";

const Main = () => {
  return (
    <Container fluid>
      <Row className="w-75 mx-auto mb-3">
        <ChannelList />
      </Row>
      <Row>
        <Col md={3} className="mb-3">
          <TrackInfo />
          <CommentSection objectType="track" id={trackStore.current.id} maxHeight="350px" />
        </Col>
        <Col className="mb-3">
          <ChannelInfo />
          <ProgramSchedule />
        </Col>
        <Col md={2} className="m-auto">
          <Ad width="100px" height="400px" />
        </Col>
      </Row>
    </Container>
  );
};

export default observer(Main);
