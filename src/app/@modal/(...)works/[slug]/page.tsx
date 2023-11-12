import Modal from "@/components/Modal";
import { client } from "@/libs/microcms";
import { WorksSnapshot } from "@/types/microcms/works";
import Image from "next/image";

import styles from "@/components/Works/inner.module.css";
import WorksComponent from "@/components/Works";

export default async function WorksModal(
    { params: { slug } }
    : { params: { slug: string } }
) {
    const _work = await client.get({
        endpoint: "works",
        queries: {
            filters: `slug[equals]${slug}`,
        },
        customRequestInit: {
            next: {
                tags: ["microcms-works"],
            },
        },
    });

    if (!_work || !_work.contents || _work.contents.length === 0) {
        return <></>;
    }
    
    const work = _work.contents[0];
    console.log(work);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return (
        <Modal>
            <WorksComponent work={work} />
        </Modal>
    );
}