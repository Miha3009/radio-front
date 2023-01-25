import { observer } from "mobx-react-lite";
import { Container, Image } from "react-bootstrap";
import channelStore from "store/channelStore";

const ChannelInfo = () => {
    return (
        <Container className="bg-light rounded p-2 mb-3">
            <div className="d-flex justify-content-center align-items-center mb-3">
                <Image src={channelStore.current.image} width="60px" height="60px" />
                <b className="fs-4 ms-2">{channelStore.current.title}</b>
            </div>
            <div className="text">{channelStore.current.text}</div>
        </Container>
    );
}

export default observer(ChannelInfo);