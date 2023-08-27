import type {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'Blog list',
    description: '...',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}
