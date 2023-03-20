import CommentMessage from 'components/CommentMessage';
import { ReactComponent as Play } from 'images/play.svg';
import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import commentStore from 'store/commentStore';
import modalStore from 'store/modalStore';

const CommentSection = ({objectType, id}) => {    
    const userStore = useContext(Context);
    const reply = (comment) => {
        if (userStore.isAuth) {
            commentStore.setReply(comment);
        } else {
            modalStore.showLogin(true);
        }
    }

    const handleSend = () => {
        if (userStore.isAuth) {
            commentStore.sendComment(userStore.user);
        } else {
            modalStore.showLogin(true);
        }
    }

    const handleChange = (e) => {
        commentStore.setMessageText(e.target.value);
    }

    useEffect(() => {
        var fetch = async () => commentStore.fetchComments(objectType, id);
        fetch();
    }, [objectType, id]);

    if (commentStore.objectType !== objectType || commentStore.id !== id) {
        return <></>
    }

    return (
        <Container className="bg-light rounded p-2">
            <h5><b>Комментарии <span className="text-secondary">{commentStore.commentsCount}</span></b></h5>
            <div className="me-1 mb-2 overflow-auto chat" style={{ height: "350px" }}>
                {commentStore.comments.map(comment => {
                    return <div key={comment.id}>
                        <CommentMessage comment={comment} isInner={false} reply={reply} />
                        {comment?.children.map(commentInner =>
                            <CommentMessage key={commentInner.id} comment={commentInner} isInner={true} reply={reply} />
                        )}
                    </div>
                })}
            </div>
            <div className="d-flex justify-content-between">
                <textarea placeholder="Введите сообщение" className="form-control" style={{overflowY: "hidden", height: "30px"}} value={commentStore.textInArea} onChange={handleChange}/>
                <Play width="25px" height="25px" role="button" className="ms-1 my-auto svg-btn" onClick={handleSend} />
            </div>
        </Container>
    );
}

export default observer(CommentSection);