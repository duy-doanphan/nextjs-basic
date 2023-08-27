'use client'
import Link from 'next/link'
import x from '@/styles/app.module.css'
import y from '@/styles/test.module.css'
import AppTable from "@/components/app.table";
import {useEffect} from "react";
import useSWR from "swr";

export default function Home() {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());

    const {data, error, isLoading} = useSWR(
        "http://localhost:8000/blogs",
        fetcher, {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    );
    if (!data) return <div>Loading...</div>

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
            <AppTable
                blogs={data}
            ></AppTable>
        </div>
    )
}
