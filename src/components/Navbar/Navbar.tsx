import React from "react";
import "./Navbar.css";
import { nav as Nav } from "./nav";
const navbar = (props: any) => {
  return <Nav pathname={props.pathname} />;
};
export default navbar;
