import React from "react";
import { Phone, Mail, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // 1. استيراد هوك الترجمة

// استيراد Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const { t, i18n } = useTranslation(); // 2. تفعيل دالة الترجمة
  const isAr = i18n.language === "ar";

  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="footer-container footer-content-wrapper">
        <div className="footer-grid">
          {/* العمود الرئيسي */}
          <div className="footer-col-main">
            <div className="footer-brand">
              <Link to="/" className="logo flex">
                <img
                  className="navImage"
                  src="/images/final3.webp"
                  alt="Biscoza"
                />
              </Link>
            </div>
            <p className="footer-mission">
              {t("footer_mission_part1")} {/* 3. ربط النص بالترجمة */}
              <br />
              {t("footer_mission_part2")}
            </p>
            <div className="social-links">
              <a
                href="https://www.facebook.com/Biscoza"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a
                href="https://www.instagram.com/bisco_za/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a
                href="https://wa.me/+963944024343"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </a>
            </div>
          </div>

          {/* عمود الروابط */}
          <div className="footer-col-links">
            <h3 className="footer-title">
              <span className="title-bar"></span>
              {t("footer_quick_links")}
            </h3>
            <ul className="footer-list">
              {[
                { name: t("nav_home"), path: "/" },
                { name: t("nav_about"), path: "/AboutUs" },
                { name: t("nav_products"), path: "/Products" },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="footer-link">
                    {/* اتجاه السهم يتغير حسب اللغة */}
                    {isAr ? (
                      <ChevronLeft size={16} className="link-arrow" />
                    ) : (
                      <ChevronRight size={16} className="link-arrow" />
                    )}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* عمود التواصل */}
          <div className="footer-col-contact">
            <h3 className="footer-title">
              <span className="title-bar"></span>
              {t("footer_contact_info")}
            </h3>
            <div className="contact-list">
              <div className="contact-item">
                <MapPin className="contact-icon" size={24} />
                <div>
                  <p className="contact-label">{t("footer_headquarters")}</p>
                  <p className="contact-value">{t("footer_address")}</p>
                </div>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" size={24} />
                <div>
                  <p className="contact-label">
                    {t("footer_customer_service")}
                  </p>
                  <p className="contact-value" dir="ltr">
                    +963 944 024 343
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon" size={24} />
                <div>
                  <p className="contact-label">{t("footer_email_us")}</p>
                  <p className="contact-value font-sans">info@biscoza.co</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {t("footer_rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
