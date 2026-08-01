import { hamburger, X } from '../assets/icons';
import { navLinks } from '../constants';
import { useState, useEffect } from 'react';
import SignIn from './SignIn';
import { googleLogout } from '@react-oauth/google';
import Button from './Button';
import Profile from './Profile';
import { Link } from 'react-router-dom'


const Nav = ({ cartCount, resetCart }) => {
    const [isMobileNavVisible, setMobileNavVisible] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isLogoutVisible, setLogoutVisible] = useState(false);
    const [profile, setProfile] = useState(null);

    const toggleLogoutVisibility = () => {
        setLogoutVisible(!isLogoutVisible);
    };
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };
    const toggleMobileNav = () => {
        setMobileNavVisible(!isMobileNavVisible);
    };
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    return (
        <header className='padding-x py-8 fixed z-20 w-full bg-white border-b border-coral-red shadow-md font-montserrat'>
            <nav className='flex justify-between items-center max-container'>
                <div className='flex-1'>
                    <Link to="/" className='inline-block text-coral-red'>
                        <svg width="130" height="29" viewBox="0 0 129 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-coral-red">
                            <path d="M89.0803 6.2V23H86.5123L77.2483 11.624V23H74.1523V6.2H76.7203L85.9843 17.576V6.2H89.0803ZM93.294 10.184H96.294V23H93.294V10.184ZM94.806 8.072C94.262 8.072 93.806 7.904 93.438 7.568C93.07 7.216 92.886 6.784 92.886 6.272C92.886 5.76 93.07 5.336 93.438 5C93.806 4.648 94.262 4.472 94.806 4.472C95.35 4.472 95.806 4.64 96.174 4.976C96.542 5.296 96.726 5.704 96.726 6.2C96.726 6.728 96.542 7.176 96.174 7.544C95.822 7.896 95.366 8.072 94.806 8.072ZM105.463 17.504L103.231 19.616V23H100.231V5.192H103.231V15.944L109.447 10.184H113.047L107.695 15.56L113.551 23H109.903L105.463 17.504ZM126.998 16.664C126.998 16.872 126.982 17.168 126.95 17.552H116.894C117.07 18.496 117.526 19.248 118.262 19.808C119.014 20.352 119.942 20.624 121.046 20.624C122.454 20.624 123.614 20.16 124.526 19.232L126.134 21.08C125.558 21.768 124.83 22.288 123.95 22.64C123.07 22.992 122.078 23.168 120.974 23.168C119.566 23.168 118.326 22.888 117.254 22.328C116.182 21.768 115.35 20.992 114.758 20C114.182 18.992 113.894 17.856 113.894 16.592C113.894 15.344 114.174 14.224 114.734 13.232C115.31 12.224 116.102 11.44 117.11 10.88C118.118 10.32 119.254 10.04 120.518 10.04C121.766 10.04 122.878 10.32 123.854 10.88C124.846 11.424 125.614 12.2 126.158 13.208C126.718 14.2 126.998 15.352 126.998 16.664ZM120.518 12.44C119.558 12.44 118.742 12.728 118.07 13.304C117.414 13.864 117.014 14.616 116.87 15.56H124.142C124.014 14.632 123.622 13.88 122.966 13.304C122.31 12.728 121.494 12.44 120.518 12.44Z" fill="currentColor"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M37.6096 9.80468C25.1346 13.2758 14.071 16.112 13.0239 16.1065C10.0114 16.0904 7.19209 13.7015 6.76806 10.8064C6.56893 9.44425 6.60402 7.46928 6.84618 6.41814L7.28659 4.50653L5.67183 6.53232C3.16986 9.67124 0.775395 14.608 0.291439 17.6257C-0.65927 23.552 4.08624 27.46 10.4653 26.0039C12.9937 25.4271 60.9554 4.55665 61.8216 3.65636C62.4835 2.96871 58.9453 3.86726 37.6096 9.80468Z" fill="currentColor"/>
                        </svg>
                    </Link>
                </div>

                <Link to='/cart' onClick={handleClick} className={`${!profile ? "block" : "hidden"} flex items-center relative mx-5 rounded-full border border-transparent hover:border-coral-red px-5 py-1`}>
                    <p className={`w-5 h-5 p-3 font-sans text-white bg-coral-red rounded-full flex justify-center items-center text-center text-md mb-[4px] mr-[-3px] ${cartCount === 0 ? 'hidden' : ''}`}>
                        {cartCount}
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="currentColor" className="text-coral-red h-[40px] w-[40px]">
                        <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/>
                    </svg>
                </Link>
                <ul className='flex justify-around items-stretch bg-transparent w-200 flex-1 h-12 border border-coral-red rounded-full max-lg:hidden '>
                    {navLinks.map((item, index) => (
                        <li key={item.label} className="flex-1 ">
                            <Link to={item.href} className={`font-montserrat leading-normal text-lg text-slate-gray cursor-pointer flex justify-center items-center hover:text-white px-10 hover:bg-coral-red transition h-full whitespace-nowrap ${index === 0 ? 'rounded-l-full' : ''} ${profile && index === navLinks.length - 1 ? 'rounded-r-full' : ''}`}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    {!profile && (
                        <li className="">
                            <a
                                className="font-montserrat leading-normal text-lg cursor-pointer flex justify-center items-center h-full px-10 rounded-r-full bg-blue-500 font-bold text-white hover:bg-white hover:text-blue-800  hover:border-blue-800 whitespace-nowrap"
                                onClick={handleOpenModal}
                            >
                                Sign In / Up
                            </a>
                        </li>
                    )}
                </ul>
                <Link to='/cart' className={`${profile ? "block" : "hidden"}  flex items-center relative mx-5 rounded-full border border-transparent hover:border-coral-red px-5 py-1`}>
                    <p className={`w-5 h-5 p-3 font-sans text-white bg-coral-red rounded-full flex justify-center items-center text-center text-md mb-[4px] mr-[-3px] ${cartCount === 0 ? 'hidden' : ''}`}>
                        {cartCount}
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="currentColor" className="text-coral-red h-[40px] w-[40px]">
                        <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/>
                    </svg>
                </Link>
                {profile ? (
                    <div className='flex-1 flex justify-end max-lg:hidden'>
                        <Profile profile={profile} isLogoutVisible={isLogoutVisible} toggleLogoutVisibility={toggleLogoutVisibility} logOutAction={logOut} />
                        <div className={`absolute inset-0 bg-black w-full h-[100vh] opacity-30 z-[25] ${isLogoutVisible ? 'block' : 'hidden'}`} onClick={toggleLogoutVisibility}></div>
                    </div>
                ) : (
                    <div className='hidden'>
                    </div>
                )}
                <div className='hidden max-lg:block max-lg:cursor-pointer' onClick={toggleMobileNav}>
                    <img src={hamburger} alt="Hamburger" width={25} height={25} />
                </div>
                <div
                    className={`fixed inset-0 bg-black bg-opacity-50 z-10 duration-300 ${isMobileNavVisible ? 'bg-black' : 'bg-transparent pointer-events-none'
                        }`}
                    onClick={toggleMobileNav}
                >
                    <div
                        className={`bg-white w-1/2 h-full transition-transform duration-300 transform ${isMobileNavVisible ? 'translate-x-0' : 'translate-x-full'
                            } right-0 absolute`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className='flex justify-end'>
                            <img src={X} alt="" onClick={toggleMobileNav} className='w-14 pr-3 pt-3 cursor-pointer' />
                        </div>
                        <ul className='flex flex-col pt-2 mb-4'>
                            {navLinks.map((item) => (
                                <li key={item.label} className="border-b border-coral-red first:border-t">
                                    <Link to={item.href}
                                        onClick={toggleMobileNav}
                                        className='font-montserrat leading-normal text-lg text-black cursor-pointer block p-4 hover:text-white hover:bg-coral-red transition'>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                            {!profile && (
                                <li className="">
                                    <a
                                        className="font-montserrat leading-normal text-lg cursor-pointer flex justify-start items-center h-14 px-4 bg-blue-500 font-bold text-white hover:bg-white hover:text-blue-800  hover:border-blue-800 whitespace-nowrap"
                                        onClick={handleOpenModal}
                                    >
                                        Sign In / Up
                                    </a>
                                </li>
                            )}
                        </ul>
                        {profile ? (
                            <div className='flex-1 flex justify-end'>
                                <div className='relative font-montserrat z-[35] w-full'>
                                    <div className='flex max-lg:flex-col max-lg:items-start gap-5 -mt-4 items-center bg-white border-b justify-between border-coral-red px-5 py-2' onClick={toggleLogoutVisibility}>
                                    <img src={profile.picture} alt="user image" className='max-lg:inline-block hidden h-10 w-10 rounded-full ' />
                                        <div className='flex flex-col justify-around'>
                                            <p className='text-lg font-semibold '>{profile.name}</p>
                                            <p className='text-sm '>{profile.email}</p>
                                        </div>
                                        <img src={profile.picture} alt="user image" className='max-lg:hidden inline-block h-10 w-10 rounded-full ' />
                                    </div>
                                    <button onClick={logOut} className='cursor-pointer mt-4 justify-self-center flex justify-center items-center gap-2 px-7 py-4 border font-montserrat leading-none rounded-xl w-[90%] whitespace-nowrap font-semibold text-lg bg-coral-red hover:bg-white border-coral-red text-white hover:text-coral-red hover:border-coral-red'> Log Out</button>
                                </div>
                                
                            </div>
                        ) : (
                            <div className='hidden'>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            <SignIn isOpen={isModalOpen} onClose={handleCloseModal} setUserProfile={setProfile} />
        </header>
    );
}

export default Nav;