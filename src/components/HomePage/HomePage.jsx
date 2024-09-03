import React from 'react';

function HomePage(){
  return (
    <div className="p-8  max-w-screen-xl mx-auto text-white">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-pink-500">Welcome to Gaming Record Keeper</h1>
        <p className="mt-4 text-lg">Track your gaming habits and set parental controls with ease.</p>
      </header>

      <section className="bg-gray-900 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-pink-500">How to Use</h2>
        <p className="mt-4 text-lg text-gray-300">Our platform allows you to track game time, set limits, and monitor usage effortlessly.</p>
        <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
          <li>Start by registering or logging in.</li>
          <li>Use the Game Tracker to monitor your gaming sessions.</li>
          <li>Parents can set limits and lock games through the Parental Control page.</li>
        </ul>
      </section>

      <section className="bg-gray-900 p-8 rounded-lg mb-8 text-center">
        <h2 className="text-3xl font-bold text-pink-500">Game-Record-Keeper In Numbers</h2>
        <div className="flex flex-wrap justify-around mt-8">
          <div className="bg-gray-800 p-6 rounded-lg m-4 flex-1 min-w-[200px]">
            <h3 className="text-2xl font-bold text-pink-500">3 billion</h3>
            <p className="mt-2 text-gray-300">Threats averted</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg m-4 flex-1 min-w-[200px]">
            <h3 className="text-2xl font-bold text-pink-500">6 million</h3>
            <p className="mt-2 text-gray-300">Families protected</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg m-4 flex-1 min-w-[200px]">
            <h3 className="text-2xl font-bold text-pink-500">4.3 ★</h3>
            <p className="mt-2 text-gray-300">Top-rated app</p>
          </div>
        </div>
      </section>

      <footer className="bg-black p-8 mt-8 border-t-2 border-gray-800 flex flex-wrap">
        <div className="flex-1 min-w-[200px] mb-6">
          <h3 className="text-xl font-semibold text-pink-500">About Us</h3>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li><a href="#" className="hover:underline">Company</a></li>
            <li><a href="#" className="hover:underline">Team</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
        <div className="flex-1 min-w-[200px] mb-6">
          <h3 className="text-xl font-semibold text-pink-500">Product</h3>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li><a href="#" className="hover:underline">Why Us</a></li>
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Get Started</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
          </ul>
        </div>
        <div className="flex-1 min-w-[200px] mb-6">
          <h3 className="text-xl font-semibold text-pink-500">Legal</h3>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li><a href="#" className="hover:underline">Product Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Website Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Cookie Policy</a></li>
            <li><a href="#" className="hover:underline">Legal Notice</a></li>
          </ul>
        </div>
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-xl font-semibold text-pink-500">Find Us</h3>
          <p className="mt-4 text-gray-300">GLA UNIVERSITY<br />Chaumuhan, Mathura<br />281406, Uttar Pradesh</p>
        </div>
        <div className="w-full text-center mt-8 text-gray-300">
          <p>© 2024 Gaming Record Keeper. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
