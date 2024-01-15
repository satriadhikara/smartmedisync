"use client";
import Image from "next/image";
import googleLogo from "../../public/google.png";
import logo from "../../public/Group.png";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { UserAuth } from "../context/AuthContext";
import React, { useState } from "react";
import { redirect } from "next/navigation";

const Login = () => {
  const { user, googleSignIn, emailSignIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await emailSignIn(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  if (user) {
    redirect("/");
  } else {
    return (
      <main className="bg-cover bg-center bg-no-repeat h-screen bg-gradient-to-b from-rose-700 to-red-500 flex justify-center">
        <div className="sm:container mx-auto flex flex-col items-center overflow-hidden gap-1.5 w-full max-w-sm">
          <Image src={logo} alt="logo" className="mx-auto mt-20 mb-16" />
          <form className="grid" onSubmit={handleFormSubmit}>
            <Input
              label={"Email"}
              type={"email"}
              value={email}
              onchange={handleEmailChange}
            />
            <span className="mb-3"></span>
            <Input
              label={"Password"}
              type={"password"}
              value={password}
              onchange={handlePasswordChange}
            />
            <div className="text-right h-fit mb-4">
              <a
                href=""
                className="text-white font-light text-xs hover:underline text-[11px] inline-block"
              >
                Forgot password?
              </a>
            </div>
            <Button value={"Login"} type={"submit"} />
          </form>
          <div className="flex items-center justify-center w-72 my-3">
            <span className="border border-white w-full"></span>
            <p className="inline text-white text-xs mx-2">or</p>
            <span className="border border-white w-full"></span>
          </div>
          <Button
            value={"Continue with Google"}
            icon={googleLogo}
            onclick={handleGoogleSignIn}
          />
        </div>
      </main>
    );
  }
};

export default Login;
