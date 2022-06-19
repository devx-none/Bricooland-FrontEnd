import React, { useEffect, useState } from "react";
import api from "../../api/axios";

const Orders = () => {

  const [mission, setMission] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await api.get("/api/missions", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMission(response.data);
        // setLoading(false);
      } catch (error) {
        // setError(error);
        // setLoading(false);
      }
    };
    fetchData();
  }, []);

  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  return (
    <>
      <div className=" h-screen bg-white flex flex-col">
        <div className=" pb-20">
          <h1 className="text-3xl  border-b-4  border-sky-500 mr-5">
            Mes Missions
          </h1>
        </div>
        <p className="text-xl  border-sky-500 text-center pb-6">
          Ci-dessous vos missions selectionnées et vos demandes reçus
        </p>
        {mission &&
          mission.map((item) => (
            <div className="flex justify-center items-center ">
              <div className="flex justify-center items-center ">
                <div className="w-50 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="bg-gray-200 text-gray-700 text-lg text-center px-6 py-4">
                    {item.title}
                  </div>

                  <div className="flex justify-between items-center px-6 py-4">
                    <div className="bg-orange-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-100 text-gray-200 font-bold">
                      {item.category.category}
                    </div>
                    <div className="text-sm">{item.updatedAt}</div>
                  </div>

                  <div className="px-6 py-4 border-t border-gray-200">
                    <div className="border rounded-lg p-4 bg-gray-200">
                      {item.description}
                    </div>
                  </div>

                  <div className="flex flex-col items-center bg-gray-200 px-6 py-4">
                    <div className="uppercase text-xs text-gray-600 font-bold">
                      {item.customer.firstName} {item.customer.lastName}
                    </div>

                    <div className="flex mt-3 space-x-3 lg:mt-6">
                      <button
                        className="h-12 w-[100px] w-full border-gray-900 bg-sky-900 text-white text-md font-semibold rounded hover:text-gray-800 hover:bg-gray-200"
                        onMouseEnter={onHover}
                        onMouseLeave={onLeave}
                      >
                        {hover ? item.customer.phone : "Appeler"}
                      </button>
                      <a
                        href="www.google.com"
                        className="h-12 inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                      >
                        Message
                      </a>
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

export default Orders;
