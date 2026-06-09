import React, { useEffect } from "react"; // استيراد useEffect
import HomePage from "./Pages/HomePage/HomePage";
import AboutUs2 from "./Pages/AboutUs2/AboutUs2";
import ContactUs2 from "./Pages/ContactUs2/ContactUs";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";
import Layout from "./Components/Layout";
import { ProductsData } from "./Data/ProductsData";
import ScrollToTop from "./ScrollToTop";
import Biscuits from "./Pages/Biscuits/Biscuits";
import Cake from "./Pages/Cake/Cake";
import Products from "./Pages/Products/Products";
import "./il8n";
import { useTranslation } from "react-i18next"; // استيراد الهوك

function App() {
  const { i18n } = useTranslation();

  // هذا الجزء هو المسؤول عن قلب اتجاه الموقع كاملاً
  useEffect(() => {
    const direction = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = direction;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/AboutUs"
          element={
            <Layout>
              <AboutUs2 />
            </Layout>
          }
        />
        <Route
          path="/ContactUs"
          element={
            <Layout>
              <ContactUs2 />
            </Layout>
          }
        />
        <Route path="*" element={<NotFound />} />

        <Route
          path="/Biscuits"
          element={
            <Layout>
              <Biscuits />
            </Layout>
          }
        />
        <Route
          path="/Cake"
          element={
            <Layout>
              <Cake />
            </Layout>
          }
        />
        <Route
          path="/Products"
          element={
            <Layout>
              <Products />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
