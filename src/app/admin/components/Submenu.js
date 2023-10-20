import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import {motion} from 'framer-motion'

import { usePathname } from "next/navigation";
import { useState } from "react";

function Submenu({data}) {
    const currentPage = usePathname();
    const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <>
        <li 
            onClick={() => setSubMenuOpen(!subMenuOpen)}
            className={`link ${currentPage.includes(data.name.toLowerCase()) && "active" } flex gap-3 cursor-pointer`}
        >
            <img src={data.icon} alt="" />
            <p className="capitalize flex-1">{data.name}</p>
            <IoIosArrowDown className={`${subMenuOpen && 'rotate-180'} duration-200 `} />
        </li>
        <motion.ul 
            animate={
                subMenuOpen ? {
                    height: 'fit-content'
                } : {
                    height: 0
                }
            }
            className="flex flex-col pl-14 text-[0.8rem] font-normal overflow-hidden h-0 "
        >
            {data.menus.map((menu) => (
                <li key={menu.title}>
                    <Link 
                        href={menu.link}
                        className={`link !bg-transparent capitalize ${currentPage == menu.link && "active"}`}
                    >{menu.title}</Link>
                </li>
            ))}
        </motion.ul>
    </>
  )
}

export default Submenu