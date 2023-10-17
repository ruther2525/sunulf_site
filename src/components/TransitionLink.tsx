'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import React from 'react';


type Props = {
    href: string;
    children: React.ReactNode;
};

export const useReset = () => {
    const router = useRouter();

    useEffect(() => {
        const body = document.querySelector('body')!;
        body.classList.remove('page-transition-animation');
    }, [router])
}

export default function LinkComponent({ href, children }: Props) {
    const router = useRouter()
    const clickEventHandler = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault();

        const body = document.querySelector('body')!;
        body.classList.add('page-transition-animation');
        
        setTimeout(() => {
            router.push(href)
        }, 1000);
    }

    return (
        <Link href={href} onClick={clickEventHandler}>{children}</Link>
    )
}