import Image from "next/image";
import NiranjanProfile from '../assets/images/NiranjanProfile.png';
import Title from '../components/Title';
import { aboutData } from "../assets/data/about";

const About = () => {
    return (
        <section id="about" className="w-full py-16 px-10 md:py-20 lg:px-20">
            <Title title="About" />
            <div className="flex flex-col-reverse items-center md:flex-row">
                <div className="w-full mt-10 md:w-[60%] md:mt-0">
                    <p className="text-base sm:text-lg text-FloralWhite-600">{aboutData[0]}</p>
                    <p className="mt-5">{aboutData[1]}</p>
                </div>
                <div className="hidden sm:flex items-center justify-center flex-1">
                    <Image
                        src={NiranjanProfile.src}
                        alt="Profile Picture"
                        height={300}
                        width={300}
                        objectFit="cover"
                        className="rounded-full test bg-red-500"
                    />
                </div>

                <div className="sm:hidden flex items-center justify-center flex-1">
                    <Image
                        src={NiranjanProfile.src}
                        alt="Profile Picture"
                        height={200}
                        width={200}
                        objectFit="cover"
                        className="rounded-full test bg-red-500"
                    />
                </div>

            </div>

        </section>
    )
}

export default About