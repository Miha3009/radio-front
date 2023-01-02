import { Context } from "index";
import { useContext, useState } from "react";
import { Button, Form, FormGroup, Modal } from "react-bootstrap";
import { isEmailValid } from "utils/utils";

const RegistrationModal = ({ show, handleClose }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validated, setValidated] = useState(false);
    const [errors, setErrors] = useState('');
    const store = useContext(Context);

    const handleSubmit = (event) => {
        setValidated(true);
        event.preventDefault();
        event.stopPropagation();
        if (username && isEmailValid(email) && password) {
            store.registration(username, email, password, (resp) => {
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
                <Modal.Title>Регистрация</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormGroup controlId="formUsername">
                        <Form.Label>Псевдоним</Form.Label>
                        <Form.Control isInvalid={validated && !username} type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <Form.Control.Feedback type="invalid">
                            Псевдоним не может быть пустым
                        </Form.Control.Feedback>
                    </FormGroup>
                    <FormGroup controlId="formEmail" className="my-2">
                        <Form.Label>Email</Form.Label>
                        <Form.Control isInvalid={validated && (!isEmailValid(email) || errors)} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Form.Control.Feedback type="invalid">
                            {!isEmailValid(email) ? "Некорректный адрес электронной почты." : errors}
                        </Form.Control.Feedback>
                    </FormGroup>
                    <FormGroup controlId="formPassword" className="my-2">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control isInvalid={validated && !password} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Form.Control.Feedback type="invalid">
                            Пароль не может быть пустым
                        </Form.Control.Feedback>
                    </FormGroup>
                    <div className="d-flex justify-content-center">
                        <Button type="submit" className="mx-auto" onClick={handleSubmit}>Зарегистрироваться</Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default RegistrationModal;