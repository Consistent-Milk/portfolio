import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import "animate.css";
import Skills from "../components/Skills";
import Resume from "../components/Resume";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Awnon Bhowmik Portfolio</title>
            </Head>
            <Sidebar />
            <Hero />
            <About />
            <Skills />
            <Resume />
        </div>
    );
}
