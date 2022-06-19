import React,{useState } from 'react';


const Profil = ({ profil, name, category, contact, reviews }) => {
 
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };


  
  return (
    // <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
    //   <div className="flex justify-end px-4 pt-4">
    //     <button
    //       id="dropdownButton"
    //       data-dropdown-toggle="dropdown"
    //       className="hidden sm:inline-block text-gray-500 dark:text-gray-400  dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg border-none text-sm p-1.5"
    //       type="button"
    //     >
    //       <svg
    //         className="w-6 h-6"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
    //       </svg>
    //     </button>

    //     {/* <div id="dropdown" className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
    //       <ul className="py-1" aria-labelledby="dropdownButton">
    //       <li>
    //           <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
    //       </li>
    //       <li>
    //           <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
    //       </li>
    //       <li>
    //           <a href="#" className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
    //       </li>
    //       </ul>
    //   </div> */}
    //   </div>
    //   <div className="flex flex-col items-center pb-10">
    //     <img
    //       className="mb-3 w-24 h-24 rounded-full shadow-lg"
    //       src={profil}
    //       alt="Bonnie "
    //     />
    //     <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
    //      {name}
    //     </h5>
    //     <span className="text-sm text-gray-500 dark:text-gray-400">
    //       {category}
    //     </span>
    //     <div className="flex items-center">
    //       <svg
    //         className="w-5 h-5 text-yellow-400"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    //       </svg>
    //       <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
    //         {rating}
    //       </p>
    //       <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
    //       <a
    //         href="www.google.com"
    //         className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
    //       >
    //         {reviews} reviews
    //       </a>
    //     </div>
    //     <div className="flex mt-4 space-x-3 lg:mt-6">
    //       <a
    //         href="www.google.com"
    //         className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //       >
    //         Appel
    //       </a>
    //       <a
    //         href="www.google.com"
    //         className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
    //       >
    //         Message
    //       </a>
    //     </div>
    //   </div>
    // </div>

    //   <div class="flex justify-center items-center min-h-screen bg-gray-300">
    //     <div class="card h-auto rounded-lg bg-black">
    //          <div class="relative">
    //              <span class="flex h-48 object-cover w-full rounded-lg w-full"><img class="rounded-lg" src="https://imgur.com/tKl4wUl.jpg" width="100%" height="100%" /></span>
    //              <i class="fa fa-long-arrow-left absolute top-4 left-4 text-white"></i>
    //              <p class="absolute text-white font-medium text-xl top-40 left-4">Veronika Toms</p>
    //          </div>
    //          <div class="flex justify-between items-center p-3">
    //          <div class="flex gap-3">

    //              <div class="flex flex-col items-center">
    //                  <p class="text-white">576</p>
    //                  <span class="text-white">Followers</span>
    //              </div>
    //              <div class="flex flex-col items-center">
    //                  <p class="text-white">222</p>
    //                  <span class="text-white">Following</span>
    //              </div>
    //              <div class="flex flex-col items-center">
    //                  <p class="text-white">978</p>
    //                  <span class="text-white">Likes</span>
    //              </div>
    //          </div>
    //          <div>
    //              <i class="fa fa-plus text-white"></i>
    //          </div>
    //          </div>
    //          <div class="p-3 flex gap-3">
    //              <button class="h-12 w-full bg-green-400 rounded-full text-white hover:bg-green-600">Call</button>
    //              <button class="h-12 w-full bg-blue-400 rounded-full text-white hover:bg-blue-600">Message</button>
    //          </div>
    //          <h3 class="text-green-400 font-bold pl-3">Recommend you</h3>
    //          <div class="p-3 flex justify-between">
    //              <div class="flex flex-col items-center">
    //                  <span class="h-16 w-16 rounded-full overflow-hidden flex text-white"><img class="object-cover" src="https://imgur.com/jLpbfDB.jpg"/></span>
    //                  <p class="text-green-400 font-medium text-xs mt-1">Add<i class="fa fa-plus ml-1"></i></p>
    //              </div>
    //              <div class="flex flex-col items-center">
    //                  <span class="h-16 w-16 rounded-full overflow-hidden flex "><img class="object-cover" src="https://imgur.com/NLPBWWQ.jpg"/></span>
    //                  <p class="text-green-400 font-medium text-xs mt-1">Add<i class="fa fa-plus ml-1"></i></p>
    //              </div>
    //              <div class="flex flex-col items-center">
    //                  <span class="h-16 w-16 rounded-full overflow-hidden flex "><img class="object-cover" src="https://imgur.com/ZuCMfzd.jpg"/></span>
    //                  <p class="text-green-400 font-medium text-xs mt-1">Add<i class="fa fa-plus ml-1"></i></p>
    //              </div>
    //              <div class="flex flex-col items-center">
    //                   <span class="h-16 w-16 rounded-full overflow-hidden flex "><img class="object-cover" src="https://imgur.com/3Qb30oE.jpg"/></span>
    //                  <p class="text-green-400 font-medium text-xs mt-1">Add<i class="fa fa-plus ml-1"></i></p>
    //              </div>
    //          </div>
    //     </div>
    // </div>

    <div className="py-12 h-screen ">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-md">
        <div className="md:flex">
          <div className="w-full p-2 py-10">
            <div className="flex justify-center">
              <div className="relative">
                <img src={profil} className="rounded-full" width="80" height="80" alt=''/>
                <span className="absolute border-white border-4 h-5 w-5 top-12 left-16 bg-green-700 rounded-full"></span>
              </div>
            </div>

            <div className="flex flex-col text-center mt-3 mb-4">
              <span className="text-2xl font-medium">{name}</span>
              <span className="text-md text-gray-400">@{category}</span>
            </div>

            <p className="px-16 text-center text-md text-gray-800">
              Je suis un bricoleur, j'ai une grande expérience dans le domaine
              de/d'
              <p className="text-blue-800 text-md font-bold" >
                #{category}{" "}
              </p>
              , pour travaux, renseignez-vous moi dans votre message.
            </p>

            <div className="px-16 mt-3 text-center">
              <span className="bg-gray-100 h-5 p-1 px-3 rounded cursor-pointer hover:shadow hover:bg-gray-200">
                #{category}
              </span>
            </div>

            <div className="px-14 mt-5">
              <button className="h-12 bg-gray-200 w-full text-black text-md rounded hover:shadow hover:bg-gray-300 hover:text-gray-900 border-none mb-2">
                Message
              </button>

              <button
                className="h-12 w-full text-white text-md rounded "
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              >
                {hover ? contact : "Appeler"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;