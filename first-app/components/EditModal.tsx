"use client"
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import {mutate} from 'swr'

interface IProps {
    showEditModal: boolean;
    setEditModal: (value: boolean) => void;
    blog:IBlog | null;
    setBlog:(value:IBlog | null) =>void;
}

function EditModal(props: IProps) {

    const {showEditModal , setEditModal, blog,setBlog} = props
    const [id,setId]=useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [author, setAuthor] = useState<string>("")
    const [content, setContent] = useState<string>("")

    useEffect (()=>{
        if(blog && blog.id){
            setId(blog.id)
            setTitle(blog.title)
            setAuthor(blog.author)
            setContent(blog.content)
        }
    },[blog])


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

        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title,author,content})
        }).then(res => res.json())
            .then(res => {
                if(res){
                    toast.warning("Update value success")
                    handleCloseModal()
                    mutate('http://localhost:8000/blogs')
                }
            });   
    }
    const handleCloseModal = () => {
        setTitle("")
        setAuthor("")
        setContent("")
        setBlog(null)
        setEditModal(false)
    }

    return (
        <>
            <Modal
                show={showEditModal}
                onHide={() => handleCloseModal()}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit a blogs</Modal.Title>
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
                    <Button variant="warning" onClick={() => handleSubmit()}>Update</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditModal;