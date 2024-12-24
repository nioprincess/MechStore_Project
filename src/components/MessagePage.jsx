import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Card from "../components/Card";
import Chart from "../components/Chart";
import Messages from "../components/Messages";
import { BsBag, BsTruck, BsCart4 } from "react-icons/bs";
import ProductT from "../components/ProductT";

const MessagePage = () => {
  return (
    <div className="flex">

      <Sidebar />
      <div className="flex-1 bg-gray-100">
   
        <Header />

        <div className="p-4 flex">
          <Messages />
        </div>
        
      </div>
    </div>
  );
};

export default MessagePage;
