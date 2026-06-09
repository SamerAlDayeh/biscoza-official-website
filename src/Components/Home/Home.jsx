import React, { useState, useEffect, useCallback } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Heart,
  Award,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const commonStyles = {
  container: "layout_container",
  section: "layout_section",
  sectionBg: "layout_sectionBg",
  btnPrimary: "ui_btn ui_btnPrimary",
  btnOutline: "ui_btn ui_btnOutline",
  headerWrapper: "Header_wrapper",
  headerSubtitle: "Header_subtitle",
  headerTitle: "Header_title",
};

const SectionHeader = ({ title, subtitle }) => (
  <div className={commonStyles.headerWrapper}>
    <span className={commonStyles.headerSubtitle}>{subtitle}</span>
    <h2 className={commonStyles.headerTitle}>{title}</h2>
  </div>
);

const HeroSlider = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const styles = {
    container: "Hero_container",
    slide: "Hero_slide",
    slideActive: "Hero_slideActive",
    bg: "Hero_bg",
    overlay: "Hero_overlay",
    content: "Hero_content",
    title: "Hero_title",
    highlight: "Hero_highlight",
    desc: "Hero_desc",
    actions: "Hero_actions",
    arrow: "Hero_arrow",
    arrowLeft: "Hero_arrowLeft",
    arrowRight: "Hero_arrowRight",
    dots: "Hero_dots",
    dot: "Hero_dot",
    dotActive: "Hero_dotActive",
  };

  const slides = [
    {
      id: 1,
      image: "/images/HomeSlider/HisteriaMaxBG2.webp",
      imageMobile: "/images/HomeSlider/HisteriaMaxMobileBG2.webp",
      title: t("hero_slide1_title"),
      highlight: t("hero_slide1_highlight"),
      subtitle: t("hero_slide1_desc"),
      ctaPrimary: t("view_products"),
      path: "/Products",
    },
    {
      id: 2,
      image: "/images/HomeSlider/HugyMooshBG.webp",
      imageMobile: "/images/HomeSlider/HugyMooshMobileBG.webp",
      title: t("hero_slide2_title"),
      highlight: t("hero_slide2_highlight"),
      subtitle: t("hero_slide2_desc"),
      ctaPrimary: t("nav_about"),
      path: "/AboutUs",
    },
    {
      id: 3,
      image: "/images/HomeSlider/OpalizBG.webp",
      imageMobile: "/images/HomeSlider/OpalizMobileBG.webp",
      title: t("hero_slide3_title"),
      highlight: t("hero_slide3_highlight"),
      subtitle: t("hero_slide3_desc"),
      ctaPrimary: t("nav_contact"),
      path: "/ContactUs",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className={styles.container} dir="ltr">
      {" "}
      {/* السلايدر دائماً ltr لضمان حركة الصور والأزرار */}
      {slides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={slide.id}
            className={`${styles.slide} ${isActive ? styles.slideActive : ""}`}
          >
            <picture>
              <source media="(max-width: 768px)" srcSet={slide.imageMobile} />
              <img src={slide.image} alt="" className={styles.bg} />
            </picture>
            <div className={styles.overlay}>
              {/* محتوى النص يعود لاتجاه اللغة المختارة */}
              <div className={styles.content} dir={isAr ? "rtl" : "ltr"}>
                <h1 className={styles.title}>
                  {slide.title.split(slide.highlight)[0]}
                  <span className={styles.highlight}>{slide.highlight}</span>
                  {slide.title.split(slide.highlight)[1]}
                </h1>
                <p className={styles.desc}>{slide.subtitle}</p>
                <div className={styles.actions}>
                  <button
                    onClick={() => navigate(slide.path)}
                    className={commonStyles.btnPrimary}
                  >
                    {slide.ctaPrimary}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <button
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={prevSlide}
      >
        <ArrowLeft size={24} />
      </button>
      <button
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={nextSlide}
      >
        <ArrowRight size={24} />
      </button>
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${index === current ? styles.dotActive : ""}`}
            onClick={() => setCurrent(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

const Features = () => {
  const { t } = useTranslation();
  const styles = {
    grid: "Features_grid",
    card: "Features_card",
    icon: "Features_icon",
    title: "Features_cardTitle",
    desc: "Features_cardDesc",
  };
  const features = [
    {
      icon: <Award size={32} />,
      title: t("feat1_title"),
      desc: t("feat1_desc"),
    },
    {
      icon: <Heart size={32} />,
      title: t("feat2_title"),
      desc: t("feat2_desc"),
    },
    {
      icon: <ShieldCheck size={32} />,
      title: t("feat3_title"),
      desc: t("feat3_desc"),
    },
  ];
  return (
    <section className={`${commonStyles.section} ${commonStyles.sectionBg}`}>
      <div className={commonStyles.container}>
        <SectionHeader
          subtitle={t("why_biscoza")}
          title={t("excellence_title")}
        />
        <div className={styles.grid}>
          {features.map((f, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.icon}>{f.icon}</div>
              <h3 className={styles.title}>{f.title}</h3>
              <p className={styles.desc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Products = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const styles = {
    grid: "Products_grid",
    card: "Products_card",
    img: "Products_img",
    overlay: "Products_overlay",
    title: "Products_title",
    action: "Products_action",
  };
  const categories = [
    {
      id: 1,
      title: t("biscuits"),
      img: "/images/Product1/HisteriaMax2.webp",
      path: "/Biscuits",
    },
    {
      id: 2,
      title: t("cake"),
      img: "/images/Product2/HugyMooshDark2.webp",
      path: "/Cake",
    },
  ];
  return (
    <section className={commonStyles.section}>
      <div className={commonStyles.container}>
        <SectionHeader
          subtitle={t("nav_products")}
          title={t("products_subtitle")}
        />
        <div className={styles.grid}>
          {categories.map((c) => (
            <div
              key={c.id}
              className={styles.card}
              onClick={() => navigate(c.path)}
            >
              <img src={c.img} alt="" className={styles.img} />
              <div className={styles.overlay}>
                <h3 className={styles.title}>{c.title}</h3>
                <div className={styles.action}>
                  {t("browse_products")} <ChevronRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="app-root">
      <HeroSlider />
      <Features />
      <Products />
    </div>
  );
};

export default Home;
