"use client";
import React, { useState, useRef, useEffect } from "react";
import "./navbar.css";
import Link from "next/link";
import ThemeDropdown from "./theme-switcher/theme-switcher";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("ir");
  const dropdownRef = useRef();
  const languages = [
    { code: "ir", label: "فارسی", flag: "/img/iran.jpg" },
    { code: "en", label: "English", flag: "/img/usa.jpg" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLangClick = (code) => {
    setSelectedLang(code);
    setDropdownOpen(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <Link href={"/"}>Malek Tech</Link>
        </div>
        <div className="nav-list">
          <Link href={"/"}>Home</Link>
          <Link href={"/services"}>Services</Link>
          <Link href={"/demos"}>Demos</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>

          <div className="lang-dropdown" ref={dropdownRef}>
            <img
              src={languages.find((l) => l.code === selectedLang).flag}
              alt=""
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="dropdown-menu">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    className="dropdown-item"
                    onClick={() => handleLangClick(lang.code)}
                  >
                    <img src={lang.flag} alt="" />
                    <span>{lang.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <ThemeDropdown />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
