import Link from "next/link";

export default function HomeHub() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 text-black
        bg-[url('/TEXTURE.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
            <div className="flex max-w-2xl flex-col items-center text-center">

                <h1 className="mb-2 text-4xl font-bold tracking-tight">Hidnira's Lab</h1>
                <p className="mb-10 text-[#767676]">
                    Kumpulan project eksplorasi Next.js oleh Hidayat N. H.
                </p>

                <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-1 drop-shadow-md/25">

                    <Link
                        href="/connect"
                        className="flex flex-col items-center justify-center rounded-full
                        bg-gradient-to-b from-[#1E1E1E] to-[#3E3E3E]
                        py-3.5 text-sm font-medium text-white
                        hover:from-[#1E1E1E] hover:to-black transition"
                    >
                        <h2 className="text-xl text-white transition-all
               text-shadow-md text-shadow-white/0
               hover:text-shadow-white/50">
                            Connect Card
                        </h2>
                    </Link>

                </div>
            </div>
        </main>
    );
}