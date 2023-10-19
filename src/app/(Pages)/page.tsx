import Image from "next/image";
import Link from "next/link";
import Hero from "./1PageHero";
import Members from "./2Members";

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


export default function Page() {

    return (
        <>
            <div className="fixed w-screen h-screen -z-50 overflow-hidden">
                <video
                    className="w-full h-full object-cover select-none"
                    src="/sunulf-background.mp4"
                    muted
                    playsInline
                    controls={false}
                    loop={true}
                    autoPlay={true}
                />
            </div>
            <div className="backdrop-blur-lg">
                <Hero />
                <Members MembersList={MembersList} />
            </div>
        </>
    )
}