import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import bgImg from "../assets/handyman.png";
import bgImg2 from "../assets/handyman2.png";
import brandImg from "../assets/brand.svg";

const Hero = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const forHandyman = () => setActive(!active);
  const forCustom = () => setActive(!active);
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [cat,setCat] = useState("");
  //list of categories
  useEffect(() => {
    const categories = async () => {
      try {
        const response = await api.get("/api/categories");
        setCategory(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    categories();
  }, []);

  const handleChange = (e) => {
    const {value } = e.target;
  
      setCat(value);
    
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
   //send data url to server
    navigate(`/pro?category=${cat}&city=${city}`)
  }

  return (
    <div
      name="home"
      className=" h-screen bg-white flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start  w-full px-2 py-20">
          <img className="max-w-[50px]" src={brandImg} alt="brand" />
          {/* <p className="text-2xl">Prendre soin de votre fait maison facile.</p> */}
          <h1
            className={`py-3 text-3xl md:text-5xl font-bold ${
              active ? "hidden" : "visible"
            } `}
          >
            Prendre soin de votre fait maison facile.
          </h1>
          <div className="xl:flex justify-between md:flex-col sm:flex-col">
            <div className="flex justify-between ">
              <button
                className={`text-xl font-semibold border-none py-5 ${
                  !active ? "text-sky-500" : "text-gray-500"
                }`}
                type="button"
                onClick={forHandyman}
              >
                {" "}
                ENGAGEZ UN PRO
              </button>
              <button
                className={`text-xl font-semibold border-none py-5  ${
                  active ? "text-sky-500" : "text-gray-500"
                }`}
                type="button"
                onClick={forCustom}
              >
                {" "}
                TROUVER UN CLIENT
              </button>
            </div>

            <div className="justify-between items-center  ">
              {!active && (
                <div className="flex justify-center  ">
                  <div className="flex mb-3  xl:w-25 border border-solid border-gray-300">
                    <select
                      className="form-select appearance-none
                        block
                        w-full
                        px-3
                        py-1.5
                        w-full
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border-none
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-sky-500 focus:outline-none"
                      aria-label="Default select example"
                      onChange={handleChange}
                      value={cat}
                      name="category"
                    >
                      <option selected className="text-gray-300">
                        Quel type de services recherchez-vous ?
                      </option>
                      {category &&
                        category.map((item, index) => (
                          <>
                            <option value={item._id} key={index}>
                              {item.category}
                            </option>
                          </>
                        ))}
                    </select>

                    <input
                      type="text"
                      placeholder="ville"
                     
                      value={city}
                      className=" border-l  focus:outline-none   px-4 block w-24 appearance-none l"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <button
                    className="button-primary rounded-none px-8 py-3 mb-3"
                    onClick={handleSubmit}
                  >
                    Search
                  </button>
                </div>
              )}
              {active && (
                <>
                  <h1 className="font-semibold text-2xl py-2">
                    Rencontrez de nouveaux clients dans votre région.
                  </h1>
                  <p className="text-sm text-gray-600">
                    Inscrivez-vous pour commencer à développer votre travail.
                  </p>
                  <button
                    className="py-3 px-6 sm:w-[60%] my-4"
                    onClick={() => navigate("/pro/register")}
                  >
                    Commencer
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex md:justify-center">
          <img
            className="max-w-[380px]  py-20 md:py-10"
            src={!active ? bgImg : bgImg2}
            alt="/"
          />
        </div>
        {/* <div
          className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-white
            border border-slate-300 rounded-xl text-center shadow-xl"
        >
          <p>Data Services</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-slate-500">
              <CloudUploadIcon className="h-6 text-indigo-600" /> App Security
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <DatabaseIcon className="h-6 text-indigo-600" /> Dashboard Design
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <ServerIcon className="h-6 text-indigo-600" /> Cloud Data
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <PaperAirplaneIcon className="h-6 text-indigo-600" /> API
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
