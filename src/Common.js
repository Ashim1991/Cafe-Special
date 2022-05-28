import React from "react";
import './User.css';

export default function Common(props) {
  return (
    <div>
      <div class="card " >
        <img src={props.imgsrc} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">
            {props.description}
          </p>
          <a href={props.visit} class="btn btn-primary">
            {props.btnname}
          </a>
        </div>
      </div>
    </div>
  );
}