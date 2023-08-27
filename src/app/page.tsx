'use client'
import Link from 'next/link'
import x from '@/styles/app.module.css'

export default function Home() {

    return (
        <div>
            <ul>
                <li>
                    <Link className={x['red']} href="/facebook">
                        <span>Facebook</span>
                    </Link>

                </li>
                <li>
                    <Link className={x['red']} href="/youtube">
                        <span>Youtube</span>
                    </Link>
                </li>
                <li>
                    <Link className={x['red']} href="/tiktok">
                        <span>Tiktok</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
