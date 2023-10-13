import React, { useState } from 'react';
import {IoIosArrowBack} from "react-icons/io"
import {TiThMenu} from "react-icons/ti"
import {BiSearch} from "react-icons/bi"
import {IoIosArrowDroprightCircle} from "react-icons/io"

import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import SideBar from "./index";
import SideBarMenu from "./body";
import Sidebar from "./Sidebar";


const LeftSideBar = ({children}:any) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);

    return (
        <div className="">
            <div className="flex">
                <div className={`h-screen p-5 pt-5 bg-zinc-50 overflow-y-auto 
                ${isOpen?"w-80":"w-20"}
                duration-300 relative`}>
                    <IoIosArrowDroprightCircle className={`text-sky-900 absolute text-2xl top-5.5 cursor-pointer right-1
                    ${isOpen && "rotate-180"}`}
                    onClick={()=>setIsOpen(!isOpen)}/>
                    <div className="inline-flex items-center">
                        <TiThMenu className={`cursor-pointer text-2xl block float-left mr-2 duration-500 text-sky-900
                        ${isOpen && "rotate-[360deg]"}
                        `}/>
                        <h1 className={`text-sky-900 origin-left font-medium text-xl duration-300 ${!isOpen && "scale-0"}`}>
                            Menu
                        </h1>
                    </div>
                      <div className={`flex item-center rounded-md bg-zinc-300 mt-6
                      ${!isOpen ?"px-2.5":"px-2.5" } py-2`}>
                          <BiSearch className={`text-sky-900 text-2xl block float-left cursor-pointer
                          ${isOpen && "mr-2"}
                          `}/>

                    <input type="search"
                    placeholder={"Search"}
                           className={`text-base bg-transparent w-full text-black focus:outline-none
                            ${!isOpen && "hidden"}
                           `}
                    />
                      </div>
                    <SideBarMenu/>
                </div>

            </div>

            <main>{children}</main>
        </div>
    );
};



export default LeftSideBar;