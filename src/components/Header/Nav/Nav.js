import React from "react";
import NavLink from "./NavLink";
import NavHorizontalSeparator from "./NavHorizontalSeparator";

const Nav = (props) => {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return (
      <div className="mt-16 flex flex-col items-center">
        <NavLink to="/vision" text="Notre vision" />
        <NavLink to="/contact" text="Contact" />
        <NavLink to="/faq" text="FAQ" />
        <NavHorizontalSeparator />
        <NavLink to="/signout" text="Me déconnecter" />
      </div>
    );
  }
  return (
    <div className="mt-16 flex flex-col items-center">
      <NavLink to="/signin" text="Me connecter" />
      <NavHorizontalSeparator />
      <NavLink to="/vision" text="Notre vision" />
      <NavLink to="/contact" text="Contact" />
      <NavLink to="/faq" text="FAQ" />
    </div>
  );
};

export default Nav;
