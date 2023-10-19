'use client';

import { useEffect } from "react";

export default function BackGroundVideo() {
    useEffect(() => {
        const video = document.getElementById('bg-movie') as HTMLVideoElement;
        video.play()
            .then(() => {
                console.log('play');
            })
            .catch((error) => {
                console.error(error);
                // 画像に切り替える
                const img = document.createElement('img');
                img.src = '/sunulf-logo-1920-1080.png';
                img.className = 'w-full h-full object-cover select-none';
                img.id = 'bg-movie';
                img.alt = 'background';

                const video = document.getElementById('bg-movie') as HTMLVideoElement;
                video.replaceWith(img);
            });
    }, []);
    return (
        <div className="fixed w-screen h-screen -z-50 overflow-hidden">
            <video
                className="w-full h-full object-cover select-none"
                src="/sunulf-background.mp4"
                id="bg-movie"
                muted
                playsInline
                controls={false}
                loop={true}
                autoPlay={false}
            />
        </div>
    )
}