import React from "react";
import "../../components/Sidebar/index.css";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/Sidebar/SideBar";
import Orders from "./Orders";
import Footer from "../../components/Footer";

import Profil from "../../components/Profil"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Order from "../../components/Handyman/Order";
import Achievements from "../../components/Handyman/Achievements";
import Assignment from "../../components/Handyman/Assignment";
import Message from "../../components/Handyman/Message";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <SideBar>
        <Routes>
          <Route path="/dashboard" />
          <Route path="/myoffers" element={<Order />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/assignment" element={<Assignment />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </SideBar>
      <Footer />
    </>
  );
};

export default Dashboard;
