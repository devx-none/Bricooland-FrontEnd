import { useState, useEffect } from "react";
import { useStepperContext } from "../../contexts/StepperContext";
import api from "../../api/axios";

const Account = () => {
  const { userData, setUserData } = useStepperContext();
  const [category, setCategory ] = useState("");

  useEffect(() => {
    const categories = async () => {
      try {
        await api.get("/api/categories").then((res) => {
          setCategory(res.data);
          console.log(res.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    categories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col ">
      <div className="mx-2 w-full flex-1">
        <div className="my-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Ville
        </div>
        <div className="flex">
          <label htmlFor="states" className="sr-only">
            Choisissez un ville
          </label>
          <select
            id="states"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
            value={userData["city"] || ""}
            name="city"
          >
            <option selected>Choisissez un ville</option>
            <option value="safi">Safi</option>
            <option value="casablanca">Casablanca</option>
            <option value="marrakech">Marrakech</option>
            <option value="casablanca">Casablanca</option>
            <option value="agadir">Agadir</option>
            <option value="rabat">Rabat</option>
          </select>
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="my-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Catégorie
        </div>

        <div className="flex">
          <select
            id="states"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
            value={userData["category"] || ""}
            name="category"
          >
            <option selected>Choisissez un catégorie</option>
            {category &&
              category.map((item, index) => (
                <>
                  <option value={item._id} key={index}>
                    {item.category}
                  </option>
                </>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Account;
