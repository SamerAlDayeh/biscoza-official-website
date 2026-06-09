import React, { useEffect } from "react";
import {
  Leaf,
  Award,
  Cpu,
  Heart,
  Star,
  Cookie,
  CheckCircle2,
} from "lucide-react";
import "./AboutUs2.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <div className="aboutus-container hero-content">
        <div className="hero-grid">
          <div className="hero-text">
            <div className="badge">
              <Star size={16} className="text-gold" fill="currentColor" />
              <span>{t("about_hero_badge")}</span>
            </div>

            <h1 className="hero-title">
              {t("about_hero_title")} <br />
              <span className="hero-title-highlight">
                {t("about_hero_highlight")}
                <svg
                  className="underline-svg"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                ></svg>
              </span>
            </h1>

            <p className="hero-description">{t("about_hero_desc")}</p>

            <div className="hero-buttons">
              <button
                className="btn-primary btn-lg"
                onClick={() => navigate("/Products")}
              >
                <Cookie size={20} />
                <span className="taste">{t("about_hero_btn")}</span>
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <p className="stat-value">15 +</p>
                <p className="stat-label">{t("about_stat_items")}</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <p className="stat-value">100 %</p>
                <p className="stat-label">{t("about_stat_quality")}</p>
              </div>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-blob-bg">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#dd2727"
                  fillOpacity="0.08"
                  d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.3,82.2,22.9,71.6,34.6C61,46.3,51.1,56.1,39.9,64.3C28.7,72.5,16.2,79.1,2.6,74.6C-11,70.1,-25.7,54.5,-38.9,41.3C-52.1,28.1,-63.8,17.3,-68.6,3.6C-73.4,-10.1,-71.3,-26.7,-62.7,-40.4C-54.1,-54.1,-39,-64.9,-24.3,-71.7C-9.6,-78.5,4.7,-81.3,19.8,-80.8L44.7,-76.4Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
            <div className="hero-img-container">
              <img
                src="/images/Huggy.webp"
                alt="Biscoza"
                className="hero-main-img"
              />
              <div className="floating-card card-bottom">
                <div className="card-header">
                  <div className="icon-circle">
                    <CheckCircle2 size={15} color="red" />
                  </div>
                  <span className="card-text">
                    {t("about_taste_unresistable")}
                  </span>
                </div>
                <div className="progress-bar"></div>
              </div>
              <div className="floating-card card-top">
                <span className="emoji">😋</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StorySection = () => {
  const { t } = useTranslation();
  return (
    <section className="story-section">
      <div className="aboutus-container">
        <div className="story-grid">
          <div className="story-content">
            <div className="title-wrapper">
              <h2 className="section-title">{t("about_story_title")}</h2>
              <div className="title-decoration"></div>
            </div>
            <div className="story-text">
              <p className="story-intro">{t("about_story_text1")}</p>
              <p>{t("about_story_text2")}</p>
            </div>
          </div>
          <div className="story-image-group">
            <div className="img-bg-red"></div>
            <div className="img-bg-gold"></div>
            <div className="story-img-container">
              <img
                src="/images/dishleft.webp"
                alt="Manufacturing"
                className="story-img"
              />
              <div className="story-badge">
                <span>{t("footer_rights")} 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const QuoteSection = () => {
  const { t } = useTranslation();
  return (
    <section className="quote-section">
      <div className="quote-bg-shapes"></div>
      <div className="aboutus-container quote-container">
        <h2 className="quote-text">"{t("about_quote")}"</h2>
        <div className="quote-line"></div>
      </div>
    </section>
  );
};

const QualitySection = () => {
  const { t } = useTranslation();

  // ننقل الـ Features داخل الـ return عشان الترجمة تتحدث مع تغيير اللغة
  return (
    <section className="quality-section">
      <div className="wave-separator">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
      <div className="aboutus-container quality-container-inner">
        <div className="section-header center-text">
          <h2 className="section-title text-dark-about">
            {t("about_quality_title")}{" "}
            <span className="text-red">{t("about_quality_highlight")}</span>
          </h2>
          <p className="section-desc">{t("about_quality_desc")}</p>
        </div>
        <div className="features-grid">
          {/* Feature 1 */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Leaf className="feature-icon" />
            </div>
            <h3 className="feature-title">{t("about_feat1_title")}</h3>
            <p className="feature-desc">{t("about_feat1_desc")}</p>
          </div>
          {/* Feature 2 */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Cpu className="feature-icon" />
            </div>
            <h3 className="feature-title">{t("about_feat2_title")}</h3>
            <p className="feature-desc">{t("about_feat2_desc")}</p>
          </div>
          {/* Feature 3 */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Award className="feature-icon" />
            </div>
            <h3 className="feature-title">{t("about_feat3_title")}</h3>
            <p className="feature-desc">{t("about_feat3_desc")}</p>
          </div>
          {/* Feature 4 */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Heart className="feature-icon" />
            </div>
            <h3 className="feature-title">{t("about_feat4_title")}</h3>
            <p className="feature-desc">{t("about_feat4_desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function AboutUs() {
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
      <StorySection />
      <QuoteSection />
      <QualitySection />
    </>
  );
}
