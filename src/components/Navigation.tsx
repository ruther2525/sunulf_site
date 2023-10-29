import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "./Navigation.module.css";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";
import { usePathname } from "next/navigation";


const LinkList = [
    {
        name: "Home",
        href: "/",
        id: "home",
    },
    {
        name: "Members",
        href: "/",
        id: "members",
    },
    {
        name: "Works",
        href: "/",
        id: "works",
    },
    {
        name: "Contact",
        href: "/contact",
    },
];

export default function NavBar() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isScroll, setIsScroll] = useState(false);

    const pathname = usePathname();
    const isSamePath = (href: string) => {
        return pathname.startsWith(href);
    }

    
    useEffect(() => {
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        const resizeEvent = () => {
            if(windowWidth !== window.innerWidth || windowHeight !== window.innerHeight) {
                windowWidth = window.innerWidth;
                windowHeight = window.innerHeight;
            }
        }
        resizeEvent();

        const scrollEvent = () => {
            const scroll = window.scrollY;
            if (scroll > 100) {
                setIsScroll(true);
            } else if(!isMobileOpen) {
                setIsScroll(false);
            }
            
            console.log(window.screenX, window.screenY, window.innerWidth, window.innerHeight);
        }
        scrollEvent();

        window.addEventListener("resize", resizeEvent);

        window.addEventListener("scroll", scrollEvent);
        
        return () => {
            window.removeEventListener("resize", resizeEvent);
            window.removeEventListener("scroll", scrollEvent)
        }
    }, [isMobileOpen]);

    return (
        <nav className={clsx(styles.Top,
            isScroll ? styles._scroll : "",
            isMobileOpen ? styles._open : "",
        )}>
            <div className={styles._inner}>
                <div className={styles.Logo_Top}>
                    <Image
                        src="/sunulf-logo-white.svg"
                        alt="logo"
                        width={100}
                        height={20}
                    />
                </div>
                <div className={styles.Link_Top}>
                    <button
                        className={styles.Link_button}
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                    >
                        {Array(3).fill(0).map((_, i) => (
                            <div key={i} className={styles.__line} />
                        ))}
                    </button>
                    <div className={styles.Link_list}>
                        <ul className={styles.__inner}>
                            {LinkList.map((link) => (
                                <li key={link.name} className={styles.__item}>
                                    {link.id ? (
                                        <Scroll
                                            to={link.id}
                                            smooth={true}
                                            duration={500}
                                            offset={-20}
                                            className={styles.__link}
                                            onClick={() => setIsMobileOpen(false)}
                                        >
                                            <span>{link.name}</span>
                                        </Scroll>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className={styles.__link} >
                                            <span>{link.name}</span>
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}