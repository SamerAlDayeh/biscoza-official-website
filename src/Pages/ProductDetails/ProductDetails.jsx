import React, { useState, useEffect } from "react";
import "./ProductDetails.css";
import { useTranslation } from "react-i18next";

const ProductDetails = ({ product, onBack }) => {
  const { t, i18n } = useTranslation();
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    // تحديث اتجاه الصفحة عند تغيير اللغة
    document.documentElement.setAttribute(
      "dir",
      i18n.language === "en" ? "ltr" : "rtl",
    );
    document.documentElement.setAttribute("lang", i18n.language);
  }, [i18n.language]);

  // حماية في حال عدم وجود بيانات للمنتج
  if (!product) return null;

  // دالة للحصول على النص المترجم بناءً على معرف المنتج
  const getProductDescription = () => {
    // يمكنك استخدام switch أو object mapping
    const descriptionMap = {
      1: t("product_desc_hugy_puff"),
      2: t("product_desc_bisco_moosh"),
      3: t("product_desc_histeria_max"),
      4: t("product_desc_histeria_max_milk"),
      5: t("product_desc_opaliz"),
      6: t("product_desc_bisco_jell_orange"),
      7: t("product_desc_bisco_jell_berry"),
      8: t("product_desc_bisco_jell_strawberry"),
      9: t("product_desc_bisco_jell_apricot"),
      10: t("product_desc_bisco_max_choco"),
      11: t("product_desc_bisco_max_choco_cream"),
      12: t("product_desc_bisco_max_cocoa"),
      13: t("product_desc_bisco_max_choco_biscuit"),
      14: t("product_desc_bisco_max_strawberry"),
      15: t("product_desc_bisco_max_coffee"),
      16: t("product_desc_bisco_max_caramel"),
      17: t("product_desc_bisco_max_orange"),
      18: t("product_desc_hugy_moosh_milk"),
      19: t("product_desc_hugy_moosh_dark"),
    };
    return descriptionMap[product.id] || product.description || product.desc;
  };

  // دالة للحصول على التعبئة المترجمة
  const getPackaging = () => {
    const packagingMap = {
      "6 boxes / carton - 24 pieces / box": t("product_packaging_24_6"),
      "12 boxes / carton - 12 pieces / box": t("product_packaging_30_12"),
      "6 علبة / طرد - 24 قطعة / علبة": t("product_packaging_24_6"),
      "12 علبة / الطرد - 12 قطعة / العلبة": t("product_packaging_30_12"),
    };
    return (
      packagingMap[product.packaging] ||
      product.packaging ||
      t("product_details_standard_packaging")
    );
  };

  // دالة لترجمة المكونات
  const translateIngredient = (ingredient) => {
    // يمكنك إضافة المزيد من المرادفات حسب الحاجة
    const ingredientMap = {
      "دقيق الطحين": t("ingredient_wheat_flour"),
      "Wheat Flour": t("ingredient_wheat_flour"),
      سكر: t("ingredient_sugar"),
      Sugar: t("ingredient_sugar"),
      جلكوز: t("ingredient_glucose"),
      Glucose: t("ingredient_glucose"),
      "زيوت نباتية مهدرجة بالكامل": t("ingredient_vegetable_oil"),
      "Fully Hydrogenated Vegetable Oils": t("ingredient_vegetable_oil"),
      "حليب خالي الدسم بودرة": t("ingredient_skim_milk"),
      "Skimmed Milk Powder": t("ingredient_skim_milk"),
      "مصل الحليب": t("ingredient_whey"),
      Whey: t("ingredient_whey"),
      "سوربيتول E420": t("ingredient_sorbitol"),
      "Sorbitol E420": t("ingredient_sorbitol"),
      "جيلاتين بقري": t("ingredient_gelatin"),
      "Beef Gelatin": t("ingredient_gelatin"),
      غليسرين: t("ingredient_glycerin"),
      Glycerin: t("ingredient_glycerin"),
      "ملح الطعام": t("ingredient_salt"),
      Salt: t("ingredient_salt"),
      مونوغلسرايد: t("ingredient_monoglyceride"),
      Monoglyceride: t("ingredient_monoglyceride"),
      "منكهات مماثلة للطبيعة": t("ingredient_flavor"),
      "Nature-identical Flavors": t("ingredient_flavor"),
      "ليستين الصويا (مستحلب E322)": t("ingredient_soy_lecithin"),
      "Soy Lecithin (Emulsifier E322)": t("ingredient_soy_lecithin"),
      "سوربات البوتاسيوم E202 (مواد حافظة)": t("ingredient_potassium_sorbate"),
      "Potassium Sorbate E202 (Preservative)": t(
        "ingredient_potassium_sorbate",
      ),
      "كاكاو طبيعي": t("ingredient_cocoa"),
      "Natural Cocoa": t("ingredient_cocoa"),
      "كتلة الكاكاو": t("ingredient_cocoa_mass"),
      "Cocoa Mass": t("ingredient_cocoa_mass"),
      "حليب كامل الدسم": t("ingredient_whole_milk"),
      "Whole Milk Powder": t("ingredient_whole_milk"),
      ديكستروز: t("ingredient_dextrose"),
      Dextrose: t("ingredient_dextrose"),
      ماء: t("ingredient_water"),
      Water: t("ingredient_water"),
      فانيليا: t("ingredient_vanilla"),
      Vanilla: t("ingredient_vanilla"),
      بيض: t("ingredient_eggs"),
      "Fresh Eggs": t("ingredient_eggs"),
    };
    return ingredientMap[ingredient] || ingredient;
  };

  return (
    <div className="product-details-page">
      {/* الهيدر العلوي الثابت */}
      <div className="sticky-header">
        <button
          onClick={onBack}
          className="back-button-new"
          aria-label={t("product_details_back")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="back-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span>{t("product_details_back")}</span>
        </button>

        <h2 className="header-title">{t("product_details_title")}</h2>
        <div className="header-spacer"></div>
      </div>

      <div className="product-container">
        <div className="product-main-grid">
          {/* قسم معرض الصور */}
          <div className="image-gallery-section">
            <div className="main-image-wrapper">
              <img
                key={activeImage}
                src={product.images ? product.images[activeImage] : product.img}
                alt={product.name}
                className="main-image fade-animation"
              />
            </div>

            {/* الصور المصغرة - تظهر فقط إذا وجد أكثر من صورة */}
            {product.images && product.images.length > 1 && (
              <div className="thumbnail-list">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`thumbnail-btn ${
                      activeImage === idx ? "active" : ""
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} thumbnail ${idx + 1}`}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* قسم معلومات المنتج */}
          <div className="product-info-section">
            <div className="info-header">
              <span className="category-tag"></span>
              <h1 className="product-name-h1">{product.name}</h1>
            </div>

            <div className="details-stack">
              {/* عن المنتج */}
              <section className="info-section-item">
                <h3 className="section-title-ProductDetails">
                  <span className="title-indicator"></span>
                  {t("product_details_about")}
                </h3>
                <p className="description-text">{getProductDescription()}</p>
              </section>

              {/* بطاقات الخصائص */}
              <div className="specs-grid">
                <div className="spec-card weight">
                  <h4 className="spec-label">{t("product_details_weight")}</h4>
                  <p className="spec-value">
                    {product.weight || t("product_details_not_specified")}
                  </p>
                </div>
                <div className="spec-card packaging">
                  <h4 className="spec-label">
                    {t("product_details_packaging")}
                  </h4>
                  <p className="spec-value">{getPackaging()}</p>
                </div>
              </div>

              {/* المكونات */}
              {product.ingredients && (
                <section className="info-section-item">
                  <h3 className="section-title-product">
                    <span className="title-indicator"></span>
                    {t("product_details_ingredients")}
                  </h3>
                  <div className="ingredients-flex">
                    {product.ingredients.map((ing, i) => (
                      <span key={i} className="ingredient-chip">
                        {translateIngredient(ing)}
                      </span>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
