"use client";
import Image from "next/image";
import loader from "../components/Group.png";

const Logo = () => {
    return (
        <div className="size-full absolute bg-gradient-to-b from-rose-700 to-red-500 flex flex-col items-center justify-start space-y-4">
                <div className="w-full flex items-center flex-col mt-10">
                        <Image
                                src={loader}
                                alt="SmartMediSync Logo"
                                width={280}
                                height={280}
                        />
                        <br></br>
                        <div className="h-screen w-10/12 justify-center" >
                            <form className="flex flex-col mt-10">
                                <label className="text-white">Username or Email</label>
                                <input type="text" className="p-2 rounded-lg bg-pink-900" />
                                <label className="text-white">Password</label>
                                <input type="password" className="p-2 rounded-lg bg-pink-900" />
                                <label className="text-white text-end">Forgot Password?</label>
                                <button type="submit" className="p-2 bg-white text-rose-700 rounded-full mt-5">Login</button>
                            </form>
                        </div>
                </div>
        </div>
    );
}

export default Logo;