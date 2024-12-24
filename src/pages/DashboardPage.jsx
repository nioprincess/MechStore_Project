import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import { Outlet } from "react-router";
const DashboardPage = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-white-100">
        {/* Header */}
        <Header />

      
            <Outlet />
         

        
      </div>
    </div>
  );
};

export default DashboardPage;
