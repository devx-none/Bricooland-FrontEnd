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

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <SideBar>
        <Routes>
          <Route path="/dashboard" />
          <Route path="/myoffers" element={<Order />} />
          <Route path="/achievements" element={<Achievements />} />
        </Routes>
      </SideBar>
      <Footer />
    </>
  );
};

export default Dashboard;
