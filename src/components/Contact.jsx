import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <section id="contact" className="bg-black px-2 text-pink-500 md:p-5 my-5">
        <h1 className="text-white font-extrabold text-2xl my-3">Contact</h1>
        <Link
          to="https://www.instagram.com/sriram_3104/"
          target="_blank"
          className={linkStyle}
        >
          <FaInstagram /> <p className="ml-2">sriram_3104</p>
        </Link>
        <Link
          to="https://github.com/sriramyrsk"
          target="_blank"
          className={linkStyle}
        >
          {" "}
          <FaGithub /> <p className="ml-2">Github</p>{" "}
        </Link>
        <Link
          to="https://www.linkedin.com/in/sriram-r-6268a3290/"
          target="_blank"
          className={linkStyle}
        >
          {" "}
          <FaLinkedin /> <p className="ml-2">Linkedin</p>
        </Link>
        <Link
          to="mailto:sriramyrsk@gmail.com"
          target="_blank"
          className={linkStyle}
        >
          {" "}
          <FaEnvelope /> <p className="ml-2">sriramyrsk@gmail.com</p>{" "}
        </Link>
      </section>
    </>
  );
};

export default Contact;
