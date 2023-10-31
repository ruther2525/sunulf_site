import Image from 'next/image'
import Link from 'next/link'

import styles from './Works.module.css'
import { Works } from '@/types/microcms/works'

export default function Works({
    id,
    WorksList
}: {
    id?: string,
    WorksList: Works[],
}) {
    return (
        <section id={id} className={styles.Works}>
            <h1 className={styles.title}>Works</h1>
            <ul className={styles.list}>
                {WorksList ? WorksList.map((work) => (
                    <li key={work.id} className={styles.item}>
                        <Image
                            src={work.thumb.url}
                            alt={`${work.name} thumbnail`}
                            width={work.thumb.width}
                            height={work.thumb.height}
                            className={styles.thumbnail}
                        />
                        <div className={styles.overlay}>
                            <h3 className={styles.name}>{work.name}</h3>
                            <p className={styles.genre}># {work.genre}</p>
                        </div>
                    </li>
                )) : <></>}
            </ul>
        </section>
    )
}