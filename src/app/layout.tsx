import type { Metadata } from 'next'
import '@acab/reset.css';
import './globals.css'

const title = 'SUNULF - Movie Creator Team';
const description = 'SUNULFは映像クリエイターが集まったチームです。';

export const metadata: Metadata = {
    title,
    description,
    metadataBase: new URL('https://sunulf-site.vercel.app/'),

    openGraph: {
        title,
        description,
        type: 'website',
        locale: 'ja_JP',
        url: 'https://sunulf-site.vercel.app/',
        images: [
            {
                url: 'https://sunulf-site.vercel.app/sunulf-logo-1920-1080.png',
                width: 1920,
                height: 1080,
                alt: 'SUNULF',
            },
            {
                url: 'https://sunulf-site.vercel.app/sunulf-logo.webp',
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
                url: 'https://sunulf-site.vercel.app/sunulf-logo-1920-1080.png',
                width: 1920,
                height: 1080,
                alt: 'SUNULF',
            }
        ]
    },

}

import { Cabin, IBM_Plex_Sans_JP } from "next/font/google";
import clsx from 'clsx';
import NavBar from '@/components/Navigation';

const cavin = Cabin({
    display: "swap",
    subsets: ["latin-ext"],
    weight: "variable",
    variable: '--font-cavin',
})

const ibmplexsans = IBM_Plex_Sans_JP({
    weight: "300",
    subsets: ['latin'],
    variable: '--font-ibmplexsans',
});

export default function RootLayout(props: {
    children: React.ReactNode,
    modal: React.ReactNode,
}) {
    return (
        <html lang="ja" className={clsx(
            cavin.variable,
            ibmplexsans.variable,
        )}>
            <head />
            <body>
                <NavBar />
                {props.children}
                {props.modal}
            </body>
        </html>
    )
}
