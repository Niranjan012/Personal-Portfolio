import { FaCode } from 'react-icons/fa';
import { IoIosSunny, IoIosMoon } from 'react-icons/io';
import { HiOutlineMenu } from 'react-icons/hi';
import { useAppContext } from '../layout/Layout';
import SideNavBar from '../components/SideNavBar';
import { useState } from 'react';
import NavItems from '../components/NavItems';

const Navbar = () => {
    const { ToggleTheme, toggleDarkMode } = useAppContext();
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleThemeClick = () => {
        ToggleTheme();
    };

    const handleMenuClick = () => {
        setToggleMenu(prev => !prev);
    };

    return (
        <>
            <nav className={`${toggleDarkMode ? 'nav-dark' : 'nav-light'} z-40 sticky top-0 left-0 py-4 xs:px-8 px-4 flex items-center justify-between shadow-md`}>
                <div className='flex items-center space-x-2 xs:space-x-4 font-bold cursor-pointer'>
                    <div>
                        <FaCode className='text-3xl text-blue-700' />
                    </div>
                    <h1 className='text-xl xs:text-2xl'>Niranjan Panigrahi</h1>
                </div>
                <div className='md:hidden flex items-center space-x-6'>
                    <div onClick={handleThemeClick} className='cursor-pointer'>
                        {toggleDarkMode ? <IoIosSunny className='text-2xl' /> : <IoIosMoon className='text-2xl' />}
                    </div>
                    <HiOutlineMenu onClick={handleMenuClick} className='text-2xl' />
                </div>
                <ul className='hidden md:flex items-center space-x-6 text-xl font-semibold '>
                    <div onClick={handleThemeClick} className='cursor-pointer'>
                        {toggleDarkMode ? <IoIosSunny className='text-3xl' /> : <IoIosMoon className='text-3xl' />}
                    </div>
                    <NavItems />
                </ul>
            </nav>
            <SideNavBar handleClick={handleMenuClick} className={`transition duration-500 ease-in-out ${toggleMenu ? 'flex' : 'hidden'}`} />
        </>
    );
};

export default Navbar;
