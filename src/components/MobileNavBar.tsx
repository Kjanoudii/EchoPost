import menuImg from "../icons/icons8-menu-50.png";
import React, { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import Link from "next/link";
import icon from "../icons/icons8-administrator-male-24.png";
import Image from "next/image";

function SideBar() {
  const { authState, setAuthState } = useContext(AuthContext);
  const [sidebar, setSidebar] = useState(false);

  //   const showSidebar = () => setSidebar(true);
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ username: "", id: 0, status: false });
  };

  const SidebarData = [
    {
      name: "HOME",
      href: "/",
    },
    {
      name: "CREATE POST",
      href: authState.username ? "/createpost" : "/login",
    },
    {
      name: !authState.username ? "LOGIN" : "LOGOUT",
      href: !authState.username ? "/login" : "#",
      onClick: authState.username ? handleLogout : undefined,
    },
    {
      name: !authState.username ? "REGISTER" : "",
      href: !authState.username ? "/registration" : "",
    },
  ];

  return (
    <div className="lg:hidden pl-2 pt-1 mx-auto">
      <Image
        src={menuImg}
        width={34}
        height={34}
        alt="menu icon"
        className={`cursor-pointer z-[999] p-[6px] inline lg:hidden rounded-full
           ${!sidebar ? "" : "bg-[#4e4d4d]"}`}
        onClick={() => setSidebar(true)}
      />
      <nav className={`${sidebar ? "nav-menu active" : "nav-menu"} `}>
        <ul
          className="nav-menu-items flex flex-col gap-6"
          onClick={() => setSidebar(false)}
        >
          <li className="navbar-toggle">
            <Link href="#" className="menu-bars"></Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.href} onClick={item.onClick}>
                  <span className="font-semibold text-white">{item.name}</span>
                </Link>
              </li>
            );
          })}
          {authState.username && (
            <div className=" text-gray-900 font-semibold flex ">
              <Image src={icon} alt="" />
              <h2>{authState.username}</h2>
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;