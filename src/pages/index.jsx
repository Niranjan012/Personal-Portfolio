import Head from "next/head";
import About from "../contents/About";
import Contact from "../contents/Contact";
import IntroSection from "../contents/IntroSection";
import MoveToTop from "../contents/MoveToTop";
import Navbar from "../contents/Navbar";
import Projects from "../contents/Projects";
import Skills from "../contents/Skills";
import { useAppContext } from "../layout/Layout";



export default function Home() {
    const { toggleDarkMode } = useAppContext();
    return (
        <main>
            <Head>
                <title>Niranjan Panigrahi</title>
            </Head>
            <section className={`${toggleDarkMode ? 'theme-dark' : 'theme-light'} absolute top-0 left-0 pb-20`}>
                <Navbar />
                <IntroSection />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <MoveToTop />
            </section>
        </main>
    )
}
