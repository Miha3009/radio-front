import { Image, Stack } from "react-bootstrap";
import { getAvatarUrl } from "utils/utils";

const CommentMessage = ({ comment, isInner, reply }) => {
    const margin = isInner ? "ms-4" : "";

    return (
        <Stack className={"d-flex p-1 align-items-start " + margin}>
            <div className="d-flex align-items-center">
                <Image width="20px" height="20px" className="rounded-circle me-1" src={getAvatarUrl(comment.avatar)} />
                <b>{comment.username}</b>
            </div>
            <div>{comment.text}</div>
            <div className="text-secondary d-flex align-items-center">
                {comment.time}
                <button className="btn btn-link small-text p-0 ms-2" onClick={() => reply()}>Ответить</button>
            </div>
        </Stack>
    );
}

export default CommentMessage;