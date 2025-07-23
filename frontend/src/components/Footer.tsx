import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f8ff00] text-black py-14 px-6 relative overflow-hidden">
      <div className="max-w-screen-2xl px-0 sm:px-12 mx-auto w-full flex flex-col sm:flex-row justify-between items-start gap-10 mb-10">
        {/* Left side: Logo + intro */}
        <div className="flex flex-col max-w-md">
          <Link to="/" className="block mb-4 w-fit">
            <img className="invert h-10 sm:h-11 w-auto" src={Logo} alt="Logo" />
          </Link>
          <p className="leading-relaxed text-lg md:text-xl max-w-xs">
            We're India's rising bridge between visionary brands and impactful
            creators, curating collaborations that speak, engage, and convert.
          </p>
        </div>

        {/* Right side: Connect, Socials, Links */}
        <div className="grid grid-cols-1 sm:text-right sm:grid-cols-2 md:grid-cols-3 gap-10 w-full sm:max-w-3xl">
          {/* Connect */}
          <div>
            <h2 className="font-bold uppercase sm:text-2xl text-xl mb-3">
              Connect
            </h2>
            <a
              href="mailto:shoaib@filmfluence.in"
              className="underline text-lg md:text-xl block mb-2"
            >
              shoaib@filmfluence.in
            </a>
            <a
              href="tel:+916200755320"
              className="text-lg md:text-xl underline"
            >
              +91 6200755320
            </a>
          </div>

          {/* Socials */}
          <div>
            <h2 className="font-bold sm:text-2xl text-xl uppercase mb-3">
              Socials
            </h2>
            <ul>
              <li>
                <a href="https://www.instagram.com/filmfluenceindia" target="_blank" className="text-lg md:text-xl underline block mb-2">
                  instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-lg md:text-xl underline block mb-2">
                  facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-lg md:text-xl underline block">
                  X
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h2 className="font-bold sm:text-2xl text-xl uppercase mb-3">
              Links
            </h2>
            <ul>
              <li>
                <a href="#" className="text-lg md:text-xl underline block mb-2">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-lg md:text-xl underline block mb-2">
                  Join Us
                </a>
              </li>
              <li>
                <a href="#" className="text-lg md:text-xl underline block">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="max-w-screen-2xl px-12 mx-auto w-full">
  <hr className="border-t border-black w-full mb-6" />
  <div className="flex flex-col sm:flex-row justify-between items-center text-base sm:text-xl">
    <p className="mb-2 sm:mb-0">
      Developed by{" "}
      <a className="underline-offset-2 underline">Fahad x Aquib</a>
    </p>
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="underline underline-offset-2"
    >
      back to top
    </button>
  </div>
</div>
    </footer>
  );
};

export default Footer;
