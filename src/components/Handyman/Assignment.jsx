import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

const Assignment = () => {
  const [mission, setMission] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      console.log(token);
      try {
        const response = await api.get("/api/service", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMission(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e, serviceId) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const data = {
      id: serviceId,
    };
    try {
      const response = await api.patch("/api/service", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMission(response.data);
      navigate("/pro/assignment");
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className=" h-screen bg-white flex flex-col ">
        
        <div className=" pb-20">
          <h1 className="text-3xl  border-b-4  border-sky-500 mr-5">
            Missions
          </h1>
        </div>
        <p className="text-xl  border-sky-500 text-center pb-6">
          Voici les tâches demandées par le client
        </p>

        {mission &&
          mission.map((item, index) => (
            <div className="flex justify-center items-center ">
              <div className="flex justify-center items-center ">
                <div className="w-50 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="bg-gray-200 text-gray-700 text-lg px-6 py-4 text-center">
                    {item.title}
                  </div>

                  <div className="flex justify-between items-center px-6 py-4">
                    <div className="bg-orange-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-100 text-gray-200 font-bold">
                      {item.category.category}
                    </div>
                    <div className="text-sm">{item.createdAt}</div>
                  </div>

                  <div className="px-6 py-4 border-t border-gray-200">
                    <div className="border rounded-lg p-4 bg-gray-200">
                      {/* {item.description} */}
                      Bonjour Nous souhaitons rafraîchir une chambre de 10 m
                      carré car les murs ont été abîmés griffés.
                    </div>
                  </div>

                  <div className=" flex flex-col justify-center items-center bg-gray-200 px-6 py-4">
                    <div className="uppercase text-xs text-gray-600 font-bold">
                      {item.city}
                    </div>
                    <div className="text-sm">
                      <input type="text" value={item._id} hidden />
                    </div>
                    <div className=" mt-4 space-x-3 lg:mt-6 text-center">
                      <button
                        type="submit"
                        className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={(e) => handleSubmit(e, item._id)}
                      >
                        Effectuer cette mission
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Assignment;
