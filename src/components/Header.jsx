import { useState, useEffect } from "react";
import ResumeButton from "./ResumeButton";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`p-5 fixed top-0 left-0 w-full z-10 ${
        isScrolled ? "bg-white" : "bg-transparent"
      } shadow-sm`}
    >
      <div className="flex justify-between items-center">
        <div>
          <img
            src={
              isScrolled
                ? "/assets/images/kdisc-logo dark.png"
                : "/assets/images/kdisc-logo.png"
            }
            alt="Kdisc Logo"
            style={{ width: "300px", height: "auto" }}
          />
        </div>
        <ul
          className={`flex gap-4 relative ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          <li>Home</li>
          <li className="relative group">
            About Us
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg text-black">
              <li className="p-2">
                <a href="aboutus.html">About Us</a>
              </li>
              <li className="p-2">
                <a href="vision.html">Vision, Mission, Objectives</a>
              </li>
              <li className="p-2">
                <a href="division.html">Division</a>
              </li>
              <li className="p-2">
                <a href="message.html">Message</a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            Projects
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg text-black">
              <li className="p-2">
                <a href="projects.html">Project Details</a>
              </li>
            </ul>
          </li>
          <ul>
            <li>RTI</li>
          </ul>
          <li className="relative group">
            Media
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg text-black">
              <li className="p-2">
                <a href="media.html">Events</a>
              </li>
              <li className="p-2">
                <a href="news.html">Gallery</a>
              </li>
              <li className="p-2">
                <a href="events.html">Testimonials</a>
              </li>
            </ul>
          </li>
          <li>Contact Us</li>
          <li>FAQ</li>
        </ul>
        {/* <button className="rounded-full bg-blue-500 text-white px-4 py-2 hover:bg-blue-600">
          Resume Preparation
        </button> */}

        <Link to="/dashboard">
          <ResumeButton />
        </Link>
      </div>
    </header>
  );
};

export default Header;
