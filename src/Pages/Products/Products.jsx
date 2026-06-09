import React, { useState, useEffect } from "react";
import ProductDetails from "../ProductDetails/ProductDetails";
import "./Products.css";
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
      <h2 className={commonStyles.headerTitle}>{t("products_browse")}</h2>
    </div>
  );
};

const Products = () => {
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

  const filters = [
    { id: "marshmallow", label: t("products_filter_marshmallow") },
    { id: "coated", label: t("products_filter_coated") },
    { id: "jelly", label: t("products_filter_jelly") },
    { id: "cream", label: t("products_filter_cream") },
    { id: "cake", label: t("products_filter_cake") },
  ];

  const products = [
    {
      id: 1,
      name: "Hugy Puff",
      category: "marshmallow",
      description: t("product_desc_hugy_puff"),
      weight: "24g",
      packaging: t("product_packaging_24_6"),
      ingredients: [
        t("ingredient_wheat_flour"),
        t("ingredient_sugar"),
        t("ingredient_glucose"),
        t("ingredient_vegetable_oil"),
        t("ingredient_skim_milk"),
        t("ingredient_whey"),
        t("ingredient_sorbitol"),
        t("ingredient_gelatin"),
        t("ingredient_glycerin"),
        t("ingredient_salt"),
        t("ingredient_monoglyceride"),
        t("ingredient_flavor"),
        t("ingredient_soy_lecithin"),
        t("ingredient_potassium_sorbate"),
        t("ingredient_raising_agents"),
      ],
      images: [
        "/images/Product19/HuggyPuff1.webp",
        "/images/Product19/HuggyPuff2.webp",
        "/images/Product19/HuggyPuff3.webp",
      ],
      img: "/images/Product19/HuggyPuffEaten.webp",
    },
    {
      id: 2,
      name: "Bisco Moosh",
      category: "marshmallow",
      description: t("product_desc_bisco_moosh"),
      weight: "30g",
      packaging: t("product_packaging_30_12"),
      ingredients: [
        t("ingredient_sugar"),
        t("ingredient_vegetable_oil"),
        t("ingredient_wheat_flour"),
        t("ingredient_glucose"),
        t("ingredient_cocoa"),
        t("ingredient_cocoa_mass"),
        t("ingredient_skim_milk"),
        t("ingredient_whole_milk"),
        t("ingredient_whey"),
        t("ingredient_sorbitol"),
        t("ingredient_gelatin"),
        t("ingredient_soy_lecithin"),
        t("ingredient_glycerin"),
        t("ingredient_sodium_pyrophosphate"),
        t("ingredient_ammonium_bicarbonate"),
        t("ingredient_potassium_sorbate"),
        t("ingredient_salt"),
        t("ingredient_flavor"),
      ],
      images: [
        "/images/Product6/BiscoMoosh1.webp",
        "/images/Product6/BiscoMoosh2.webp",
        "/images/Product6/BiscoMoosh3.webp",
      ],
      img: "/images/Product6/BiscoMooshEaten.webp",
    },
    {
      id: 3,
      name: "Histeria Max",
      category: "coated",
      description: t("product_desc_histeria_max"),
      weight: "30g",
      packaging: t("product_packaging_30_12"),
      ingredients: [
        t("ingredient_sugar"),
        t("ingredient_vegetable_oil"),
        t("ingredient_wheat_flour"),
        t("ingredient_glucose"),
        t("ingredient_cocoa_powder"),
        t("ingredient_cocoa_mass"),
        t("ingredient_skim_milk"),
        t("ingredient_whole_milk"),
        t("ingredient_whey"),
        t("ingredient_dextrose"),
        t("ingredient_salt"),
        t("ingredient_soy_lecithin"),
        t("ingredient_flavor"),
        t("ingredient_ammonium_bicarbonate"),
        t("ingredient_sodium_bicarbonate"),
        t("ingredient_sodium_pyrophosphate"),
      ],
      images: [
        "/images/Product1/HisteriaMax1.webp",
        "/images/Product1/HisteriaMax2.webp",
        "/images/Product1/HisteriaMax3.webp",
      ],
      img: "/images/Product1/HisteriaMaxEaten.webp",
    },
    {
      id: 4,
      name: "Histeria Max Milk",
      category: "coated",
      description: t("product_desc_histeria_max_milk"),
      weight: "30g",
      packaging: t("product_packaging_30_12"),
      ingredients: [
        t("ingredient_sugar"),
        t("ingredient_vegetable_oil"),
        t("ingredient_wheat_flour"),
        t("ingredient_glucose"),
        t("ingredient_cocoa_powder"),
        t("ingredient_cocoa_mass"),
        t("ingredient_skim_milk"),
        t("ingredient_whole_milk"),
        t("ingredient_whey"),
        t("ingredient_dextrose"),
        t("ingredient_salt"),
        t("ingredient_soy_lecithin"),
        t("ingredient_flavor"),
        t("ingredient_ammonium_bicarbonate"),
        t("ingredient_sodium_bicarbonate"),
        t("ingredient_sodium_pyrophosphate"),
      ],
      images: [
        "/images/Product5/HisteriaMaxWhite1.webp",
        "/images/Product5/HisteriaMaxWhite2.webp",
        "/images/Product5/HisteriaMaxWhite3.webp",
      ],
      img: "/images/Product5/HisteriaMaxWhiteEaten.webp",
    },
    {
      id: 5,
      name: "Opaliz",
      category: "coated",
      description: t("product_desc_opaliz"),
      weight: "28g",
      packaging: t("product_packaging_28_12"),
      ingredients: [
        t("ingredient_sugar"),
        t("ingredient_vegetable_oil"),
        t("ingredient_wheat_flour"),
        t("ingredient_glucose"),
        t("ingredient_cocoa_powder"),
        t("ingredient_cocoa_mass"),
        t("ingredient_skim_milk"),
        t("ingredient_whole_milk"),
        t("ingredient_whey"),
        t("ingredient_gelatin"),
        t("ingredient_soy_lecithin"),
        t("ingredient_glycerin"),
        t("ingredient_dextrose"),
        t("ingredient_modified_starch"),
        t("ingredient_sodium_pyrophosphate"),
        t("ingredient_sodium_bicarbonate"),
        t("ingredient_ammonium_bicarbonate"),
        t("ingredient_citric_acid"),
        t("ingredient_salt"),
        t("ingredient_flavor"),
      ],
      images: [
        "/images/Product4/Opaliz1.webp",
        "/images/Product4/Opaliz2.webp",
        "/images/Product4/Opaliz3.webp",
      ],
      img: "/images/Product4/OpalizEaten.webp",
    },
    {
      id: 6,
      name: "Bisco Jell Orange",
      category: "jelly",
      description: t("product_desc_bisco_jell_orange"),
      img: "/images/Product7/BiscojellOrangeEaten.webp",
      weight: "22g",
      packaging: t("product_packaging_22_6"),
      ingredients: [
        t("ingredient_sugar"),
        t("ingredient_vegetable_oil"),
        t("ingredient_water"),
        t("ingredient_wheat_flour"),
        t("ingredient_glucose"),
        t("ingredient_skim_milk"),
        t("ingredient_sorbitol"),
        t("ingredient_pectin"),
        t("ingredient_soy_lecithin"),
        t("ingredient_sodium_bicarbonate"),
        t("ingredient_ammonium_bicarbonate"),
        t("ingredient_salt"),
        t("ingredient_vanilla"),
        t("ingredient_potassium_sorbate"),
        t("ingredient_citric_acid"),
        t("ingredient_gelatin"),
        t("ingredient_flavor"),
        t("ingredient_color_e122_e110"),
      ],
      images: [
        "/images/Product7/BiscojellOrange1.webp",
        "/images/Product7/BiscojellOrange2.webp",
        "/images/Product7/BiscojellOrange3.webp",
      ],
    },
    {
      id: 7,
      name: "Bisco Jell Berry",
      category: "jelly",
      description: t("product_desc_bisco_jell_berry"),
      img: "/images/Product8/BiscojellBerryEaten.webp",
      weight: "22g",
      packaging: t("product_packaging_22_6"),
      ingredients: [
        t("ingredient_sugar"),
        t("ingredient_vegetable_oil"),
        t("ingredient_water"),
        t("ingredient_wheat_flour"),
        t("ingredient_glucose"),
        t("ingredient_skim_milk"),
        t("ingredient_sorbitol"),
        t("ingredient_pectin"),
        t("ingredient_soy_lecithin"),
        t("ingredient_sodium_bicarbonate"),
        t("ingredient_ammonium_bicarbonate"),
        t("ingredient_salt"),
        t("ingredient_vanilla"),
        t("ingredient_potassium_sorbate"),
        t("ingredient_citric_acid"),
        t("ingredient_gelatin"),
        t("ingredient_flavor"),
        t("ingredient_color_e133"),
      ],
      images: [
        "/images/Product8/BiscojellBerry1.webp",
        "/images/Product8/BiscojellBerry2.webp",
        "/images/Product8/BiscojellBerry3.webp",
      ],
    },
    {
      id: 8,
      name: "Bisco Jell Strawberry",
      category: "jelly",
      description: t("product_desc_bisco_jell_strawberry"),
      img: "/images/Product9/BiscojellStrawberryEaten.webp",
      weight: "22g",
      packaging: t("product_packaging_22_6"),
      ingredients: [
        t("ingredient_sugar"),
        t("ingredient_vegetable_oil"),
        t("ingredient_water"),
        t("ingredient_wheat_flour"),
        t("ingredient_glucose"),
        t("ingredient_skim_milk"),
        t("ingredient_sorbitol"),
        t("ingredient_pectin"),
        t("ingredient_soy_lecithin"),
        t("ingredient_sodium_bicarbonate"),
        t("ingredient_ammonium_bicarbonate"),
        t("ingredient_salt"),
        t("ingredient_vanilla"),
        t("ingredient_potassium_sorbate"),
        t("ingredient_citric_acid"),
        t("ingredient_gelatin"),
        t("ingredient_flavor"),
        t("ingredient_color_e122"),
      ],
      images: [
        "/images/Product9/BiscojellStrawberry1.webp",
        "/images/Product9/BiscojellStrawberry2.webp",
        "/images/Product9/BiscojellStrawberry3.webp",
      ],
    },
    {
      id: 9,
      name: "Bisco Jell Apricot",
      category: "jelly",
      description: t("product_desc_bisco_jell_apricot"),
      img: "/images/Product10/BiscojellApricotEaten.webp",
      weight: "22g",
      packaging: t("product_packaging_22_6"),
      ingredients: [
        t("ingredient_sugar"),
        t("ingredient_vegetable_oil"),
        t("ingredient_water"),
        t("ingredient_wheat_flour"),
        t("ingredient_glucose"),
        t("ingredient_skim_milk"),
        t("ingredient_sorbitol"),
        t("ingredient_pectin"),
        t("ingredient_soy_lecithin"),
        t("ingredient_sodium_bicarbonate"),
        t("ingredient_ammonium_bicarbonate"),
        t("ingredient_salt"),
        t("ingredient_vanilla"),
        t("ingredient_potassium_sorbate"),
        t("ingredient_citric_acid"),
        t("ingredient_gelatin"),
        t("ingredient_flavor"),
        t("ingredient_color_e122_e110"),
      ],
      images: [
        "/images/Product10/BiscojellApricot1.webp",
        "/images/Product10/BiscojellApricot2.webp",
        "/images/Product10/BiscojellApricot3.webp",
      ],
    },
    {
      id: 10,
      name: "Bisco Max",
      category: "cream",
      description: t("product_desc_bisco_max_choco"),
      img: "/images/Product12/BiscoMaxChocoEaten.webp",
      weight: "24g",
      packaging: t("product_packaging_24_6"),
      ingredients: [
        t("ingredient_sugar"),
        t("ingredient_vegetable_oil"),
        t("ingredient_wheat_flour"),
        t("ingredient_glucose"),
        t("ingredient_cocoa"),
        t("ingredient_skim_milk"),
        t("ingredient_whole_milk"),
        t("ingredient_whey"),
        t("ingredient_soy_lecithin"),
        t("ingredient_sodium_pyrophosphate"),
        t("ingredient_sodium_bicarbonate"),
        t("ingredient_ammonium_bicarbonate"),
        t("ingredient_salt"),
        t("ingredient_flavor"),
      ],
      images: [
        "/images/Product12/BiscoMaxChoco1.webp",
        "/images/Product12/BiscoMaxChoco2.webp",
        "/images/Product12/BiscoMaxChoco3.webp",
      ],
    },
    {
      id: 11,
      name: "Bisco Max",
      category: "cream",
      description: t("product_desc_bisco_max_choco_cream"),
      img: "/images/Product13/BiscoMaxChocoCreamEaten.webp",
      weight: "24g",
      packaging: t("product_packaging_24_6"),
      ingredients: [
        t("ingredient_sugar"),
        t("ingredient_vegetable_oil"),
        t("ingredient_wheat_flour"),
        t("ingredient_glucose"),
        t("ingredient_cocoa"),
        t("ingredient_skim_milk"),
        t("ingredient_whole_milk"),
        t("ingredient_whey"),
        t("ingredient_soy_lecithin"),
        t("ingredient_sodium_pyrophosphate"),
        t("ingredient_sodium_bicarbonate"),
        t("ingredient_ammonium_bicarbonate"),
        t("ingredient_salt"),
        t("ingredient_flavor"),
      ],
      images: [
        "/images/Product13/BiscoMaxChocoCream1.webp",
        "/images/Product13/BiscoMaxChocoCream2.webp",
        "/images/Product13/BiscoMaxChocoCream3.webp",
      ],
    },
    {
      id: 12,
      name: "Bisco Max",
      category: "cream",
      description: t("product_desc_bisco_max_cocoa"),
      img: "/images/Product14/BiscoMaxCocoaBiscuitEaten.webp",
      weight: "24g",
      packaging: t("product_packaging_24_6"),
      ingredients: [
        t("ingredient_sugar"),
        t("ingredient_vegetable_oil"),
        t("ingredient_wheat_flour"),
        t("ingredient_glucose"),
        t("ingredient_cocoa"),
        t("ingredient_skim_milk"),
        t("ingredient_whole_milk"),
        t("ingredient_whey"),
        t("ingredient_soy_lecithin"),
        t("ingredient_sodium_pyrophosphate"),
        t("ingredient_sodium_bicarbonate"),
        t("ingredient_ammonium_bicarbonate"),
        t("ingredient_salt"),
        t("ingredient_flavor"),
      ],
      images: [
        "/images/Product14/BiscoMaxCocoaBiscuit1.webp",
        "/images/Product14/BiscoMaxCocoaBiscuit2.webp",
        "/images/Product14/BiscoMaxCocoaBiscuit3.webp",
      ],
    },
    {
      id: 13,
      name: "Bisco Max",
      category: "cream",
      description: t("product_desc_bisco_max_choco_biscuit"),
      img: "/images/Product15/BiscoMaxChocoBiscuitEaten.webp",
      weight: "24g",
      packaging: t("product_packaging_24_6"),
      ingredients: [
        t("ingredient_sugar"),
        t("ingredient_vegetable_oil"),
        t("ingredient_wheat_flour"),
        t("ingredient_glucose"),
        t("ingredient_cocoa"),
        t("ingredient_skim_milk"),
        t("ingredient_whole_milk"),
        t("ingredient_whey"),
        t("ingredient_soy_lecithin"),
        t("ingredient_sodium_pyrophosphate"),
        t("ingredient_sodium_bicarbonate"),
        t("ingredient_ammonium_bicarbonate"),
        t("ingredient_salt"),
        t("ingredient_flavor"),
      ],
      images: [
        "/images/Product15/BiscoMaxChocoBiscuit1.webp",
        "/images/Product15/BiscoMaxChocoBiscuit2.webp",
        "/images/Product15/BiscoMaxChocoBiscuit3.webp",
      ],
    },
    {
      id: 14,
      name: "Bisco Max",
      category: "cream",
      description: t("product_desc_bisco_max_strawberry"),
      img: "/images/Product16/BiscoMaxStrawberryCreamEaten.webp",
      weight: "24g",
      packaging: t("product_packaging_24_6"),
      ingredients: [
        t("ingredient_sugar"),
        t("ingredient_vegetable_oil"),
        t("ingredient_wheat_flour"),
        t("ingredient_glucose"),
        t("ingredient_cocoa"),
        t("ingredient_skim_milk"),
        t("ingredient_whole_milk"),
        t("ingredient_whey"),
        t("ingredient_soy_lecithin"),
        t("ingredient_sodium_pyrophosphate"),
        t("ingredient_sodium_bicarbonate"),
        t("ingredient_ammonium_bicarbonate"),
        t("ingredient_salt"),
        t("ingredient_flavor"),
        t("ingredient_color_e122"),
      ],
      images: [
        "/images/Product16/BiscoMaxStrawberryCream1.webp",
        "/images/Product16/BiscoMaxStrawberryCream2.webp",
        "/images/Product16/BiscoMaxStrawberryCream3.webp",
      ],
    },
    {
      id: 15,
      name: "Bisco Max",
      category: "cream",
      description: t("product_desc_bisco_max_coffee"),
      img: "/images/Product17/BiscoMaxCoffeeEaten.webp",
      weight: "24g",
      packaging: t("product_packaging_24_6"),
      ingredients: [
        t("ingredient_sugar"),
        t("ingredient_vegetable_oil"),
        t("ingredient_wheat_flour"),
        t("ingredient_glucose"),
        t("ingredient_cocoa"),
        t("ingredient_skim_milk"),
        t("ingredient_whole_milk"),
        t("ingredient_whey"),
        t("ingredient_soy_lecithin"),
        t("ingredient_sodium_pyrophosphate"),
        t("ingredient_sodium_bicarbonate"),
        t("ingredient_ammonium_bicarbonate"),
        t("ingredient_salt"),
        t("ingredient_flavor"),
      ],
      images: [
        "/images/Product17/BiscoMaxCoffee1.webp",
        "/images/Product17/BiscoMaxCoffee2.webp",
        "/images/Product17/BiscoMaxCoffee3.webp",
      ],
    },
    {
      id: 16,
      name: "Bisco Max",
      category: "cream",
      description: t("product_desc_bisco_max_caramel"),
      img: "/images/Product18/BiscoMaxCaramelEaten.webp",
      weight: "24g",
      packaging: t("product_packaging_24_6"),
      ingredients: [
        t("ingredient_sugar"),
        t("ingredient_vegetable_oil"),
        t("ingredient_wheat_flour"),
        t("ingredient_glucose"),
        t("ingredient_cocoa"),
        t("ingredient_skim_milk"),
        t("ingredient_whole_milk"),
        t("ingredient_whey"),
        t("ingredient_soy_lecithin"),
        t("ingredient_sodium_pyrophosphate"),
        t("ingredient_sodium_bicarbonate"),
        t("ingredient_ammonium_bicarbonate"),
        t("ingredient_salt"),
        t("ingredient_flavor"),
      ],
      images: [
        "/images/Product18/BiscoMaxCaramel1.webp",
        "/images/Product18/BiscoMaxCaramel2.webp",
        "/images/Product18/BiscoMaxCaramel3.webp",
      ],
    },
    {
      id: 17,
      name: "Bisco Max",
      category: "cream",
      description: t("product_desc_bisco_max_orange"),
      img: "/images/Product11/BiscoMaxOrangeEaten.webp",
      weight: "24g",
      packaging: t("product_packaging_24_6"),
      ingredients: [
        t("ingredient_sugar"),
        t("ingredient_vegetable_oil"),
        t("ingredient_wheat_flour"),
        t("ingredient_glucose"),
        t("ingredient_skim_milk"),
        t("ingredient_whole_milk"),
        t("ingredient_whey"),
        t("ingredient_soy_lecithin"),
        t("ingredient_sodium_pyrophosphate"),
        t("ingredient_sodium_bicarbonate"),
        t("ingredient_ammonium_bicarbonate"),
        t("ingredient_salt"),
        t("ingredient_flavor"),
        t("ingredient_color_e110"),
      ],
      images: [
        "images/Product11/BiscoMaxOrange1.webp",
        "images/Product11/BiscoMaxOrange2.webp",
        "images/Product11/BiscoMaxOrange3.webp",
      ],
    },
    {
      id: 18,
      name: "Hugy Moosh Milk",
      category: "cake",
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
      id: 19,
      name: "Hugy Moosh Dark",
      category: "cake",
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
    {
      id: 20,
      name: "Opaliz Pistachio",
      category: "coated",
      description: t("product_desc_opaliz_pistachio"),
      weight: "26g",
      packaging: t("product_packaging_30_12"),
      ingredients: [
        t("ingredient_wheat_flour"),
        t("ingredient_sugar"),
        t("ingredient_vegetable_oil"),
        t("ingredient_cocoa_powder"),
        t("ingredient_cocoa_mass"),
        t("ingredient_skim_milk"),
        t("ingredient_whole_milk"),
        t("ingredient_whey"),
        t("ingredient_soy_lecithin"),
        t("ingredient_dextrose"),
        t("ingredient_modified_starch"),
        t("ingredient_raising_agents_simple"),
        t("ingredient_salt"),
        t("ingredient_flavor"),
        t("ingredient_monoglyceride"),
        t("ingredient_pistachio"),
        t("ingredient_color_e141"),
      ],
      images: [
        "/images/Product20/OpalizPistachio1.webp", // ضع المسارات الصحيحة للصور
        "/images/Product20/OpalizPistachio2.webp",
        "/images/Product20/OpalizPistachio3.webp",
      ],
      img: "/images/Product20/OpalizPistachioEaten.webp",
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
    <div className="biscuit-container">
      <div className={commonStyles.container}>
        <SectionHeader subtitle={t("products_quality_subtitle")} />

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

export default Products;
