import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../api/axios";
import Footer from "../components/Footer";
import Profil from "../components/Profil";

const Handyman = () => {
  const [handyman, setHandyman] = useState([]);
    let [searchParams] = useSearchParams();

  useEffect(() => {
    //get value via url
    const category = searchParams.get("category");
    const city = searchParams.get("city");
 
    const getHandyman = async () => {
      try {
        const response = await api.get(`/api/handymen/${category}/${city}`);
        setHandyman(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getHandyman();
  },[]);


    return (
      <>
        <Navbar />
        <div className="max-w-[1240px] mx-auto text-white relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
            {handyman ? (
              handyman.map((item) => (
                <div className="bg-white rounded-xl ">
                  <Profil
                    profil="data:image/jpeg;base64,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"
                    name={item.firstName + " " + item.lastName}
                    category={item.category.category}
                    contact={item.phone}
                    reviews="3"
                  />
                </div>
              ))
            ) : 
              <>
               
              </>
            }
          </div>
        </div>
        <Footer />
      </>
    );
}

export default Handyman;