'use client'
import { useRouter } from 'next/navigation'

const Facebook = () => {
    const router = useRouter()

    return (
        <>
            facebook page
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
