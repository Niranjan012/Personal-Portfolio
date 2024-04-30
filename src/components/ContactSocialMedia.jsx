import { FaTwitter } from 'react-icons/fa';
import { GrFacebook } from 'react-icons/gr';
import { SiInstagram, SiLinkedin } from 'react-icons/si';

const ContactSocialMedia = () => {
    return (
        <ul className='flex space-x-8 mt-6 text-2xl'>
            <li>
                <a href="https://www.linkedin.com/in/niranjan-panigrahi-6b24621bb/" target="_blank" rel="noreferrer">
                    <SiLinkedin className='social-media-icons' />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/niranjanpanigrahi18?igsh=YWNvejhjMnJwdDZt&utm_source=qr" target="_blank" rel="noreferrer">
                    <SiInstagram className='social-media-icons' />
                </a>
            </li>
            <li>
                <a href="https://twitter.com/Niranjanpa18" target="_blank" rel="noreferrer">
                    <FaTwitter className='social-media-icons' />
                </a>
            </li>
        </ul >
    )
}

export default ContactSocialMedia