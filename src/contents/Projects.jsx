import ProjectBox from '../components/ProjectBox';
import Title from '../components/Title';
import { projectApi } from '../assets/data/project';

const Projects = () => {
    return (
        <section id='projects' className='w-full px-4 py-16 xs:px
        -10 lg:p-20'>
            <Title title="Projects" />
            <div>
                <h2 className='font-semibold text-lg'>Here are some of my top personal projects . . .</h2>
                <div className='grid grid-cols-1 gap-y-8 sm:grid-cols-2 justify-items-center sm:gap-x-8 sm:gap-y-12  lg:gap-y-16 py-8 my-4 sm:my-8'>
                    {projectApi.map(val => <ProjectBox projectName={val.projectName} image={val.image} techStack={val.techStack} id={val.id} key={val.id} link={val.url} />)}
                </div>
                <div>
                    <a href="https://niranjanpanigrahi.vercel.app" target="_blank" rel="noreferrer" >
                        <button className='git-button'>Explore Other Projects</button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects