import type { Metadata } from 'next'
import './globals.css'

const title = 'SUNULF - Movie Creator Team';
const description = 'SUNULFは映像クリエイターが集まったチームです。';

export const metadata: Metadata = {
    title,
    description,

    openGraph: {
        title,
        description,
        type: 'website',
        locale: 'ja_JP',
        url: 'https://sunulf.vercel.app/',
        images: [
            {
                url: 'https://sunulf.vercel.app/sunulf-logo-1920-1080.png',
                width: 1920,
                height: 1080,
                alt: 'SUNULF',
            },
            {
                url: 'https://sunulf.vercel.app/sunulf-logo.webp',
                width: 600,
                height: 600,
                alt: 'SUNULF',
            }
        ]
    },

    twitter: {
        title,
        description,
        card: 'summary',
        site: '@teameizo',
        images: [
            {
                url: 'https://sunulf.vercel.app/sunulf-logo-1920-1080.png',
                width: 1920,
                height: 1080,
                alt: 'SUNULF',
            }
        ]
    },

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