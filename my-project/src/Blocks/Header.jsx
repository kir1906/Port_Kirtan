import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mx-5 mt-5 z-50 fixed top-0 left-0 right-0 md:h-[80px] h-[50px]">
      <div
        className={`w-full h-full flex justify-between items-center p-5 relative bg-white ${
          isMenuOpen
            ? "rounded-t-xl border-x-[1px] border-t-[1px] border-[#E5E7EB]"
            : "border-[1px] border-[#E5E7EB] rounded-xl"
        }`}
      >
        <p className="lg:text-3xl md:text-2xl lg:w-[10%] md:w-[21%] text-xl font-prompt">
          Kirtan
        </p>
        <div className="hidden md:flex lg:w-[30%] md:w-[35%] justify-between items-center">
          <Link
            to="/"
            className="text-[#828892] lg:text-xl text-lg font-light hover:text-black hover:cursor-pointer animated-underline"
          >
            Home
          </Link>
          <Link
            to="/project"
            className="text-[#828892] lg:text-xl text-lg font-light hover:text-black hover:cursor-pointer animated-underline"
          >
            Projects
          </Link>
          <Link
            to="/resume"
            className="text-[#828892] lg:text-xl text-lg font-light hover:text-black hover:cursor-pointer animated-underline"
          >
            Resume
          </Link>
        </div>
        <div className="hidden md:flex lg:w-[10%] md:w-[21%] justify-around">
          <a
            href="https://github.com/kir1906"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl bg-[#F0F0F0] p-1 rounded-md" />
          </a>
          <a
            href="https://www.linkedin.com/in/kirtan-soni1906/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl bg-[#F0F0F0] p-1 rounded-md" />
          </a>
          <a
            href="https://leetcode.com/u/kirtansoni1411/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode className="text-3xl bg-[#F0F0F0] p-1 rounded-md" />
          </a>
        </div>

        <button onClick={toggleMenu} className="md:hidden text-xl z-50">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute rounded-b-xl pt-3 w-full flex flex-col items-center bg-white border-x-[1px] border-b-[1px] border-[#E5E7EB] -z-10"
          >
            <Link
              to="/"
              className="text-[#828892] text-lg font-light hover:text-black hover:cursor-pointer my-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/project"
              className="text-[#828892] text-lg font-light hover:text-black hover:cursor-pointer my-2"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <p
              className="text-[#828892] text-lg font-light hover:text-black hover:cursor-pointer my-2"
              onClick={toggleMenu}
            >
              Resume
            </p>
            <div className="flex justify-center gap-x-5 w-full my-2">
              <a
                href="https://github.com/kir1906"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl bg-[#F0F0F0] p-1 rounded-md" />
              </a>
              <a
                href="https://www.linkedin.com/in/kirtan-soni1906/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl bg-[#F0F0F0] p-1 rounded-md" />
              </a>
              <a
                href="https://leetcode.com/u/kirtansoni1411/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLeetcode className="text-2xl bg-[#F0F0F0] p-1 rounded-md" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
