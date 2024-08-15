import React, { useState } from 'react';
import headset from '../assets/Order/headsetGaming.jpeg';
import keyboard from '../assets/Order/mechanicalKeyboard.jpeg';
import mouse from '../assets/Order/mouse.jpeg';
import speaker from '../assets/Order/speaker.jpg';
import smartWatch from '../assets/Order/smartWatch.jpg';
import tablet from '../assets/Order/tablet.jpeg';
import ssd from '../assets/Order/ssd.jpeg';
import earbuds from '../assets/Order/earbud.jpeg';
import camera from '../assets/Order/camera.jpg';
import powerBank from '../assets/Order/powerBank.jpg';
import picture from '../assets/Order/pictureFrame.jpeg';
import soundBar from '../assets/Order/soundbarBluetooth.jpeg';
import wifiRange from '../assets/Order/wifiRange.png';
import HDD from '../assets/Order/externalHDD.jpg';
import lightBulb from '../assets/Order/lightBulb.jpg';
import vrHeadset from '../assets/Order/vrHeadset.jpeg';
import projector from '../assets/Order/projector.jpeg';
import wirelessChargingPath from '../assets/Order/wirelessChargingPath.jpeg';
import thermostat from '../assets/Order/thermostat.jpg';
import noiseCancelling from '../assets/Order/noiseCancelling.jpeg';
import doorbel from '../assets/Order/doorbel.jpg';
import cctv from '../assets/Order/homeCamera.jpg';
import streaming from '../assets/Order/streaming.jpeg';
import portableSpeaker from '../assets/Order/portableSpeaker.jpg';

const ordersData = [
  { id: '001', image: headset, item: 'Gaming Headset', customerName: 'John Doe', totalAmount: '$100.00', status: 'Shipped', location: 'New York, USA' },
  { id: '002', image: keyboard, item: 'Mechanical Keyboard', customerName: 'Jane Smith', totalAmount: '$200.00', status: 'Pending', location: 'Los Angeles, USA' },
  { id: '003', image: mouse, item: 'Wireless Gaming Mouse', customerName: 'Alice Johnson', totalAmount: '$150.00', status: 'Delivered', location: 'Chicago, USA' },
  { id: '004', image: speaker, item: 'Smart Gaming Speaker', customerName: 'Bob Brown', totalAmount: '$250.00', status: 'Shipped', location: 'Houston, USA' },
  { id: '005', image: smartWatch, item: 'Smartwatch', customerName: 'Charlie Davis', totalAmount: '$175.00', status: 'Pending', location: 'Phoenix, USA' },
  { id: '006', image: tablet, item: 'tablet', customerName: 'Emily Wilson', totalAmount: '$225.00', status: 'Delivered', location: 'Philadelphia, USA' },
  { id: '007', image: ssd, item: 'Portable SSD 550 GB', customerName: 'Michael Brown', totalAmount: '$130.00', status: 'Shipped', location: 'San Antonio, USA' },
  { id: '008', image: earbuds, item: 'Bluetooth Earbuds', customerName: 'Sarah Miller', totalAmount: '$210.00', status: 'Pending', location: 'San Diego, USA' },
  { id: '009', image: camera, item: 'Action Camera', customerName: 'David Lee', totalAmount: '$180.00', status: 'Delivered', location: 'Dallas, USA' },
  { id: '010', image: powerBank, item: 'Power Bank 20.000Mah', customerName: 'Laura Wilson', totalAmount: '$260.00', status: 'Shipped', location: 'San Jose, USA' },
  { id: '011', image: picture, item: 'Digital Picture Frame', customerName: 'James Taylor', totalAmount: '$190.00', status: 'Pending', location: 'Austin, USA' },
  { id: '012', image: soundBar, item: 'Bluetooth Soundbar', customerName: 'Olivia Brown', totalAmount: '$220.00', status: 'Delivered', location: 'Jacksonville, USA' },
  { id: '013', image: wifiRange, item: 'Extender Wifi Range', customerName: 'Robert White', totalAmount: '$140.00', status: 'Shipped', location: 'Indianapolis, USA' },
  { id: '014', image: HDD, item: '2TB External Harddisk', customerName: 'Sophia Harris', totalAmount: '$230.00', status: 'Pending', location: 'Columbus, USA' },
  { id: '015', image: lightBulb, item: 'Smart Light Bulb Set', customerName: 'William Clark', totalAmount: '$165.00', status: 'Delivered', location: 'Fort Worth, USA' },
  { id: '016', image: vrHeadset, item: 'VR Headset Budget', customerName: 'Isabella Martinez', totalAmount: '$275.00', status: 'Shipped', location: 'Charlotte, USA' },
  { id: '017', image: projector, item: 'Portable Projector', customerName: 'Mason Lewis', totalAmount: '$200.00', status: 'Pending', location: 'Detroit, USA' },
  { id: '018', image: wirelessChargingPath, item: 'Wireless Charging Pad', customerName: 'Ava Wilson', totalAmount: '$210.00', status: 'Delivered', location: 'El Paso, USA' },
  { id: '019', image: thermostat, item: 'Smart Thermostat', customerName: 'Liam Anderson', totalAmount: '$145.00', status: 'Shipped', location: 'Seattle, USA' },
  { id: '020', image: noiseCancelling, item: 'Noise-Canceling Headphones', customerName: 'Mia Thomas', totalAmount: '$195.00', status: 'Pending', location: 'Denver, USA' },
  { id: '021', image: doorbel, item: 'Smart Doorbell', customerName: 'Noah Martin', totalAmount: '$225.00', status: 'Delivered', location: 'Boston, USA' },
  { id: '022', image: cctv, item: 'Home Security Camera', customerName: 'Emma White', totalAmount: '$185.00', status: 'Shipped', location: 'San Francisco, USA' },
  { id: '023', image: streaming, item: '4K Streaming Device', customerName: 'Oliver Scott', totalAmount: '$175.00', status: 'Pending', location: 'Washington, USA' },
  { id: '024', image: portableSpeaker, item: 'Portable Bluetooth Speaker', customerName: 'Sophia Taylor', totalAmount: '$160.00', status: 'Delivered', location: 'Las Vegas, USA' },
  { id: '025', image: vrHeadset, item: 'VR Headset Budget', customerName: 'Ethan Lee', totalAmount: '$280.00', status: 'Shipped', location: 'Baltimore, USA' },
  { id: '026', image: camera, item: 'Action Camera', customerName: 'Avery Wilson', totalAmount: '$240.00', status: 'Pending', location: 'Milwaukee, USA' },
  { id: '027', image: speaker, item: 'Smart Gaming Speaker', customerName: 'Elijah Brown', totalAmount: '$155.00', status: 'Delivered', location: 'Albuquerque, USA' },
  { id: '028', image: wifiRange, item: 'Extender Wifi Range', customerName: 'Harper Green', totalAmount: '$165.00', status: 'Shipped', location: 'Tucson, USA' },
  { id: '029', image: streaming, item: '4K Streaming Device', customerName: 'Lucas Hall', totalAmount: '$195.00', status: 'Pending', location: 'Fresno, USA' },
  { id: '030', image: projector, item: 'Portable Projector', customerName: 'Mia Lewis', totalAmount: '$180.00', status: 'Delivered', location: 'Sacramento, USA' },
  { id: '031', image: earbuds, item: 'Bluetooth Earbuds', customerName: 'James Young', totalAmount: '$200.00', status: 'Shipped', location: 'Kansas City, USA' },
  { id: '032', image: headset, item: 'Gaming Headset', customerName: 'Lily Harris', totalAmount: '$210.00', status: 'Pending', location: 'Atlanta, USA' },
  { id: '033', image: thermostat, item: 'Smart Thermostat', customerName: 'Benjamin King', totalAmount: '$190.00', status: 'Delivered', location: 'Colorado Springs, USA' },
  { id: '034', image: keyboard, item: 'Mechanical Keyboard', customerName: 'Zoe Martinez', totalAmount: '$175.00', status: 'Shipped', location: 'Omaha, USA' },
  { id: '035', image: HDD, item: '2TB External Harddisk', customerName: 'Aiden Wright', totalAmount: '$225.00', status: 'Pending', location: 'Raleigh, USA' },
  { id: '036', image: camera, item: 'Action Camera', customerName: 'Mila Garcia', totalAmount: '$230.00', status: 'Delivered', location: 'Virginia Beach, USA' },
];

