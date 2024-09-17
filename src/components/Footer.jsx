import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Footer = () => {
  const linkStyle =
    "mx-2 flex flex-row items-center my-2 hover:text-yellow-200";
  const handleMailClick = () => {
    const mailtoLink = "mailto:sriramyrsk@gmail.com";
    window.location.href = mailtoLink;
  };
  return (
    <footer className="bg-black p-3 ">
      <ul className="flex flex-col text-white items-center">
        <li>
          <HashLink
            to="/about#about"
            className="pb-3 mb-3 hover:text-yellow-200"
          >
            About
          </HashLink>
        </li>
        <li>
          <HashLink to="/about#contact" className="hover:text-yellow-200">
            Contact
          </HashLink>{" "}
        </li>
        <li>
          <div className="flex flex-row items-center">
            <Link
              to="https://www.instagram.com/sriram_3104/"
              target="_blank"
              className={linkStyle}
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://github.com/sriramyrsk"
              target="_blank"
              className={linkStyle}
            >
              {" "}
              <FaGithub />{" "}
            </Link>
            <Link
              to="https://www.linkedin.com/in/sriram-r-6268a3290/"
              target="_blank"
              className={linkStyle}
            >
              {" "}
              <FaLinkedin />{" "}
            </Link>
            <Link
              to=""
              target="_blank"
              onClick={handleMailClick}
              className={linkStyle}
            >
              {" "}
              <FaEnvelope />{" "}
            </Link>
          </div>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
