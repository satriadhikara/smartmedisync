"use client";
import { UserAuth } from "./context/AuthContext";
import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";

const Home = () => {
  const { user, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

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
    <main className="size-full absolute bg-gradient-to-b from-rose-700 to-red-500 flex flex-col items-center justify-center space-y-4">
      {loading ? (
        <Loading />
      ) : !user ? (
        <>
          <h1 className="text-3xl text-white font-made-regular mb-7">
            Welcome to
          </h1>
          <Loading />
          <p className="text-white text-base font-['MADE Outer Sans'] text-center mb-10 mx-5">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br></br>
            <br></br>
          </p>
          <button
            style={{ marginTop: "20px" }}
            className="w-80 h-[35px] relative cursor-pointer"
          >
            <div className="w-80 h-[35px] left-0 top-0 absolute bg-white hover:bg-rose-700 rounded-[41px] hover:text-white" />
            <div className="left-[135px] top-[8px] absolute text-center text-rose-700 text-base font-light ">
              Login
            </div>
          </button>
          <button className="w-80 h-[35px] relative cursor-pointer">
            <div className="w-80 h-[35px] left-0 top-0 absolute bg-white hover:bg-rose-700 rounded-[41px]" />
            <div className="left-[125px] top-[8px] absolute text-center text-rose-700 text-base font-light ">
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
    </main>
  );
};

export default Home;
