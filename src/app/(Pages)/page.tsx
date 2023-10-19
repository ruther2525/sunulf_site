'use client';
import Image from "next/image";
import Link from "next/link";
import Hero from "./1PageHero";
import Members from "./2Members";
import BackGroundVideo from "./0BG_Video";
import { useState } from "react";

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
            <BackGroundVideo setIsLowPerformance={setIsLowPerformance} />
            <div className={`${isLowPerformance ? "" : "backdrop-blur-lg"}`}>
                <Hero />
                <Members MembersList={MembersList} />
            </div>
        </>
    )
}