'use client';
import Hero from "./components/1PageHero";
import Members from "./components/2Members";
import BackGroundVideo from "./components/0BG_Video";
import { useState } from "react";
import Works from "./components/3Works";

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
    const [isLowPerformance, setIsLowPerformance] = useState(false);

    return (
        <>
            <div>
                <BackGroundVideo setIsLowPerformance={setIsLowPerformance} />
                <div className={`${isLowPerformance ? "backdrop-blur-md" : "backdrop-blur-lg"}`}>
                    <Hero id="home" />
                    <Members id="members" MembersList={MembersList} />
                    <Works id="works" />
                </div>
            </div>
        </>
    )
}