"use client"
import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { IoSearch, IoNotifications } from 'react-icons/io5';
import { FaBookmark } from 'react-icons/fa';
import { BsFillCartFill } from 'react-icons/bs';
import { MdExplore } from 'react-icons/md';
import { IoMdStar, IoIosArrowDown } from 'react-icons/io';
import Image from "next/image"; 
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isexplore , setisexplore]  = useState(false)

    return (
        <div className="xl:w-[85%] w-[95%] mx-auto flex items-center justify-between my-4">
            <Image src={'/HobbyCue.png'} width={200} height={80} alt="logo" />

            <div className="searchbar flex items-center justify-center w-full xl:w-auto">
                <input type="text" className="px-2 border-2 py-1 rounded-l-xl w-full xl:w-auto" placeholder="Search Here ..." />
                <button className="bg-purple-900 px-2 py-[9px] rounded-r-xl">
                    <IoSearch className="text-white" />
                </button>
            </div>

            <div className="flex items-center space-x-4">
                <IoNotifications className="w-[30px] text-purple-900 h-[30px]" />
                <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden">
                    {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                </button>
            </div>

            <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-10 flex flex-col items-center justify-center space-y-4 xl:relative xl:flex-row xl:space-x-4 xl:space-y-0 xl:bg-transparent ${isOpen ? 'block' : 'hidden'} xl:flex`}>
                <div className="explore   cursor-pointer flex items-center space-x-4" onMouseEnter ={()=>{setisexplore(true)}} onMouseLeave={()=>{setisexplore(false)}} >
                    <MdExplore className="h-[35px] text-purple-900 w-[35px]" />
                    <span className="font-bold text-white xl:text-black">Explore</span>
                    <IoIosArrowDown className="font-bold text-white xl:text-black" />

                    {isexplore && 
                    
                

                    <img src="/ExploreList.png" alt="" srcSet="" className="absolute top-8"/>}
                </div>

                <div className="icon flex items-center space-x-4">
                    <IoMdStar className="h-[25px] p-1 bg-purple-900 text-white rounded-full w-[25px]" />
                    <span className="font-bold text-white xl:text-black">Hobbies</span>
                    <IoIosArrowDown className="font-bold text-white xl:text-black" />
                </div>

                <div className={`icons flex space-x-4 items-center    `}>
                    <FaBookmark className="w-[25px] h-[25px] text-white xl:text-purple-900" />
                    <BsFillCartFill className="w-[25px] h-[25px] text-white xl:text-purple-900" />
                    {isOpen && 
                    <div  onClick={()=>{setIsOpen(false)}}>       <XIcon  className="text-white w-[25px] h-[25px] " /> </div> 
             
                    }
                
                </div>

                <button className="border-purple-300 border-[1px] px-3 py-1 text-white font-bold rounded-lg xl:text-purple-800">
                    Sign in
                </button>


            </div>
        </div>
    );
};

export default Navbar;
