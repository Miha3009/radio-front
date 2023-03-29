import { observer } from "mobx-react-lite";
import { Container, Image } from "react-bootstrap";
import channelStore from "store/channelStore";

const ChannelInfo = () => {
    return (
        <Container className="bg-light rounded p-2 mb-3">
            <div className="d-flex justify-content-center align-items-center mb-3">
                {channelStore.current.logo && <Image src={channelStore.current.logo} width="60px" height="60px" />}
                <b className="fs-4 ms-2">{channelStore.current.title}</b>
            </div>
            {channelStore.current.description && 
            channelStore.current.description.split('\\n').map((item, idx) => <p className="text" key={idx}>{item}</p>)}
        </Container>
    );
}

export default observer(ChannelInfo);