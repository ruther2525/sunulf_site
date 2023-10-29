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

    const scrollEvent = (e: Event | null, _isMobileOpen: boolean) => {
        const scroll = window.scrollY;
        if (scroll > 100) {
            setIsScroll(true);
        } else if(!_isMobileOpen) {
            setIsScroll(false);
        }
    }

    useEffect(() => {
        scrollEvent(null, isMobileOpen);

        window.addEventListener("scroll", (e) => scrollEvent(e, isMobileOpen));
        return () => {
            window.removeEventListener("scroll", (e) => scrollEvent(e, isMobileOpen));
        }
    }, [isMobileOpen]);

    return (
        <nav className={clsx(styles.Top, isScroll ? styles._scroll : "")}>
            <div className={styles._inner}>
                <div className={styles.Logo_Top}>
                    <Image
                        src="/sunulf-logo-white.svg"
                        alt="logo"
                        width={100}
                        height={20}
                    />
                </div>
                <div className={clsx(
                    styles.Link_Top,
                    isMobileOpen && isScroll ? styles._open : "",
                )}>
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
                                            offset={-50}
                                            className={styles.__link} >
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