import React from "react";
import Image from "next/image";
import heroPic from "../public/assets/images/home_pic.png";
import {
    FaGithub,
    FaLinkedin,
    FaOrcid,
    FaStackExchange,
    FaQuora,
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
                        <div className="rounded-full bg-white hover:bg-[#149DDD] p-3 mx-1 md:mx-2 lg:mx-4 cursor-pointer hover:scale-125 ease-in duration-300">
                            <FaGithub />
                        </div>
                        <div className="rounded-full bg-white hover:bg-[#149DDD] p-3 mx-1 md:mx-2 lg:mx-4 cursor-pointer hover:scale-125 ease-in duration-300">
                            <FaLinkedin />
                        </div>
                        <div className="rounded-full bg-white hover:bg-[#149DDD] p-3 mx-1 md:mx-2 lg:mx-4 cursor-pointer hover:scale-125 ease-in duration-300">
                            <FaOrcid />
                        </div>
                        <div className="rounded-full bg-white hover:bg-[#149DDD] p-3 mx-1 md:mx-2 lg:mx-4 cursor-pointer hover:scale-125 ease-in duration-300">
                            <FaStackExchange />
                        </div>
                        <div className="rounded-full bg-white hover:bg-[#149DDD] p-3 mx-1 md:mx-2 lg:mx-4 cursor-pointer hover:scale-125 ease-in duration-300">
                            <FaQuora />
                        </div>
                        <div className="rounded-full bg-white hover:bg-[#149DDD] p-3 mx-1 md:mx-2 lg:mx-4 cursor-pointer hover:scale-125 ease-in duration-300">
                            <SiGooglescholar />
                        </div>
                    </div>
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
