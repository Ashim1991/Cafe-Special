import React from "react";
import "./Home.css";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-content text-muted">
          <div className="left">
            <h1>Bistara Cafe</h1>
            <p>
              {" "}
              Eating out at a restaurant of your choice is always an enjoyable
              experience. Make it a memorable one by dinning in with us in an
              ambience that boasts of a 100-year old history located between
              Thapathali Bridge and Pulchowk, where the Hotel Himalaya is
              situated.
            </p>
            <h2>
              <span>Location:</span> Thamel, kathmandu
            </h2>
            <h2>
              <span>Phone:</span> +977-984-988-988
            </h2>
          </div>
        </div>
      </div>
      <div className="end text-muted">
          <h1>2018-2023 | All Right Reserved | Bistara Cafe</h1>
      </div>
    </div>
  );
}
