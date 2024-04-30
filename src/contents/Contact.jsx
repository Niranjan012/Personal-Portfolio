/* eslint-disable @next/next/no-img-element */
import Title from '../components/Title';
import BgImage from '../assets/images/gif-2.gif';
import { useAppContext } from '../layout/Layout';
import ContactForm from '../components/ContactForm';
import ContactSocialMedia from '../components/ContactSocialMedia';

const Contact = () => {
    const { toggleDarkMode } = useAppContext();
    return (
        <section id="contacts" className='px-5 py-16 xs:px-10 w-full md:py-20 md:px-20'>
            <Title title="Contacts" />
            <div className='flex flex-col lg:flex-row'>
                <div className={` relative top-0 w-full lg:w-4/12 p-8 ${!toggleDarkMode && 'bg-[#f0f2f5]'} shadow shadow-gray-400 rounded-md`}>
                    <div className='flex justify-center'>
                        <img
                            src={BgImage.src}
                            alt="image"
                            className='w-full h-60 rounded-lg'
                        />
                    </div>
                    <h3 className='mt-6 font-bold text-2xl xs:text-3xl'>Niranjan Panigrahi</h3>
                    <p className='font-normal text-base mt-3'>I&#39;m currently looking for any new opportunities and to explore.</p>

                    <div className='mt-10 lg:mt-0 lg:absolute lg:bottom-8'>
                        <h1 className='text-2xl font-bold mb-3'>Reach out to me !!!</h1>
                        <h3 className='mb-2'>Email: <span className='text-gray-500'><a href="mailto: mrniranjanwork@gmail.com">mrniranjanwork@gmail.com</a></span></h3>
                        <h3 className='mb-2'>Phone: <span className='text-gray-500'><a href="tel: +916370181005">+91 6370181005</a></span></h3>

                        <ContactSocialMedia />
                    </div>
                </div>
                <ContactForm />
            </div>

        </section>
    )
}

export default Contact