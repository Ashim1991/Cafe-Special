import React from "react";
import { Link } from "react-router-dom";
import "./User.css";

export default function Reservation() {
  return (
    <div className="main">
      <div className="mainimg"></div>
      <div className="Reservation">
        <div className="Signup">
          <form className="formmain bg-light">
            <h1>Reservation form</h1>
            <div className="form-div">
              <div className="formbox">
                <input
                  type="text"
                  className="form-control boxone"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="formbox">
                <input
                  type="text"
                  className="form-control boxtwo"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div className="formbox">
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="form-div">
              <div className="formbox">
                <input
                  type="text"
                  className="form-control boxone"
                  placeholder="Number of people"
                  required
                />
              </div>
              <div className="formbox">
              <div className="col-xs-6">
                              <select  name="Catagory" className="form-control boxthree"
                               
                               required
                              >
                                    <option >Individual </option>
                                    <option >Family Combo </option>
                                    <option >Birthday Special</option>
                                    <option >Date Special</option>
                                    <option >Wedding Special</option>
                                    <option >Bistara Special</option>

                                </select>
                          </div>
              </div>
            </div>
            <div className="form-div">
              <div className="formbox">
                <input
                  type="number"
                  className="form-control boxone"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="formbox">
              
                <input
                  type="Date"
                  className="form-control boxtwo"
                  placeholder="Arrival Date"
                  required
                />
              </div>
            </div>
            <div className="form-div">
              <div className="formbox">
                <input
                  type="time"
                  className="form-control boxone"
                  placeholder="Arrival Time"
                  required
                />
              </div>
              <div className="formbox">
                <input
                  type="text"
                  className="form-control boxtwo"
                  placeholder="Address"
                  required
                />
              </div>
            </div>
           

            <button type="submit" className="btn">
              Reservation
            </button>

            <div className="text-center mb-2 mt-4 text-muted">
              2019-2022. All rights reserved.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
