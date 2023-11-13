import { Works, WorksSnapshot } from "@/types/microcms/works";
import Image from "next/image";

import styles from "./inner.module.css";
import SwiperComponent from "@/components/Swiper";

export default function WorksComponent({ work }: { work: Works }) {
    return (
        <>
            <div className={styles.Head}>
                {work.workUrls.length > 0
                    &&
                    (
                        work.workUrls[0].url.startsWith("https://youtu.be/")
                        || work.workUrls[0].url.startsWith("https://www.youtube.com/watch?v=")
                    )
                    ? (
                        <iframe
                            className={styles.youtube}
                            src={`https://www.youtube.com/embed/${
                                work.workUrls[0].url.startsWith("https://youtu.be/")
                                    ? work.workUrls[0].url.replace("https://youtu.be/", "")
                                    : work.workUrls[0].url.replace("https://www.youtube.com/watch?v=", "")
                                }`}
                            title={work.name}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen={true}
                        />
                    ) : (
                        <SwiperComponent 
                            imageList={[
                                {
                                    url: work.thumb.url,
                                    width: work.thumb.width,
                                    height: work.thumb.height,
                                },
                                ...work.snapshots.map((snapshot: WorksSnapshot) => ({
                                    url: snapshot.url,
                                    width: snapshot.width,
                                    height: snapshot.height,
                                })),
                            ]}
                        />
                    )
                }
                <h1 className={styles.title}>{work.name}</h1>
                <p className={styles.genre}># {work.genre}</p>
                <div className={styles.tag_wrapper}>
                    {work.tag.map((tag: string) => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.Body}>
                <p className={styles.description}>{work.description}</p>
                <p className={styles.credit} dangerouslySetInnerHTML={{
                    __html: work.credit.replace(/\n/g, "<br />")
                }}></p>
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
            </div>
        </>
    );
}