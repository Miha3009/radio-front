import { makeAutoObservable } from "mobx";
import ChannelService from "services/ChannelService";
import audioStore from "store/audioStore";

class WebRTCStore {
    pc = {};
    sdp = null;

    constructor() {
        makeAutoObservable(this);

        this.pc = new RTCPeerConnection({
            iceServers: [
                {
                    urls: ['turn:relay.metered.ca:443'],
                    username: "a9067dff0bdee1097e961805",
                    credential: "btIRqKUbbhxsazf3"
                }
            ]
        });
        this.pc.oniceconnectionstatechange = (e) => console.log(e);
        this.pc.onicecandidate = event => {
            if (event.candidate === null) {
                this.sdp = this.pc.localDescription.sdp
            }
        }

        this.pc.addTransceiver('audio');
        this.pc.createOffer()
            .then(d => this.pc.setLocalDescription(d))
            .catch(console.log);

        this.pc.ontrack = function (event) {
            audioStore.setSource(event.streams[0]);
        }
    }

    async connect(channelId) {
        try {
            const response = await ChannelService.connect(channelId, this.sdp);
            this.pc.setRemoteDescription(response.data);
            setTimeout(() => console.log(this.pc), 6000);
        } catch (e) {
            console.error(e.message);
        }
    }
}

export default new WebRTCStore();