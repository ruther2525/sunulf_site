'use client';
import React, { useEffect, useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isRoot = pathname === "/";
    
    const [isLoading, setIsLoading] = useState(isRoot);
    
    useEffect(() => {
        if (!isLoading) {
            const page = document.getElementById('page');
            if (page) {
                page.classList.remove('opacity-0');
            }
        }
    }, [isLoading]);

    return (
        <body className="bg-black">
            {isLoading && isRoot ? (
                <SplashScreen finishLoading={() => {
                    setIsLoading(false)
                }} />
            ) : (
                <>
                    <div className="transition-opacity duration-200 opacity-0" id="page">
                        <main className="w-screen min-h-screen text-white">
                            {children}
                        </main>
                    </div>
                </>
            )}
        </body>
    );
}