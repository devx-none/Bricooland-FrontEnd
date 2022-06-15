import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Profil from "../components/Profil";

const Handyman = () => {
    return (
      <>
        <Navbar />
        <div className="max-w-[1240px] mx-auto text-white relative">
          <div className="px-4 py-12">
            {/* <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center"></h2>
            <h3 className="text-5xl font-bold py-6 text-center"></h3> */}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
            <div className="bg-white rounded-xl ">
              <Profil />
            </div>
            <div className="bg-white rounded-xl ">
              <Profil />
            </div>
            <div className="bg-white rounded-xl ">
              <Profil />
            </div>
            <div className="bg-white rounded-xl ">
              <Profil />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}

export default Handyman;