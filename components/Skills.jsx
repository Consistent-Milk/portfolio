import React from "react";
import Image from "next/image";
import htmlIcon from "../public/assets/icons/html5.png";
import cssIcon from "../public/assets/icons/CSS3_logo.png";
import jsIcon from "../public/assets/icons/javascript-39417.png";
import cIcon from "../public/assets/icons/C.png";
import cppIcon from "../public/assets/icons/C++.png";
import fortranIcon from "../public/assets/icons/Fortran_logo.svg";
import sqlIcon from "../public/assets/icons/mySql.png";
import pythonIcon from "../public/assets/icons/python-logo.png";
import asmIcon from "../public/assets/icons/MASM.png";
import blenderIcon from "../public/assets/icons/blender.png";
import threemaxIcon from "../public/assets/icons/threemax.png";
import mudboxIcon from "../public/assets/icons/mudbox.png";
import psIcon from "../public/assets/icons/Adobe_Photoshop_CC_icon.svg";
import inkIcon from "../public/assets/icons/Inkscape_Logo.svg.png";
import gimpIcon from "../public/assets/icons/Gimp.png";
import mathematicaIcon from "../public/assets/icons/Mathematica_Logo.svg";
import matlabIcon from "../public/assets/icons/Matlab_Logo.png";
import mapleIcon from "../public/assets/icons/Maple_lg.png";
import tinkIcon from "../public/assets/icons/tkinter.png";
import qtIcon from "../public/assets/icons/Qt_logo_2016.svg";
import latexIcon from "../public/assets/icons/latex.png";

