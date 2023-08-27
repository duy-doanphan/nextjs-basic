'use client'
import Table from 'react-bootstrap/Table';
import {Button} from 'react-bootstrap';

interface IProps {
    blogs: IBlog[];
}

const AppTable = (props: IProps) => {
    const {blogs} = props
    console.log(blogs)
    return (
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
                            <Button variant={'success'}>View</Button>
                            <Button variant={'warning'}>Update</Button>
                            <Button variant={'danger'}>Delete</Button>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </Table>
    )
}
export default AppTable