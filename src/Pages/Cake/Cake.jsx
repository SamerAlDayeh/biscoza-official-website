import React, { useState, useEffect } from "react";
import ProductDetails from "../ProductDetails/ProductDetails";
import "./Cake.css";
import { useTranslation } from "react-i18next";

const commonStyles = {
  container: "layout_container",
  headerWrapper: "Header_wrapper",
  headerSubtitle: "Header_subtitle",
  headerTitle: "Header_title",
};

const SectionHeader = ({ subtitle }) => {
  const { t } = useTranslation();

  return (
    <div className={commonStyles.headerWrapper}>
      <span className={commonStyles.headerSubtitle}>{subtitle}</span>
      <h2 className={commonStyles.headerTitle}>{t("cake_browse")}</h2>
    </div>
  );
};

const Cake = () => {
  const { t, i18n } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("marshmallow");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // تحديث اتجاه الصفحة عند تغيير اللغة
    document.documentElement.setAttribute(
      "dir",
      i18n.language === "en" ? "ltr" : "rtl",
    );
    document.documentElement.setAttribute("lang", i18n.language);
  }, [i18n.language]);

  const filters = [{ id: "marshmallow", label: t("cake_filter_marshmallow") }];

  const products = [
    {
      id: 1,
      name: "Hugy Moosh Milk",
      category: "marshmallow",
      description: t("product_desc_hugy_moosh_milk"),
      weight: "30g",
      packaging: t("product_packaging_30_12"),
      ingredients: [
        t("ingredient_sugar"),
        t("ingredient_vegetable_oil"),
        t("ingredient_water"),
        t("ingredient_wheat_flour"),
        t("ingredient_glucose"),
        t("ingredient_cocoa"),
        t("ingredient_cocoa_mass"),
        t("ingredient_eggs"),
        t("ingredient_skim_milk"),
        t("ingredient_whole_milk"),
        t("ingredient_whey"),
        t("ingredient_sorbitol"),
        t("ingredient_gelatin"),
        t("ingredient_modified_starch"),
        t("ingredient_dextrose"),
        t("ingredient_soy_lecithin"),
        t("ingredient_glycerin"),
        t("ingredient_cake_gel"),
        t("ingredient_sodium_pyrophosphate"),
        t("ingredient_sodium_bicarbonate"),
        t("ingredient_salt"),
        t("ingredient_flavor_vanilla_milk_butter"),
        t("ingredient_potassium_sorbate"),
        t("ingredient_propylene_glycol"),
      ],
      images: [
        "/images/Product3/HugyMooshWhite1.webp",
        "/images/Product3/HugyMooshWhite2.webp",
        "/images/Product3/HugyMooshWhite3.webp",
      ],
      img: "/images/Product3/HugyMooshWhiteEaten.webp",
    },
    {
      id: 2,
      name: "Hugy Moosh Dark",
      category: "marshmallow",
      description: t("product_desc_hugy_moosh_dark"),
      weight: "30g",
      packaging: t("product_packaging_30_12"),
      ingredients: [
        t("ingredient_sugar"),
        t("ingredient_vegetable_oil"),
        t("ingredient_water"),
        t("ingredient_wheat_flour"),
        t("ingredient_glucose"),
        t("ingredient_cocoa"),
        t("ingredient_cocoa_mass"),
        t("ingredient_eggs"),
        t("ingredient_skim_milk"),
        t("ingredient_whole_milk"),
        t("ingredient_whey"),
        t("ingredient_sorbitol"),
        t("ingredient_gelatin"),
        t("ingredient_modified_starch"),
        t("ingredient_dextrose"),
        t("ingredient_glycerin"),
        t("ingredient_cake_gel"),
        t("ingredient_salt"),
        t("ingredient_propylene_glycol"),
        t("ingredient_soy_lecithin"),
        t("ingredient_sodium_pyrophosphate"),
        t("ingredient_sodium_bicarbonate"),
        t("ingredient_flavor_vanilla_milk_butter"),
        t("ingredient_potassium_sorbate"),
      ],
      images: [
        "/images/Product2/HugyMooshDark1.webp",
        "/images/Product2/HugyMooshDark2.webp",
        "/images/Product2/HugyMooshDark3.webp",
      ],
      img: "/images/Product2/HugyMooshDarkEaten.webp",
    },
  ];

  const filteredProducts = products.filter((p) => p.category === activeFilter);

  useEffect(() => {
    if (!selectedProduct) {
      const observerOptions = { threshold: 0.1 };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      }, observerOptions);

      const cards = document.querySelectorAll(".Catalog_card");
      cards.forEach((card) => observer.observe(card));
      return () => observer.disconnect();
    }
  }, [filteredProducts, selectedProduct]);

  // إذا كان هناك منتج مختار، اعرض صفحة التفاصيل
  if (selectedProduct) {
    return (
      <ProductDetails
        product={selectedProduct}
        onBack={() => setSelectedProduct(null)}
      />
    );
  }

  return (
    <div className="cake-container">
      <div className={commonStyles.container}>
        <SectionHeader subtitle={t("cake_quality_subtitle")} />

        <div className="Catalog_filterWrapper">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`Catalog_filterBtn ${
                activeFilter === filter.id ? "Catalog_filterBtnActive" : ""
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="Catalog_grid">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="Catalog_card"
              onClick={() => setSelectedProduct(product)}
              style={{ cursor: "pointer" }}
            >
              <div className="Catalog_imgContainer">
                <img
                  src={product.img}
                  alt={product.name}
                  className="Catalog_img"
                />
              </div>
              <div className="Catalog_info">
                <h4 className="Catalog_name">{product.name}</h4>
                <div className="Catalog_desc">
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cake;
