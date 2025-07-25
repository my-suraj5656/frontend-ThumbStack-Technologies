import React from "react";
import "./Section2.css";
import { IoIosArrowRoundForward } from "react-icons/io";

const Section2 = () => {
  return (
    <div className="section2-container">
      <div className="upper-heading">
        <h1>Our products</h1>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="upper-card">
            <h1>Run safely</h1>
            <h1>Apura lassS.</h1>
            <p>
              Apura IaaS is our service allowing customers to develop
              applications on our secured data ownership focused platform. 
            </p>
          </div>
          <div className="lower-first-card">
            <button className="btn">
              Read more
              <IoIosArrowRoundForward
                style={{ width: "24px", height: "24px" }}
              />{" "}
            </button>
            <button>Book a demo</button>
          </div>
        </div>
        <div className="card card2">
          <div className="upper-card">
            <h1>Work privately.</h1>
            <h1>Apura Workspace.</h1>
            <p>
              Apura Workspace is our alternative for Google workspace or
              Microsoft Teams. Giving the tools to effectively communicate with
              your organization without compromising on security and privacy. 
            </p>
          </div>
          <div className="lower-card">
            <button className="btn btn2">
              Read more
              <IoIosArrowRoundForward
                style={{ width: "24px", height: "24px" }}
              />{" "}
            </button>
          </div>
        </div>
        <div className="card card2">
          <div className="upper-card">
            <h1>Share confidently.</h1>
            <h1>Apura Socials.</h1>
            <p>
              Is our introduction of social media applications that are
              essential to us these days.
            </p>
          </div>
          <div className="lower-card">
            <button className="btn btn2">
              Read more
              <IoIosArrowRoundForward
                style={{ width: "24px", height: "24px" }}
              />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
