import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/facebook">facebook</Link>
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
