import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed flex font-semibold text-white  justify-between items-center top-0 h-[75px]  rounded-md  z-10 w-screen px-24 py-5">
      <div className="">LOGO</div>
      <div className="flex gap-10">
        <Link>HOME </Link>
        <Link>SERVICES</Link>
        <Link>CLIENTS </Link>
        <Link>CONTACT US</Link>
      </div>
    </div>
  );
};

export default Header;
