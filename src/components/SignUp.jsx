/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      alert("les mots de passe ne correspondent pas");
      return;
    }
    const data = {
      email,
      password,
      firstName,
      lastName,
      phone,
      
    };
    
    try {
      const response = await api.post("/api/customer", data);
      console.log(response.data);
      navigate("/login");

    }
    catch (error) {
      setError(error.response.data);
      console.log(error);
    }
  }

  useEffect(() => {
    setError("");
  }, [firstName, lastName, phone, email, password, passwordConfirm]);
  
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col py-20">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl font-semibold text-center text-sky-500">
            S'inscrire
          </h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-sky-500 focus:shadow-outline"
            name="firstName"
            placeholder="prénom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-sky-500 focus:shadow-outline"
            name="lastName"
            placeholder="Nom"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-sky-500 focus:shadow-outline"
            name="phone"
            placeholder="mobile"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

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
          <input
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-sky-500 focus:shadow-outline"
            name="confirm_password"
            placeholder="Confirmez le mot de passe"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          {error && <p className="text-red-500 text-center">{error}</p>}

          <button
            type="submit"
            class="w-full text-center py-3 rounded text-white bg-sky-500 text-white hover:bg-white focus:outline-none my-1"
            onClick={handleSubmit}
          >
            Inscription
          </button>

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="www.google.com"
            >
              Terms of Service
            </a>{" "}
            and
            <a
              className="underline border-b border-grey-dark text-grey-dark"
              href="/"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="text-grey-dark mt-6">
          Vous avez déjà un compte?
          <div
            className="px-5 underline border-b border-blue text-sky-500 font-bold cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Se connecter
          </div>
          .
        </div>
      </div>
    </div>
  );
};

export default signup;
