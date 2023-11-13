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
                revalidate: 60,
            },
        },
    })).contents[0];

    if (!work) {
        return <></>;
    }

    console.log(work);

    return (
        <div style={{
            width: "100%",
            height: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            paddingTop: "5rem",
        }}>
            <WorksComponent work={work} />
        </div>
    );
}