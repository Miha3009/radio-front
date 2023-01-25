import { ReactComponent as Play } from 'images/play.svg';
import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import CommentMessage from 'pages/main/CommentMessage';
import { useContext } from 'react';
import { Container, Form } from 'react-bootstrap';
import commentStore from 'store/commentStore';
import modalStore from 'store/modalStore';

const CommentSection = () => {
    const userStore = useContext(Context);
    const reply = () => {
        if (userStore.isAuth) {
            console.log("TODO reply");
        } else {
            modalStore.showLogin(true);
        }
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
                <Form.Control placeholder="Введите сообщение" style={{ height: "24px" }} />
                <Play width="25px" height="25px" role="button" className="ms-1 svg-btn" />
            </div>
        </Container>
    );
}

export default observer(CommentSection);