import { Context } from "index";
import { observer } from "mobx-react-lite";
import { useContext, useRef } from "react";
import { Button, Col, Container, Form, Image, Modal, Row, Stack } from "react-bootstrap";
import modalStore from "store/modalStore";
import { getAvatarUrl } from "utils/utils";

const ProfileModal = () => {
    const store = useContext(Context);
    const inputAvatarFile = useRef();
    const user = store.user;

    const changeUsername = (event) => {
        event.preventDefault();
        event.stopPropagation();
        store.updateUsername();
        modalStore.showProfile(false);
    }

    const changeEmail = (event) => {
        event.preventDefault();
        event.stopPropagation();
        store.updateEmail();
        modalStore.showProfile(false);
    }

    return (
        <Modal className="modal-lg" show={modalStore.isShowProfile} onHide={() => modalStore.showProfile(false)} >
            <Modal.Header closeButton>
                <Modal.Title>Профиль</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col sm={4}>
                            <Stack>
                                <div className="ratio ratio-1x1 w-75 mx-auto mb-2">
                                    <Image className="rounded-circle" src={getAvatarUrl(user?.avatar)} />
                                </div>
                                <input ref={inputAvatarFile} type="file" accept="image/*" style={{ display: "none" }} onChange={(e) => store.uploadAvatar(e.target.files[0])} />
                                <button className="btn btn-link small-text mx-auto" onClick={() => inputAvatarFile.current.click()}>Обновить фотографию</button>
                            </Stack>
                        </Col>
                        <Col>
                            <Stack>
                                <Form className="row mb-2">
                                    <Col>
                                        <Form.Label>Псевдоним</Form.Label>
                                        <Form.Control value={user?.name} onChange={(e) => store.setUsername(e.target.value)}/>
                                    </Col>
                                    <Col className="col-3 mt-auto">
                                        <Button type="submit" onClick={changeUsername}>Изменить</Button>
                                    </Col>
                                </Form>
                                <Form className="row mb-2">
                                    <Col>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control value={user?.email} onChange={(e) => store.setEmail(e.target.value)} />
                                    </Col>
                                    <Col className="col-3 mt-auto">
                                        <Button type="submit" onClick={changeEmail}>Изменить</Button>
                                    </Col>
                                </Form>
                                <Button type="submit" variant="danger" className="mx-auto mt-3" onClick={() => { store.logout(); modalStore.showProfile(false) }}>Выйти</Button>
                            </Stack>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    );
}

export default observer(ProfileModal);