import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Logo from "./../../static/logo.svg";

export default function Menu() {
  function navToggle() {
    var btn = document.getElementById("menuBtn");
    var nav = document.getElementById("menu");

    btn.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
  }

  return (
    <div className="menu-container flex flex-col ">
      <div className="get-no-fee w-100 bg-black text-white flex flex-row justify-center items-center py-2.5 px-16 md:px-0">
        Get no-fee trading for life when you sign up today
        <FontAwesomeIcon icon={faArrowRight} className="ml-2.5" />
      </div>
      <div className="nav-menu w-100 bg-gray-light text-black py-2.5">
        <div className="container flex justify-between items-center">
          <Link to="/">
            <img src={Logo} />
          </Link>

          <button
            id="menuBtn"
            className="hamburger block md:hidden focus:outline-none"
            type="button"
            onClick={navToggle}
          >
            <span className="hamburger__top-bun"></span>
            <span className="hamburger__bottom-bun"></span>
          </button>
          <div
            id="menu"
            className="md:flex hidden flex-col md:flex-row py-6 md:py-0 left-0 absolute md:relative w-full md:w-auto bg-gray-light"
          >
            <ul className="nav flex flex-col md:flex-row justify-center items-center gap-4 md:gap-7">
              <li>
                <Link to="/all-assets" className="font-medium">
                  All Assets
                </Link>
              </li>
              <li>
                <Link to="/stock" className="font-medium">
                  Stocks
                </Link>
              </li>
              <li>
                <Link to="/crypto" className="font-medium">
                  Crypto
                </Link>
              </li>
              <li>
                <Link to="/trade" className="font-medium">
                  Trade
                </Link>
              </li>
            </ul>
            <div className="login md:hidden flex flex-col md:flex-row justify-center items-center">
              <Link to="/" className="font-medium md:mr-6 my-4">
                Sign up
              </Link>
              <button className="btn btn-small">Get the app</button>
        </div>
            
          </div>
          <div className="login hidden md:flex flex-col md:flex-row justify-center items-center">
              <Link to="/" className="font-medium mr-6">
                Sign up
              </Link>
              <button className="btn btn-small">Get the app</button>
        </div>
        </div>
      </div>
    </div>
  );
}
