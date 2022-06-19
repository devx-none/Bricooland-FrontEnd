import React, { useEffect, useState } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../../firebase";
import { v4 } from "uuid";
import api from "../../api/axios";

const Achievements = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [userImages, setUserImages] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        setUserImages(url);
      });
    });
  };
  //  useEffect(() => {
  //    listAll(imagesListRef).then((response) => {
  //      response.items.forEach((item) => {
  //        getDownloadURL(item).then((url) => {
  //          setImageUrls((prev) => [...prev, url]);
  //        });
  //      });
  //    });
  //  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const data = {
      image: userImages,
    };
    try {
      const response = await api.patch("/api/hanyman", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" h-screen bg-white flex flex-col">
        <div className=" pb-20">
          <h1 className="text-3xl  border-b-4  border-sky-500">
            Mes Réalisations
          </h1>
        </div>
        <p className="text-xl  border-sky-500 text-center pb-6">
          Vous pouvez partager jusqu'à 10 photos de réalisations et prestations
          au format jpg et jpeg{" "}
        </p>
        <div className="flex ">
          <div className="w-full mx-2 flex-1">
            <div className="flex justify-center items-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col justify-center items-center pt-5 pb-6">
                  <svg
                    className="mb-3 w-10 h-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                  }}
                  multiple
                />
              </label>
            </div>
            <div className="flex flex-col justify-center items-center w-full my-5 ">
              <div className="py-5">
                <button
                  className="px-2 py-2 bg-gray-700 border-gray-800 hover:border-gray-900 hover:text-gray-700"
                  onClick={uploadFile}
                >
                  {" "}
                  Upload Image
                </button>
              </div>
              {userImages && (
                <div className="py-2">
                  <img
                    className=""
                    width="300"
                    height="300"
                    src={userImages}
                    alt=""
                  />
                </div>
              )}
              <div className="">
                <button
                  className="h-10 px-5 text-gray-200 bg-gray-900 transition-colors duration-150 border border-gray-700 rounded-lg focus:shadow-outline hover:bg-white hover:text-gray-800"
                  onClick={handleSubmit}
                >
                  Modifier
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;
