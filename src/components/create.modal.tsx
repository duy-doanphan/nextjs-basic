'use client'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useState} from "react";


interface IProps {
    show: boolean;
    setShow: (value: boolean) => void;
}

const CreateModal = (props: IProps) => {
    const {show, setShow} = props;

    const [title, setTitle] = useState<string>('')
    const [author, setAuthor] = useState<string>('')
    const [content, setContent] = useState<string>('')


    const handleReset = () => {
        setTitle('');
        setContent('');
        setAuthor('');
    }
    const handleClose = () => {
        setShow(false);
        handleReset()
    }

    const handleSubmit = () => {
        const data = {title, author, content}
        console.log(data)
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size={"lg"}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Create a Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="..."
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value)
                                }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="..."
                                value={author}
                                onChange={(e) => {
                                    setAuthor(e.target.value)
                                }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={content}
                                onChange={(e) => {
                                    setContent(e.target.value)
                                }}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            handleSubmit()
                        }}
                    >Create</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CreateModal;
