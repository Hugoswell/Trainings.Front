import React from "react";
import NavLink from "./NavLink";
import NavHorizontalSeparator from "./NavHorizontalSeparator";

const NavList = (props) => {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return (
      <>
        <NavLink to="/vision" text="Notre vision" />
        <NavLink to="/contact" text="Contact" />
        <NavLink to="/faq" text="FAQ" />
        <NavHorizontalSeparator />
        <NavLink to="/signout" text="Me déconnecter" />
      </>
    );
  }
  return (
    <>
      <NavLink to="/signin" text="Me connecter" />
      <NavHorizontalSeparator />
      <NavLink to="/vision" text="Notre vision" />
      <NavLink to="/contact" text="Contact" />
      <NavLink to="/faq" text="FAQ" />
    </>
  );
};

export default NavList;
