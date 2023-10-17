import Image from "next/image";

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
            <div>
                <div className="flex flex-col items-center justify-center w-screen h-screen backdrop-blur-lg mix-blend-difference">
                    <h1 className="text-4xl font-bold">SUNULF</h1>
                    <p className="text-xl">Movie Creator Team</p>
                </div>
                <div className="w-full h-screen backdrop-blur-lg pt-4">
                    <h1 className="text-4xl font-bold text-center">Members</h1>
                    <ul className="flex flex-wrap justify-center">
                        <li className="w-1/2 h-1/2 mt-4">
                            <div className="flex flex-col items-center justify-center w-full h-full">
                                <Image
                                    src="/members/mouri-icon.jpg"
                                    alt="M0UR1 icon"
                                    width={200}
                                    height={200}
                                    className="w-1/2 h-1/2 object-cover rounded-full" />
                                <p className="text-xl">Mouri(Owner)</p>
                                <p className="text-sm text-slate-400">@M0UR11</p>
                            </div>
                        </li>
                        <li className="w-1/2 h-1/2 mt-4">
                            <div className="flex flex-col items-center justify-center w-full h-full">
                                <Image
                                    src="/members/amos-icon.jpg"
                                    alt="amos icon"
                                    width={200}
                                    height={200}
                                    className="w-1/2 h-1/2 object-cover rounded-full" />
                                <p className="text-xl">amos</p>
                                <p className="text-sm text-slate-400">@amos00513</p>
                            </div>
                        </li>
                        <li className="w-1/2 h-1/2 mt-4">
                            <div className="flex flex-col items-center justify-center w-full h-full">
                                <Image
                                    src="/members/fujisan-icon.jpg"
                                    alt="fujisan icon"
                                    width={200}
                                    height={200}
                                    className="w-1/2 h-1/2 object-cover rounded-full" />
                                <p className="text-xl">fujisan</p>
                                <p className="text-sm text-slate-400">@fujisan_142532</p>
                            </div>
                        </li>
                        <li className="w-1/2 h-1/2 mt-4">
                            <div className="flex flex-col items-center justify-center w-full h-full">
                                <Image
                                    src="/members/ken-icon.jpg"
                                    alt="ken icon"
                                    width={200}
                                    height={200}
                                    className="w-1/2 h-1/2 object-cover rounded-full" />
                                <p className="text-xl">ken</p>
                                <p className="text-sm text-slate-400">@KenEizo</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}