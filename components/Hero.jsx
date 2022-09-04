import React from "react";
import Image from "next/image";
import Link from "next/link";
import heroPic from "../public/assets/images/home_pic.png";
import {
    FaGithub,
    FaLinkedin,
    FaOrcid,
    FaStackExchange,
    FaQuora,
    FaResearchgate,
} from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

const Hero = () => {
    return (
        <section id="hero" className="w-full md:h-screen p-2 flex items-center">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8">
                <div className="flex flex-col justify-center items-center col-span-1 mb-10">
                    <h1 className="text-white md:text-lg xl:text-3xl font-bold">
                        Hello I am{" "}
                        <span className="text-[#149DDD] xl:text-3xl lg:text-xl">
                            Awnon Bhowmik
                        </span>
                    </h1>
                    <p className="text-yellow-50 text-xs text- md:text-xs lg:text-md xl:text-lg mt-10">
                        Independent Researcher / Cryptographer / Web Developer
                    </p>
                    <div className="flex justify-center items-center mt-10">
                        <div className="rounded-full bg-white hover:bg-[#149DDD] p-3 mx-1 md:mx-1 lg:mx-4 cursor-pointer hover:scale-125 ease-in duration-300">
                            <a
                                href="https://github.com/awnonbhowmik"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub />
                            </a>
                        </div>
                        <div className="rounded-full bg-white hover:bg-[#149DDD] p-3 mx-1 md:mx-1 lg:mx-4 cursor-pointer hover:scale-125 ease-in duration-300">
                            <a
                                href="https://www.linkedin.com/in/awnon-bhowmik/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                        <div className="rounded-full bg-white hover:bg-[#149DDD] p-3 mx-1 md:mx-1 lg:mx-4 cursor-pointer hover:scale-125 ease-in duration-300">
                            <a href="" target="_blank" rel="noreferrer">
                                <FaOrcid />
                            </a>
                        </div>
                        <div className="rounded-full bg-white hover:bg-[#149DDD] p-3 mx-1 md:mx-1 lg:mx-4 cursor-pointer hover:scale-125 ease-in duration-300">
                            <a
                                href="https://stackexchange.com/users/11038541/awnon-bhowmik"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaStackExchange />
                            </a>
                        </div>
                        <div className="rounded-full bg-white hover:bg-[#149DDD] p-3 mx-1 md:mx-1 lg:mx-4 cursor-pointer hover:scale-125 ease-in duration-300">
                            <a
                                href="https://www.quora.com/profile/%E0%A6%85%E0%A6%A8%E0%A6%A8-%E0%A6%AD%E0%A7%8C%E0%A6%AE%E0%A6%BF%E0%A6%95-Awnon-Bhowmik"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaQuora />
                            </a>
                        </div>
                        <div className="rounded-full bg-white hover:bg-[#149DDD] p-3 mx-1 md:mx-1 lg:mx-4 cursor-pointer hover:scale-125 ease-in duration-300">
                            <a
                                href="https://scholar.google.com/citations?user=nEdZAFkAAAAJ&hl=en"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <SiGooglescholar />
                            </a>
                        </div>
                        <div className="rounded-full bg-white hover:bg-[#149DDD] p-3 mx-1 md:mx-1 lg:mx-4 cursor-pointer hover:scale-125 ease-in duration-300">
                            <a
                                href="https://www.researchgate.net/profile/Awnon-Bhowmik"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaResearchgate />
                            </a>
                        </div>
                    </div>
                    <Link href="/#contact">
                        <div className="flex mt-10 justify-center border border-[#149DDD] text-[#149DDD] p-6 hover:bg-white rounded-xl hover:border-zinc-900 cursor-pointer items-center">
                            <h1>
                                Contact Me
                            </h1>
                        </div>
                    </Link>
                </div>
                <div className="w-full h-[80%] m-auto shadow-md shadow-[#149DDD] rounded-xl flex items-center justify-center">
                    <Image
                        src={heroPic}
                        alt="/"
                        className="rounded-xl t translate-y-[-10%]"
                    ></Image>
                </div>
            </div>
        </section>
    );
};

export default Hero;
