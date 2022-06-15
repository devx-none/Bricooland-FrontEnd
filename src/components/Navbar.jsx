import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


import { MenuIcon, XIcon , PlusIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  const navigate = useNavigate();

    // const handleClose =()=> setNav(!nav)

  return (
    <div className="w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center 	">
          <h1
            className="text-2xl font-bold mr-4 sm:text-3xl cursor-pointer pl-4"
            onClick={() => navigate("/")}
          >
            {" "}
            BRICOOLAND.
          </h1>
          {/* <ul className="hidden md:flex">
            <li className="cursor-pointer">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="about" smooth={true} offset={-200} duration={500}>
                About
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="support" smooth={true} offset={-50} duration={500}>
                Support
              </Link>
            </li>
          </ul> */}
          {/* <li><Link to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li> */}
          {/* <li><Link to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li> */}
        </div>

        <div className="hidden md:flex pr-4 ">
          <div
            className="cursor-pointer text-white bg-[#050708] hover:bg-white hover:text-gray-900 border-gray-900  focus:ring-[#050708]/50 font-medium rounded-lg px-5 py-3  text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600  dark:focus:outline-none "
            onClick={() => navigate("/demande")}
          >
            <PlusIcon className="w-6 h-6 mx-2" />
            Demander un service
          </div>

          <button
            className="px-5  mx-6 "
            onClick={() => navigate("/pro/register")}
          >
            rejoindre en tant que pro
          </button>
          <div
            className=" bg-transparent text-black mr-4 mt-3  hover:border-b-4 rounded  cursor-pointer  "
            onClick={() => navigate("/login")}
          >
            <p>Connection</p>
          </div>
          <div
            className=" bg-transparent text-black mr-4 mt-3 hover:border-b-4 rounded  cursor-pointer  "
            onClick={() => navigate("/register")}
          >
            <p>inscription</p>
          </div>
        </div>

        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      {/* <ul className={!nav ? "hidden" : "absolute bg-white w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
          <Link onClick={handleClose} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
          <Link
            onClick={handleClose}
            to="support"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Support
          </Link>
        </li>
        
        <div className="flex flex-col my-4">
          <button
            className="bg-transparent text-sky-500 px-8 py-3 mb-4"
            onClick={() => navigate("/login")}
          >
            Sign In
          </button>
          <button className="px-8 py-3" onClick={() => navigate("/register")}>
            Sign Up
          </button>
        </div>
      </ul> */}

      {/* avatar menu */}

      <div className={!nav ? "hidden" : "absolute bg-white w-full px-8"}>
        <ul className="flex flex-col my-4">
          <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
            <div
              className=" bg-transparent text-black mr-4 mt-3  hover:border-b-4 rounded  cursor-pointer  "
              onClick={() => navigate("/login")}
            >
              <p>Connection</p>
            </div>
          </li>
          <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
            <div
              className=" bg-transparent text-black mr-4 mt-3 hover:border-b-4 rounded  cursor-pointer  "
              onClick={() => navigate("/register")}
            >
              <p>inscription</p>
            </div>
          </li>
          <li className=" w-full flex justify-between">
            <button
              className="px-3 py-3 mt-4 "
              onClick={() => navigate("/pro/register")}
            >
              <p>rejoindre en tant que pro</p>
            </button>
           
          </li>
          <li className=" w-full flex justify-between r">
             <div
              className="cursor-pointer text-white bg-[#050708] hover:bg-white hover:text-gray-900 border-gray-900  focus:ring-[#050708]/50 font-medium rounded-lg px-5 py-4  text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600  dark:focus:outline-none  "
              onClick={() => navigate("/demande")}
            >
              <PlusIcon className="w-6 h-6 mx-2" />
              demander
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
