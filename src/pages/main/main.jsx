import ProgramSchedule from './programSchedule/programSchedule';
import './main.css';
import Chat from './chat/chat';

const Main = () => {
    const programNext = [{time: "14:05", name: "Dharia - Left Untold"}, {time: "14:08", name: "Sigher - On time"}, {time: "14:11", name: "Sport podcasts"}, {time: "14:16", name: "FullerG - Boodbye"}]
    const programPast = [{time: "14:03", name: "Dharia - Left Untold"}, {time: "14:00", name: "Новости"}, {time: "13:57", name: "Pvshv - Believe"}]
    const messages = [{id: 0, text: "HELLO"}, {id: 1, text: "HELLO"}, {id: 2, text: "HELLO"}, {id: 3, text: "HELLO"}, {id: 4, text: "HELLO"}]

    return (
        <div className="main-grid">
            <div className="channel-list grid-item">1</div>
            <div className="current-chanel grid-item">2</div>
            <Chat messages={messages}/>
            <div className="current-program grid-item">4</div>
            <ProgramSchedule className="program-schedule grid-item" title="Далее в эфире" programList={programNext}/>
            <ProgramSchedule className="program-history grid-item" title="История эфира" programList={programPast}/>
            <div className="right-ad grid-item">7</div>
        </div>
    );
}

export default Main;
