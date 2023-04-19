import React, { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header>
      <nav className="flex justify-between bg-base-200 navbar">
        <Link to="/home">Taskbored</Link>
        <div>
          <button className="btn mr-4">
            <Link to="auth/signup">Signup</Link>
          </button>
          <button className="btn">
            <Link to="auth/login">Login</Link>
          </button>
        </div>
      </nav>
    </header>
  );
};