const Order = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(ordersData.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = ordersData.slice(startIndex, startIndex + itemsPerPage);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Shipped':
        return 'text-gray-800'; 
      case 'Pending':
        return 'text-red-500'; 
      case 'Delivered':
        return 'text-green-500'; 
      default:
        return 'text-gray-800'; 
    }
  };

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-gray-800">Orders</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-cyan-400 text-white">
            <tr>
              <th className="border px-2 py-2 text-left text-xs md:text-base w-16">ID</th>
              <th className="border px-2 py-2 text-left text-xs md:text-base w-24">Image</th>
              <th className="border px-2 py-2 text-left text-xs md:text-base w-48">Item</th>
              <th className="border px-2 py-2 text-left text-xs md:text-base w-64">Customer Name</th>
              <th className="border px-2 py-2 text-left text-xs md:text-base w-32">Total Amount</th>
              <th className="border px-2 py-2 text-left text-xs md:text-base w-24">Status</th>
              <th className="border px-2 py-2 text-left text-xs md:text-base w-64">Location</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map(order => (
              <tr
                key={order.id}
                className="h-24 hover:bg-gray-100 transition-colors duration-300"
              >
                <td className="border px-2 py-2 text-xs md:text-base">{order.id}</td>
                <td className="border px-2 py-2">
                  <img
                    src={order.image}
                    alt={order.item}
                    className="w-16 h-12 md:w-24 md:h-16 object-cover rounded-lg shadow-sm"
                  />
                </td>
                <td className="border px-2 py-2 text-xs md:text-base">{order.item}</td>
                <td className="border px-2 py-2 text-xs md:text-base">{order.customerName}</td>
                <td className="border px-2 py-2 text-xs md:text-base">{order.totalAmount}</td>
                <td className={`border px-2 py-2 text-xs md:text-base ${getStatusColor(order.status)}`}>{order.status}</td>
                <td className="border px-2 py-2 text-xs md:text-base">{order.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center md:flex-row justify-center mt-6 md:mt-8">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-cyan-400 text-white rounded-lg flex items-center mr-2 disabled:opacity-50 transition-colors duration-300 hover:bg-cyan-600"
        >
          <span className="mr-2">&lt;</span> Prev
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-cyan-400 text-white rounded-lg flex items-center disabled:opacity-50 transition-colors duration-300 hover:bg-cyan-600"
        >
          Next <span className="ml-2">&gt;</span>
        </button>
      </div>
    </div>
  );
};

export default Order;