const Skills = () => {
    return (
        <section id="skills" className="w-full h-auto p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-start items-center h-full">
                <h1 className="text-3xl tracking-widest font-bold uppercase underline text-[#149DDD]">
                    Skills
                </h1>
                <h1 className="text-xl uppercase text-[#149DDD] mt-20 border border-[#149DDD] p-4 hover:shadow-sm hover:shadow-[#149DDD] cursor-pointer hover:scale-110 ease-in duration-300">
                    Frontend
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-20 mt-12">
                    <div className="p-6 shadow-sm rounded-xl hover:shadow-lg hover:shadow-[#149DDD] shadow-black border-[#149DDD] hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={htmlIcon}
                                    width="80px"
                                    height="80px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-[#149DDD] text-xl font-medium">
                                    HTML5
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-sm rounded-xl hover:shadow-lg hover:shadow-[#149DDD] shadow-black border-[#149DDD] hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={cssIcon}
                                    width="80px"
                                    height="80px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-[#149DDD] text-xl font-medium">
                                    CSS3
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-sm rounded-xl hover:shadow-lg hover:shadow-[#149DDD] shadow-black border-[#149DDD] hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={jsIcon}
                                    width="80px"
                                    height="80px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-[#149DDD] text-xl font-medium">
                                    JavaScript
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="text-xl uppercase text-[#149DDD] mt-20 border border-[#149DDD] p-4 hover:shadow-sm hover:shadow-[#149DDD] cursor-pointer hover:scale-110 ease-in duration-300">
                    Backend
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-20 mt-12">
                    <div className="p-6 shadow-sm rounded-xl hover:shadow-lg hover:shadow-[#149DDD] shadow-black border-[#149DDD] hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={cIcon}
                                    width="80px"
                                    height="80px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-[#149DDD] text-xl">C</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-sm rounded-xl hover:shadow-lg hover:shadow-[#149DDD] shadow-black border-[#149DDD] hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={cppIcon}
                                    width="80px"
                                    height="80px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-[#149DDD] text-xl font-medium">
                                    C++
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-sm rounded-xl hover:shadow-lg hover:shadow-[#149DDD] shadow-black border-[#149DDD] hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={fortranIcon}
                                    width="80px"
                                    height="80px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-[#149DDD] text-xl font-medium">
                                    Fortran
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-sm rounded-xl hover:shadow-lg hover:shadow-[#149DDD] shadow-black border-[#149DDD] hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={sqlIcon}
                                    width="80px"
                                    height="80px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-[#149DDD] text-xl font-medium">
                                    MySQL
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-sm rounded-xl hover:shadow-lg hover:shadow-[#149DDD] shadow-black border-[#149DDD] hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={pythonIcon}
                                    width="80px"
                                    height="80px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-[#149DDD] text-xl font-medium">
                                    Python
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="text-xl uppercase text-[#149DDD] mt-20 border border-[#149DDD] p-4 hover:shadow-sm hover:shadow-[#149DDD] cursor-pointer hover:scale-110 ease-in duration-300">
                    Assembly
                </h1>
                <div className="grid grid-cols-1 mt-12">
                    <div className="p-6 shadow-sm rounded-xl hover:shadow-lg hover:shadow-[#149DDD] shadow-black border-[#149DDD] hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={asmIcon}
                                    width="80px"
                                    height="80px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-[#149DDD] text-xl font-medium">
                                    ASM
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="text-xl uppercase text-[#149DDD] mt-20 border border-[#149DDD] p-4 hover:shadow-sm hover:shadow-[#149DDD] cursor-pointer hover:scale-110 ease-in duration-300">
                    3D and Animation
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-20 mt-12">
                    <div className="p-6 shadow-sm rounded-xl hover:shadow-lg hover:shadow-[#149DDD] shadow-black border-[#149DDD] hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={blenderIcon}
                                    width="80px"
                                    height="80px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-[#149DDD] text-xl">
                                    Blender
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-sm rounded-xl hover:shadow-lg hover:shadow-[#149DDD] shadow-black border-[#149DDD] hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={threemaxIcon}
                                    width="80px"
                                    height="80px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-[#149DDD] text-xl font-medium">
                                    3DS Max
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-sm rounded-xl hover:shadow-lg hover:shadow-[#149DDD] shadow-black border-[#149DDD] hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={mudboxIcon}
                                    width="80px"
                                    height="80px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-[#149DDD] text-xl font-medium">
                                    Mudbox
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="text-xl uppercase text-[#149DDD] mt-20 border border-[#149DDD] p-4 hover:shadow-sm hover:shadow-[#149DDD] cursor-pointer hover:scale-110 ease-in duration-300">
                    Image Processing
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-20 mt-12">
                    <div className="p-6 shadow-sm rounded-xl hover:shadow-lg hover:shadow-[#149DDD] shadow-black border-[#149DDD] hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={psIcon}
                                    width="80px"
                                    height="80px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-[#149DDD] text-xl">
                                    Photoshop
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-sm rounded-xl hover:shadow-lg hover:shadow-[#149DDD] shadow-black border-[#149DDD] hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={inkIcon}
                                    width="80px"
                                    height="80px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-[#149DDD] text-xl font-medium">
                                    Inkscape
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-sm rounded-xl hover:shadow-lg hover:shadow-[#149DDD] shadow-black border-[#149DDD] hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={gimpIcon}
                                    width="80px"
                                    height="80px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-[#149DDD] text-xl font-medium">
                                    Gimp
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="text-xl uppercase text-[#149DDD] mt-20 border border-[#149DDD] p-4 hover:shadow-sm hover:shadow-[#149DDD] cursor-pointer hover:scale-110 ease-in duration-300">
                    Mathematics Packages
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-20 mt-12">
                    <div className="p-6 shadow-sm rounded-xl hover:shadow-lg hover:shadow-[#149DDD] shadow-black border-[#149DDD] hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={mathematicaIcon}
                                    width="80px"
                                    height="80px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-[#149DDD] text-xl">
                                    Mathematica
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-sm rounded-xl hover:shadow-lg hover:shadow-[#149DDD] shadow-black border-[#149DDD] hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={matlabIcon}
                                    width="80px"
                                    height="80px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-[#149DDD] text-xl font-medium">
                                    Matlab
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-sm rounded-xl hover:shadow-lg hover:shadow-[#149DDD] shadow-black border-[#149DDD] hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={mapleIcon}
                                    width="80px"
                                    height="80px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-[#149DDD] text-xl font-medium">
                                    Maple
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="text-xl uppercase text-[#149DDD] mt-20 border border-[#149DDD] p-4 hover:shadow-sm hover:shadow-[#149DDD] cursor-pointer hover:scale-110 ease-in duration-300">
                    GUI
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 mt-12">
                    <div className="p-6 shadow-sm rounded-xl hover:shadow-lg hover:shadow-[#149DDD] shadow-black border-[#149DDD] hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={tinkIcon}
                                    width="80px"
                                    height="80px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-[#149DDD] text-xl">
                                    Tkinter
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-sm rounded-xl hover:shadow-lg hover:shadow-[#149DDD] shadow-black border-[#149DDD] hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={qtIcon}
                                    width="80px"
                                    height="80px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-[#149DDD] text-xl font-medium">
                                    QT
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="text-xl uppercase text-[#149DDD] mt-20 border border-[#149DDD] p-4 hover:shadow-sm hover:shadow-[#149DDD] cursor-pointer hover:scale-110 ease-in duration-300">
                    Typesetting
                </h1>
                <div className="grid grid-cols-1 gap-8 lg:gap-20 mt-12">
                    <div className="p-6 shadow-sm rounded-xl hover:shadow-lg hover:shadow-[#149DDD] shadow-black border-[#149DDD] hover:scale-110 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src={latexIcon}
                                    width="80px"
                                    height="80px"
                                    alt="/"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-[#149DDD] text-xl">
                                    Latex
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
