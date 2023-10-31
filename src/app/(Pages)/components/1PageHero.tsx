import clsx from "clsx";
import styles from "../Top.module.css";

import { Cabin } from "next/font/google";
const cavin = Cabin({
    display: "swap",
    subsets: ["latin-ext"],
    weight: "variable",
})

export default function Hero({ id, className }: { id?: string, className?: string}) {
    return (
        <section id={id} className={clsx(className, styles.Hero, cavin.className)}>
            <h1>SUNULF</h1>
            <p>Movie Creator Team</p>
        </section>
    )
}