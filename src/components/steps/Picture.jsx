import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  
} from "firebase/storage";
import { storage } from "../../firebase";
import { v4 } from "uuid";
import { useStepperContext } from "../../contexts/StepperContext";

export default function Payment() {
  const { userData, setUserData } = useStepperContext();

  //up load images to firebase
   const [imageUpload, setImageUpload] = useState(null);
   const [imageUrls, setImageUrls] = useState([]);

   const imagesListRef = ref(storage, "images/");
   const uploadFile = () => {
     if (imageUpload == null) return;
     const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
     uploadBytes(imageRef, imageUpload).then((snapshot) => {
       getDownloadURL(snapshot.ref).then((url) => {
         setImageUrls((prev) => [...prev, url]);
         setUserData({ ...userData, images:url });
       });
     });
   };

   useEffect(() => {
     listAll(imagesListRef).then((response) => {
       response.items.forEach((item) => {
         getDownloadURL(item).then((url) => {
           setImageUrls((prev) => [...prev, url]);
         });
       });
     });
   }, []);

 

  return (
    <div className="flex flex-col">
      <h1 className="font-semibold text-3xl mb-6">
        Souhaitez-vous ajouter des photos ? (optionnel)
      </h1>
      <div className="flex ">
        <div className="w-full mx-2 flex-1">
          <div className="flex justify-center items-center w-full">
            <label
              for="dropzone-file"
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
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
              <button className="px-2 py-2 bg-gray-700 border-gray-800 hover:border-gray-900 hover:text-gray-700" onClick={uploadFile}> Upload Image</button>
            </div>
            <div className="">
              <img
                className=""
                width="300"
                height="300"
                src={userData["images"]}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
