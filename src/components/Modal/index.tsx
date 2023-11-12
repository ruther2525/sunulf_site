'use client';
import { useRouter } from "next/navigation";
import { MouseEventHandler, ReactNode, useCallback, useRef } from "react";
import styles from "./Modal.module.css";

export default function Modal({ children }: { children: ReactNode }) {
    const overlay = useRef<HTMLDivElement>(null);
    const inner = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const onDismiss = useCallback(() => {
        router.back();
    }, [router]);

    const onClick: MouseEventHandler = useCallback((e) => {
        if (e.target === overlay.current || e.target === inner.current) {
            if (onDismiss) onDismiss();
        }
    }, [onDismiss, overlay]);


    return (
        <>
            <style global jsx>{`
            html, body {
                overflow: hidden;
            }
            `}</style>
            <div
                ref={overlay}
                className={styles.overlay}
                onClick={onClick}
            />
            <div className={styles.wrapper}>
                <button
                    className={styles.close_btn}
                    onClick={onDismiss}
                    title="閉じる"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        fill="none"
                        viewBox="0 0 48 48"
                    >
                        <path
                            fill="#fff"
                            d="M29.657 24l7.07 7.071-5.657 5.657L24 29.657l-7.071 7.07-5.657-5.657L18.343 24l-7.07-7.071 5.657-5.657L24 18.343l7.071-7.07 5.657 5.657L29.657 24z"
                        />
                    </svg>
                </button>
                <div
                    ref={inner}
                    className={styles.contents}
                    onClick={onClick}
                >
                    <div className={styles.inner}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}