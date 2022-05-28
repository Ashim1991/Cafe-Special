import React from "react";
import "./Navbar.css";
import {IoIosCafe} from "react-icons/io";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg  bg-dark">
      <div class="container-fluid">
      <Link class="navbar-brand" to="#"><span> <IoIosCafe/></span> BISTARA CAFE</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span class="navbar-toggler-icon"></span> */}
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-3 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link " to="/">
                HOME
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Menu/">
               OUR MENU
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="#">
                SPECIAL OFFERS
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#">
                GALLERY
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Reservation/">
                RESERVATION
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/signup">
                CONTACT US
              </Link>
            </li>
         
        
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2 bg-dark text-light"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn  " type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
