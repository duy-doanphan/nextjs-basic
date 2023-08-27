import type {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'Detail blog',
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
