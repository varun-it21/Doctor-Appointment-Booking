// import React, { useState } from 'react'
// import { NavLink, useNavigate } from 'react-router-dom'
// import { assets } from '../assets/assets'


// const Navbar = () => {

//     const navigate = useNavigate();

//     const [showMenu, setShowMenu] = useState(false)
//     const [token, setToken] = useState(true)

//     return (
//         <div className='flex item-center justify-between text-sm py-4 mb-5 border-b border-b-gray-40'>
//             <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />
//             <ul className='hidden md:flex items-start gap-5 font-medium'>
//                 <NavLink to='/'>
//                     <li className='py-1 '>HOME</li>
//                     <hr className='border-none outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden' />
//                 </NavLink>

//                 <NavLink to='/doctors'>
//                     <li className='py-1 '>ALL DOCTORS</li>
//                     <hr className='border-none outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden' />
//                 </NavLink>

//                 <NavLink to='about'>
//                     <li className='py-1 '>ABOUT</li>
//                     <hr className='border-none outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden' />
//                 </NavLink>

//                 <NavLink to='/Contact'>
//                     <li className='py-1 '>CONTACT</li>
//                     <hr className='border-none outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden' />
//                 </NavLink>
//             </ul>

//             <div className='flex items-center gap-4'>
//                 {
//                     token
//                         ? <div className='flex items-center gap-2 cursor-pointer group relative'>
//                             <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
//                             <img className='w-2.5' src={assets.dropdown_icon} alt="" />

//                             <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
//                                 <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
//                                     <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
//                                     <p onClick={() => navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
//                                     <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
//                                 </div>
//                             </div>
//                         </div>
//                         : <button onClick={() => navigate('/login')} className='cursor-pointer bg-blue-500 text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
//                 }

//                 <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />

//                 {/* mobile menu  */}
//                 <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'}   md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
//                     <div>
//                         <img src={assets.logo} alt="" />
//                         <img onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
//                     </div>
//                     <ul>
//                         <NavLink >HOME</NavLink>
//                         <NavLink >ALL DOCTORS</NavLink>
//                         <NavLink >ABOUT</NavLink>
//                         <NavLink >CONTACT</NavLink>
//                     </ul>
//                 </div>

//             </div>

//         </div>
//     )
// }

// export default Navbar


import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

    return (
        <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400">
            <img onClick={() => navigate('/')} className="w-44 cursor-pointer" src={assets.logo} alt="Logo" />
            
            {/* Desktop Menu */}
            <ul className="hidden md:flex items-start gap-5 font-medium">
                <NavLink to="/" className="nav-link">
                    <li className="py-1">HOME</li>
                </NavLink>
                <NavLink to="/doctors" className="nav-link">
                    <li className="py-1">ALL DOCTORS</li>
                </NavLink>
                <NavLink to="/about" className="nav-link">
                    <li className="py-1">ABOUT</li>
                </NavLink>
                <NavLink to="/contact" className="nav-link">
                    <li className="py-1">CONTACT</li>
                </NavLink>
            </ul>

            {/* User Profile & Authentication */}
            <div className="flex items-center gap-4">
                {token ? (
                    <div className="flex items-center gap-2 cursor-pointer group relative">
                        <img className="w-8 rounded-full" src={assets.profile_pic} alt="Profile" />
                        <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />

                        <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                            <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                                <p onClick={() => navigate('/my-profile')} className="hover:text-black cursor-pointer">
                                    My Profile
                                </p>
                                <p onClick={() => navigate('/my-appointments')} className="hover:text-black cursor-pointer">
                                    My Appointments
                                </p>
                                <p onClick={() => setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <button onClick={() => navigate('/login')} className="cursor-pointer bg-blue-500 text-white px-8 py-3 rounded-full font-light hidden md:block">
                        Create account
                    </button>
                )}

                {/* Mobile Menu Button */}
                <img onClick={() => setShowMenu(true)} className="w-6 md:hidden cursor-pointer" src={assets.menu_icon} alt="Menu" />
            </div>

            {/* Mobile Menu */}
            {showMenu && (
                <div className="fixed top-0 right-0 w-full h-screen bg-white z-50 p-5 flex flex-col items-start shadow-lg">
                    <div className="w-full flex justify-between items-center mb-5">
                        <img className="w-32" src={assets.logo} alt="Logo" />
                        <img onClick={() => setShowMenu(false)} className="w-6 cursor-pointer" src={assets.cross_icon} alt="Close" />
                    </div>
                    <ul className="flex flex-col gap-5 text-lg">
                        <NavLink  to="/"  onClick={() => setShowMenu(false)}><p className="px-4 py-2 rounded inline-block">HOME</p> </NavLink>
                        <NavLink to="/doctors"  onClick={() => setShowMenu(false)}> <p className="px-4 py-2 rounded inline-block">ALL DOCTORS</p> </NavLink>
                        <NavLink to="/about" onClick={() => setShowMenu(false)}> <p className="px-4 py-2 rounded inline-block">ABOUT</p> </NavLink>
                        <NavLink to="/contact"  onClick={() => setShowMenu(false)}> <p className="px-4 py-2 rounded inline-block">CONTACT</p> </NavLink>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
