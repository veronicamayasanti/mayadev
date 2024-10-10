import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../assets/mayalogo.png";
import {  FaSquareXTwitter } from "react-icons/fa6";
const NavBar = () => {
  return (
    <div className="flex item-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img
            src={logo}
            className="mx-2"
            width={50}
            height={33}
            alt="mayadev"
          />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/veronica-maya-santi-195440237/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/veronicamayasanti"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="FaGithub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/veronica-maya-santi-195440237/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="FaInstagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/veronica-maya-santi-195440237/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
