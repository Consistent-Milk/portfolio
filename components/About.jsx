import React from "react";

const About = () => {
    return (
        <section
            id="about"
            className="w-full md:h-screen flex items-center py-16 mt mt-40"
        >
            <div className="max-w-[1280px] px-4 xl:px-0 m-auto md:grid grid-cols-2 gap-8">
                <div className="col-span-2">
                    <h1 className="flex items-center mb-10 justify-center text-xl tracking-widest border border-[#149DDD] rounded-xl uppercase text-[#149DDD]">
                        About Me
                    </h1>
                    <p
                        align="justify"
                        className="text-white py-2 animate__animated animate__fadeIn"
                    >
                        I am a Ph.D. student at the University of Central
                        Florida. I possess a keen interest in Number Theory and
                        Cryptography. In addition to my scholarly pursuits, I am
                        dedicated to mathematics outreach. In my opinion, it is
                        vital that both undergraduate students and the general
                        public have a greater understanding of what mathematics
                        and mathematical research entail. In my opinion, there
                        appears to be a significant lot of misunderstanding and
                        misinformation concerning mathematics, particularly pure
                        mathematics.
                    </p>
                    <p
                        align="justify"
                        className="text-white py-2 animate__animated animate__fadeIn"
                    >
                        Currently serving as a substitute instructor in the New
                        York City Department of Education, I am seeking a
                        position in an industry or organization where I can
                        apply my mathematical knowledge and my
                        analytical/problem-solving abilities. My passion has
                        expanded to computers, and attempting to connect the two
                        has been a major part of my life in recent years. I
                        taught myself to program in a variety of languages using
                        books and other available resources, beginning with
                        QBasic, Pascal, and FORTRAN and on to newer languages
                        like C++ and Python. This has enabled me to work on a
                        variety of mathematical modeling and scientific
                        computing projects. Moreover, during my undergraduate
                        studies, I have augmented my mathematical studies with
                        courses in computer science and I am interested in
                        finding a position where I can combine theoretical
                        mathematics with topics in computer science, especially
                        security.
                    </p>
                    <p
                        align="justify"
                        className="text-white py-2 animate__animated animate__fadeIn"
                    >
                        My current research focuses on building entirely new as
                        well as hybrid cryptography protocols that are heavily
                        based on concepts of number theory. I am also interested
                        in computational mathematics related to various topics
                        such as numerical analysis and simulation techniques.
                        Apart from this, I am highly interested in exploring
                        Mathematical Modeling and Fractal geometry.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
