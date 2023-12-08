"use client"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import {mutate} from 'swr'

interface IProps {
    showModal: boolean;
    setShowModal: (value: boolean) => void;
}

function CreateModel(props: IProps) {

    const { showModal, setShowModal } = props

    const [title, setTitle] = useState<string>("")
    const [author, setAuthor] = useState<string>("")
    const [content, setContent] = useState<string>("")

    const handleSubmit = () => {

        if(!title){
            toast.error("Not empty title !!!")
            return;
        }
        if(!author){
            toast.error("Not empty author !!!")
            return;
        }
        if(!content){
            toast.error("Not empty content !!!")
            return;
        }

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title,author,content})
        }).then(res => res.json())
            .then(res => {
                if(res){
                    toast.success("Add value success")
                    handleCloseModal()
                    mutate('http://localhost:8000/blogs')
                }
            });   
    }
    const handleCloseModal = () => {
        setTitle("")
        setAuthor("")
        setContent("")
        setShowModal(false)
    }

    return (
        <>
            <Modal
                show={showModal}
                onHide={() => handleCloseModal()}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new blogs</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group className="mb-3">
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="email" placeholder="place fill author name..."
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="email" placeholder="place fill title..."
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Content blog</Form.Label>
                            <Form.Control as="textarea" rows={3}
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleCloseModal()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmit()}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateModel;