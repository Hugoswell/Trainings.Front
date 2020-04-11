import React from "react";
import NavLink from "./NavLink";
import NavHorizontalSeparator from "./NavHorizontalSeparator";
import HeaderContext from "../HeaderContext";
import { useContext } from "react";

const NavList = () => {
  const { auth, isOpen } = useContext(HeaderContext);

  if (auth) {
    return (
      <div
        className={`${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-all duration-300 ease-out flex flex-col items-center`}
      >
        <NavLink to="/vision" text="Notre vision" />
        <NavLink to="/contact" text="Contact" />
        <NavLink to="/faq" text="FAQ" />
        <NavHorizontalSeparator />
        <NavLink to="/signout" text="Me déconnecter" />
      </div>
    );
  }
  return (
    <div
      className={`${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-all duration-300 ease-out flex flex-col items-center`}
    >
      <NavLink to="/signin" text="Me connecter" />
      <NavHorizontalSeparator />
      <NavLink to="/vision" text="Notre vision" />
      <NavLink to="/contact" text="Contact" />
      <NavLink to="/faq" text="FAQ" />
    </div>
  );
};

export default NavList;
