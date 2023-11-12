'use client';
import { useRouter } from "next/navigation";
import { MouseEventHandler, ReactNode, useCallback, useRef } from "react";
import styles from "./Modal.module.css";

export default function Modal({ children }: { children: ReactNode }) {
    const overlay = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const onDismiss = useCallback(() => {
        router.back();
    }, [router]);

    const onClick: MouseEventHandler = useCallback((e) => {
        if (e.target === overlay.current) {
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
            >
                <div className={styles.wrapper}>
                    <button
                        className={styles.close_btn}
                        onClick={onDismiss}
                        title="閉じる"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="#000"
                                fillRule="evenodd"
                                d="M12 10.586L7.707 6.293 6.293 7.707 10.586 12l-4.293 4.293 1.414 1.414L12 13.414l4.293 4.293 1.414-1.414L13.414 12l4.293-4.293-1.414-1.414L12 10.586z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}