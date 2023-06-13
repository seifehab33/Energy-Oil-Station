import React, { useState, useContext, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assests/Logo.png";
import LanguageContext from "../LanguageContext";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Handle language change
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <section className={`navbar container ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar_content contain">
        <div className="logo_nav">
          <Link to="/">
            <img src={logo} alt="" className="logo_img" />
          </Link>
        </div>
        <div className={`links ${isMenuOpen ? "open" : ""}`}>
          <Link className="link_nav" to="/about" onClick={scrollToTop}>
            {language === "en" ? "About Us" : "من نحن"}
          </Link>
          <Link className="link_nav" to="/products" onClick={scrollToTop}>
            {language === "en" ? "Products" : "منتجات"}
          </Link>
          <Link className="link_nav" to="/services" onClick={scrollToTop}>
            {language === "en" ? "Services" : "خدمات"}
          </Link>
          <Link className="link_nav" to="/sustainability" onClick={scrollToTop}>
            {language === "en" ? "Sustainability" : "الاستدامة"}
          </Link>
          <Link className="link_nav" to="/contact" onClick={scrollToTop}>
            {language === "en" ? "Contact" : "اتصل بنا"}
          </Link>
          <div className="lang">
            <select
              name="lang"
              id="lang"
              value={language}
              onChange={handleLanguageChange}
            >
              <option value="en">EN</option>
              <option value="ar">AR</option>
            </select>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
        <div className={`open-menu ${isMenuOpen ? "active" : ""}`}>
          <i className="fa-solid fa-bars fa_menu" onClick={toggleMenu}></i>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
