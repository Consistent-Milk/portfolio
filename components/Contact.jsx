import React from "react";

const Contact = () => {
    return (
        <div id="contact" className="w-full lg:h-screen">
            <div className="max-w-[1280px] m-auto px-2 py-16 w-full">
                <p className="flex items-center justify-center text-xl tracking-widest border border-[#149DDD] rounded-xl uppercase text-[#149DDD]">
                    Contact
                </p>
                <div className="grid lg:grid-cols-5 gap-8">
                    <div className="col-span-2 border mt-10 m-auto rounded-xl p-6 text-white border-[#149DDD]">
                        <h1 className="flex text-xl text-[#149DDD] justify-center items-center">
                            Awnon Bhowmik
                        </h1>
                        <h1 className="flex justify-center items-center">
                            <span className="pr-2 text-lg text-[#149DDD]">
                                Address:
                            </span>{" "}
                            University of Central Florida, Department of
                            Mathematics, College of Sciences4393 Andromeda Loop
                            N, Orlando, FL 32816
                        </h1>
                        <h1 className="flex justify-center items-center">
                            <span className="pr-2 text-lg text-[#149DDD]">
                                Contact:
                            </span>{" "}
                            +1 (917) 524-6720
                        </h1>
                        <h1 className="flex justify-center items-center">
                            <span className="pr-2 text-lg text-[#149DDD]">
                                Email:
                            </span>{" "}
                            awnon.bhowmik@ucf.edu
                        </h1>
                    </div>
                    <div className="col-span-3 border mt-10 rounded-xl p-4 text-white border-[#149DDD]">
                        <form>
                            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                <div className="flex flex-col">
                                    <label className="uppercase text-sm py-2">
                                        Name
                                    </label>
                                    <input
                                        className="border-2 bg-zinc-900 rounded-lg p-3 flex border-[#149DDD]"
                                        type="text"
                                        name="name"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="uppercase text-sm py-2">
                                        Phone Number
                                    </label>
                                    <input
                                        className="border-2 bg-zinc-900 rounded-lg p-3 flex border-[#149DDD]"
                                        type="text"
                                        name="phone"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col py-2">
                                <label className="uppercase text-sm py-2">
                                    Email
                                </label>
                                <input
                                    className="border-2 bg-zinc-900 rounded-lg p-3 flex border-[#149DDD]"
                                    type="email"
                                    name="email"
                                />
                            </div>
                            <div className="flex flex-col py-2">
                                <label className="uppercase text-sm py-2">
                                    Subject
                                </label>
                                <input
                                    className="border-2 bg-zinc-900 rounded-lg p-3 flex border-[#149DDD]"
                                    type="text"
                                    name="subject"
                                />
                            </div>
                            <div className="flex flex-col py-2">
                                <label className="uppercase text-sm py-2">
                                    Message
                                </label>
                                <textarea
                                    className="border-2 bg-zinc-900 rounded-lg p-3 flex border-[#149DDD]"
                                    rows="10"
                                    name="message"
                                ></textarea>
                            </div>
                            <button className="w-full p-4 border rounded-xl hover:shadow-md hover:shadow-[#149DDD] border-[#149DDD] text-gray-100 mt-4">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
