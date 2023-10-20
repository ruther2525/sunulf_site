import clsx from "clsx";

export default function Hero({ className }: { className?: string}) {
    return (
        <div className={clsx(className, "flex flex-col items-center justify-center w-screen h-screen")}>
            <h1 className="text-6xl font-bold">SUNULF</h1>
            <p className="text-2xl">Movie Creator Team</p>
        </div>
    )
}