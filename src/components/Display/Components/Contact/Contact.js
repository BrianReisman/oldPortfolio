import React, { useState } from "react";
import { motion } from "framer-motion";

//
import StyledContact from "./StyledContact";
import PDF from "../../../../assets/documents/BrianReismanResume.pdf";
import Icons from "../Icons/Icons";
import { pageVariants, pageTransition } from "../../../../animation/animation";

const initFormState = { name: "", email: "", message: "" };

const Contact = (props) => {
  const [form, setForm] = useState(initFormState);
  console.log(form);

  const btnClickHandler = (e) => {
    e.preventDefault();
    alert(
      "I would've clicked the button out of curiosity too! We have so much in common. I have a feeling we will get along swimmingly! Feel free to contact me directly at BrianReisman@ProtonMail.com"
    );
  };

  const changeHandler = (e) => {
    setForm({...form, [e.target.id]: e.target.value});
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

          <div className="iconRow">
            <p className="inline">More digital proof I exist?</p>
            <Icons />
          </div>

          <p className="centerText">
            For anything else feel free to <span className="blueMic">🎙</span>💬
            ask me 👇
          </p>
        </div>

        <form action="MAILTO:'brianreisman@protonmail.com'">
          <label htmlFor="name">
            {/* {"Name"} */}
            <input
              onChange={changeHandler}
              type="text"
              id="name"
              placeholder="name"
              value={form.name}
            />
          </label>
          <label htmlFor="email">
            {/* {"Email"} */}
            <input
              onChange={changeHandler}
              type="text"
              id="email"
              placeholder="email"
              value={form.email}
            />
          </label>
          <label htmlFor="message">
            {/* {"Message"} */}
            <textarea
              onChange={changeHandler}
              id="message"
              placeholder="Messages written in verse will be replied to first."
              value={form.message}
            />
          </label>
          <button onClick={btnClickHandler}>
            This button doesn't work yet! (But you can still click me)
          </button>
          {/* <button onClick={btnClickHandler}>Send it! (You Won't)</button> */}
        </form>
        <code>Built by Brian. Brought to you in part by electricity. 2021</code>
      </motion.div>
    </StyledContact>
  );
};

export default Contact;
