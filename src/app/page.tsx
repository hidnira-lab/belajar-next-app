"use client";

import Image from "next/image";
import { useState } from "react";
import { FaGoogle, FaLinkedinIn, FaInstagram, FaSpotify, FaDiscord, FaPinterestP } from "react-icons/fa";
import Typewriter from 'typewriter-effect';

export default function ConnectPage() {
    const [isSeriousFace, setIsSeriousFace] = useState(false);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 text-black
                 bg-[url('/TEXTURE.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">

            <div className="relative z-10 flex w-full max-w-[400px] flex-col items-center rounded-[40px] bg-gradient-to-b from-white to-[#C3C3C3] p-10 shadow-xl">

                <div
                    onClick={() => setIsSeriousFace(!isSeriousFace)}
                    className="relative mb-4 h-28 w-28 overflow-hidden drop-shadow-md/25
                    cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95">
                    <Image
                        src={isSeriousFace ? "/hids-avatar-2.svg" : "/hids-avatar.svg"}
                        alt="Hidayat N. H."
                        fill
                        className="object-contain"
                    />
                </div>

                <p className="text-sm text-[#767676]">Hey, I'm</p>
                <h1 className="text-2xl font-bold text-[#1E1E1E]">Hidayat N. H.</h1>
                <div className="mb-4">
                    <p className="text-md text-[#1E1E1E]">
                    <Typewriter
                        options={{
                            strings: ["UI/UX Designer",
                                "Software Developer",
                                "Visual Enthusiast"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    </p>
                </div>


                <div className="mb-8 flex gap-2 text-[#767676]">
                    <a href={"https://open.spotify.com/user/31kftsg22ylbqnssbb63anrj7lza?si=3f27f90df2764afd"}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="group relative z-10 p-3 cursor-pointer transition-all hover:bg-white/20
                        bg-white/10 backdrop-blur-[2px]
                        rounded-2xl border border-white/10
                        before:content-[''] before:absolute before:inset-0
                        before:rounded-2xl before:border before:border-white/20"
                    >
                        <FaSpotify className="relative z-10 text-xl transition-colors duration-300 group-hover:text-[#1A1A1A]"/>
                    </a>

                    <a href={"https://discord.com/users/274777315114876929"}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="group relative z-10 p-3 cursor-pointer transition-all hover:bg-white/20
                        bg-white/10 backdrop-blur-[2px]
                        rounded-2xl border border-white/10
                        before:content-[''] before:absolute before:inset-0
                        before:rounded-2xl before:border before:border-white/20"
                    >
                        <FaDiscord className="relative z-10 text-xl transition-colors duration-300 group-hover:text-[#1A1A1A]"/>
                    </a>

                    <a href={"https://pinterest.com/hidnira/"}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="group relative z-10 p-3 cursor-pointer transition-all hover:bg-white/20
                        bg-white/10 backdrop-blur-[2px]
                        rounded-2xl border border-white/10
                        before:content-[''] before:absolute before:inset-0
                        before:rounded-2xl before:border before:border-white/20"
                    >
                        <FaPinterestP className="relative z-10 text-xl transition-colors duration-300 group-hover:text-[#1A1A1A]"/>
                    </a>
                </div>

                <div className="flex w-full flex-col gap-4">
                    <a href={"mailto:hidnira@gmail.com"} className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-b from-[#1E1E1E] to-[#3E3E3E] py-3.5 text-sm font-medium text-white hover:from-[#1E1E1E] hover:to-black transition">
                        <FaGoogle/>
                        <p className="text-base">
                            Contact via <span className="font-bold">Gmail</span>
                        </p>
                    </a>

                    <a href={"https://www.linkedin.com/in/hidayatnh/"}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-b from-[#1E1E1E] to-[#3E3E3E] py-3.5 text-sm font-medium text-white hover:from-[#1E1E1E] hover:to-black transition">
                        <FaLinkedinIn/>
                        <p className="text-base">
                            Connect via <span className="font-bold">Linked In</span>
                        </p>
                    </a>

                    <a href={"https://instagram.com/hidnira"}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-b from-[#1E1E1E] to-[#3E3E3E] py-3.5 text-sm font-medium text-white hover:from-[#1E1E1E] hover:to-black transition">
                        <FaInstagram/>
                        <p className="text-base">
                            Find me <span className="font-bold">@hidnira</span>
                        </p>
                    </a>
                </div>

                <p className="mt-8 text-center text-base font-medium text-[#1E1E1E]">
                    "Let's create something<br />
                    <span className="italic">impactful</span> <span className="text-[#767676]">together!"</span>
                </p>
            </div>
        </main>
    );
}