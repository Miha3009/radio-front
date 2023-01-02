import { Context } from "index";
import { observer } from 'mobx-react-lite';
import { useContext } from "react";
import { Image } from 'react-bootstrap';

const ChannelListItem = ({ channel }) => {
  const store = useContext(Context);
  const className = "rounded mx-2 d-flex justify-content-center py-1";
  const isActive = store.currentChannel.title === channel.title;

  return (
    <div role="button" className={isActive ? className + " bg-light" : className + " bg-gray"} onClick={() => store.selectChannel(channel.id)}>
      <Image width="25px" height="25px" src={channel.image} className="me-2" />
      <div className="my-auto">{channel.title}</div>
    </div>
  );
}

export default observer(ChannelListItem);