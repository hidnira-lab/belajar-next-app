import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="fixed left-1/2 top-6 z-50 flex -translate-x-1/2 items-center gap-6 md:gap-12
        bg-gradient-to-b from-[#EFEFEF]/0 to-[#C3C3C3]/20 backdrop-blur-[2px] rounded-full border border-white/40 py-2 px-6
        ">

            <Link href="/" className="flex shrink-0 items-center pl-2 transition-transform hover:scale-105 active:scale-95">
                <Image
                    src="/hidnira.svg"
                    alt="Hidnira Logo"
                    width={24}
                    height={24}
                    className="object-contain"
                />
            </Link>

            <Link
                href="/"
                className="text-[16px] font-semibold tracking-wide text-[#1A1A1A] transition-colors hover:text-gray-500"
            >
                Home
            </Link>

            <a
                href="https://github.com/hidnira-lab"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-b from-[#505050] to-[#CDCDCD]
                px-0.5 py-0.5 transition hover:scale-105 active:scale-95
                hover:from-[#CDCDCD] hover:to-[#505050]"
            >
                <div className="rounded-full  text-[14px] font-medium text-white
                px-4 py-1 bg-gradient-to-b from-[#1E1E1E] to-[#3E3E3E]
                transition hover:from-[#1E1E1E] hover:to-black ">
                    Github
                </div>
            </a>

        </nav>
    );
}