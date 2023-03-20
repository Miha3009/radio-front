import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Button, Form, FormGroup, Modal, Stack } from "react-bootstrap";
import modalStore from "store/modalStore";
import { isEmailValid } from "utils/utils";

const ForgetPasswordModal = () => {
    const [validated, setValidated] = useState(false);
    const [phase, setPhase] = useState(0);
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const handleEmailBody = () => {
        if (!isEmailValid(email)) {
            setValidated(true);
            return;
        }
        setValidated(false);
        setPhase(1);
    }

    const EmailBody = (
        <Stack>
            <FormGroup controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control isInvalid={validated && !isEmailValid(email)} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Form.Control.Feedback type="invalid">
                    Некорректный адрес электронной почты
                </Form.Control.Feedback>
            </FormGroup>
            <Button className="mx-auto mt-3" onClick={handleEmailBody}>Отправить код восстановления</Button>
        </Stack>
    );

    const handleCodeBody = () => {
        setValidated(false);
        setPhase(2);
    }

    const CodeBody = (
        <Stack>
            <FormGroup controlId="formCode">
                <Form.Label>Код восстановления</Form.Label>
                <Form.Control type="text" value={code} onChange={(e) => setCode(e.target.value)} />
                <Form.Control.Feedback type="invalid">
                    Неверный код
                </Form.Control.Feedback>
            </FormGroup>
            <Button className="mx-auto mt-3" onClick={handleCodeBody}>Подтвердить</Button>
        </Stack>
    );

    const handleNewPasswordBody = () => {
        if (password != passwordConfirm) {
            setValidated(true);
            return;
        }
        modalStore.showForgetPassword(false);
    }

    const NewPasswordBody = (
        <Stack>
            <FormGroup controlId="formPassword">
                <Form.Label>Новый пароль</Form.Label>
                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormGroup>
            <FormGroup controlId="formPasswordConfirm">
                <Form.Label>Подтверждение пароля</Form.Label>
                <Form.Control type="password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} isInvalid={validated && password != passwordConfirm} />
                <Form.Control.Feedback type="invalid">
                    Пароли не совпадают
                </Form.Control.Feedback>
            </FormGroup>
            <Button className="mx-auto mt-3" onClick={handleNewPasswordBody}>Подтвердить</Button>
        </Stack>
    );

    const body = phase == 0 ? EmailBody : (phase == 1 ? CodeBody : NewPasswordBody);

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

export default observer(ForgetPasswordModal);