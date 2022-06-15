/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import api from "../../api/axios";

const signup = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ciy, setCiy] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      alert("les mots de passe ne correspondent pas");
      return;
    }
    const data = {
      firstName,
      lastName,
      phone,
      category,
      ciy,
      email,
      password,
    };
    try {
      const response = await api.post("/api/handyman", data);
      console.log(response);
    } catch (error) {
      setError(error.response.data);
      console.log(error);
    }
  };

  const categories = async () => {
    try {
      const response = await api.get("/api/categories");
      setCategory(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    categories();
  }, [category]);

  return (
    //signup using tailwindcss
    <div className="bg-grey-lighter min-h-screen flex flex-col py-20  ">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl font-semibold text-center text-sky-500">
            S'inscrire
          </h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-sky-500 focus:shadow-outline"
            name="fisrtName"
            placeholder="prénom"
            {...register("fisrtName", {
              required: "le champ prénom est obligatoire",
            })}
            error={errors?.firstName?.message}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-sky-500 focus:shadow-outline"
            name="lastName"
            {...register("lastName", {
              required: "le champ nom est obligatoire",
            })}
            error={errors?.lastName?.message}
            placeholder="Nom"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <select
            id="categories"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            // onChange={handleChange}
            name="category"
            {...register("category", {
              required: "le champ catégorie est obligatoire",
            })}
            error={errors?.category?.message}
            value={category || ""}
            onChange={(e) => setCategory(e.target.value)}

            // value={userData["categorie"] || ""}
          >
            <option selected>Choisir une catégorie</option>
            {category &&
              category.map((item, index) => (
                <>
                  <option value={item._id} key={index}>
                    {item.category}
                  </option>
                </>
              ))}
          </select>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-sky-500 focus:shadow-outline"
            name="mobile"
            value={phone}
            {...register("mobile", {
              required: "le champ mobile est obligatoire",
            })}
            onChange={(e) => setPhone(e.target.value)}
            error={errors?.mobile?.message}
            placeholder="mobile"
          />
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-sky-500 focus:shadow-outline"
            name="city"
            placeholder="Ville"
            {...register("city", {
              required: "le champ ville est obligatoire",
            })}
            error={errors?.city?.message}
            value={ciy}
            onChange={(e) => setCiy(e.target.value)}
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-sky-500 focus:shadow-outline"
            name="email"
            placeholder="Adresse e-mail"
            {...register("email", {
              required: "le champ email est obligatoire",
            })}
            error={errors?.email?.message}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-sky-500 focus:shadow-outline"
            name="password"
            placeholder="Mot de passe"
            {...register("password", {
              required: "le champ mot de passe est obligatoire",
            })}
            error={errors?.password?.message}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-sky-500 focus:shadow-outline"
            name="passwordConfirm"
            placeholder="Confirmer le mot de passe"
            {...register("passwordConfirm", {
              required: "le champ mot de passe est obligatoire",
            })}
            error={errors?.passwordConfirm?.message}
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          {error && <p className="text-red-500 text-center">{error}</p>}

          <button
            type="submit"
            className="w-full text-center py-3 rounded text-white bg-sky-500 text-white hover:bg-white focus:outline-none my-1"
            onClick={handleSubmit}
          >
            Inscription
          </button>

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="wwww.google.com"
            >
              Terms of Service
            </a>{" "}
            and
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="/"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="text-grey-dark mt-6">
          Vous avez déjà un compte ??
          <a
            className="px-5 underline border-b border-sky-600 text-sky-500 font-bold"
            href="/login"
          >
            Se connecter
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default signup;
