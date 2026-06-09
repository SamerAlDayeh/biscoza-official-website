import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Copy } from "lucide-react";
import "./ContactUs.css";
import { useTranslation } from "react-i18next";

// --- Custom Icons ---
const WhatsAppIcon = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

// --- مكونات مساعدة ---
const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation();

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button className="icon-btn" onClick={handleCopy} title={t("contact_copy")}>
      {copied ? (
        <span className="text-xs font-bold text-green">
          {t("contact_copied")}
        </span>
      ) : (
        <Copy size={22} />
      )}
    </button>
  );
};

// --- الأقسام ---

const Hero = () => {
  const { t } = useTranslation();

  return (
    <header className="contact-hero">
      <div className="contact-container contact-hero-content">
        {/* بديل الشعار: بادج ترحيبي */}
        <div className="welcome-pill">
          <span className="welcome-dot"></span>
          {t("contact_welcome")}
        </div>

        <h1 className="hero-title">
          <span className="title-gradient">{t("contact_hero_part1")}</span>{" "}
          <br />
          {t("contact_hero_part2")}{" "}
          <span className="title-highlight">{t("contact_hero_highlight")}</span>
        </h1>

        <p className="hero-subtitle">{t("contact_hero_desc")}</p>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </header>
  );
};

const ContactCards = () => {
  const { t } = useTranslation();

  const contacts = [
    {
      id: 1,
      title: t("contact_card1_title"),
      value: "+963 944 024 343",
      subValue: t("contact_card1_sub"),
      icon: <Phone size={40} />,
      action: "tel:+963944024343",
      btnText: t("contact_card1_btn"),
      color: "var(--color-red)",
    },
    {
      id: 2,
      title: t("contact_card2_title"),
      value: "info@biscoza.co",
      subValue: t("contact_card2_sub"),
      icon: <Mail size={40} />,
      action: "mailto:info@biscoza.co",
      btnText: t("contact_card2_btn"),
      color: "var(--color-gold)",
    },
    {
      id: 3,
      title: t("contact_card3_title"),
      value: "+963 944 024 343",
      subValue: t("contact_card3_sub"),
      icon: <WhatsAppIcon size={40} />,
      action: "https://wa.me/+963944024343",
      btnText: t("contact_card3_btn"),
      color: "#25D366",
    },
  ];

  return (
    <section className="cards-section">
      <div className="contact-container">
        <div className="cards-grid">
          {contacts.map((card) => (
            <div
              key={card.id}
              className="contact-card"
              style={{ "--accent-color": card.color }}
            >
              <div className="card-icon-wrapper">{card.icon}</div>
              <div className="card-info">
                <h3>{card.title}</h3>
                <p className="card-value" dir="ltr">
                  {card.value}
                </p>
                <p className="card-sub">{card.subValue}</p>
              </div>
              <div className="card-actions">
                <a href={card.action} className="card-btn-primary">
                  {card.btnText}
                </a>
                <CopyButton text={card.value} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LocationSection = () => {
  const { t } = useTranslation();

  return (
    <section className="location-section">
      <div className="contact-container location-container">
        <div className="location-info">
          <h2 className="section-heading">
            {t("contact_location_title1")}{" "}
            <span className="text-gold">{t("contact_location_title2")}</span>
          </h2>
          <p className="location-desc">{t("contact_location_desc")}</p>

          <div className="info-row">
            <div className="info-icon-box">
              <MapPin size={28} />
            </div>
            <div>
              <h4>{t("contact_location_address_title")}</h4>
              <p>
                {t("contact_location_address_line1")}
                <br />
                {t("contact_location_address_line2")}
              </p>
            </div>
          </div>
        </div>

        <div className="location-visual">
          <div className="location-image-card">
            <img src="/images/factory.webp" alt="Biscoza Factory" />
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialSection = () => {
  const { t } = useTranslation();

  return (
    <section className="social-section">
      <div className="social-container">
        <h2 className="social-title">
          <span className="join">{t("contact_social_title")}</span>
        </h2>
        <p className="location-desc text-center">{t("contact_social_desc")}</p>

        <div className="social-grid">
          <a
            href="https://www.facebook.com/Biscoza"
            className="social-card fb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size={48} />
            <span>Facebook</span>
            <span className="followers">{t("contact_facebook_followers")}</span>
          </a>
          <a
            href="https://www.instagram.com/bisco_za/"
            className="social-card ig"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={48} />
            <span>Instagram</span>
            <span className="followers">
              {t("contact_instagram_followers")}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

const ContactPage = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // تحديث اتجاه الصفحة عند تغيير اللغة
    document.documentElement.setAttribute(
      "dir",
      i18n.language === "en" ? "ltr" : "rtl",
    );
    document.documentElement.setAttribute("lang", i18n.language);
  }, [i18n.language]);

  return (
    <>
      <Hero />
      <ContactCards />
      <LocationSection />
      <SocialSection />
    </>
  );
};

export default ContactPage;
