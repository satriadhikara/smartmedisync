"use client";
import { UserAuth } from "./context/AuthContext";
import React, { useState, useEffect } from "react";
import Spinner from "./components/Spinner";

const Home = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="size-full absolute bg-gradient-to-b from-rose-700 to-red-500 flex flex-col items-center justify-center space-y-4">
      {loading ? (
        <Spinner />
      ) : !user ? (
        <>
          <h1 className="text-3xl text-white font-['MADE Outer Sans'] mb-7">
            WELCOME TO
          </h1>
          <Spinner />
          <p className="text-white text-base font-['MADE Outer Sans'] text-center mb-10 mx-5">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button
            style={{marginTop: "20px"}}
            className="w-80 h-[35px] relative cursor-pointer"
            onClick={handleSignIn}
          >
            <div className="w-80 h-[35px] left-0 top-0 absolute bg-white rounded-[41px]" />
            <div className="left-[135px] top-[8px] absolute text-center text-rose-700 text-base font-light font-['MADE Outer Sans']">
              Login
            </div>
          </button>
          <button
            className="w-80 h-[35px] relative cursor-pointer"
            onClick={handleSignIn}
          >
            <div className="w-80 h-[35px] left-0 top-0 absolute bg-white rounded-[41px]" />
            <div className="left-[125px] top-[8px] absolute text-center text-rose-700 text-base font-light font-['MADE Outer Sans']">
              Sign Up
            </div>
          </button>
        </>
      ) : (
        <div>
          <p>Welcome, {user.displayName}</p>
          <p className="cursor-pointer" onClick={handleSignOut}>
            Sign out
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
