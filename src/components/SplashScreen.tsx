import React, { useEffect, useState } from 'react';

import styles from './Splash.module.css';
import clsx from 'clsx';

export default function SplashScreen({
    finishLoading,
}: {
    finishLoading: () => void;
}) {
    
    const [isMounted, setIsMounted] = useState(true);

    
    useEffect(() => {
        if(!isMounted) return;

        const _isAlreadyLoaded = sessionStorage?.getItem('isLoaded');
        const isAlreadyLoaded = _isAlreadyLoaded ?
            (new Date()).getTime() - (new Date(_isAlreadyLoaded)).getTime()
                < 1000 * 60 * 5
            : false;
        console.log(new Date(_isAlreadyLoaded ? _isAlreadyLoaded : ''));
        console.log(((new Date()).getTime() - (new Date(_isAlreadyLoaded ? _isAlreadyLoaded : '')).getTime()) / 1000 / 60);
        console.log(isAlreadyLoaded);

        if (isAlreadyLoaded) {
            setIsMounted(false);
            setTimeout(() => {
                finishLoading();
            }, 200);
            return;
        }

        const timeoutId = setTimeout(() => { setIsMounted(true) }, 10);
        
        const video = document.getElementById('movie') as HTMLVideoElement;
        video.play()
            .then(() => {
                console.log('play');
            })
            .catch((error) => {
                console.error(error);
                setIsMounted(false);
                setTimeout(() => {
                    finishLoading();
                }, 200);
                return;
            });
    
        video.addEventListener('ended', () => {
            setIsMounted(false);
            setTimeout(() => {
                sessionStorage?.setItem('isLoaded', (new Date()).toISOString());
                finishLoading();
            }, 200);
        });
        return () => clearTimeout(timeoutId);
    }, [isMounted, finishLoading]);

    return (
        <div
            className={clsx(
                styles.Top,
                isMounted ? '' : styles._hidden,
            )}
            id='splash-screen'
        >
            <div className={styles._vid_inner} id='splash-screen-wrapper'>
                <video
                    id="movie"
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