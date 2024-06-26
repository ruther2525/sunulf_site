'use client';
import React, { useEffect, useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import { usePathname } from "next/navigation";

import styles from './Top.module.css';


export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isRoot = pathname === "/";
    
    const [isLoading, setIsLoading] = useState(isRoot);
    
    useEffect(() => {
        if (isLoading) {
            console.log("岸田パンケーキロボット");
            console.log("%c岸田\nパンケーキ\nロボット",
                "color: #f8a430;"
                + "font-size: 1000%;"
                + "font-weight:bold;"
                + "text-shadow:"
                    + "rgb(0, 0, 0) 3px 0px 0px,"
                    + "rgb(0, 0, 0) 2.83333px 0.983333px 0px,"
                    + "rgb(0, 0, 0) 2.35px 1.85px 0px,"
                    + "rgb(0, 0, 0) 1.61667px 2.51667px 0px,"
                    + "rgb(0, 0, 0) 0.7px 2.91667px 0px,"
                    + "rgb(0, 0, 0) -0.283333px 2.98333px 0px,"
                    + "rgb(0, 0, 0) -1.25px 2.73333px 0px,"
                    + "rgb(0, 0, 0) -2.06667px 2.16667px 0px,"
                    + "rgb(0, 0, 0) -2.66667px 1.36667px 0px,"
                    + "rgb(0, 0, 0) -2.96667px 0.416667px 0px,"
                    + "rgb(0, 0, 0) -2.95px -0.566667px 0px,"
                    + "rgb(0, 0, 0) -2.6px -1.5px 0px,"
                    + "rgb(0, 0, 0) -1.96667px -2.26667px 0px,"
                    + "rgb(0, 0, 0) -1.11667px -2.78333px 0px,"
                    + "rgb(0, 0, 0) -0.133333px -3px 0px,"
                    + "rgb(0, 0, 0) 0.85px -2.88333px 0px,"
                    + "rgb(0, 0, 0) 1.75px -2.43333px 0px,"
                    + "rgb(0, 0, 0) 2.45px -1.73333px 0px,"
                    + "rgb(0, 0, 0) 2.88333px -0.833333px 0px;"
            );
            console.log("%cみどりパンケーキ", "color: green; font-weight:bold; font-size: 300%");
        }
    }, [isLoading]);

    return (
        <>
            {isLoading && isRoot ? (
                <SplashScreen finishLoading={() => {
                    setIsLoading(false)
                }} />
            ) : ''}
            <div id="page">
                <main className={styles.Main}>
                    {children}
                </main>
            </div>
        </>
    );
}