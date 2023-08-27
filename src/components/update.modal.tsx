'use client'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {mutate} from "swr"

interface IProps {
    show: boolean;
    setShow: (value: boolean) => void;
    blog: IBlog | null;
    setBlog: (value: IBlog | null) => void;
}

const UpdateModal = (props: IProps) => {
    const {show, setShow, blog, setBlog} = props;

    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>('')
    const [author, setAuthor] = useState<string>('')
    const [content, setContent] = useState<string>('')

    useEffect(() => {
        if (blog && blog.id) {
            setId(blog.id)
            setTitle(blog.title)
            setAuthor(blog.author)
            setContent(blog.content)
        }
    }, [blog])

    const handleReset = () => {
        setId(0);
        setTitle('');
        setContent('');
        setAuthor('');
        setBlog(null);
    }
    const handleClose = () => {
        setShow(false);
        handleReset()
    }

    const handleSubmit = async () => {
        const dataBody = {title, author, content}

        //validate
        if (!title || !author || !content) {
            toast.error('Missing some field!')
            return
        }

        fetch(`http://localhost:8000/blogs/${id}`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify(dataBody)
            })
            .then(res => res.json())
            .then(res => {
                if (res) {
                    toast.success('Update successfully!')
                    handleClose();
                    mutate('http://localhost:8000/blogs')
                }
            })
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
                    <Modal.Title>Update a Blog</Modal.Title>
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
                    >Update</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default UpdateModal;
