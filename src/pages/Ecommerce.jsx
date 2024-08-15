import React, { useState } from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbMessageQuestion } from "react-icons/tb";
import { MdOutlineEditNotifications, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { LuBarChart } from "react-icons/lu";
import { FaBoxOpen, FaPeopleGroup, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import { HiMiniReceiptRefund } from "react-icons/hi2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import alexImage from "../assets/alex.jpg";
import incomeImage from "../assets/Income.jpeg";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Ecommerce = () => {
  const [selectedItem, setSelectedItem] = useState('');

  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Revenue',
        data: [12000, 19000, 3000, 5000, 2000, 3000, 7000],
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        borderRadius: 10,
        shadowColor: 'rgba(75, 192, 192, 0.4)',
        shadowBlur: 10,
      },
      {
        label: 'Expenses',
        data: [10000, 14000, 2000, 4000, 1000, 2000, 6000],
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        borderRadius: 10,
        shadowColor: 'rgba(255, 99, 132, 0.4)',
        shadowBlur: 10,
      },
    ],
  };

  const barOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Revenue and Expenses',
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(200, 200, 200, 0.2)',
        },
      },
      y: {
        grid: {
          color: 'rgba(200, 200, 200, 0.2)',
        },
        ticks: {
          color: '#333333',
        },
      },
    },
  };

  const pieData = {
    labels: ['Revenue', 'Expenses'],
    datasets: [
      {
        label: 'Distribution',
        data: [12000 + 19000 + 3000 + 5000 + 2000 + 3000 + 7000, 10000 + 14000 + 2000 + 4000 + 1000 + 2000 + 6000],
        backgroundColor: ['rgba(75, 192, 192, 0.8)', 'rgba(255, 99, 132, 0.8)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <>
      {/* Navbar */}
      <div className='flex justify-end items-center space-x-2 text-2xl p-2 bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg'>
        <div className='flex items-center space-x-2 text-white'>
          <div 
            className='hover:bg-white hover:text-blue-500 p-2 rounded-full cursor-pointer transition-transform transform hover:scale-110'
            onClick={() => setSelectedItem('Cart')}
          >
            <AiOutlineShoppingCart />
          </div>
          <div 
            className='hover:bg-white hover:text-blue-500 p-2 rounded-full cursor-pointer transition-transform transform hover:scale-110'
            onClick={() => setSelectedItem('Messages')}
          >
            <TbMessageQuestion />
          </div>
          <div 
            className='hover:bg-white hover:text-blue-500 p-2 rounded-full cursor-pointer transition-transform transform hover:scale-110'
            onClick={() => setSelectedItem('Notifications')}
          >
            <MdOutlineEditNotifications />
          </div>
        </div>
        <div 
          className='flex items-center space-x-2 p-2 rounded-full hover:bg-cyan-200 hover:text-blue-500 cursor-pointer transition-transform transform hover:scale-110'
          onClick={() => setSelectedItem('User Account')}
        >
          <img src={alexImage} alt='account' className='w-8 h-8 rounded-full'/>
          <p className='text-white text-sm'>Hi, Alex</p>
          <MdOutlineKeyboardArrowDown className='text-white'/>
        </div>
        {selectedItem && (
          <p className='text-white text-sm ml-4 text-base'>{selectedItem}</p>
        )}
      </div>

      {/* Content */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 p-4 sm:p-6 md:p-8 lg:p-20'>
        {/* Income section */}
        <div className='bg-white p-4 sm:p-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300'>
          <div 
            className='rounded-2xl px-4 sm:px-6'
            style={{ 
              backgroundImage: `url(${incomeImage})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              minHeight: '150px',
              minWidth: '100px'
            }}
          >
            <div className='font-bold text-gray-400 text-lg sm:text-xl'>
              <p>Earnings</p>
            </div>
            <div className='flex justify-start text-black text-lg sm:text-xl mt-2 sm:mt-3 space-x-2 font-semibold'>
              <p>$88,233.12</p>
            </div>
            <div>
              <button className='bg-cyan-400 text-white p-2 rounded-md shadow-lg transform hover:scale-110 transition duration-300'>Download</button>
            </div>
          </div>
        </div>

        {/* Customers section */}
        <div className='bg-white p-4 sm:p-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300'>
          <div className='flex justify-end text-cyan-400 text-2xl sm:text-4xl'>
            <div className='bg-cyan-100 rounded-full p-2 sm:p-3 mr-4 sm:mr-8'>
              <FaPeopleGroup />
            </div>
          </div>
          <div className='flex justify-end text-black text-lg sm:text-xl mt-2 sm:mt-3 space-x-2'>
            <div className='flex flex-col space-y-1'>
              <p className='font-semibold'>39,354</p>
              <p className='text-gray-400'>customers</p>
            </div>
            <div className='text-sm'>
              <p>-4%</p>
            </div>
          </div>
        </div>

        {/* Products section */}
        <div className='bg-white p-4 sm:p-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300'>
          <div className='flex justify-end text-yellow-500 text-2xl sm:text-4xl'>
            <div className='bg-yellow-100 rounded-full p-2 sm:p-3 mr-4 sm:mr-8'>
              <FaBoxOpen />
            </div>
          </div>
          <div className='flex justify-end text-black text-lg sm:text-xl mt-2 sm:mt-3 space-x-2'>
            <div className='flex flex-col space-y-1'>
              <p className='font-semibold'>4,396</p>
              <p className='text-gray-400'>products</p>
            </div>
            <div className='text-sm'>
              <p>+23%</p>
            </div>
          </div>
        </div>

        {/* Sales section */}
        <div className='bg-white p-4 sm:p-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300'>
          <div className='flex justify-end text-pink-400 text-2xl sm:text-4xl'>
            <div className='bg-pink-100 rounded-full p-2 sm:p-3 mr-4 sm:mr-8'>
              <LuBarChart />
            </div>
          </div>
          <div className='flex justify-end text-black text-lg sm:text-xl mt-2 sm:mt-3 space-x-2'>
            <div className='flex flex-col space-y-1'>
              <p className='font-semibold'>$423,39</p>
              <p className='text-gray-400'>Sales</p>
            </div>
            <div className='text-sm'>
              <p>-38%</p>
            </div>
          </div>
        </div>

        {/* Refunds section */}
        <div className='bg-white p-4 sm:p-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300'>
          <div className='flex justify-end text-purple-400 text-2xl sm:text-4xl'>
            <div className='bg-purple-100 rounded-full p-2 sm:p-3 mr-4 sm:mr-8'>
              <HiMiniReceiptRefund />
            </div>
          </div>
          <div className='flex justify-end text-black text-lg sm:text-xl mt-2 sm:mt-3 space-x-2'>
            <div className='flex flex-col space-y-1'>
              <p className='font-semibold'>$39,354</p>
              <p className='text-gray-400'>Refunds</p>
            </div>
            <div className='text-sm'>
              <p>-12%</p>
            </div>
          </div>
        </div>
      </div>


      {/* Revenue Update and Charts */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-10'>
        <div className='bg-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300'>
          <div className='flex justify-between items-center mb-4'>
            <div className='text-black text-xl font-semibold'>Revenue Update</div>
            <div className='flex space-x-2'>
              <div className='flex flex-col'>
                <p className='text-gray-500'>Revenue</p>
                <p className='text-lg font-semibold'>$63,448</p>
              </div>
              <div className='flex flex-col'>
                <p className='text-gray-500'>Expenses</p>
                <p className='text-lg font-semibold'>$23,456</p>
              </div>
            </div>
          </div>
          <div className='relative h-64'>
            <Bar data={barData} options={barOptions} />
          </div>
        </div>

        <div className='bg-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300'>
          <div className='text-black text-xl font-semibold mb-4'>Distribution</div>
          <div className='relative h-64'>
            <Pie data={pieData} options={pieOptions} />
          </div>
        </div>
      </div>

      <div className='text-center p-8 mt-6'>
        Qusay Mutawali © 2024. All rights reserved.
        <div className='flex items-center justify-center space-x-4 mt-4 text-xl'>
          <a href='https://www.instagram.com/qusaymutawali?igsh=MWs4cDZ5ZHN3ZXVzdw==' className='hover:text-cyan-400 transform hover:scale-150 transition duration-300'> <FaInstagram/> </a>
          <a href='https://www.linkedin.com/in/qusay-mutawali-585495288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='hover:text-cyan-400 transform hover:scale-150 transition duration-300'> <FaLinkedin/> </a>
          <a href='#' className='hover:text-cyan-400 transform hover:scale-150 transition duration-300'> <FaGithub/> </a>
        </div>
      </div>
    </>
  );
};

export default Ecommerce;

