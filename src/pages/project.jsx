/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { projectApi } from '../assets/data/project';
import Link from 'next/link';

const Project = () => {
    const router = useRouter();
    const [currentProject, setCurrentProject] = useState({});

    useEffect(() => {
        let { id } = router.query;
        let projectObj = projectApi.filter(val => val.id == id)[0];
        setCurrentProject(projectObj);
    }, [router.query]);

    return (
        <>
            <Head>
                <title>Niranjan Panigrahi | Projects </title>
            </Head>
            <section className='w-full relative top-0'>
                <div className='absolute-0 top-0 w-full h-[90vh] opacity-70'>
                    <img src={currentProject?.image} alt="project image" className='w-full h-full' />
                </div>
                <div className='absolute top-[25vh] bg-transparent w-full h-[50vh]'>
                    <div className='w-full px-4 md:px-10 lg:px-20 flex flex-col items-start md:flex-row justify-between md:items-center'>
                        <div className='py-6'>
                            <h1 className='bg-[#000000bb] rounded-md py-4 px-4 lg:px-8 text-2xl md:text-4xl lg:text-5xl font-bold text-white'>{currentProject?.projectName}</h1>
                            <h2 className='bg-[#ffffffbb] rounded-md py-4 px-4 lg:px-8 text-base md:text-lg lg:text-xl mt-4 font-semibold text-black'>{currentProject.techStack}</h2>
                        </div>
                        <div className='flex items-center space-x-4'>

                            <a href={currentProject?.githubLink} target="_blank" rel="noopener noreferrer">
                                <button className='font-medium py-2 px-5 rounded text-gray-400 bg-black border border-gray-400 hover:border-white hover:text-white'>source code</button>
                            </a>

                            <a href={currentProject?.url} target="_blank" rel="noopener noreferrer">
                                <button className='font-medium py-2 px-5 rounded bg-white hover:bg-black hover:text-white'>visit</button>
                            </a>
                        </div>
                    </div>
                    <div className='mt-6 w-full bg-white py-10 px-8 sm:px-10 md:px-20 h-[50vh]'>
                        <h3 className='text-3xl font-bold'>Overview :- </h3>
                        <p className='mt-4 font-normal text-2xl'>{currentProject?.description}</p>

                        <Link href="/#projects" passHref><h4 className='text-md mt-8 cursor-pointer text-blue-700 underline'>back to home</h4></Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project;