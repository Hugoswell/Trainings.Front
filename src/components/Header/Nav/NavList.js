import React from "react";
import NavLink from "./NavLink";
import NavHorizontalSeparator from "./NavHorizontalSeparator";
import HeaderContext from "../HeaderContext";
import { useContext } from "react";
import Cookies from "js-cookie";

const NavList = () => {
  const { auth, setAuth, isOpen, handleUpdate } = useContext(HeaderContext);
  const handleDisconnect = () => {
    Cookies.remove("JWT");
    setAuth(false);
    handleUpdate();
  };

  return (
    <div
      className={`${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-all duration-300 ease-out flex flex-col items-center`}
    >
      {!auth && <NavLink to="/signin" text="Me connecter" />}
      {!auth && <NavHorizontalSeparator />}
      <NavLink to="/vision" text="Notre vision" />
      <NavLink to="/contact" text="Contact" />
      <NavLink to="/faq" text="FAQ" />
      {auth && <NavHorizontalSeparator />}
      {auth && (
        <button
          className="gotham-medium dark-grey text-lg mt-6"
          onClick={handleDisconnect}
        >
          Me déconnecter
        </button>
      )}
    </div>
  );
};

export default NavList;
