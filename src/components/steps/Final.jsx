import React, {  } from 'react';
import { useStepperContext } from "../../contexts/StepperContext";

import api from "../../api/axios";

export default function Final() {
    const { userData } = useStepperContext();



  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = localStorage.getItem("user");
    console.log(JSON.parse(user));

    const data = {
      customer: "62a33b46c3cb15a4b2d711bb",
      city: userData["city"],
      category: userData["category"],
      title: userData["objet"],
      description: userData["description"],
    };
    console.log(data);
    try {
      const response = await api.post("/api/service", data);
      console.log(response);
    } catch (error) {
      console.log(error);
     
    }
  };
  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">
        <div className="wrapper">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>

        <div className="mt-3 text-xl font-semibold uppercase text-cyan-500">
          Congratulations!
        </div>
        <div className="text-lg font-semibold text-gray-500">
          votre demande est été créée .
        </div>
        <a className="mt-10" href="/user/dashboard">
          <button className="h-10 px-5 text-gray-200 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-white hover:text-cyan-100"
         onClick={handleSubmit}>
            Close
          </button>
        </a>
      </div>
    </div>
  );
}
