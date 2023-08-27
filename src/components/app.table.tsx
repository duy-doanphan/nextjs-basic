'use client'
import Table from 'react-bootstrap/Table';
import {Button} from 'react-bootstrap';
import CreateModal from "@/components/create.modal";
import {useState} from "react";
import UpdateModal from "@/components/update.modal";
import Link from 'next/link'
import {toast} from "react-toastify";
import {mutate} from "swr";


interface IProps {
    blogs: IBlog[];
}

const AppTable = (props: IProps) => {
    const {blogs} = props

    const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
    const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);

    const [blog, setBlog] = useState<IBlog | null>(null)
    const handleShowModalCreate = () => setShowModalCreate(true);
    const handleShowModalUpdate = (item: IBlog) => {
        setBlog(item)
        setShowModalUpdate(true);
    }
    const handleShowModalDelete = (id: number) => {
        const isDelete = confirm(`Are you sure delete a blog with id = ${id}`);
        if (isDelete) {
            fetch(`http://localhost:8000/blogs/${id}`,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "DELETE",
                })
                .then(res => res.json())
                .then(res => {
                    if (res) {
                        toast.success('Delete successfully!')
                        mutate('http://localhost:8000/blogs')
                    }
                })
        }
    }

    return (
        <>
            <div className='mt-3 mb-3 d-flex justify-content-between'>
                <h3>Table Blogs</h3>
                <Button
                    variant={'primary'}
                    onClick={() => {
                        handleShowModalCreate()
                    }}
                >Add New</Button>
            </div>

            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {blogs.length > 0 && blogs.map((item, index) => {
                    return (
                        <tr key={`blog-${index}`}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.author}</td>
                            <td className='d-flex gap-2'>
                                <Link className='btn btn-primary' href={`/blogs/${item.id}`}>View</Link>
                                <Button
                                    variant={'warning'}
                                    onClick={() => {
                                        handleShowModalUpdate(item)
                                    }}
                                >Update</Button>
                                <Button
                                    variant={'danger'}
                                    onClick={() => {
                                        handleShowModalDelete(item.id)
                                    }}
                                >Delete</Button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
            <CreateModal
                show={showModalCreate}
                setShow={setShowModalCreate}
            ></CreateModal>
            <UpdateModal
                show={showModalUpdate}
                setShow={setShowModalUpdate}
                blog={blog}
                setBlog={setBlog}
            ></UpdateModal>
        </>

    )
}
export default AppTable