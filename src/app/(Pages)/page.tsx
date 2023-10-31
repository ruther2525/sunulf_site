import Hero from "./components/Hero";
import Members from "./components/Members";
import BackGroundVideo from "./components/BG_Video";
import Works from "./components/Works";
import { client } from "@/libs/microcms";

const MembersList = [
    {
        "name": "Mouri",
        "id": "M0UR11",
        "icon": "mouri-icon.jpg"
    },
    {
        "name": "amos",
        "id": "amos00513",
        "icon": "amos-icon.jpg"
    },
    {
        "name": "fujisan",
        "id": "fujisan_142532",
        "icon": "fujisan-icon.jpg"
    },
    {
        "name": "ken",
        "id": "KenEizo",
        "icon": "ken-icon.jpg"
    }
]


export default async function Page() {
    const WorksList = await client.get({
        endpoint: "works",
        customRequestInit: {
            next: {
                tags: ["microcms-works"],
            },
        },
        queries: {
            limit: 50,
        },
    });
    console.log(WorksList);

    return (
        <>
            <BackGroundVideo />
            <div>
                <Hero id="home" />
                <Members id="members" MembersList={MembersList} />
                <Works id="works" WorksList={WorksList.contents} />
            </div>
        </>
    )
}