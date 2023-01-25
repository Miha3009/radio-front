import { observer } from "mobx-react-lite";
import { ProgressBar, Stack } from "react-bootstrap";
import audioStore from "store/audioStore";

const AudioTimer = () => {
    let duration = audioStore.duration;
    let currentTime = audioStore.currentTime;
    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60);
    const dMinutes = Math.floor(duration / 60);
    const dSeconds = Math.floor(duration % 60);

    return (
        <Stack direction="horizontal" className="my-1">
            <ProgressBar now={Math.ceil(currentTime) / duration} max={1} className="me-2 w-100" style={{height: "10px"}}/>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}/{dMinutes}:{dSeconds < 10 ? `0${dSeconds}` : dSeconds}
        </Stack>
    );
}

export default observer(AudioTimer);