/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from '../hooks/useAuth'

const signin = () => {
  const { setAuth,persist, setPersist } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const errRef = useRef();

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);
  

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const data = {
      email,
      password,
    };
    try {
      const response = await api.post("/api/sessions", data);
      
        setIsLoggedIn(true);
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      const role = response.data.user.role;
        if (role === "customer") {
          navigate("/");
        }
        if (role === "handyman") {
          navigate("/pro/dashboard");
        }
        setEmail("");
        setPassword("");
       

      
      
    } catch (error) {
     if (error.response.status === 401) {
        setErrMsg("Email ou mot de passe incorrect");
      } else if (error.response.status === 400) {
        setErrMsg("Unautorized");
      } else {
        setErrMsg("login Failed");
      }
     
    }
  };

   const togglePersist = () => {
     setPersist((prev) => !prev);
   };

  //  useEffect(() => {
  //    localStorage.setItem("persist", persist);
  //  }, [persist]);

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
            <div className="persistCheck">
              <input
                type="checkbox"
                id="persist"
                onChange={togglePersist}
                checked={persist}
              />
              <label htmlFor="persist mr-2">Remember me</label>
            </div>
            <button
              type="submit"
              className="w-full text-center py-3 rounded text-white bg-sky-500 text-white hover:bg-white focus:outline-none my-1"
              onClick={handleSubmit}
            >
              Se connecter
            </button>
            <p
              ref={errRef}
              className="text-center text-red-600"
              aria-live="assertive"
            >
              {errMsg}
            </p>
          </div>

          <div className="text-grey-dark mt-6">
            Create nouveau account .
            <div
              className="px-5 underline border-b border-blue text-sky-500 font-bold cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Inscription
            </div>
            .
          </div>
        </div>
      
    </div>
  );
};

export default signin;
