"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import icon from "../icons/icons8-administrator-male-24.png";
import Image from "next/image";
import MobileNavBar from "../components/MobileNavBar";
const NavBar = () => {
  const pathname = usePathname();

  const { authState, setAuthState } = useContext(AuthContext);
  console.log(authState);

  console.log("nav bar authenticated?", authState.status);

  return (
    <>
      <div className="lg:flex gap-2 items-center justify-evenly mt-3 hidden">
        {authState.username && (
          <div className="lg:flex-1 hidden  text-gray-900 font-semibold lg:flex justify-center items-center">
            <Image src={icon} alt="" />
            <h2
              className="
            "
            >
              {authState.username}
            </h2>
          </div>
        )}
        <div className="flex gap-2 justify-center">
          <Link
            className={`border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out 
        rounded-md py-3 flex justify-center w-36 hover:bg-gray-400 font-semibold
        hover:text-white ${pathname == "/" ? "bg-gray-400" : ""}`}
            href={"/"}
          >
            HOME
          </Link>
          <Link
            className={`border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out 
          rounded-md py-3 flex justify-center w-36 hover:bg-gray-400 font-semibold hover:text-white ${
            pathname == "/createpost" ? "bg-gray-400" : ""
          }`}
            href={authState.status ? "/createpost" : "login"}
          >
            CREATE POST
          </Link>
          {!authState.status && (
            <Link
              className={`border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out 
          rounded-md py-3 flex justify-center w-36 hover:bg-gray-400 font-semibold hover:text-white ${
            pathname == "/login" ? "bg-gray-400" : ""
          }`}
              href={"/login"}
            >
              LOGIN
            </Link>
          )}
          {!authState.status && (
            <Link
              className={`border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out 
          rounded-md py-3 flex justify-center w-36 hover:bg-gray-400 font-semibold hover:text-white ${
            pathname == "/registration" ? "bg-gray-400" : ""
          } `}
              href={"/registration"}
            >
              REGISTER
            </Link>
          )}
          {authState.status && (
            <div
              className={`border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out 
              rounded-md py-3 flex justify-center w-36 cursor-pointer hover:bg-gray-400 font-semibold hover:text-white ${
                pathname == "/login" ? "bg-gray-400" : ""
              }`}
              onClick={() => {
                localStorage.removeItem("accessToken");
                setAuthState({ username: "", id: 0, status: false });
              }}
            >
              LOGOUT
            </div>
          )}
        </div>
        {authState.username && <div className="flex-1"></div>}
      </div>
      {/* {authState.username && (
          <div className=" text-gray-900 flex flex-col  md:hidden font-semibold justify-center items-center">
            <Image src={icon} alt="" />
            <h2
              className="
            "
            >
              {authState.username}
            </h2>
          </div>
        )} */}

      <div className="lg:hidden">
        <MobileNavBar />
      </div>
    </>
  );
};

export default NavBar;
