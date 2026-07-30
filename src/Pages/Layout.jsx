import React from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    /* h-screen + overflow-hidden locks the viewport so only the main content area scrolls */
    <div className="flex h-screen w-screen overflow-hidden bg-[#08090c]">
      
      {/* 1. Fixed Sidebar (Stays pinned to the left) */}
      <Sidebar />

      {/* Right Column (Navbar + Scrollable Body + Footer) */}
      <div className="flex flex-1 flex-col min-w-0 h-full">
        
        {/* 2. Fixed Top Navbar */}
        <Navbar />

        {/* 3. Middle Scrollable Area for Pages */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>

        {/* 4. Fixed Bottom Footer */}
        <Footer />
      </div>

    </div>
  );
};

export default Layout;