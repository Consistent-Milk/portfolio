import React from "react";

const Tabs = ({ color }) => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <div className="mt-20 flex justify-center items-center">
                <h1 className="text-3xl font-bold text-[#149DDD] underline">
                    Resume
                </h1>
            </div>
            <div className="mt-10 px-6 flex flex-wrap">
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                    >
                        <li className="-mb-px mr-2 mt-3 lg:mt-0 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 1
                                        ? `text-white border border-[#149DDD] bg-${color}`
                                        : `text-${color} bg-white`)
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                Academics
                            </a>
                        </li>
                        <li className="-mb-px mr-2 mt-3 lg:mt-0 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 2
                                        ? `text-white border border-[#149DDD] bg-${color}`
                                        : `text-${color} bg-white`)
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Publications
                            </a>
                        </li>
                        <li className="-mb-px mr-2 mt-3 lg:mt-0 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 3
                                        ? `text-white border border-[#149DDD] bg-${color}`
                                        : `text-${color} bg-white`)
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                Research Experience
                            </a>
                        </li>
                        <li className="-mb-px mr-2 mt-3 lg:mt-0 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 4
                                        ? `text-white border border-[#149DDD] bg-${color}`
                                        : `text-${color} bg-white`)
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(4);
                                }}
                                data-toggle="tab"
                                href="#link4"
                                role="tablist"
                            >
                                Professional Experience
                            </a>
                        </li>
                        <li className="-mb-px mr-2 mt-3 lg:mt-0 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 5
                                        ? `text-white border border-[#149DDD] bg-${color}`
                                        : `text-${color} bg-white`)
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(5);
                                }}
                                data-toggle="tab"
                                href="#link5"
                                role="tablist"
                            >
                                Broader Impact
                            </a>
                        </li>
                        <li className="-mb-px mr-2 mt-3 lg:mt-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-4 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 6
                                        ? `text-white border border-[#149DDD] bg-${color}`
                                        : `text-${color} bg-white`)
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(6);
                                }}
                                data-toggle="tab"
                                href="#link6"
                                role="tablist"
                            >
                                Achievements
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-zinc-900 w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div
                                    className={
                                        openTab === 1 ? "block" : "hidden"
                                    }
                                    id="link1"
                                >
                                    <div className="flex items-center justify-center">
                                        <h1 className="font-bold text-[#149DDD] mt-10 mb-10 text-3xl">
                                            Education
                                        </h1>
                                    </div>
                                    <div className="flex flex-wrap justify-center">
                                        <div className="border font-bold text-[#149DDD] bg-zinc-900 rounded-xl p-4 md:p-10 border-[#149DDD]">
                                            2022-2027
                                        </div>
                                        <div className="ml-10 text-white">
                                            <h1 className="text-2xl mb-5">
                                                Doctor of Philosophy
                                            </h1>
                                            <h2 className="text-xl">
                                                University of Central Florida
                                            </h2>
                                            <p className="text-lg">
                                                Mathematics
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-10 flex flex-wrap justify-center">
                                        <div className="border font-bold translate-x-[-8%] text-[#149DDD] bg-zinc-900 rounded-xl p-4 md:p-10 border-[#149DDD]">
                                            2020-2022
                                        </div>
                                        <div className="ml-10 text-white translate-x-[-8%]">
                                            <h1 className="text-2xl mb-5">
                                                Master of Science
                                            </h1>
                                            <h2 className="text-xl">
                                                City College of New York
                                            </h2>
                                            <p className="text-lg">
                                                Mathematics
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-10 flex flex-wrap justify-center">
                                        <div className="border font-bold md:translate-x-[12%] text-[#149DDD] bg-zinc-900 rounded-xl p-4 md:p-10 border-[#149DDD]">
                                            2018-2020
                                        </div>
                                        <div className="ml-10 text-white md:translate-x-[7%]">
                                            <h1 className="text-2xl mb-5">
                                                Bachelor of Science
                                            </h1>
                                            <h2 className="text-xl">
                                                CUNY York College
                                            </h2>
                                            <p className="text-lg">
                                                Mathematics and Computer Science
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-10 flex flex-wrap justify-center">
                                        <div className="border font-bold md:translate-x-[12%] text-[#149DDD] bg-zinc-900 rounded-xl p-4 md:p-10 border-[#149DDD]">
                                            2014-2015
                                        </div>
                                        <div className="ml-10 text-white md:translate-x-[7%]">
                                            <h1 className="text-2xl mb-5">
                                                Associate of Science
                                            </h1>
                                            <h2 className="text-xl">
                                                CUNY BMCC
                                            </h2>
                                            <p className="text-lg">
                                                Mathematics and Computer Science
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <h1 className="font-bold text-[#149DDD] mt-10 mb-10 text-3xl">
                                            Affiliation
                                        </h1>
                                    </div>
                                    <div className="flex flex-wrap justify-center">
                                        <div className="text-white rounded-xl border border-[#149DDD] p-10">
                                            <h1 className="text-[#149DDD] flex justify-center text-2xl mb-5">
                                                AMERICAN MATHEMATICAL SOCIETY
                                            </h1>
                                            <h2 className="flex justify-center text-xl">
                                                Graduate Student Member
                                            </h2>
                                            <p className="flex justify-center text-lg">
                                                Member ID: BHAWXA
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-10 flex flex-wrap justify-center">
                                        <div className="text-white rounded-xl border border-[#149DDD] p-10">
                                            <h1 className="text-[#149DDD] flex justify-center text-2xl mb-5">
                                                SOCIETY OF INDUSTRIAL AND
                                                APPLIED MATHEMATICS
                                            </h1>
                                            <h2 className="flex justify-center text-xl">
                                                Graduate Student Member
                                            </h2>
                                            <p className="flex justify-center text-lg">
                                                Member ID: 020945503
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-10 flex flex-wrap justify-center">
                                        <div className="text-white rounded-xl border border-[#149DDD] p-10">
                                            <h1 className="text-[#149DDD] flex justify-center text-2xl mb-5">
                                                PHI THETA KAPPA HONOR SOCIETY
                                            </h1>
                                            <h2 className="flex justify-center text-xl">
                                                Student Member
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={
                                        openTab === 2 ? "block" : "hidden"
                                    }
                                    id="link2"
                                >
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Officia, magni facilis
                                        cum dignissimos quaerat beatae illum
                                        commodi fugiat possimus consectetur nisi
                                        maiores mollitia, iure voluptate. Nulla
                                        blanditiis maxime ipsa quasi!
                                    </p>
                                </div>
                                <div
                                    className={
                                        openTab === 3 ? "block" : "hidden"
                                    }
                                    id="link3"
                                >
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Officia, magni facilis
                                        cum dignissimos quaerat beatae illum
                                        commodi fugiat possimus consectetur nisi
                                        maiores mollitia, iure voluptate. Nulla
                                        blanditiis maxime ipsa quasi!
                                    </p>
                                </div>
                                <div
                                    className={
                                        openTab === 4 ? "block" : "hidden"
                                    }
                                    id="link4"
                                >
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Sequi nam eum nemo
                                        quae quam incidunt praesentium?
                                        Necessitatibus ratione facere quod.
                                        Ipsum molestiae nemo illo molestias
                                        excepturi! Iure harum iste eveniet!
                                    </p>
                                </div>
                                <div
                                    className={
                                        openTab === 5 ? "block" : "hidden"
                                    }
                                    id="link5"
                                >
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Officia, magni facilis
                                        cum dignissimos quaerat beatae illum
                                        commodi fugiat possimus consectetur nisi
                                        maiores mollitia, iure voluptate. Nulla
                                        blanditiis maxime ipsa quasi!
                                    </p>
                                </div>
                                <div
                                    className={
                                        openTab === 6 ? "block" : "hidden"
                                    }
                                    id="link6"
                                >
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Officia, magni facilis
                                        cum dignissimos quaerat beatae illum
                                        commodi fugiat possimus consectetur nisi
                                        maiores mollitia, iure voluptate. Nulla
                                        blanditiis maxime ipsa quasi!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default function Resume() {
    return (
        <>
            <Tabs color="[#149DDD]" />;
        </>
    );
}
