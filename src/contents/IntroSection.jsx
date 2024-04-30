import { IoMdMail } from 'react-icons/io';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import BGImage from '../assets/images/projectpics/bgb.jpg';
import { useEffect, useState } from 'react';

const IntroSection = () => {
    const [runningText, setRunningText] = useState('');
    const arr = ['Welcome to My Portfolio', 'I am a Full Stack Developer', 'Tech: [ Java Full Stack, iOS Developer]'];

    const pause = () => new Promise((resolve, err) => {
        let st = setTimeout(() => {
            clearTimeout(st);
            resolve('success');
        }, 800);

    });

    useEffect(() => {
        let pos = 0, forword = true, i = 0;
        let text = arr[i];
        let len = text.length;

        let interval = setInterval(async () => {
            if (forword) {
                setRunningText(text.substring(0, pos));
                pos++;
                if (pos === len) {
                    await pause();
                    pos = pos - 2;
                    forword = false;
                }
            } else {
                setRunningText(txt => txt.substring(0, pos));
                pos--;
                if (pos === -1) {
                    pos++;
                    forword = true;
                    i = (i + 1) % arr.length;
                    text = arr[i];
                    len = text.length;
                }
            }
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative top-0 h-[95vh]">
            <div className='absolute top-0 w-full h-full'>
                <img src={BGImage.src} alt="background image" className='w-full h-full bg-cover bg-no-repeat bg-opacity-95' />
            </div>
            <div className='absolute top-0 z-10 w-full h-full flex flex-col justify-center items-center text-white'>
                <h1 className=" text-4xl sm:text-7xl font-bold text-GhostWhite">Hello, I&#39;m <span className='transition duration-1000 ease-in-out animate-pulse'>Niranjan</span></h1>
                <h4 className='mt-3 text-2xl sm:text-4xl text-blue-700 font-medium'>{runningText}<span className='text-DodgerBlue-700'>|</span></h4>
                <div className="flex space-x-12 mt-16">
                    <a href="https://github.com/Niranjan012" target="_blank" rel="noreferrer">
                        <BsGithub className='intro-icon' />
                    </a>
                    <a href="https://www.linkedin.com/in/niranjan-panigrahi-6b24621bb/" target="_blank" rel="noreferrer">
                        <BsLinkedin className='intro-icon' />
                    </a>
                    <a href="mailto:mrniranjanwork@gmail.com" target="_blank" rel="noreferrer">
                        <IoMdMail className='intro-icon' />
                    </a>
                </div>
                <a href="Niranjan_FullStackDeveloper.pdf" target="_blank" rel="noreferrer">
                    <button className='mt-8 py-1 px-5 rounded-lg text-lg font-medium bg-blue-600 transition duration-100 ease-in-out hover:scale-110 border-gray-400 hover:border-b-2 hover:border-l-2 hover:bg-blue-700'>Resume</button>
                </a>

            </div>
        </section>
    )
}

export default IntroSection