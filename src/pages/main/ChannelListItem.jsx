import { observer } from 'mobx-react-lite';
import { Image } from 'react-bootstrap';
import channelStore from 'store/channelStore';

const ChannelListItem = ({ channel }) => {
  const className = "rounded mx-2 d-flex justify-content-center py-1";
  const isActive = channelStore.current.id === channel.id;

  return (
    <div role="button" className={isActive ? className + " bg-light" : className + " bg-gray"} onClick={() => channelStore.selectChannel(channel.id)}>
      <Image width="25px" height="25px" src={channel.logo} className="me-2 my-auto" />
      <div className="my-auto">{channel.title}</div>
    </div>
  );
}

export default observer(ChannelListItem);