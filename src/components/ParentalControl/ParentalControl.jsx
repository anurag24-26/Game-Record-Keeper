import React from 'react';
import image1 from './notifications-icon.png';
import image2 from './parental-control-icon.png';

function ParentalControl() {
  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-white text-3xl font-bold mb-6">Parental Control</h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-extrabold text-gray-300 mb-2">Set Time Limits</h2>
        <p className="text-gray-400 mb-4">Manage how long your child can play games each day.</p>
        <div>
          <button className="bg-pink-600 text-white px-4 py-2 rounded mr-4 hover:bg-pink-700">Set Time Limit</button>
          <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">Lock App</button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center mb-8">
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-extrabold text-gray-300 mb-2">Monitor and Control</h2>
          <p className="text-gray-400">Track your child's online activity, set screen time limits, and block inappropriate content.</p>
        </div>
        <img src={image1} alt="Monitor Control" className="w-40 lg:w-64 rounded-lg" />
      </div>

      <div className="flex flex-col lg:flex-row-reverse items-center mb-8">
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-extrabold text-gray-300 mb-2">Screen Time Management</h2>
          <p className="text-gray-400">Set daily limits and schedules for your child's screen time across all devices.</p>
        </div>
        <img src={image2} alt="Screen Time" className="w-40 lg:w-64 rounded-lg" />
      </div>

      <div className="flex flex-col lg:flex-row items-center mb-8">
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-extrabold text-gray-300 mb-2">App Blocking</h2>
          <p className="text-gray-400">Prevent access to specific apps or categories during study time or bedtime.</p>
        </div>
        <img src={image1} alt="App Blocking" className="w-40 lg:w-64 rounded-lg" />
      </div>

      <footer className="bg-gray-900 text-gray-300 p-8 mt-12 w-full rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-500">Company</a></li>
              <li><a href="#" className="hover:text-pink-500">Team</a></li>
              <li><a href="#" className="hover:text-pink-500">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-500">Why Us</a></li>
              <li><a href="#" className="hover:text-pink-500">Features</a></li>
              <li><a href="#" className="hover:text-pink-500">Get Started</a></li>
              <li><a href="#" className="hover:text-pink-500">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-500">Product Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-500">Website Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-500">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-pink-500">Legal Notice</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Find Us</h3>
        <p className="mt-4">
              GLA UNIVERSITY<br />
              Chaumuhan, Mathura<br />
              281406, Uttar Pradesh
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>© 2024 Gaming Record Keeper. All rights reserved.</p>
        </div>
      </footer>
      </div>
    
  );
}
export default ParentalControl