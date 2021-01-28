import React from "react";

//
import StyledContact from "./StyledContact";
import PDF from "../../../../assets/documents/BrianReismanResume.pdf";
import Icons from "../Icons/Icons";

const Contact = (props) => {
  const btnClickHandler = (e) => {
    e.preventDefault();
  };

  return (
    <StyledContact>
      <div className="topContainer">
        <p>
          Looking for a {" "}
          <a href={PDF} target="_blank" rel="noreferrer">
            resume
          </a>
          ?
        </p>
        <div>
          <p className="inline">More digital proof I exist?</p>
          <span className="icons">
            <Icons />
          </span>
        </div>
      </div>

      <form action="MAILTO:'brianreisman@protonmail.com'">
        <p className="centerText">For anything else 👇</p>
        <label htmlFor="name">
          {/* {"Name"} */}
          <input type="text" id="name" placeholder="name" />
        </label>
        <label htmlFor="email">
          {/* {"Email"} */}
          <input type="text" id="email" placeholder="email" />
        </label>
        <label htmlFor="message">
          {/* {"Message"} */}
          {/* <input type="textarea" id="message" /> */}
          <textarea
            id="message"
            placeholder="Message written in verse will be replied to first."
            cols="80" rows="8"
          />
        </label>
        <button onClick={btnClickHandler}>Send it! (You Won't)</button>
      </form>
    </StyledContact>
  );
};

export default Contact;
