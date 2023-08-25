import Link from 'next/link'
import x from  '@/styles/app.module.css'
import y from '@/styles/test.module.css'
export default function Home() {
    return (
        <div>
            <ul>
                <li>
                    <Link className={x['red']} href="/facebook">
                        <span className={y['red']}>Facebook</span>
                    </Link>
                    {/*<a href="/facebook">faceBook</a>*/}
                </li>
                <li>
                    <a href="/youtube">youtube</a>
                </li>
                <li>
                    <a href="/tiktok">tiktok</a>
                </li>
            </ul>
        </div>
    )
}
