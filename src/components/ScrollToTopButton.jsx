import { useEffect, useState } from "react";
import "./CustomCSS/ScrollToTopButton.css"; // Corrected import path

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    const currentScroll = window.scrollY;
    setIsVisible(currentScroll > 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className="scroll-to-top-button" // Use the CSS class
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        display: isVisible ? "block" : "none",
      }}
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
