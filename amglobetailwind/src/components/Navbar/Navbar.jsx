import React, { useState } from "react";
import weblogo from "../../assets/Images/AmLogo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import {Fade} from 'react-awesome-reveal'

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav name="Main-Navbar" className="font-semibold font-Jakarta text-xs bg-nav-back fixed top-0 left-0 right-0 z-50 bg-slate-900">
      {/* <Fade direction="down"> */}
        <div name="container" className="max-w-full px-8 py-4 flex items-center justify-between sm:w-[80%] mx-auto w-[100%] ">
          {/* Website logo */}
          <div className={`imgback bg-white w-24 h-12 flex items-center justify-center p-1 ${isSidebarOpen ? 'hidden' : ''}`}>
            <img src={weblogo} alt="" className="w-auto h-full" />
          </div>

          {/* Navbar menu */}
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-grow">
            <ul className="nav-list flex gap-8 text-white md:flex-row flex-col text-[1.1em]">
              <li className="hover:text-[#4158E8] transition">
                <a href="#">Home</a>
              </li>
              <li className="hover:text-[#4158E8] transition">
                <a href="#">Candidates</a>
              </li>
              <li className="hover:text-[#4158E8] transition">
                <a href="#">Employers</a>
              </li>
              <li className="hover:text-[#4158E8] transition">
                <a href="#">About us</a>
              </li>
              <li className="hover:text-[#4158E8] transition">
                <a href="#">Insights</a>
              </li>
            </ul>
          </div>
          {/* Sidebar toggle */}
          <div
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="cursor-pointer pr-4 z-10 text-white lg:hidden"
          >
            {!isSidebarOpen && <FaBars size={30} />}
          </div>

          {/* Sidebar */}
          {isSidebarOpen && (
            <div className="lg:hidden fixed inset-y-0 right-0 bg-gray-800 p-4 rounded-lg shadow-lg h-screen w-[40%] top-0 z-50">
              <div className="flex justify-end mb-4">
                <FaTimes onClick={() => setIsSidebarOpen(false)} size={30} className="cursor-pointer text-white" />
              </div>
              <ul className="flex flex-col gap-4 text-white justify-center items-center">
                <li className="hover:text-blue-500 transition">
                  <a href="#" className="text-lg font-medium py-2">Home</a>
                </li>
                <li className="hover:text-blue-500 transition">
                  <a href="#" className="text-lg font-medium py-2">Candidates</a>
                </li>
                <li className="hover:text-blue-500 transition">
                  <a href="#" className="text-lg font-medium py-2">Employers</a>
                </li>
                <li className="hover:text-blue-500 transition">
                  <a href="#" className="text-lg font-medium py-2">About us</a>
                </li>
                <li className="hover:text-blue-500 transition">
                  <a href="#" className="text-lg font-medium py-2">Insights</a>
                </li>
              </ul>
            </div>
          )}

          {/* Buttons */}
          <div className="hidden lg:flex lg:gap-4 text-white">
            <button className="button border-white border-2 p-2 hover:text-white hover:bg-[#4158E8] transition text-[1.1em]">
              Request Proposal
            </button>
            <button className="button border-white border-2 p-2 hover:text-white hover:bg-[#4158E8] transition text-[1.1em]">
              Register Cv
            </button>
          </div>
          </div>
          {/* </Fade> */}
      </nav>

    </>
  );
};

export default Nav;
