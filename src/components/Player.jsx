import { ReactComponent as Pause } from 'images/pause.svg';
import { ReactComponent as Play } from 'images/play.svg';
import { observer } from 'mobx-react-lite';
import FormRange from 'react-bootstrap/FormRange';
import audioStore from 'store/audioStore';
import './Player.css';

const Player = () => {
    return (
        <>
            {audioStore.isPlaying ?
                <button type="button" className="btn btn-link p-0" onClick={() => audioStore.pause()} aria-label="Pause">
                    <Pause width="25px" height="25px" className="svg-btn"/>
                </button>
                :
                <button type="button" className="btn btn-link p-0" onClick={() => audioStore.play()} aria-label="Play">
                    <Play width="25px" height="25px" className="svg-btn"/>
                </button>
            }
            <div className="d-flex justify-content-center m-1">
                <FormRange onChange={(e) => audioStore.setVolume(e.target.value / 100)} min="0" max="100" defaultValue="100" />
            </div>
            <div className="title-text text-secondary">{audioStore.title}</div>
        </>
    );
}

export default observer(Player);
