import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Heart,
  Award,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import "./Main.css";

/* ===== Common Layout Styles ===== */
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

/* ===== Section Header ===== */
const SectionHeader = ({ title, subtitle }) => (
  <div className={commonStyles.headerWrapper}>
    <span className={commonStyles.headerSubtitle}>{subtitle}</span>
    <h2 className={commonStyles.headerTitle}>{title}</h2>
  </div>
);

/* ===== Hero Slider ===== */
const HeroSlider = () => {
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
      image:
        "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1600&auto=format&fit=crop",
      imageMobile:
        "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=600&auto=format&fit=crop",
      title: "طعم يلامس الروح",
      highlight: "الروح",
      subtitle: "نصنع السعادة في كل قطعة، بمكونات طبيعية وشغف لا ينتهي.",
      ctaPrimary: "اكتشف منتجاتنا",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1499636138143-bd630f5cf388?q=80&w=1600&auto=format&fit=crop",
      imageMobile:
        "https://images.unsplash.com/photo-1499636138143-bd630f5cf388?q=80&w=600&auto=format&fit=crop",
      title: "جودة تستحق الثقة",
      highlight: "الثقة",
      subtitle: "أعلى معايير التصنيع العالمية لنقدم لكم الأفضل دائماً.",
      ctaPrimary: "من نحن",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1600&auto=format&fit=crop",
      imageMobile:
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=600&auto=format&fit=crop",
      title: "لكل لحظة حكاية",
      highlight: "حكاية",
      subtitle: "شارك عائلتك وأصدقائك ألذ اللحظات مع تشكيلتنا المميزة.",
      ctaPrimary: "تواصل معنا",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent(current === slides.length - 1 ? 0 : current + 1);

  const prevSlide = () =>
    setCurrent(current === 0 ? slides.length - 1 : current - 1);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className={styles.container}>
      {slides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={slide.id}
            className={`${styles.slide} ${isActive ? styles.slideActive : ""}`}
          >
            {/* صورة موبايل / ديسكتوب */}
            <picture>
              <source media="(max-width: 768px)" srcSet={slide.imageMobile} />
              <img src={slide.image} alt={slide.title} className={styles.bg} />
            </picture>

            <div className={styles.overlay}>
              <div className={styles.content}>
                <h1 className={styles.title}>
                  {slide.title.replace(slide.highlight, "")}
                  <span className={styles.highlight}>{slide.highlight}</span>
                </h1>
                <p className={styles.desc}>{slide.subtitle}</p>
                <div className={styles.actions}>
                  <a href="#" className={commonStyles.btnPrimary}>
                    {slide.ctaPrimary}
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <button
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={nextSlide}
      >
        <ArrowLeft size={24} />
      </button>

      <button
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={prevSlide}
      >
        <ArrowRight size={24} />
      </button>

      <div className={styles.dots}>
        {slides.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${
              index === current ? styles.dotActive : ""
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

/* ===== Features ===== */
const Features = () => {
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
      title: "جودة عالمية",
      desc: "نلتزم بأدق معايير الجودة في كل خطوة من خطوات التصنيع.",
    },
    {
      icon: <Heart size={32} />,
      title: "صُنع بحب",
      desc: "كل منتج يخرج من مصنعنا يحمل معه شغف فريقنا.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "سلامة مضمونة",
      desc: "أحدث التقنيات لضمان سلامة منتجاتنا.",
    },
  ];

  return (
    <section className={`${commonStyles.section} ${commonStyles.sectionBg}`}>
      <div className={commonStyles.container}>
        <SectionHeader subtitle="لماذا بيسكوزا؟" title="تميز في كل تفصيل" />
        <div className={styles.grid}>
          {features.map((f, i) => (
            <div key={i} className={styles.card}>
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

/* ===== Products ===== */
const Products = () => {
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
      title: "بسكويت",
      img: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "كيك",
      img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className={commonStyles.section}>
      <div className={commonStyles.container}>
        <SectionHeader subtitle="منتجاتنا" title="تشكيلة تناسب جميع الأذواق" />
        <div className={styles.grid}>
          {categories.map((cat) => (
            <div key={cat.id} className={styles.card}>
              <img src={cat.img} alt={cat.title} className={styles.img} />
              <div className={styles.overlay}>
                <h3 className={styles.title}>{cat.title}</h3>
                <div className={styles.action}>
                  تصفح المنتجات <ChevronRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===== Main ===== */
const Main = () => {
  return (
    <div className="app-root">
      <HeroSlider />
      <Features />
      <Products />
    </div>
  );
};

export default Main;
