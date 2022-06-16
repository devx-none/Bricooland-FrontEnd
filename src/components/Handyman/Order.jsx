import React from "react";

const Orders = () => {
  return (
    <>
      <div className=" h-screen bg-white flex flex-col">
        <div className=" pb-20">
          <h1 className="text-2xl  border-b-4  border-sky-500 mr-5">
            Mes Missions
          </h1>
        </div>
        <p className="text-xl  border-sky-500 text-center pb-6">
          Ci-dessous vos missions selectionnées et vos demandes reçus
              </p>
              
        <div class="flex justify-center items-center ">
          <div class="flex justify-center items-center ">
            <div class="w-2/3 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
              <div class="bg-gray-200 text-gray-700 text-lg px-6 py-4">
                Technicien
              </div>

              <div class="flex justify-between items-center px-6 py-4">
                <div class="bg-orange-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-100 text-gray-200 font-bold">
                  Electricien
                </div>
                <div class="text-sm">2022-06-15 12:34</div>
              </div>

              <div class="px-6 py-4 border-t border-gray-200">
                <div class="border rounded-lg p-4 bg-gray-200">
                  Bonjour Nous souhaitons rafraîchir une chambre de 10 m carré
                  car les murs ont été abîmés griffés.
                </div>
              </div>

              <div class="bg-gray-200 px-6 py-4">
                <div class="uppercase text-xs text-gray-600 font-bold">
                  elmahdi rammach
                </div>

                <div className="flex mt-4 space-x-3 lg:mt-6">
                  <a
                    href="www.google.com"
                    className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Appel
                  </a>
                  <a
                    href="www.google.com"
                    className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >
                    Message
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
