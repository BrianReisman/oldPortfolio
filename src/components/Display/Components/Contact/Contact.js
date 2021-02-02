import React from "react";
import { motion } from "framer-motion";

//
import StyledContact from "./StyledContact";
import PDF from "../../../../assets/documents/BrianReismanResume.pdf";
import Icons from "../Icons/Icons";
import {
  pageVariants,
  pageTransition,
  pageStyle,
} from "../../../../styles/animation";

const Contact = (props) => {
  const btnClickHandler = (e) => {
    e.preventDefault();
    alert(
      "I would've clicked the button out of curiosity too! Feel free to contact me directly at BrianReisman@ProtonMail.com"
    );
  };

  return (
    <StyledContact>
      <motion.div
        className="motion"
        exit="out"
        animate="in"
        initial="initial"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className="topContainer">
          <p>
            Looking for a{" "}
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
              placeholder="Messages written in verse will be replied to first."
              cols="80"
              rows="8"
            />
          </label>
          <button onClick={btnClickHandler}>
            This button doesn't work yet! (But you can still click me)
          </button>
          {/* <button onClick={btnClickHandler}>Send it! (You Won't)</button> */}
        </form>
      </motion.div>
    </StyledContact>
  );
};

export default Contact;
