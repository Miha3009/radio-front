import "glider-js/glider.min.css";
import ChannelListItem from "pages/main/ChannelListItem";
import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import Glider from "react-glider";
import ChannelService from "services/ChannelService";

const ChannelList = () => {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        let ignore = false;
        async function fetchChannels() {
            const response = await ChannelService.getChannelList();
            if (!ignore) setChannels(response.data);
        }
        fetchChannels();
        return () => { ignore = true };
    }, []);

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
                {channels.map(channel => <ChannelListItem key={channel.title} channel={channel}/>)}
            </Glider>
            <button id="btnNextChannelList" type="button" className="glider-next position-relative top-0 d-none d-sm-block" aria-disabled="false">{">"}</button>
        </Stack>
    );
}

export default ChannelList;