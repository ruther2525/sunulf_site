import Image from "next/image";
import Link from "next/link";

import styles from "../Top.module.css";

export default function Members({ id, MembersList }: { id?: string, MembersList: Array<{ name: string, id: string, icon: string }> }) {
    return (
        <section id={id} className={styles.Members}>
            <div>
                <h1 className={styles.Members__title}>Members</h1>
                <ul className={styles.Members__list}>
                    {MembersList.map((member) => (
                        <li key={member.id} className={styles.__item}>
                            <div className={styles.__inner}>
                                <Image
                                    src={`/members/${member.icon}`}
                                    alt={`${member.name} icon`}
                                    width={200}
                                    height={200}
                                    className={styles.__image} />
                                <p className={styles.__text}>
                                    <span className={styles.__name}>{member.name}</span>
                                    <Link
                                        className={styles.__link}
                                        href={`https://x.com/${member.id}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >@{member.id}</Link>
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.__separator} />
        </section>
    )
}