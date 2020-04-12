import React from "react";
import NavLink from "./NavLink";
import NavHorizontalSeparator from "./NavHorizontalSeparator";
import HeaderContext from "../HeaderContext";
import { useContext } from "react";

const NavList = () => {
  const { auth, isOpen } = useContext(HeaderContext);

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
      {auth && <NavLink to="/signout" text="Me déconnecter" />}
    </div>
  );
};

export default NavList;
