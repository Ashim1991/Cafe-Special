import React from "react";
import "./Navbar.css";
import { FaInstagram, FaTwitterSquare, FaLinkedin} from "react-icons/fa";
import {AiOutlineMail, AiOutlineFacebook,AiOutlineLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import {FiTwitter} from "react-icons/fi";
import {SiQuora, SiGmail} from "react-icons/si";


export default function Top() {
  return (
    <nav class="navtop navbar-expand-lg ">
    <div class="container-fluid">
    <div className="email"><h4> <AiOutlineMail/> info@bistaracafe.com.np</h4></div>
    
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
     
       
      <div className="social">
        <a href="#"><i class="icon"><AiOutlineFacebook/></i></a>
        <a href="#"><i class="icon"><FaInstagram/></i></a>
        <a href="#"><i class="icon"><FiTwitter/></i></a>
        <a href="#"><i class="icon"><AiOutlineLinkedin/></i></a>
        <a href="#"><i class="icon"><AiOutlineWhatsApp/></i></a>
        <a href="#"><i class="icon"><SiGmail/></i></a>
        <a href="#"><i class="icon"><SiQuora/></i></a>
      </div>
         
     
    </div>
  </nav>
  );
}
