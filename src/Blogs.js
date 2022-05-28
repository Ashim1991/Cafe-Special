import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Blogs() {
  return (
    <div className="seller text-muted">
    <p>we write too</p>
    <h1>OUR BLOGS</h1>
    <div className="cards">
    
      <div className="card">
        <div className="card-image">
          <img
            src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9tb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500"
            alt=""
          />
          <h1> SEASONAL OFFERS</h1>
          <p>Spring is here and so is the time for celebrations (with safety precautions of course). Bricks now have a wide range of offers...</p>
        </div>
      </div>
      <div className="card">
        <div className="card-image">
          <img
            src="https://images.unsplash.com/photo-1593246049226-ded77bf90326?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500"
            alt=""
          />
          <h1>Bistara Pizza</h1>
          <p>Spring is here and so is the time for celebrations (with safety precautions of course). Bricks now have a wide range of offers...</p>
        </div>
      </div>
      <div className="card">
        <div className="card-image">
          <img
            src="https://images.unsplash.com/photo-1628410040883-c412c8d9a0f9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW9tb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500"
            alt=""
          />
          <h1>GOODBYE LOCKDOWN CRAVINGS.</h1>
          <p>It’s already been more than two months of lockdown and while we are all missing to be back on the road....</p>
        </div>
      </div>
    </div>
    <div className="space">
    <Link to="/Menu/">
      <button className="button">Read More</button>
      </Link>
      </div>
    </div>
  );
}
