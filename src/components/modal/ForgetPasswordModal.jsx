import { observer } from "mobx-react-lite";
import { Button, Form, FormGroup, Modal, Stack } from "react-bootstrap";
import modalStore from "store/modalStore";

const ForgetPasswordModal = () => {
    const body = <EmailBody />

    return (
        <Modal className="modal-dialog-centered" show={modalStore.isShowForgetPassword} onHide={() => modalStore.showForgetPassword(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Восстановление пароля</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {body}
            </Modal.Body>
        </Modal>
    );
}

const EmailBody = () => {
    return (
        <Stack>
            <FormGroup controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" />
            </FormGroup>
            <Button className="mx-auto mt-3">Отправить код восстановления</Button>
        </Stack>
    );
}

const CodeBody = () => {
    return (
        <Stack>
            <FormGroup controlId="formCode">
                <Form.Label>Код восстановления</Form.Label>
                <Form.Control type="text" />
            </FormGroup>
            <Button className="mx-auto mt-3">Подтвердить</Button>
        </Stack>
    );
}

const NewPasswordBody = () => {
    return (
        <Stack>
            <FormGroup controlId="formPassword">
                <Form.Label>Новый пароль</Form.Label>
                <Form.Control type="password" />
            </FormGroup>
            <Button className="mx-auto mt-3">Подтвердить</Button>
        </Stack>
    );
}

export default observer(ForgetPasswordModal);