import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 w-full pt-4 pb-4 mix-blend-difference">
            <div className="w-full flex items-center justify-between flex-wrap max-w-lg m-auto">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <Image
                        src="/sunulf-logo-white.svg"
                        alt="logo"
                        width={100}
                        height={20}
                        className="mr-2"
                    />
                </div>
                <div className="block lg:hidden">
                    <button
                        className="flex flex-col justify-center items-center px-3 py-2 hover:text-white hover:border-white"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                    >
                        <div style={{
                            width: 20,
                            height: 1,
                            backgroundColor: "#fff",
                            margin: "3px 0",
                        }} />
                        <div style={{
                            width: 20,
                            height: 1,
                            backgroundColor: "#fff",
                            margin: "3px 0",
                        }} />
                        <div style={{
                            width: 20,
                            height: 1,
                            backgroundColor: "#fff",
                            margin: "3px 0",
                        }} />
                    </button>
                </div>
                <div className={clsx("w-full block flex-grow lg:flex lg:items-center lg:w-auto",
                    isMobileOpen ? "block" : "hidden")}>
                    <div className="text-sm lg:flex-grow"></div>
                    <div>
                        <a
                            href="#responsive-header"
                            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
                        >
                            Docs
                        </a>
                        <a
                            href="#responsive-header"
                            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
                        >
                            Examples
                        </a>
                        <a
                            href="#responsive-header"
                            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white"
                        >
                            Blog
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}