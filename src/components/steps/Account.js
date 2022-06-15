import { useStepperContext } from "../../contexts/StepperContext";

export default function Account() {
  const { userData, setUserData } = useStepperContext();

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
          <label for="states" className="sr-only">
            Choisissez un ville
          </label>
          <select
            id="states"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
            value={userData["ville"] || ""}
            name="ville"

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
            value={userData["categorie"] || ""}
            name="categorie"
            
          >
            <option selected>Choisissez un catégorie</option>
            <option value="safi">Safi</option>
            <option value="casablanca">Casablanca</option>
            <option value="marrakech">Marrakech</option>
            <option value="casablanca">Casablanca</option>
            <option value="agadir">Agadir</option>
            <option value="rabat">Rabat</option>
          </select>
        </div>
      </div>
    </div>
  );
}
