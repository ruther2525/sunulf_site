import Image from 'next/image'
import Link from 'next/link'

import styles from '../Top.module.css'

export default function Works({ id, WorksList }: { id?: string, WorksList?: Array<{ name: string, id: string, icon: string }> }) {
    return (
        <section id={id} className={styles.Works}>
            <div>
                <h1 className={styles.Works__title}>Works</h1>
                <ul className={styles.Works__list}>
                    {WorksList? WorksList.map((work) => (
                        <li key={work.id} className={styles.__item}>
                            <div className={styles.__inner}>
                                <Image
                                    src={`/works/${work.icon}`}
                                    alt={`${work.name} icon`}
                                    width={200}
                                    height={200}
                                    className={styles.__image} />
                                <p className={styles.__text}>
                                    <span className={styles.__name}>{work.name}</span>
                                    <Link
                                        className={styles.__link}
                                        href={`https://x.com/${work.id}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >@{work.id}</Link>
                                </p>
                            </div>
                        </li>
                    )) : (
                        <p style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100vh",
                        }}>
                            読み込みに失敗しました。
                        </p>
                    )}
                </ul>
            </div>
        </section>
    )
}