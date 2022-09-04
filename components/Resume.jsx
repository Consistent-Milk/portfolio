import React from "react";

const Tabs = ({ color }) => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <h1 id="resume" className="flex mt-20 m-auto max-w-[1280px] items-center justify-center text-xl tracking-widest border border-[#149DDD] rounded-xl uppercase text-[#149DDD]">
                Resume
            </h1>
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
                                    <div className="grid grid-cols-5">
                                        <div className="col-span-1 flex justify-center items-center font-bold text-[#149DDD]">
                                            Published: Aug 16, 2021
                                        </div>
                                        <div className="col-span-4 text-white">
                                            <a href="">
                                                <h1 className="flex justify-center items-center font-bold text-[#149DDD]">
                                                    AN ADAPTIVE CRYPTOSYSTEM ON
                                                    A FINITE FIELD
                                                </h1>{" "}
                                            </a>
                                            <p className="p-4">
                                                <span className="font-bold text-[#149DDD]">
                                                    Abstract:
                                                </span>{" "}
                                                Owing to mathematical theory and
                                                computational power evolution,
                                                modern cryptosystems demand
                                                ingenious trapdoor functions as
                                                their foundation to extend the
                                                gap between an enthusiastic
                                                interceptor and sensitive
                                                information. This paper
                                                introduces an adaptive block
                                                encryption scheme. This system
                                                is based on product, exponent,
                                                and modulo operation on a finite
                                                field. At the heart of this
                                                algorithm lies an innovative and
                                                robust trapdoor function that
                                                operates in the Galois Field and
                                                is responsible for the superior
                                                speed and security offered by
                                                it. Prime number theorem plays a
                                                fundamental role in this system,
                                                to keep unwelcome adversaries at
                                                bay. This is a self-adjusting
                                                cryptosystem that autonomously
                                                optimizes the system parameters
                                                thereby reducing effort on the
                                                user’s side while enhancing the
                                                level of security. This paper
                                                provides an extensive analysis
                                                of a few notable attributes of
                                                this cryptosystem such as its
                                                exponential rise in security
                                                with an increase in the length
                                                of plaintext while
                                                simultaneously ensuring that the
                                                operations are carried out in
                                                feasible runtime. Additionally,
                                                an experimental analysis is also
                                                performed to study the trends
                                                and relations between the
                                                cryptosystem parameters,
                                                including a few edge cases.
                                            </p>
                                            <h2 className="p-4">
                                                <span className="font-bold text-[#139DDD]">
                                                    Journal:
                                                </span>{" "}
                                                PeerJ Computer Science
                                            </h2>
                                            <h2 className="p-4">
                                                <span className="font-bold text-[#139DDD]">
                                                    Authors:
                                                </span>{" "}
                                                Awnon Bhowmik and Unnikrishnan
                                                Menon
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="mt-20 grid grid-cols-5">
                                        <div className="col-span-1 flex justify-center items-center font-bold text-[#149DDD]">
                                            Published: Aug 16, 2021
                                        </div>
                                        <div className="col-span-4 text-white">
                                            <a href="">
                                                <h1 className="flex justify-center items-center font-bold text-[#149DDD]">
                                                    AN ENCODING SCHEMATIC BASED
                                                    ON COORDINATE
                                                    TRANSFORMATIONS
                                                </h1>{" "}
                                            </a>
                                            <p className="p-4">
                                                <span className="font-bold text-[#149DDD]">
                                                    Abstract:
                                                </span>{" "}
                                                This paper outlines an encoding
                                                schematic that is dependent on
                                                simple Cartesian coordinate
                                                transformations. Namely, the
                                                change of axes and the rotation
                                                of axes. A combination of these
                                                two is incorporated after
                                                turning singular ASCII values
                                                into 2D points. This system is
                                                based on multiple private keys
                                                that can also act as a potential
                                                candidate for threshold
                                                cryptography. Comprehensive
                                                initial testing has been
                                                performed on certain parameters
                                                by altering their values within
                                                a range. Further testing is
                                                required for more insights about
                                                the system. For now, the list of
                                                parameters that amounts to
                                                successful decryption is to be
                                                noted down for future use with
                                                this system.
                                            </p>
                                            <h2 className="p-4">
                                                <span className="font-bold text-[#139DDD]">
                                                    Journal:
                                                </span>{" "}
                                                International Journal of
                                                Mathematical Sciences and
                                                Computing
                                            </h2>
                                            <h2 className="p-4">
                                                <span className="font-bold text-[#139DDD]">
                                                    Authors:
                                                </span>{" "}
                                                Awnon Bhowmik
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="mt-20 grid grid-cols-5">
                                        <div className="col-span-1 flex justify-center items-center font-bold text-[#149DDD]">
                                            Published: Jul 7, 2020
                                        </div>
                                        <div className="col-span-4 text-white">
                                            <a href="">
                                                <h1 className="flex justify-center items-center font-bold text-[#149DDD]">
                                                    MES – MODERN ENCRYPTION
                                                    STANDARD
                                                </h1>{" "}
                                            </a>
                                            <p className="p-4">
                                                <span className="font-bold text-[#149DDD]">
                                                    Abstract:
                                                </span>{" "}
                                                As mathematical theory has
                                                evolved and computing
                                                capabilities have improved, what
                                                initially seemed to be
                                                adequately difficult trapdoor
                                                functions, were deemed not to be
                                                later. In this paper, a new
                                                block-encryption scheme named
                                                Modern Encryption Standard (MES)
                                                is proposed based on the
                                                multiple concepts arising from
                                                number theory for a highly
                                                secure and fast cryptosystem
                                                that can be considered as an
                                                alternative to the existing
                                                systems. This is a block cipher
                                                like AES, but the inherent
                                                algorithm is quite different.
                                                The security of the proposed MES
                                                algorithm stands on the
                                                fundamentals of the Chinese
                                                Remainder Theorem, Cantor
                                                Pairing Function and the Prime
                                                Number Theorem for creating an
                                                ingenious trapdoor function.
                                                Breaking this algorithm proves
                                                to be quite a daunting obstacle
                                                to overcome for an unwelcome
                                                interceptor.
                                            </p>
                                            <h2 className="p-4">
                                                <span className="font-bold text-[#139DDD]">
                                                    Journal:
                                                </span>{" "}
                                                International Journal of
                                                Computer Applications
                                            </h2>
                                            <h2 className="p-4">
                                                <span className="font-bold text-[#139DDD]">
                                                    Authors:
                                                </span>{" "}
                                                Awnon Bhowmik and Unnikrishnan
                                                Menon
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="mt-20 grid grid-cols-5">
                                        <div className="col-span-1 flex justify-center items-center font-bold text-[#149DDD]">
                                            Published: Jun 18, 2020
                                        </div>
                                        <div className="col-span-4 text-white">
                                            <a href="">
                                                <h1 className="flex justify-center items-center font-bold text-[#149DDD]">
                                                    DRAGON CRYPTO - AN
                                                    INNOVATIVE CRYPTOSYSTEM
                                                </h1>{" "}
                                            </a>
                                            <p className="p-4">
                                                <span className="font-bold text-[#149DDD]">
                                                    Abstract:
                                                </span>{" "}
                                                In recent years cyber-attacks
                                                are continuously developing.
                                                This means that hackers can find
                                                their way around the traditional
                                                cryptosystems. This calls for
                                                new and more secure
                                                cryptosystems to take their
                                                place. This paper outlines a new
                                                cryptosystem based on the dragon
                                                curve fractal. The security
                                                level of this scheme is based on
                                                multiple private keys, that are
                                                crucial for effective encryption
                                                and decryption of data. This
                                                paper discusses, how core
                                                concepts emerging from fractal
                                                geometry can be used as a
                                                trapdoor function for this
                                                cryptosystem.
                                            </p>
                                            <h2 className="p-4">
                                                <span className="font-bold text-[#139DDD]">
                                                    Journal:
                                                </span>{" "}
                                                International Journal of
                                                Computer Applications
                                            </h2>
                                            <h2 className="p-4">
                                                <span className="font-bold text-[#139DDD]">
                                                    Authors:
                                                </span>{" "}
                                                Awnon Bhowmik and Unnikrishnan
                                                Menon
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="mt-20 grid grid-cols-5">
                                        <div className="col-span-1 flex justify-center items-center font-bold text-[#149DDD]">
                                            Published: Jun 18, 2020
                                        </div>
                                        <div className="col-span-4 text-white">
                                            <a href="">
                                                <h1 className="flex justify-center items-center font-bold text-[#149DDD]">
                                                    ENHANCING THE NTRU
                                                    CRYPTOSYSTEM
                                                </h1>{" "}
                                            </a>
                                            <p className="p-4">
                                                <span className="font-bold text-[#149DDD]">
                                                    Abstract:
                                                </span>{" "}
                                                NTRU is an open-source public
                                                key cryptosystem that uses
                                                lattice-based cryptography to
                                                encrypt and decrypt data. Unlike
                                                other popular public-key
                                                cryptosystems, it is resistant
                                                to attacks using Shors Algorithm
                                                and its performance has been
                                                shown to be significantly
                                                greater. This paper talks about
                                                how Koblitz encoding from
                                                Elliptic Curve Cryptography
                                                (ECC) can be used to convert
                                                each character in a dataset to a
                                                point on an elliptic curve. A
                                                sum of squares analogy is pitted
                                                against the cantor pairing
                                                function to turn the point to a
                                                single number, which is
                                                converted to a sequence of
                                                coefficients in ℤ. A polynomial
                                                is then generated for each of
                                                these characters. Then the
                                                polynomial is reduced, and then
                                                shown that choosing appropriate
                                                parameters for the cryptosystem
                                                can make it highly secure and
                                                that the decryption algorithm
                                                turns out taking linear time.
                                                Since each character is
                                                represented by its own
                                                polynomial, it increases
                                                obscurity thereby increasing the
                                                complexity for decryption and
                                                thus the security level. A form
                                                of data compression has also
                                                been implemented and it has been
                                                tested whether data compression
                                                and expansion during the
                                                encryption-decryption process
                                                results in original data with no
                                                or minimal loss.
                                            </p>
                                            <h2 className="p-4">
                                                <span className="font-bold text-[#139DDD]">
                                                    Journal:
                                                </span>{" "}
                                                International Journal of
                                                Computer Applications
                                            </h2>
                                            <h2 className="p-4">
                                                <span className="font-bold text-[#139DDD]">
                                                    Authors:
                                                </span>{" "}
                                                Awnon Bhowmik and Unnikrishnan
                                                Menon
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={
                                        openTab === 3 ? "block" : "hidden"
                                    }
                                    id="link3"
                                >
                                    <div className="grid grid-cols-5">
                                        <div className="flex justify-center font-bold items-center col-span-1">
                                            <h1 className="text-[#149DDD]">
                                                Nov 27, 2019 - Dec 3, 2019
                                            </h1>
                                        </div>
                                        <div className="col-span-4">
                                            <h1 className="flex justify-center font-bold items-center text-[#149DDD]">
                                                {`ANALYSIS OF SEARCHING & SORTING
                                                ALGORITHMS`}
                                            </h1>
                                            <ul className="mt-5">
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        -{">"}
                                                    </span>{" "}
                                                    Used files with varying
                                                    number of inputs, applied
                                                    linear and binary search.
                                                    Analyzed the execution time
                                                    for different inputs and
                                                    proved algebraically and
                                                    graphically - the time
                                                    complexity of those
                                                    algorithms
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        -{">"}
                                                    </span>{" "}
                                                    Implemented various common
                                                    sorting algorithms such as
                                                    bubble sort, merge sort,
                                                    etc. on files containing
                                                    varying amount of data.
                                                    Analyzed the execution time
                                                    for different inputs and
                                                    proved algebraically and
                                                    graphically - the time
                                                    complexity of those
                                                    algorithms
                                                </li>
                                            </ul>
                                            <h2 className="text-white mt-5">
                                                <span className="text-[#149DDD] font-bold">
                                                    Advisor:
                                                </span>{" "}
                                                Dr. Louis D`Alotto
                                            </h2>
                                            <h2 className="text-white">
                                                Department of Mathematics &
                                                Computer Science, CUNY York
                                                College
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="grid mt-10 grid-cols-5">
                                        <div className="flex justify-center font-bold items-center col-span-1">
                                            <h1 className="text-[#149DDD]">
                                                Sep 9, 2019 - Sep 26, 2019
                                            </h1>
                                        </div>
                                        <div className="col-span-4">
                                            <h1 className="flex justify-center font-bold items-center text-[#149DDD]">
                                                BATTERY POWERED CAR PROBLEM
                                            </h1>
                                            <ul className="mt-5">
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        -{">"}
                                                    </span>{" "}
                                                    Given a pile of n batteries
                                                    assuming a mileage of k
                                                    kilometers per battery,
                                                    derived a recursive function
                                                    that models the effective
                                                    distance traveled by the car
                                                    since it can only carry one
                                                    spare battery in it along
                                                    with the other that powers
                                                    its engine.
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        -{">"}
                                                    </span>{" "}
                                                    Came up with two different
                                                    algorithms and implemented
                                                    using C++ code, to
                                                    demonstrate the validity of
                                                    the mathematical
                                                    perspective. Illustrated
                                                    with graphs to further
                                                    support the claims.
                                                </li>
                                            </ul>
                                            <h2 className="text-white mt-5">
                                                <span className="text-[#149DDD] font-bold">
                                                    Advisor:
                                                </span>{" "}
                                                Dr. Louis D`Alotto
                                            </h2>
                                            <h2 className="text-white">
                                                Department of Mathematics &
                                                Computer Science, CUNY York
                                                College
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="grid mt-10 grid-cols-5">
                                        <div className="flex justify-center font-bold items-center col-span-1">
                                            <h1 className="text-[#149DDD]">
                                                Sep 2014 - Aug 2015
                                            </h1>
                                        </div>
                                        <div className="col-span-4">
                                            <h1 className="flex justify-center font-bold items-center text-[#149DDD]">
                                                CSTEP RESEARCH PROJECT: THE
                                                ELECTROLYTIC PROPERTIES OF
                                                PROTEIN IN THE CELL MEMBRANE
                                                CHANNEL
                                            </h1>
                                            <ul className="mt-5">
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        -{">"}
                                                    </span>{" "}
                                                    Studied the Gramicidin A ion
                                                    channel of the bacillus
                                                    brevis bacteria cell,
                                                    containing the major amino
                                                    acid Tryptophan.
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        -{">"}
                                                    </span>{" "}
                                                    Modeled and conjectured that
                                                    the conformational change in
                                                    the Tryptophan produces
                                                    changes in the cell
                                                    membrane, thus behaving like
                                                    a capacitive dielectric
                                                    thereby influencing the ion
                                                    current.
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        -{">"}
                                                    </span>{" "}
                                                    Applied classical physics to
                                                    a biological problem to
                                                    mathematically model the ion
                                                    current under the influence
                                                    of a variable membrane
                                                    dielectric, as a function of
                                                    amino acid conformation.
                                                </li>
                                            </ul>
                                            <h2 className="text-white mt-5">
                                                <span className="text-[#149DDD] font-bold">
                                                    Advisor:
                                                </span>{" "}
                                                Dr. Brett A. Sims
                                            </h2>
                                            <h2 className="text-white">
                                                Department of Mathematics, CUNY
                                                BMCC
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="grid mt-10 grid-cols-5">
                                        <div className="flex justify-center font-bold items-center col-span-1">
                                            <h1 className="text-[#149DDD]">
                                                Nov 2014 - Dec 2014
                                            </h1>
                                        </div>
                                        <div className="col-span-4">
                                            <h1 className="flex justify-center font-bold items-center text-[#149DDD]">
                                                PROJECT: SAFE DISTANCE
                                            </h1>
                                            <ul className="mt-5">
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        -{">"}
                                                    </span>{" "}
                                                    Modeled the relationship
                                                    between the initial speed of
                                                    two cars, the reaction time
                                                    and braking distance,
                                                    relating to{" "}
                                                    {`"average car
                                                    lengths" as the unit of
                                                    measure – essentially
                                                    proving the "Two Second
                                                    Rule" implemented by New
                                                    York City Department of
                                                    Motor Vehicles (NY DMV)`}
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        -{">"}
                                                    </span>{" "}
                                                    Came up with two different
                                                    algorithms and implemented
                                                    using C++ code, to
                                                    demonstrate the validity of
                                                    the mathematical
                                                    perspective. Illustrated
                                                    with graphs to further
                                                    support the claims.
                                                </li>
                                            </ul>
                                            <h2 className="text-white mt-5">
                                                <span className="text-[#149DDD] font-bold">
                                                    Advisor:
                                                </span>{" "}
                                                Dr. David Waldman
                                            </h2>
                                            <h2 className="text-white">
                                                Department of Science, CUNY BMCC
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={
                                        openTab === 4 ? "block" : "hidden"
                                    }
                                    id="link4"
                                >
                                    <h1 className="flex justify-center items-center font-bold text-xl text-[#149DDD]">
                                        Teaching
                                    </h1>
                                    <div className="mt-10 grid grid-cols-5">
                                        <div className="col-span-1 flex justify-center items-center">
                                            <h1 className="flex justify-center items-center font-bold text-[#149DDD]">
                                                Jan 2022 - Present
                                            </h1>
                                        </div>
                                        <div className="col-span-4">
                                            <h1 className="flex justify-start items-center font-bold text-[#149DDD]">
                                                GRADUATE TEACHING GRADER
                                            </h1>
                                            <ul className="mt-5">
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Assisting a faculty member
                                                    in the noninstructional
                                                    aspects of course teaching
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Provides assistance to the
                                                    students as required by the
                                                    instructor
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Running Office Hours in Zoom
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Grading Quiz Papers and Test
                                                    Papers
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Providing feedback to the
                                                    students
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Inputting grades into
                                                    WebcoursesUCF after grading
                                                    and answering queries from
                                                    students
                                                </li>
                                            </ul>
                                            <h1 className="font bold text-white mt-5">
                                                Department of Mathematics,
                                                University of Central Florida
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="mt-10 grid grid-cols-5">
                                        <div className="col-span-1 flex justify-center items-center">
                                            <h1 className="flex justify-center items-center font-bold text-[#149DDD]">
                                                Jan 2022 - Present
                                            </h1>
                                        </div>
                                        <div className="col-span-4">
                                            <h1 className="flex justify-start items-center font-bold text-[#149DDD]">
                                                GRADUATE TEACHING ASSISTANT
                                            </h1>
                                            <ul className="mt-5">
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Assists students in setting
                                                    up their accounts with
                                                    online mathematics platform
                                                    such as ALEKS, WebAssign,
                                                    etc.
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Provides assistance to the
                                                    students as required by the
                                                    instructor
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Provides students with
                                                    reading and writing material
                                                    such as pen and paper, if
                                                    requested
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Be available to answer
                                                    {` students'`} queries
                                                    during Open Lab sessions
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Ocassionally provides
                                                    students with short lectures
                                                    if requested by the
                                                    instructor
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Suggests a variety of
                                                    resources such as videos,
                                                    books, and other materials
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Performs proctoring duties
                                                    during exam or testing hours
                                                    if needed
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Adheres to the policies set
                                                    by the mathematics lab and
                                                    enforce the students to
                                                    follow suit
                                                </li>
                                            </ul>
                                            <h1 className="font bold text-white mt-5">
                                                Mathematics Assistance &
                                                Learning Lab (MALL), University
                                                of Central Florida
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="mt-10 grid grid-cols-5">
                                        <div className="col-span-1 flex justify-center items-center">
                                            <h1 className="flex justify-center items-center font-bold text-[#149DDD]">
                                                Oct 2020 - Present
                                            </h1>
                                        </div>
                                        <div className="col-span-4">
                                            <h1 className="flex justify-start items-center font-bold text-[#149DDD]">
                                                SUBSTITUTE TEACHER
                                            </h1>
                                            <ul className="mt-5">
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Perform instructional and
                                                    classroom management
                                                    processes for teachers for
                                                    one or more days.
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Oversee students outside of
                                                    the classroom including in
                                                    the hallways and cafeteria.
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Take attendance and document
                                                    daily notes.
                                                </li>
                                            </ul>
                                            <h1 className="font bold text-white mt-5">
                                                NYC Department of Education
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="mt-10 grid grid-cols-5">
                                        <div className="col-span-1 flex justify-center items-center">
                                            <h1 className="flex justify-center items-center font-bold text-[#149DDD]">
                                                Jan 2020 - May 2020
                                            </h1>
                                        </div>
                                        <div className="col-span-4">
                                            <h1 className="flex justify-start items-center font-bold text-[#149DDD]">
                                                MATHEMATICS TUTOR - ASAP PROGRAM
                                            </h1>
                                            <ul className="mt-5">
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Tutored around 30 college
                                                    students each semester in
                                                    subjects of Algebra,
                                                    Quantitative Reasoning,
                                                    Calculus, Differential
                                                    Equations, and Physics to
                                                    help them understand
                                                    concepts and solve problems.
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Served as a liaison between
                                                    professors and students and
                                                    provided the students with
                                                    updates regarding their
                                                    progress and areas of
                                                    challenge.
                                                </li>
                                            </ul>
                                            <h1 className="font bold text-white mt-5">
                                                Department of Mathematics, CUNY
                                                BMCC
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="mt-10 grid grid-cols-5">
                                        <div className="col-span-1 flex justify-center items-center">
                                            <h1 className="flex justify-center items-center font-bold text-[#149DDD]">
                                                Sep 2017 - Aug 2019
                                            </h1>
                                        </div>
                                        <div className="col-span-4">
                                            <h1 className="flex justify-start items-center font-bold text-[#149DDD]">
                                                ADJUNCT CLT
                                            </h1>
                                            <ul className="mt-5">
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Teach Calculus I in
                                                    accordance to the
                                                    professor’s syllabus. Assist
                                                    students with setting up
                                                    learning exercises with the
                                                    use of the software Maple
                                                    and other laboratory
                                                    materials. Provid extensive
                                                    visual understanding of the
                                                    theory taught in class.
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Use current technology to
                                                    enhance educational
                                                    eﬀectiveness, including
                                                    Maple and other online
                                                    resources such as Desmos.
                                                    Evaluate students’ progress
                                                    in attaining educational
                                                    goals and objectives.
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Frequently meet in person or
                                                    communicate via email with
                                                    course instructor to discuss
                                                    students’ instructional
                                                    programs.
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Track student assignments,
                                                    attendance and test scores
                                                    and enter into online
                                                    database to provide
                                                    real-time progress
                                                    monitoring.
                                                </li>
                                            </ul>
                                            <h1 className="font bold text-white mt-5">
                                                Department of Mathematics, CUNY
                                                BMCC
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="mt-10 grid grid-cols-5">
                                        <div className="col-span-1 flex justify-center items-center">
                                            <h1 className="flex justify-center items-center font-bold text-[#149DDD]">
                                                Jan 2017 - Aug 2019
                                            </h1>
                                        </div>
                                        <div className="col-span-4">
                                            <h1 className="flex justify-start items-center font-bold text-[#149DDD]">
                                                LEAD SUPPLEMENTAL INSTRUCTOR
                                            </h1>
                                            <ul className="mt-5">
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Attended all classes for the
                                                    assigned class and took
                                                    notes in preparation for
                                                    upcoming supplemental
                                                    instructor sessions.
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Facilitated student learning
                                                    and helped students better
                                                    understand concepts or
                                                    applications of course
                                                    content
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Frequently meet in person or
                                                    communicate via email with
                                                    course instructor to discuss
                                                    students’ instructional
                                                    programs.
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Supported students and
                                                    assisted them in gaining
                                                    effective study skills by
                                                    utilize diverse learning
                                                    strategies and maximizing
                                                    their potential for their
                                                    academic success.
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Provided bi-weekly small
                                                    group sessions covering the
                                                    course content
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Prepared structured SI
                                                    sessions to review and
                                                    reinforce difficult material
                                                    introduced in class. In
                                                    addition to group study and
                                                    discussion, sometimes it
                                                    included administering
                                                    practice quizzes or teaching
                                                    organizational and study
                                                    practices to enhance mystery
                                                    of the coursework and
                                                    subject matter.
                                                </li>
                                            </ul>
                                            <h1 className="font bold text-white mt-5">
                                                Department of Mathematics, CUNY
                                                BMCC
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="mt-10 grid grid-cols-5">
                                        <div className="col-span-1 flex justify-center items-center">
                                            <h1 className="flex justify-center items-center font-bold text-[#149DDD]">
                                                Dec 2015 - Jan 2018
                                            </h1>
                                        </div>
                                        <div className="col-span-4">
                                            <h1 className="flex justify-start items-center font-bold text-[#149DDD]">
                                                MATHEMATICS & PHYSICS TUTOR
                                            </h1>
                                            <ul className="mt-5">
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Tutored students ranging
                                                    from 5th grade to
                                                    undergraduate level on
                                                    various mathematics and
                                                    science courses.
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Reviewed classroom or
                                                    curricula topics and
                                                    assignments.
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Assisted students with
                                                    homework, projects, test
                                                    preparation, papers,
                                                    research and other academic
                                                    tasks.
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Worked with students to help
                                                    them understand key
                                                    concepts, especially those
                                                    learned in the classroom.
                                                </li>
                                            </ul>
                                            <h1 className="font bold text-white mt-5">
                                                Varsity Tutors
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="mt-10 grid grid-cols-5">
                                        <div className="col-span-1 flex justify-center items-center">
                                            <h1 className="flex justify-center items-center font-bold text-[#149DDD]">
                                                Jun 2014 - Jun 2015
                                            </h1>
                                        </div>
                                        <div className="col-span-4">
                                            <h1 className="flex justify-start items-center font-bold text-[#149DDD]">
                                                MATHEMATICS INSTRUCTOR - BMCC
                                                IMMERSION PROJECT (SUMMER
                                                PROGRAM)
                                            </h1>
                                            <ul className="mt-5">
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Conducted classes of 10 - 20
                                                    students and instructed them
                                                    on various courses such as
                                                    <ul className="ml-4">
                                                        <li>
                                                            <span className="text-[#149DDD]">
                                                                {`->`}
                                                            </span>{" "}
                                                            Basic Arithmetic and
                                                            Algebra (MAT 012)
                                                        </li>
                                                        <li>
                                                            <span className="text-[#149DDD]">
                                                                {`->`}
                                                            </span>{" "}
                                                            Literacy (MAT 041)
                                                        </li>
                                                        <li>
                                                            <span className="text-[#149DDD]">
                                                                {`->`}
                                                            </span>{" "}
                                                            Elementary Algebra
                                                            (MAT 051)
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    The program gave students
                                                    the opportunity to redo the
                                                    material of a course they
                                                    didn’t pass so that they can
                                                    complete the course. The
                                                    Immersion workshops also
                                                    provide incoming students
                                                    with an opportunity to
                                                    enroll in one course to
                                                    reduce or eliminate the
                                                    number of basic skills
                                                    courses they would be
                                                    required to take in the fall
                                                    and or spring semester.
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    The program also gave
                                                    continuing students who were
                                                    close to passing a basic
                                                    skills course an opportunity
                                                    to work with a tutor in a
                                                    small group or one-on-one
                                                    setting. Upon completion of
                                                    the tutorial program,
                                                    students are able to test in
                                                    order to satisfy their basic
                                                    skills requirement prior to
                                                    the fall or spring semester.
                                                </li>
                                            </ul>
                                            <h1 className="font bold text-white mt-5">
                                                Department of Mathematics, CUNY
                                                BMCC
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="mt-10 grid grid-cols-5">
                                        <div className="col-span-1 flex justify-center items-center">
                                            <h1 className="flex justify-center items-center font-bold text-[#149DDD]">
                                                Mar 2014 - Aug 2015
                                            </h1>
                                        </div>
                                        <div className="col-span-4">
                                            <h1 className="flex justify-start items-center font-bold text-[#149DDD]">
                                                MATHEMATICS TUTOR - MATH LAB
                                            </h1>
                                            <ul className="mt-5">
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Tutored around 30 college
                                                    students each semester in
                                                    subjects of Algebra,
                                                    Quantitative Reasoning,
                                                    Calculus, Differential
                                                    Equations, and Physics to
                                                    help them understand
                                                    concepts and solve problems.
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Served as a liaison between
                                                    professors and students and
                                                    provided the students with
                                                    updates regarding their
                                                    progress and areas of
                                                    challenge.
                                                </li>
                                            </ul>
                                            <h1 className="font bold text-white mt-5">
                                                Department of Mathematics, CUNY
                                                BMCC
                                            </h1>
                                        </div>
                                    </div>
                                    <h1 className="flex mt-10 justify-center items-center font-bold text-xl text-[#149DDD]">
                                        Others
                                    </h1>
                                    <div className="mt-10 grid grid-cols-5">
                                        <div className="col-span-1 flex justify-center items-center">
                                            <h1 className="flex justify-center items-center font-bold text-[#149DDD]">
                                                Sep 2019 - Mar 2020
                                            </h1>
                                        </div>
                                        <div className="col-span-4">
                                            <h1 className="flex justify-start items-center font-bold text-[#149DDD]">
                                                COLLEGE ASSISTANT
                                            </h1>
                                            <ul className="mt-5">
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Patched software and
                                                    installed new versions to
                                                    eliminate security problems
                                                    and protect data.
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Removed and replaced
                                                    malfunctioning components to
                                                    correct hardware problems.
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Supported all computer lab
                                                    operations.
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Handled lab equipment,
                                                    cleaned keyboards, monitors
                                                    and disk drives.
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Explained technical
                                                    information in clear terms
                                                    to non-technical individuals
                                                    to promote better
                                                    understanding.
                                                </li>
                                            </ul>
                                            <h1 className="font bold text-white mt-5">
                                                Department of Mathematics &
                                                Computer Science, CUNY York
                                                College
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={
                                        openTab === 5 ? "block" : "hidden"
                                    }
                                    id="link5"
                                >
                                    <div className="flex flex-wrap justify-center">
                                        <div className="text-white rounded-xl border border-[#149DDD] p-10">
                                            <h1 className="text-[#149DDD] flex justify-center text-2xl mb-5">
                                                QUORA
                                            </h1>
                                            <ul className="mt-5">
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Contributed to about 3500
                                                    answers related to
                                                    mathematics and computer
                                                    science.
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Dubbed the Top Writer in
                                                    Calculus, Integration, and
                                                    many other topics, numerous
                                                    times.
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Answers became part of Quora
                                                    Digest, multiple times.
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Impacted people all around
                                                    the world, garnering a
                                                    combined leadership of 4000
                                                    followers.
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Praised by experts in
                                                    mathematics​.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap mt-10 justify-center">
                                        <div className="text-white rounded-xl border border-[#149DDD] p-10">
                                            <h1 className="text-[#149DDD] flex justify-center text-2xl mb-5">
                                                MATHEMATICS STACK EXCHANGE
                                            </h1>
                                            <ul className="mt-5">
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Contributed 50+ answers to
                                                    the community.
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Used this platform to learn
                                                    about numerous books and
                                                    problem-solving techniques.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap mt-10 justify-center">
                                        <div className="text-white rounded-xl border border-[#149DDD] p-10">
                                            <h1 className="text-[#149DDD] flex justify-center text-2xl mb-5">
                                                HACKERRANK
                                            </h1>
                                            <ul className="mt-5">
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    C++ & Python - Gold Badge
                                                </li>
                                                <li className="text-white">
                                                    <span className="text-[#149DDD]">
                                                        {`->`}
                                                    </span>{" "}
                                                    Problem Solving - Silver
                                                    Badge
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={
                                        openTab === 6 ? "block" : "hidden"
                                    }
                                    id="link6"
                                >
                                    <div className="flex flex-wrap justify-center">
                                        <div className="text-white rounded-xl border border-[#149DDD] p-10">
                                            <h1 className="text-[#149DDD] flex justify-center text-2xl mb-5">
                                                ERNESTO MALAVE MERIT SCHOLARSHIP
                                            </h1>
                                            <h2 className="flex justify-center text-xl">
                                                University Student Senate (USS)
                                                of CUNY
                                            </h2>
                                            <p className="flex justify-center text-lg">
                                                Spring 2015
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex mt-5 flex-wrap justify-center">
                                        <div className="text-white rounded-xl border border-[#149DDD] p-10">
                                            <h1 className="text-[#149DDD] flex justify-center text-2xl mb-5">
                                                GUTTMAN TRANSFER SCHOLARSHIP
                                            </h1>
                                            <h2 className="flex justify-center text-xl">
                                                Stella and Charles Guttman
                                                Foundation
                                            </h2>
                                            <p className="flex justify-center text-lg">
                                                September 2015
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex mt-5 flex-wrap justify-center">
                                        <div className="text-white rounded-xl border border-[#149DDD] p-10">
                                            <h1 className="text-[#149DDD] flex justify-center text-2xl mb-5">
                                                INTER UNIVERSITY MATH OLYMPIAD
                                                CHAMPION
                                            </h1>
                                            <h2 className="flex justify-center text-xl">
                                                University of Dhaka, Bangladesh
                                            </h2>
                                            <p className="flex justify-center text-lg">
                                                July 2011
                                            </p>
                                        </div>
                                    </div>
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
