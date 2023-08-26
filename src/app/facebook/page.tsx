'use client'
import { useRouter } from 'next/navigation'
import { Button } from 'react-bootstrap';

const Facebook = () => {
    const router = useRouter()

    return (
        <>
            facebook page
            <Button variant={'success'}>Phan Duy</Button>
            <div>
                <button
                    onClick={() => router.push('/')}
                >
                    back home
                </button>
            </div>
        </>
    )
}
export default Facebook;
