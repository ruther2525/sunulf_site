import WorksComponent from "@/components/Works";
import { client } from "@/libs/microcms";

export default async function WorksPage({ params: { slug } }: { params: { slug: string } }) {
    const work = (await client.get({
        endpoint: "works",
        queries: {
            filters: `slug[equals]${slug}`,
        },
        customRequestInit: {
            next: {
                tags: ["microcms-works"],
            },
        },
    })).contents[0];

    if (!work) {
        return <></>;
    }

    console.log(work);

    return (
        <WorksComponent work={work} />
    );
}