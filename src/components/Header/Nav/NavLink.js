import React from "react";
import { Link } from "react-router-dom";

const NavLink = (props) => {
  return (
    <Link to={props.to} className="gotham-medium dark-grey text-lg mt-6">
      {props.text}
    </Link>
  );
};

export default NavLink;
