import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { useTranslation } from "react-i18next";
import Home from "../../Components/Home/Home";
import Loading from "../Loading/Loading";

function HomePage() {
  const [loading, setLoading] = useState(true);
  const [homeSliderData, setHomeSliderData] = useState(null);
  const [productsData, setProductsData] = useState(null);

  // استدعاء الـ i18n لمعرفة اللغة الحالية
  const { i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      try {
        const { HomeSlider } = await import("../../Data/SliderImages");
        const { ProductsData } = await import("../../Data/ProductsData");

        setHomeSliderData(HomeSlider);
        setProductsData(ProductsData);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="background">
      {/* ملاحظة: إذا كان الـ Slider يحتوي على نصوص، 
        سنحتاج للتأكد من أن مكون <Home /> يقرأ النصوص بناءً على i18n.language
      */}
      <Home slides={homeSliderData} currentLang={i18n.language} />
    </div>
  );
}

export default HomePage;
