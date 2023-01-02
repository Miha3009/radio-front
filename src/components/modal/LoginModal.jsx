import { Context } from "index";
import { useContext, useState } from "react";
import { Button, Form, FormGroup, Modal, Stack } from "react-bootstrap";
import { isEmailValid } from "utils/utils";

const LoginModal = ({ show, handleClose, showRegistration, showForgetPassword }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validated, setValidated] = useState(false);
    const [errors, setErrors] = useState('');
    const store = useContext(Context);

    const handleSubmit = (event) => {
        setValidated(true);
        event.preventDefault();
        event.stopPropagation();
        if (isEmailValid(email) && password) {
            store.login(email, password, (resp) => {
                setErrors(resp.data.error);
                if (!resp.data.error) {
                    handleClose();
                }
            });
        }
    }

    return (
        <Modal className="modal-dialog-centered" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Вход</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <FormGroup controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control isInvalid={validated && (!isEmailValid(email) || errors)} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Form.Control.Feedback type="invalid">
                            {!isEmailValid(email) ? "Некорректный адрес электронной почты." : ""}
                        </Form.Control.Feedback>
                    </FormGroup>
                    <FormGroup controlId="formPassword" className="my-2">
                        <div className="d-flex justify-content-between">
                            <Form.Label>Пароль</Form.Label>
                            <a className="btn btn-link p-0 small-text ms-5" onClick={() => { handleClose(); showForgetPassword() }}>Забыли пароль?</a>
                        </div>
                        <Form.Control isInvalid={validated && (!password || errors)} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Form.Control.Feedback type="invalid">
                            {!password ? "Пароль не может быть пустым." : errors}
                        </Form.Control.Feedback>
                    </FormGroup>
                    <Stack className="d-flex justify-content-center">
                        <Button type="submit" className="mx-auto">Войти</Button>
                        <a className="btn btn-link p-0 small-text my-1" onClick={() => { handleClose(); showRegistration() }}>Не зарегистрированы?</a>
                    </Stack>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default LoginModal;