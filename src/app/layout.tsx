import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
    title: 'SUNULF - Movie Creator Team',
    description: 'SUNULFは映像クリエイターが集まったチームです。',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ja">
            <head />
            {children}
        </html>
    )
}
