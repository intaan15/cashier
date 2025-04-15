import React, { useState } from 'react'
import logo from '../assets/LogoSidebar.svg';

//icons
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { SlEarphonesAlt } from "react-icons/sl";
import { IoIosPeople } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";

const menuItems = [
    {
        icons: <MdDashboard size={20}/>,
        label: 'dashboard'
    },
    {
        icons: <SlEarphonesAlt size={20}/>,
        label: 'konsultasi'
    },
    {
        icons: <IoIosPeople size={20}/>,
        label: 'data masyarakat'
    },
    {
        icons: <FaUserDoctor size={20}/>,
        label: 'data dokter'
    },
    {
        icons: <GrNotes size={20}/>,
        label: 'artikel'
    },
]

export default function Sidebar() {
    const [open, setOpen] = useState(true);

    return (
        <div className="bg-white">
            <nav className={`shadow-md h-screen p-2 flex flex-col duration-500 ${open ? 'w-60' : 'w-16'}`}>

                {/* Header */}
                <div className="px-3 py-2 h-20 flex justify-between items-center">
                    <img src={logo} alt="Logo" className={`${open ? 'w-40' : 'w-0'} rounded-md`} />
                    <div><MdOutlineMenuOpen
                        size={30}
                        className="cursor-pointer"
                        onClick={() => setOpen(!open)}
                    /></div>
                </div>

                {/* Body */}
                <ul className='pt-20'>
                    {menuItems.map((item, index) => (
                        <li key={index} className="px-3 py-2 my-5 text-primary hover:text-white hover:bg-primary hover:rounded-3xl rounded-md cursor-pointer flex gap-2 items-center">
                            <div>{item.icons}</div>
                            <p className={`${!open && 'w-0 translate-x-24'} capitalize text-xl duration-500 overflow-hidden`}>{item.label}</p>
                        </li>
                    ))}
                </ul>

            </nav>
        </div>
    );
}
