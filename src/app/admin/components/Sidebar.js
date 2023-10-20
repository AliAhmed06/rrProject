"use client";
import { motion } from "framer-motion"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { IoIosArrowBack } from "react-icons/io";
import { MdMenu } from "react-icons/md";

import Submenu from "./Submenu";

import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/navigation";

function Sidebar() {
  
  let isTab = useMediaQuery({ query: "(max-width: 768px)" });
  
  const [isOpen, setIsOpen] = useState(isTab ? false : true);

  {/* Get the current route */}
  const pathname = usePathname();
  const router = useRouter();

  const Sidebar_animation = isTab ? {
    // Mobile view
    open: {
      x: 0,
      width: "16rem",
      transition: {
        damping: 40,
      },
    },
    closed: {
      x: -250,
      width: 0,
      transition: {
        damping: 40,
        delay: 0.15
      },
    },
  }:{
    // System view
    open: {
      width: "16rem",
      transition: {
        damping: 40,
      },
    },
    closed: {
      width: "4rem",
      transition: {
        damping: 40,
      },
    },
  }

  useEffect(() => {
    isTab && setIsOpen(false);
  }, [pathname])

  useEffect(() => {
    if(isTab){
      // mobile
      setIsOpen(false);
    } 
    else{
      // laptop
      setIsOpen(true)
    } 
  }, [isTab])
  
  const logoutHandler = async () => {
    try {
      let res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/logout`, {
          headers: {
            "Content-type": "application/json",
          },
          method: "GET"          
      });
      res = await res.json();
      console.log(res);
      if(res.success === false){
        console.log(res.error);
      }
      else{
        router.push('/auth/login');
      }
    } catch (error) {
      console.log(error);      
    }    
  }

  const menu1 = {
    name: "Project",
    icon: "/images/admin/icons/sidebar7.svg",
    menus: [
      {
        "title":"Add Project",
        "link": "/admin/project/add"
      },
      {
        "title":"List",
        "link": "/admin/project/list"
      },
      {
        "title":"Allotment",
        "link": "/admin/project/allotment"
      },
    ],
  }

  
  
  
  return (
    <div className=''>
      
      <div
        onClick={ ()=>setIsOpen(false) }
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${isOpen ? "block" : "hidden"}`}
      >
      </div>

      <motion.div 
      initial={{x: isTab ? -250 : 0}}
      variants={Sidebar_animation}
      animate={isOpen ? "open" : "closed"}
      className='bg-white text-gray-500 shadow-xl z-[999] w-[16rem] max-w-[16rem] h-screen overflow-hidden fixed 
                      md:relative'
      >

          {/* Logo */}
          <div className="flex items-center gap-2.5 font-medium border-b border-slate-300 py-3 mx-2">
            <img 
              src="/images/logo.png" 
              alt=".." 
              width={45}
            />
            <span className="text-xl whitespace-pre">R&R</span>
          </div>

          {/* Menus */}
          <div className="flex flex-col h-full">
            {/* first */}
            <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-3 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 h-[70%]
                          md:h-[68%]">
              {/* With Submenu */}
              {/* mobile view mostly shows submenus */}
              {/* {
                (isOpen || isTab ) &&
                <div className="">
                  <div className="flex flex-col gap-1">
                    <Submenu data={menu1} />
                  </div>                
                </div>
              } */}
              

              <li>
                <Link href="/admin/products" className={`link ${pathname == "/admin/allotment" ? "active" : ""} flex gap-3`} >
                  <img src="/images/admin/icons/sidebar1.svg" alt="" />
                  {isOpen && <span>Products</span> }                
                </Link>
              </li>
              <li>
                <Link href="/admin/categories" className={`link ${pathname == "/admin/payment_plan" ? "active" : ""} flex gap-3`} >
                  <img src="/images/admin/icons/sidebar2.svg" alt="" />
                  {isOpen && <span>Categories</span> }                
                </Link>
              </li>              

              {
                (isOpen || isTab ) &&
                <li>
                  <h3 className="font-bold uppercase pl-3 my-2 whitespace-pre">Account</h3>
                </li>
              }
              

              <li>
                <button 
                  className={`link ${pathname == "/admin/logout" ? "active" : ""} flex items-center gap-3`} 
                  onClick={logoutHandler}
                >
                  <img src="/images/admin/icons/sidebar6.svg" alt="" />
                  {isOpen && <span>Logout</span> }             
                </button>
              </li>              
            </ul>
            
            {/* second */}
            {
              isOpen && (
                <div className="text-sm z-50 max-h-48 whitespace-pre w-full font-medium">
                  <div className="flex items-center border-y border-slate-300 p-4 gap-3">
                    <img src="/images/admin/icons/sidebar8.svg" alt="" />
                    <div>
                      <p className="text-red-500">Contact</p>
                      <p>+123456789</p>
                    </div>                    
                  </div>
                </div>
              )
            }
            
          </div>

          {/* controll button */}
          <motion.div 
            animate={
              isOpen ? {
                x: 0,
                y: 0,
                rotate: 0,
              } : {
                x: -10,
                y: -200,
                rotate: 180,
              }
            }
            transition={{
              duration: 0,
            }}
            onClick={() => setIsOpen(!isOpen)}
            className="absolute w-fit h-fit z-50 right-2 bottom-5 cursor-pointer hidden
                      md:block"
          >        
            <IoIosArrowBack size={25} />
          </motion.div> 
      </motion.div>

      <div 
        className="m-3 md:hidden" 
        onClick={() => setIsOpen(true)}
      >
        <MdMenu size={25} />
      </div>
    </div>
  )
}

export default Sidebar