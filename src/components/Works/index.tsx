import { Works, WorksSnapshot } from "@/types/microcms/works";
import Image from "next/image";

import styles from "./inner.module.css";

export default function WorksComponent({ work }: { work: Works }) {
    return (
        <>
            {work.workUrl && (
                work.workUrl.startsWith("https://www.youtube.com/watch?v=")
                || work.workUrl.startsWith("https://youtu.be/")
            ) ? (
                <iframe
                    className={styles.iframe}
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${work.workUrl.replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "")}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
            ) : (
                <Image
                    src={work.thumb.url}
                    alt="thumbnail"
                    width={work.thumb.width}
                    height={work.thumb.height}
                />
            )}
            
            <h1 className={styles.title}>{work.name}</h1>
            <p>{work.genre}</p>
            <p>{work.description}</p>
            <p dangerouslySetInnerHTML={{
                __html: work.credit.replace(/\n/g, "<br />")
            }}></p>
            <div className={styles.tag_wrapper}>
                {work.tag.map((tag: string) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                ))}
            </div>
            <div className={styles.snapshots_wrapper}>
                {work.snapshots.map((snapshot: WorksSnapshot) => (
                    <Image
                        key={snapshot.url}
                        src={snapshot.url}
                        alt="snapshot"
                        width={snapshot.width}
                        height={snapshot.height}
                        className={styles.snapshots}
                    />
                ))}
            </div>
        </>
    );
}