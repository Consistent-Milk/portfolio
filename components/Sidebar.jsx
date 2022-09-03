import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineMenu,
    AiOutlinePhone,
} from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";
import { FaAddressBook, FaNetworkWired } from "react-icons/fa";

const SideBar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <>
            <div
                className={
                    nav
                        ? "fixed top-0 left-0 h-screen w-16 flex flex-col bg-black shadow-lg animate__animated animate__slideInLeft duration-300 z-50"
                        : "fixed top-0 left-0 h-screen w-16 flex flex-col scale-0"
                }
            >
                <Link href="/#hero">
                    <a>
                        <SideBarIcon
                            icon={<AiOutlineHome size="28" />}
                            text="Home"
                        />
                    </a>
                </Link>
                <Link href="/#about">
                    <a>
                        <SideBarIcon
                            icon={<AiOutlineUser size="32" />}
                            text="About"
                        />
                    </a>
                </Link>
                <Link href="/#skills">
                    <a>
                        <SideBarIcon
                            icon={<FaNetworkWired size="25" />}
                            text="Skills"
                        />
                    </a>
                </Link>
                <Link href="/Resume">
                    <a>
                        <SideBarIcon
                            icon={<FaAddressBook size="25" />}
                            text="Resume"
                        />
                    </a>
                </Link>
                <Link href="/#contact">
                    <a>
                        <SideBarIcon
                            icon={<AiOutlinePhone size="25" />}
                            text="Contact"
                        />
                    </a>
                </Link>
            </div>
            <div
                onClick={handleNav}
                className="fixed flex justify-end top-[2%] left-[85%] md:left-[95%] bg-blue-600 text-white hover:text-white hover:bg-[#149DDD] rounded-full border p-4 border-gray-900 cursor-pointer z-50"
            >
                <div>
                    <AiOutlineMenu />
                </div>
            </div>
        </>
    );
};

const SideBarIcon = ({ icon, text }) => (
    <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
);

export default SideBar;
