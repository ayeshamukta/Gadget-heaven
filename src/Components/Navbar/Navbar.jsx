import React, { useEffect, useState } from 'react';
import { GiSelfLove } from 'react-icons/gi';
import { IoCartOutline } from 'react-icons/io5';
import { NavLink, useLocation } from 'react-router';

const Navbar = () => {
    const [backGround, setBackGround] = useState(null);
     const location = useLocation();
        console.log(location);

    useEffect(() => {
        if (location.pathname == '/home' || location.pathname == '/') {
            setBackGround(true)
        }
        else {
            setBackGround(false)
        }
    }, [location.pathname])
    
    
    // const handleBg = () => {
       

    //     if (location.pathname == '/home' || location.pathname == '/') {
    //         setBackGround(true)
    //     }
    //     else {
    //         setBackGround(false)
    //     }

    // }



    return (
        <div className={`navbar ${backGround ? 'bg-[#9538E2] mt-4 rounded-t-2xl text-white' : 'bg-white text-black'} `}>
            <div className="navbar-start">
                {/* <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div> */}
                <a className="btn btn-ghost text-xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-4  px-1">
                    {/* <li><a>Home</a></li> */}
                    <NavLink  className={({ isActive }) => isActive ? 'link underline font-bold' : 'null'} to={'/home'}>Home</NavLink>
                    {/* <NavLink className={({isActive})=> isActive?`link underline font-bold ${()=>setBackGround(!backGround)}`:`null`} to={'/statics'}>Statics</NavLink> */}
                    <NavLink  className={({ isActive }) => isActive ? `link underline font-bold` : `null`} to={'/statics'}>Statics</NavLink>
                    <NavLink  className={({ isActive }) => isActive ? 'link font-bold underline' : 'null'} to={'/dashboard'}>Dashboard</NavLink>

                    {/* <li><a>Dashboard</a></li> */}
                </ul>
            </div>
            <div className="navbar-end space-x-3">
                <a className="p-2  rounded-full bg-white text-black"><GiSelfLove></GiSelfLove></a>
                <a className="p-2 rounded-full bg-white text-black"><IoCartOutline></IoCartOutline></a>
            </div>
        </div>
    );
};

export default Navbar;