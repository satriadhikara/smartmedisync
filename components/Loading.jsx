import React from "react";
import Image from "next/image";
import loader from "../public/Group.png";

const Spinner = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <Image src={loader} alt="logo" />
      <p className=" text-2xl text-center text-pink-900 mb-5">
        Your Companion for Health and Wellness.
      </p>
    </div>
  );
};

export default Spinner;
