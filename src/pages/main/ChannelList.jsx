import "glider-js/glider.min.css";
import { observer } from "mobx-react-lite";
import ChannelListItem from "pages/main/ChannelListItem";
import { Stack } from "react-bootstrap";
import Glider from "react-glider";
import channelStore from "store/channelStore";

const ChannelList = () => {
    return (
        <Stack direction="horizontal">
            <button id="btnPrevChannelList" type="button" className="glider-prev position-relative top-0 my-auto d-none d-sm-block" aria-disabled="false">{"<"}</button>
            <Glider
                hasArrows
                slidesToShow="auto"
                itemWidth={200}
                arrows={{
                    prev: "#btnPrevChannelList",
                    next: "#btnNextChannelList",
                }}>
                {channelStore.channels.map(channel => <ChannelListItem key={channel.title} channel={channel}/>)}
            </Glider>
            <button id="btnNextChannelList" type="button" className="glider-next position-relative top-0 d-none d-sm-block" aria-disabled="false">{">"}</button>
        </Stack>
    );
}

export default observer(ChannelList);