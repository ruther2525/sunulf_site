import React, { useEffect, useState } from 'react';

export default function SplashScreen({
    finishLoading,
}: {
    finishLoading: () => void;
}) {
    
    const [isMounted, setIsMounted] = useState(true);

    
    useEffect(() => {
        const _isAlreadyLoaded = localStorage?.getItem('isLoaded');
        const isAlreadyLoaded = _isAlreadyLoaded ? (new Date(_isAlreadyLoaded)).getTime() - (new Date()).getTime() < 1000 * 60 * 5 : false; 

        if (isAlreadyLoaded) {
            setIsMounted(false);
            setTimeout(() => {
                finishLoading();
            }, 200);
            return;
        }

        const timeoutId = setTimeout(() => { setIsMounted(true) }, 10);
        
        const video = document.getElementById('movie') as HTMLVideoElement;
        video.play();
    
        video.addEventListener('ended', () => {
            setIsMounted(false);
            setTimeout(() => {
                localStorage?.setItem('isLoaded', (new Date()).toISOString());
                finishLoading();
            }, 200);
        });
        return () => clearTimeout(timeoutId);
    }, [finishLoading]);

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center w-screen h-screen bg-black transition-opacity duration-200 ease-in-out ${isMounted ? 'opacity-100' : 'opacity-0'}`}
            id='splash-screen'
        >
            <div className="flex flex-col items-center justify-center w-full h-full overflow-hidden" id='splash-screen-wrapper'>
                <video
                    id="movie"
                    className="w-full h-full object-cover select-none"
                    src="/splash.mp4"
                    muted
                    playsInline
                    controls={false}
                    loop={false}
                    autoPlay={false}
                />
            </div>
        </div>
    );
}