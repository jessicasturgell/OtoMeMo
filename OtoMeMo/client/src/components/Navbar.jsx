import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

function OtoNavbar() {
  return (
    <div>
      <Nav className="rose-div">
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/games">Games</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default OtoNavbar;
