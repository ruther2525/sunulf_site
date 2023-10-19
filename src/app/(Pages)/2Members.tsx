import Image from "next/image";
import Link from "next/link";

export default function Members({ MembersList }: { MembersList: Array<{ name: string, id: string, icon: string }> }) {
    return (
        <div className="flex items-center justify-center w-full min-h-screen pt-4">
            <div>
                <h1 className="text-4xl font-bold text-center">Members</h1>
                <ul className="flex flex-wrap justify-center">
                    {MembersList.map((member) => (
                        <li key={member.id} className="w-full mt-4">
                            <div className="flex flex-row items-center justify-between w-full max-w-xs p-4 m-auto">
                                <Image
                                    src={`/members/${member.icon}`}
                                    alt={`${member.name} icon`}
                                    width={200}
                                    height={200}
                                    className="w-1/3 object-cover rounded-full" />
                                <p className="flex flex-col justify-center items-end">
                                    <span className="text-2xl">{member.name}</span>
                                    <Link
                                        className="text-lg text-slate-400 hover:underline"
                                        href={`https://x.com/${member.id}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >@{member.id}</Link>
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}