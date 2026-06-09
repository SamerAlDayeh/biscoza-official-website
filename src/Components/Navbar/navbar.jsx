import React, { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./navbar.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const NAV_LINKS = [
    { label: t("nav_home"), to: "/" },
    { label: t("nav_about"), to: "/AboutUs" },
    { label: t("nav_products"), to: "/Products" },
    { label: t("nav_contact"), to: "/ContactUs" },
  ];

  const closeMenu = () => setIsOpen(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n.language]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* الجانب الأيسر: أزرار التحكم (اللغة + قائمة الموبايل) */}
        <div className="navbar-controls">
          <button onClick={toggleLanguage} className="lang-switch-btn">
            <Globe size={18} />
            <span className="desktop-only">
              {i18n.language === "ar" ? "English" : "العربية"}
            </span>
            <span className="mobile-only-text">
              {i18n.language === "ar" ? "EN" : "AR"}
            </span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="menu-toggle mobile-only"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* المنتصف: الروابط (تظهر في الديسكتوب فقط) */}
        <div className="navbar-center desktop-only">
          <div className="navbar-links">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link ${location.pathname === link.to ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* الجانب الأيمن: الشعار */}
        <div className="navbar-logo">
          <Link to="/" className="logo">
            <img className="navImage" src="/images/final.webp" alt="Biscoza" />
          </Link>
        </div>
      </div>

      {/* قائمة الموبايل المنسدلة */}
      {isOpen && (
        <div className="mobile-overlay">
          <div className="mobile-menu">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`mobile-nav-link ${location.pathname === link.to ? "active" : ""}`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
