import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <footer className="px-1 py-2 flex items-center justify-center">
        <p>Made with by ❤️ Aditya Dhiman | Copyright © TalentBridge 2025</p>
      </footer>
    </div>
  );
};

export default AppLayout;
