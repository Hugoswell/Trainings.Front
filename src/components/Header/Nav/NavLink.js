import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const NavLink = (props) => {
  return (
    <Router>
      <Link to={props.to} className="gotham-medium dark-grey text-lg mt-6">
        {props.text}
      </Link>
    </Router>
  );
};

export default NavLink;
