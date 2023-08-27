'use client'
import Link from 'next/link'
import x from '@/styles/app.module.css'
import y from '@/styles/test.module.css'
import AppTable from "@/components/app.table";
import {useEffect} from "react";

export default function Home() {

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await fetch('http://localhost:8000/blogs')
        const data = await res.json()
        console.log(data)
    }

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
            <AppTable></AppTable>
        </div>
    )
}
