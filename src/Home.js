import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  return (
    <div className="main">
    <div className="mainimg">

    </div>
      <div className="content">
        <h1>Cafe Bistara</h1>
        <h3>A multi cuisine restaurant in heart of kathmandu offering your taste buds special flavours of food in pleasant surrounding.</h3>
        
        <Link to="/Menu/"><button className="but" >
        VIEW MENU</button></Link>
      </div>
     
    </div>
  );
}

export default Home;
