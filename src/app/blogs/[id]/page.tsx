'use client'
import Card from 'react-bootstrap/Card';
import Link from "next/link";
import useSWR, {Fetcher} from "swr";

const ViewDetail = ({params}: { params: { id: string } }) => {

    const fetcher: Fetcher<IBlog> = (url: string) => fetch(url).then((res) => res.json());

    const {data, error, isLoading} = useSWR(
        `http://localhost:8000/blogs/${params.id}`,
        fetcher, {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    );

    if (!data) return <div>Loading...</div>

    return (
        <>
            <div className='my-3'>
                <Link href={'/blogs'}>Back Home</Link>
            </div>
            <Card className="text-center">
                <Card.Header>Detail Blog</Card.Header>
                <Card.Body>
                    <Card.Title> Title: {data.title}</Card.Title>
                    <Card.Text>
                        {data.content}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">Author: {data.author}</Card.Footer>
            </Card>
        </>
    )
}
export default ViewDetail