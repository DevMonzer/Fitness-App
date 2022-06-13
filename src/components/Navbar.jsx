import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

export default class Navbar extends Component {
  render() {
    return (
      <Stack>
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "48px", height: "48px", margin: "0 20px" }}
          />
        </Link>
        <Stack>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#3A1212",
              borderBottom: "3px solid #FF2625",
            }}
          >
            Home
          </Link>
          <a
            href="#exercises"
            style={{ textDecoration: "none", color: "#3A1212" }}
          >
            Exercises
          </a>
        </Stack>
      </Stack>
    );
  }
}
