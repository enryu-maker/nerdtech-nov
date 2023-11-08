import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/nlogo.png"

const Navbar = () => {
  const links = [
    { name: "HOME", link: "home" },
    { name: "SERVICES ", link: "service" },
    { name: "CLIENTS", link: "clients" },
    { name: "ABOUT US", link: "about" },
    { name: "BLOGS", link: "blogs" },
    { name: "CONTACT US", link: "contact" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div className=" w-full fixed top-0 left-0 z-50 " style={{ fontFamily:'nothing', letterSpacing:2}}>
      <div className="md:flex items-center justify-between bg-white/70 backdrop-blur-md top-0    md:px-24 px-7">
        <div className="font-bold text-2xl text-[#0f7abc] cursor-pointer flex items-center">
        <img src={logo} alt="" className="h-[90px] w-[90px]" />
        NerdTech
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu-outline"}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center
         md:pb-0 pb-12 absolute md:static
        max-md:bg-white/70 max-md:backdrop-blur-md md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 
         transition-all duration-500 ease-in ${open ? 'top-34 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
          {links.map((link) => (
            <li key={link.name} className="md:ml-7 text-md md:my-0 my-7 hover:text-[#0f7abc] duration-500">
             <Link
        onClick={() => {
          window.scrollTo({
            top: document.getElementById(link.link).offsetTop,
            behavior: "smooth",
          });
        }}
        >{link.name} </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
