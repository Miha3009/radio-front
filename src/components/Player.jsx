import { ReactComponent as Pause } from 'images/pause.svg';
import { ReactComponent as Play } from 'images/play.svg';
import { useEffect, useRef, useState } from 'react';
import FormRange from 'react-bootstrap/FormRange';
import Stack from 'react-bootstrap/Stack';
import './Player.css';

const Player = ({ track }) => {
    const { title, src } = track;
    const audioRef = useRef(new Audio(src));

    return (
        <PlayerControls title={title} audioRef={audioRef} />
    );
}

const PlayerControls = ({ title, audioRef }) => {
    //const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);

    //const intervalRef = useRef();
    //const isReady = useRef(false);

    //const { duration } = audioRef.current;

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        audioRef.current.volume = volume;
    }, [volume]);

    return (
        <Stack direction="horizontal" className="d-flex justify-content-center">
            {isPlaying ?
                <button type="button" className="btn btn-link p-0" onClick={() => setIsPlaying(false)} aria-label="Pause">
                    <Pause width="25px" height="25px" />
                </button>
                :
                <button type="button" className="btn btn-link p-0" onClick={() => setIsPlaying(true)} aria-label="Play">
                    <Play width="25px" height="25px" />
                </button>
            }
            <div className="d-flex justify-content-center m-1">
                <FormRange onChange={(e) => setVolume(e.target.value / 100)} min="0" max="100" defaultValue="100" />
            </div>
            <div className="title-text text-secondary">{title}</div>
        </Stack>
    );
}

export default Player;
