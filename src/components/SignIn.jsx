/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import api from "../api/axios";

const signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const data = {
      email,
      password,
    };
    try {
      const response = await api.post("/api/sessions", data);
      if (response.status === 200) {
        setIsLoggedIn(true);
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        console.log(response);
      }
    } catch (error) {
      setError(error.response.data);
      console.log(error.response.data);
    }
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col py-20">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl font-semibold text-center text-sky-500">
            S'identifier
          </h1>

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-sky-500 focus:shadow-outline"
            name="email"
            placeholder="Adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-sky-500 focus:shadow-outline"
            name="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 text-center">{error}</p>}

          <button
            type="submit"
            class="w-full text-center py-3 rounded text-white bg-sky-500 text-white hover:bg-white focus:outline-none my-1"
            onClick={handleSubmit}
          >
            Se connecter
          </button>
        </div>

        <div className="text-grey-dark mt-6">
          Create nouveau account .
          <a
            className="px-5 underline border-b border-blue text-sky-500 font-bold"
            href="/register"
          >
            Inscription
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default signin;
