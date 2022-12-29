import arrowButtonImg from '../../../images/arrowButton.png'
import './chat.css';

const Chat = ({messages}) => {
    return (
        <div className="chat">
            <div className="chat-messages grid-item">
                {messages.map(message =>
                  <p key={message.id}>{message.text}</p>
                )}
            </div>
            <span className="chat-input">
                <input placeholder="Введите собщение"></input>
                <button className="arrowButton">
                    <img src={arrowButtonImg}/>
                </button>
            </span>
        </div>
    );
}

export default Chat;
