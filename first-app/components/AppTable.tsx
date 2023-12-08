"use client"

import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import CreateModel from '@/components/CreateModel'
import { useState } from 'react';
import EditModal from './EditModal';
import Link from 'next/link';
import { toast } from 'react-toastify';
import {mutate} from 'swr'

interface IBlogs {
  blogs: IBlog[]
}

function AppTable(props: IBlogs) {
  const { blogs } = props

  const [blog, setBlog] = useState<IBlog | null>(null)

  const [showModal, setShowModal] = useState<boolean>(false)

  const [showEditModal, setEditModal] = useState<boolean>(false)

  const handleDelete = (value: IBlog) => {
    if (confirm(`you want delete blogs's ${value?.author} ? `)) {
      fetch(`http://localhost:8000/blogs/${value?.id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
      }).then(res => res.json())
        .then(res => {
          if (res) {
            mutate('http://localhost:8000/blogs')
          }
        });
      toast.success('Delete blogs success');
    }
  }

  return (
    <>
      <div className="add">
        <h3 className="title">Add Blog</h3>
        <Button variant='primary' onClick={() => setShowModal(true)}>Add</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Author</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            blogs?.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.author}</td>
                  <td>{item.title}</td>
                  <td>
                    <Button variant='primary'>
                      <Link className='nav-link' href={`/blogs/${item.id}`}>
                        View
                      </Link>
                    </Button>
                    <Button
                      onClick={() => {
                        setBlog(item);
                        setEditModal(true);
                      }
                      }
                      variant='warning mx-3'>Edit</Button>
                    <Button onClick={() => handleDelete(item)} variant='danger'>Delete</Button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
      <EditModal
        showEditModal={showEditModal}
        setEditModal={setEditModal}
        blog={blog}
        setBlog={setBlog}
      />
      <CreateModel
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
}

export default AppTable;