import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import takaLogo from "../assets/takaPediaLogo.png";
import { FaBars, FaRegCalendarAlt, FaChartArea, FaChartBar } from 'react-icons/fa';
import { IoIosPeople, IoIosColorPalette } from "react-icons/io";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsKanbanFill } from "react-icons/bs";
import { SiCkeditor4 } from "react-icons/si";
import { CgColorPicker } from "react-icons/cg";
import { FaChartLine } from "react-icons/fa6";
import { HiChartPie } from "react-icons/hi2";
import { BiMoney } from "react-icons/bi";
import { GiGreatPyramid } from "react-icons/gi";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { IoBarChartSharp } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className={`fixed top-4 left-4 text-white bg-cyan-500 p-2 rounded focus:outline-none z-50 transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={toggleNavbar}
      >
        <FaBars />
      </button>

      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white text-gray-800 flex flex-col transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex items-center justify-between p-4">
          {/* Logo */}
          <div className='flex items-center justify-center space-x-2'>
            <img src={takaLogo} className="h-6" alt="Takapedia Logo" />
            <h1 className="text-xl font-bold">Takapedia</h1>
          </div>

          {/* Close Button */}
          <button
            className="text-white bg-cyan-500 p-2 rounded focus:outline-none"
            onClick={toggleNavbar}
          >
            <FaBars />
          </button>
        </div>
        <div className="flex-grow overflow-y-auto mt-3 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-white">
          <div className="p-4">
            <h2 className="text-lg font-normal text-gray-400">DASHBOARD</h2>
            <ul className="mt-2">
              <li className="mt-2">
                <NavLink
                  to="/ecommerce"
                  className={({ isActive }) => `flex items-center space-x-3 text-lg ml-3 p-2 rounded ${isActive ? 'bg-cyan-400 text-white' : 'hover:bg-cyan-400 hover:text-white'}`}
                >
                  <RiShoppingBag3Fill />
                  <span>E-commerce</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-normal text-gray-400">PAGES</h2>
            <ul className="mt-2">
              <li className="mt-2">
                <NavLink
                  to="/order"
                  className={({ isActive }) => `flex items-center space-x-3 text-lg ml-3 p-2 rounded ${isActive ? 'bg-cyan-400 text-white' : 'hover:bg-cyan-400 hover:text-white'}`}
                >
                  <FaCartShopping />
                  <span>Orders</span>
                </NavLink>
              </li>
                
              <li className="mt-2">
                <NavLink
                  to="/employers"
                  className={({ isActive }) => `flex items-center space-x-3 text-lg ml-3 p-2 rounded ${isActive ? 'bg-cyan-400 text-white' : 'hover:bg-cyan-400 hover:text-white'}`}
                >
                  <IoIosPeople />
                  <span>Employees</span>
                </NavLink>
              </li>
              
              <li className="mt-2">
                <NavLink
                  to="/customers"
                  className={({ isActive }) => `flex items-center space-x-3 text-lg ml-3 p-2 rounded ${isActive ? 'bg-cyan-400 text-white' : 'hover:bg-cyan-400 hover:text-white'}`}
                >
                  <FaPeopleGroup></FaPeopleGroup>
                  <span>Customers</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-normal text-gray-400">APPS</h2>
            <ul className="mt-2">
              <li className="mt-2">
                <NavLink
                  to="/calendar"
                  className={({ isActive }) => `flex items-center space-x-3 text-lg ml-3 p-2 rounded ${isActive ? 'bg-cyan-400 text-white' : 'hover:bg-cyan-400 hover:text-white'}`}
                >
                  <FaRegCalendarAlt />
                  <span>Calendar</span>
                </NavLink>
              </li>
              <li className="mt-2">
                <NavLink
                  to="/kanban"
                  className={({ isActive }) => `flex items-center space-x-3 text-lg ml-3 p-2 rounded ${isActive ? 'bg-cyan-400 text-white' : 'hover:bg-cyan-400 hover:text-white'}`}
                >
                  <BsKanbanFill />
                  <span>Kanban</span>
                </NavLink>
              </li>
              <li className="mt-2">
                <NavLink
                  to="/editor"
                  className={({ isActive }) => `flex items-center space-x-3 text-lg ml-3 p-2 rounded ${isActive ? 'bg-cyan-400 text-white' : 'hover:bg-cyan-400 hover:text-white'}`}
                >
                  <SiCkeditor4 />
                  <span>Editor</span>
                </NavLink>
              </li>
              <li className="mt-2">
                <NavLink
                  to="/color"
                  className={({ isActive }) => `flex items-center space-x-3 text-lg ml-3 p-2 rounded ${isActive ? 'bg-cyan-400 text-white' : 'hover:bg-cyan-400 hover:text-white'}`}
                >
                  <CgColorPicker />
                  <span>Color Picker</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-normal text-gray-400">CHARTS</h2>
            <ul className="mt-2">
              <li className="mt-2">
                <NavLink
                  to="/line"
                  className={({ isActive }) => `flex items-center space-x-3 text-lg ml-3 p-2 rounded ${isActive ? 'bg-cyan-400 text-white' : 'hover:bg-cyan-400 hover:text-white'}`}
                >
                  <FaChartLine />
                  <span>Line</span>
                </NavLink>
              </li>
              <li className="mt-2">
                <NavLink
                  to="/areacharts"
                  className={({ isActive }) => `flex items-center space-x-3 text-lg ml-3 p-2 rounded ${isActive ? 'bg-cyan-400 text-white' : 'hover:bg-cyan-400 hover:text-white'}`}
                >
                  <FaChartArea />
                  <span>Area</span>
                </NavLink>
              </li>
              <li className="mt-2">
                <NavLink
                  to="/bar"
                  className={({ isActive }) => `flex items-center space-x-3 text-lg ml-3 p-2 rounded ${isActive ? 'bg-cyan-400 text-white' : 'hover:bg-cyan-400 hover:text-white'}`}
                >
                  <FaChartBar />
                  <span>Bar</span>
                </NavLink>
              </li>
              <li className="mt-2">
                <NavLink
                  to="/pie"
                  className={({ isActive }) => `flex items-center space-x-3 text-lg ml-3 p-2 rounded ${isActive ? 'bg-cyan-400 text-white' : 'hover:bg-cyan-400 hover:text-white'}`}
                >
                  <HiChartPie />
                  <span>Pie</span>
                </NavLink>
              </li>
              <li className="mt-2">
                <NavLink
                  to="/financial"
                  className={({ isActive }) => `flex items-center space-x-3 text-lg ml-3 p-2 rounded ${isActive ? 'bg-cyan-400 text-white' : 'hover:bg-cyan-400 hover:text-white'}`}
                >
                  <BiMoney />
                  <span>Financial</span>
                </NavLink>
              </li>
              <li className="mt-2">
                <NavLink
                  to="/cmapping"
                  className={({ isActive }) => `flex items-center space-x-3 text-lg ml-3 p-2 rounded ${isActive ? 'bg-cyan-400 text-white' : 'hover:bg-cyan-400 hover:text-white'}`}
                >
                  <IoIosColorPalette />
                  <span>Color-Mapping</span>
                </NavLink>
              </li>
              <li className="mt-2">
                <NavLink
                  to="/pyramid"
                  className={({ isActive }) => `flex items-center space-x-3 text-lg ml-3 p-2 rounded ${isActive ? 'bg-cyan-400 text-white' : 'hover:bg-cyan-400 hover:text-white'}`}
                >
                  <GiGreatPyramid />
                  <span>Pyramid</span>
                </NavLink>
              </li>
              <li className="mt-2">
                <NavLink
                  to="/stacked"
                  className={({ isActive }) => `flex items-center space-x-3 text-lg ml-3 p-2 rounded ${isActive ? 'bg-cyan-400 text-white' : 'hover:bg-cyan-400 hover:text-white'}`}
                >
                  <IoBarChartSharp />
                  <span>Stacked</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Overlay to close navbar when clicked outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleNavbar}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
