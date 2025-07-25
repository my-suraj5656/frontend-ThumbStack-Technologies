import React from "react";
import "./Section3.css";
import StarCircle from "../StarCircle";
import { IoIosArrowRoundForward } from "react-icons/io";

const Section3 = () => {
  return (
    <div className="section3-container">
      <div className="upper">
        <div className="nest-upper">
          <p>About us</p>
          <h1>
            By Europeans,
            <br /> for Europeans
          </h1>
          <p>
            Our vision is to empower governments, <br /> organizations and
            individuals with control and independence in the online realm.
          </p>
        </div>
        <button>
          Read more about us
          <IoIosArrowRoundForward
            style={{ width: "24px", height: "24px" }}
          />{" "}
        </button>
      </div>
      <div className="lower">
        {/* <h1>Lower</h1>
        <p>This is the lower content block.</p> */}
        <StarCircle />
      </div>
    </div>
  );
};

export default Section3;
