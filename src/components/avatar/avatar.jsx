import './avatar.css';
import avatarImg from '../../images/avatar.png'

const Avatar = () => {
    return (
        <a className="avatar">
            <img className="avatarImg" src={avatarImg}/>
        </a>
    );
}

export default Avatar;
