import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Navigation
          nav_home: "Home",
          nav_about: "About Us",
          nav_products: "Products",
          nav_contact: "Contact Us",
          view_products: "Discover Our Products",
          why_biscoza: "Why Biscoza?",
          excellence_title: "Excellence in every detail",
          products_subtitle: "A variety for all tastes",
          browse_products: "Browse Products",
          biscuits: "Biscuits",
          cake: "Cake",

          // Slider
          hero_slide1_title: "Taste that touches the soul",
          hero_slide1_highlight: "soul",
          hero_slide1_desc:
            "We create happiness in every piece, with natural ingredients",
          hero_slide2_title: "Quality you can trust",
          hero_slide2_highlight: "trust",
          hero_slide2_desc: "Highest international manufacturing standards",
          hero_slide3_title: "A story for every moment",
          hero_slide3_highlight: "story",
          hero_slide3_desc: "Share the most delicious moments with your family",

          // Home Features
          feat1_title: "Global Quality",
          feat1_desc: "We adhere to the strictest quality standards",
          feat2_title: "Made with Love",
          feat2_desc: "Every product carries our team's passion",
          feat3_title: "Guaranteed Safety",
          feat3_desc: "Latest technologies for 100% safety and cleanliness",

          // About Us Page
          about_hero_badge: "Syrian success story since 2023",
          about_hero_title: "Taste that takes you to a",
          about_hero_highlight: "World of Happiness",
          about_hero_desc:
            "At Biscoza, we blend passion with the finest natural ingredients to offer you biscuits that carry a moment of true joy in every piece",
          about_hero_btn: "Taste Our Products",
          about_stat_items: "Special Varieties",
          about_stat_quality: "Global Quality",
          about_story_title: "The Story of Founding Biscoza",
          about_story_text1:
            "A Syrian company specialized in the biscuit industry, founded in 2023 with a great passion for providing high-quality products that combine premium ingredients and delicious varieties to provide an exceptional taste experience",
          about_story_text2:
            "Since we started at Biscoza, we have been keen on using the finest ingredients to produce high-quality varieties of filled biscuits, chocolate-dipped, and delicious marshmallows, incorporating our distinct recipes to add moments of happiness to your daily life",
          about_quote:
            "We believe a piece of biscuit can be a reason for happiness during your day",
          about_quality_title: "Our Commitment to",
          about_quality_highlight: "Quality and Excellence",
          about_quality_desc:
            "Our commitment to quality, excellence, and international standards is what drives us. Our laboratories and production lines are fully managed by computers and automated control without human intervention, ensuring the highest hygiene and choosing premium packaging that befits Biscoza products",
          about_feat1_title: "Finest Ingredients",
          about_feat1_desc:
            "We select premium wheat, rich cocoa, and natural ingredients to guarantee an unforgettable taste",
          about_feat2_title: "Advanced Technology",
          about_feat2_desc:
            "Fully automated production lines to ensure the highest standards of hygiene and precision",
          about_feat3_title: "Global Quality",
          about_feat3_desc:
            "We adhere to international quality standards in manufacturing and packaging",
          about_feat4_title: "Our Passion is Happiness",
          about_feat4_desc:
            "Every recipe we create aims to draw a smile and add a moment of joy",
          about_taste_unresistable: "Irresistible Taste",

          // Products Page
          products_browse: "Browse Our Products",
          products_quality_subtitle: "Quality & Excellence",

          // Product Filters
          products_filter_marshmallow: "Marshmallow Biscuits",
          products_filter_coated: "Chocolate Coated",
          products_filter_jelly: "Jelly Biscuits",
          products_filter_cream: "Cream Filled",
          products_filter_cake: "Marshmallow Cake",

          // Product Descriptions - موحدة
          product_desc_hugy_puff: "Marshmallow biscuits topped with vermicelli",
          product_desc_bisco_moosh:
            "Marshmallow filled biscuit dipped in chocolate",
          product_desc_histeria_max:
            "Chocolate cream filled biscuit dipped in chocolate",
          product_desc_histeria_max_milk:
            "Milk cream filled biscuit dipped in chocolate",
          product_desc_opaliz: "Caramel filled biscuit dipped in chocolate",
          product_desc_opaliz_pistachio:
            "Pistachio filled biscuit dipped in chocolate",
          product_desc_bisco_jell_orange: "Biscuit with orange jelly",
          product_desc_bisco_jell_berry: "Biscuit with mixed berry jelly",
          product_desc_bisco_jell_strawberry: "Biscuit with strawberry jelly",
          product_desc_bisco_jell_apricot: "Biscuit with apricot jelly",
          product_desc_bisco_max_choco:
            "Chocolate biscuit with milk cream filling",
          product_desc_bisco_max_choco_cream:
            "Milk biscuit with chocolate cream filling",
          product_desc_bisco_max_cocoa: "Cocoa biscuit with milk cream filling",
          product_desc_bisco_max_choco_biscuit:
            "Cocoa biscuit with chocolate cream filling",
          product_desc_bisco_max_strawberry:
            "Milk biscuit with strawberry cream filling",
          product_desc_bisco_max_coffee:
            "Coffee biscuit with coffee cream filling",
          product_desc_bisco_max_caramel:
            "Caramel biscuit with caramel cream filling",
          product_desc_bisco_max_orange:
            "Milk biscuit with orange cream filling",
          product_desc_hugy_moosh_milk:
            "Milk cake with marshmallow dipped in chocolate",
          product_desc_hugy_moosh_dark:
            "Chocolate cake with marshmallow dipped in chocolate",

          // Packaging Information
          product_packaging_24_6: "6 boxes / carton - 24 pieces / box",
          product_packaging_30_12: "12 boxes / carton - 12 pieces / box",
          product_packaging_28_12: "12 boxes / carton - 12 pieces / box",
          product_packaging_22_6: "6 boxes / carton - 24 pieces / box",

          // Ingredients - Common
          ingredient_wheat_flour: "Wheat Flour",
          ingredient_sugar: "Sugar",
          ingredient_glucose: "Glucose",
          ingredient_vegetable_oil: "Fully Hydrogenated Vegetable Oils",
          ingredient_skim_milk: "Skimmed Milk Powder",
          ingredient_whey: "Whey",
          ingredient_sorbitol: "Sorbitol E420",
          ingredient_gelatin: "Beef Gelatin",
          ingredient_glycerin: "Glycerin",
          ingredient_salt: "Salt",
          ingredient_monoglyceride: "Monoglyceride",
          ingredient_flavor: "Nature-identical Flavors",
          ingredient_soy_lecithin: "Soy Lecithin (Emulsifier E322)",
          ingredient_potassium_sorbate: "Potassium Sorbate E202 (Preservative)",
          ingredient_raising_agents:
            "Raising Agents (Sodium Pyrophosphate E450-1, Sodium Bicarbonate, Ammonium Bicarbonate)",
          ingredient_cocoa: "Natural Cocoa",
          ingredient_cocoa_mass: "Cocoa Mass",
          ingredient_whole_milk: "Whole Milk Powder",
          ingredient_sodium_pyrophosphate:
            "Sodium Pyrophosphate (Raising Agent)",
          ingredient_ammonium_bicarbonate:
            "Ammonium Bicarbonate (Raising Agent)",
          ingredient_cocoa_powder: "Cocoa Powder",
          ingredient_dextrose: "Dextrose",
          ingredient_sodium_bicarbonate: "Sodium Bicarbonate (Raising Agent)",
          ingredient_modified_starch: "Modified Starch",
          ingredient_citric_acid: "Citric Acid",
          ingredient_water: "Water",
          ingredient_pectin: "Pectin",
          ingredient_vanilla: "Vanilla",
          ingredient_eggs: "Fresh Eggs",
          ingredient_cake_gel: "Cake Gel",
          ingredient_flavor_vanilla_milk_butter:
            "Flavors (Vanilla, Milk, Butter)",
          ingredient_propylene_glycol: "Propylene Glycol",
          ingredient_color_e122: "Natural Color E122",
          ingredient_color_e133: "Natural Color E133",
          ingredient_color_e110: "Natural Color E110",
          ingredient_color_e122_e110: "Natural Colors (E122 - E110)",
          ingredient_pistachio: "Pistachio",
          ingredient_color_e141: "Color E141",
          ingredient_raising_agents_simple: "Raising Agents",

          // Cake
          cake_browse: "Browse Cake Products",
          cake_quality_subtitle: "Quality & Excellence",
          cake_filter_marshmallow: "Cake with Marshmallow",

          // Biscuits
          biscuits_browse: "Browse Biscuits Products",
          biscuits_quality_subtitle: "Quality & Excellence",
          biscuits_filter_marshmallow: "Marshmallow Biscuits",
          biscuits_filter_coated: "Chocolate Coated",
          biscuits_filter_jelly: "Jelly Biscuits",
          biscuits_filter_cream: "Cream Filled",

          // ProductDetails
          product_details_back: "Back",
          product_details_title: "Product Details",
          product_details_about: "About Product",
          product_details_weight: "Net Weight",
          product_details_packaging: "Packaging Type",
          product_details_ingredients: "Ingredients",
          product_details_not_specified: "Not specified",
          product_details_standard_packaging: "Standard packaging",

          // Contact Us Page
          contact_welcome: "Contact Us",
          contact_hero_part1: "We are here",
          contact_hero_part2: "for your",
          contact_hero_highlight: "happiness",
          contact_hero_desc:
            "At Biscoza, every message we receive is a new step towards excellence. Our team is always ready to listen to you and provide the best possible experience.",
          contact_card1_title: "Customer Service",
          contact_card1_sub: "Ready to answer your inquiries",
          contact_card1_btn: "Call Us",
          contact_card2_title: "Email Contact",
          contact_card2_sub: "For business inquiries and agencies",
          contact_card2_btn: "Email the Team",
          contact_card3_title: "WhatsApp Direct",
          contact_card3_sub: "Instant and fast chat",
          contact_card3_btn: "Start Chat",
          contact_copy: "Copy",
          contact_copied: "Copied!",
          contact_location_title1: "Where to",
          contact_location_title2: "find us?",
          contact_location_desc:
            "Our factory is the heart of our operations, located in a strategic area that combines industrial heritage and technological development.",
          contact_location_address_title: "Main Address",
          contact_location_address_line1:
            "Syrian Arab Republic, Rural Damascus",
          contact_location_address_line2:
            "Daria Al-Qabaliya - Behind Town Center",
          contact_social_title: "Join the Biscoza Digital Family",
          contact_social_desc:
            "Follow us to be part of our story and special moments",
          contact_facebook_followers: "100K monthly visits",
          contact_instagram_followers: "120K monthly visits",

          // Footer
          footer_mission_part1:
            "At Biscoza, we believe a piece of biscuit can be a reason for happiness during your day",
          footer_mission_part2:
            "We always strive to provide the best by merging natural ingredients with the latest technologies",
          footer_quick_links: "Quick Links",
          footer_contact_info: "Contact Info",
          footer_headquarters: "Headquarters",
          footer_address:
            "Rif Dimashq - Darayya Al-Qibliya - Behind Town Center",
          footer_customer_service: "Customer Service",
          footer_email_us: "Email Us",
          footer_rights: "All Rights Reserved",
        },
      },
      ar: {
        translation: {
          // Navigation
          nav_home: "الرئيسية",
          nav_about: "من نحن",
          nav_products: "منتجاتنا",
          nav_contact: "تواصل معنا",
          view_products: "اكتشف منتجاتنا",
          why_biscoza: "لماذا بيسكوزا؟",
          excellence_title: "تميز في كل تفصيل",
          products_subtitle: "تشكيلة تناسب جميع الأذواق",
          browse_products: "تصفح المنتجات",
          biscuits: "بسكويت",
          cake: "كيك",

          // Slider
          hero_slide1_title: "طعم يلامس الروح",
          hero_slide1_highlight: "الروح",
          hero_slide1_desc:
            "نصنع السعادة في كل قطعة، بمكونات طبيعية وشغف لا ينتهي.",
          hero_slide2_title: "جودة تستحق الثقة",
          hero_slide2_highlight: "الثقة",
          hero_slide2_desc:
            "أعلى معايير التصنيع العالمية لنقدم لكم الأفضل دائماً.",
          hero_slide3_title: "لكل لحظة حكاية",
          hero_slide3_highlight: "حكاية",
          hero_slide3_desc:
            "شارك عائلتك وأصدقائك ألذ اللحظات مع تشكيلتنا المميزة.",

          // Home Features
          feat1_title: "جودة عالمية",
          feat1_desc: "نلتزم بأدق معايير الجودة في كل خطوة من خطوات التصنيع.",
          feat2_title: "صُنع بحب",
          feat2_desc: "كل منتج يخرج من مصنعنا يحمل معه شغف فريقنا وتفانيه.",
          feat3_title: "سلامة مضمونة",
          feat3_desc: "أحدث التقنيات لضمان سلامة ونظافة منتجاتنا بنسبة 100%.",

          // About Us Page
          about_hero_badge: "قصة نجاح سورية منذ 2023",
          about_hero_title: "طعم يأخذك إلى",
          about_hero_highlight: "عالم السعادة",
          about_hero_desc:
            "في بيسكوزا، نمزج الشغف بأجود المكونات الطبيعية لنقدم لكم بسكويت يحمل في كل قطعة منه لحظة فرح حقيقية.",
          about_hero_btn: "تذوق منتجاتنا",
          about_stat_items: "صنف مميز",
          about_stat_quality: "جودة عالمية",
          about_story_title: "حكاية تأسيس بيسكوزا",
          about_story_text1:
            "شركة سورية متخصصة في صناعة البسكويت تأسست عام 2023 بشغف كبير لتقديم منتجات عالية الجودة تجمع بين المكونات المتميزة والأصناف اللذيذة لتوفر تجربة طعم استثنائية لكل من يتذوقها.",
          about_story_text2:
            "نحن في شركة بيسكوزا منذ أن بدأنا نحرص على استخدام أجود المكونات لإنتاج أصناف ذات جودة عالية من البسكويت المحشي والمغطس بالشوكولا والمارشميلو اللذيذ مع إدخال وصفاتنا الشهيّة والمتميزة لتضفي لحظات من السعادة على حياتكم اليومية.",
          about_quote:
            "نؤمن أن قطعة من البسكويت قد تكون سبباً لسعادة تشعر بها خلال يومك",
          about_quality_title: "التزامنا",
          about_quality_highlight: "بالجودة والتميز",
          about_quality_desc:
            "التزامنا بالجودة والتميز والمعايير العالمية لتحقيق رضا زبائننا هو ما يدفعنا للحفاظ على أعلى المعايير في كل منتج نقدمه. المختبرات وخطوط الإنتاج مُدارة بالكامل من قبل أجهزة الكومبيوتر والتحكم الآلي دون تدخل العامل البشري، حتى اختيار الأغلفة الراقية التي تليق بمنتجاتنا.",
          about_feat1_title: "أجود المكونات",
          about_feat1_desc:
            "ننتقي القمح الفاخر، الكاكاو الغني، والمكونات الطبيعية لنضمن طعماً لا ينسى.",
          about_feat2_title: "تكنولوجيا متطورة",
          about_feat2_desc:
            "خطوط إنتاج مؤتمتة بالكامل لضمان أعلى معايير النظافة والدقة في كل قطعة.",
          about_feat3_title: "جودة عالمية",
          about_feat3_desc:
            "نلتزم بمعايير الجودة العالمية في التصنيع والتغليف لتقديم منتج يليق بكم.",
          about_feat4_title: "شغفنا السعادة",
          about_feat4_desc:
            "كل وصفة نبتكرها هدفها الأساسي هو رسم الابتسامة وإضافة لحظة فرح.",
          about_taste_unresistable: "طعم لا يقاوم",

          // Products Page
          products_browse: "تصفح منتجاتنا",
          products_quality_subtitle: "جودة وفخامة",

          // Product Filters
          products_filter_marshmallow: "بسكويت مع مارشميلو",
          products_filter_coated: "بسكويت مغطس",
          products_filter_jelly: "بسكويت مع الجيلي",
          products_filter_cream: "بسكويت محشي بالكريمة",
          products_filter_cake: "كيك محشي بالمارشميلو",

          // Product Descriptions - موحدة
          product_desc_hugy_puff: "بسكويت مع المارشميلو مغطى بالفارماسيل",
          product_desc_bisco_moosh: "بسكويت محشي بالمارشميللو المغطس بالشوكولا",
          product_desc_histeria_max:
            "بسكويت محشي بكريمة الشوكولا و المغطس بالشوكولا",
          product_desc_histeria_max_milk:
            "بسكويت محشي بكريم الحليب المغطس بالشوكولا",
          product_desc_opaliz: "بسكويت مع الكراميل المغطس بالشوكولا",
          product_desc_opaliz_pistachio: "بسكويت مع البستاشيو المغطس بالشوكولا",
          product_desc_bisco_jell_orange: "بسكويت مع جيلي البرتقال",
          product_desc_bisco_jell_berry: "بسكويت مع جيلي التوت المشكل",
          product_desc_bisco_jell_strawberry: "بسكويت مع جيلي الفريز",
          product_desc_bisco_jell_apricot: "بسكويت مع جيلي المشمش",
          product_desc_bisco_max_choco: "بسكويت الكاكاو محشي بكريم الحليب",
          product_desc_bisco_max_choco_cream:
            "بسكويت الحليب محشي بكريم الشوكولا",
          product_desc_bisco_max_cocoa: "بسكويت الكاكاو محشي بكريم الحليب",
          product_desc_bisco_max_choco_biscuit:
            "بسكويت الكاكاو محشي بكريم الشوكولا",
          product_desc_bisco_max_strawberry: "بسكويت الحليب محشي بكريم الفريز",
          product_desc_bisco_max_coffee: "بسكويت القهوة محشي بكريم القهوة",
          product_desc_bisco_max_caramel: "بسكويت الكراميل محشي بكريم الكراميل",
          product_desc_bisco_max_orange: "بسكويت الحليب محشي بكريم البرتقال",
          product_desc_hugy_moosh_milk:
            "كيك الحليب مع المارشميللو المغطس بالشوكولا",
          product_desc_hugy_moosh_dark:
            "كيك الشوكولا مع المارشميللو المغطس بالشوكولا",

          // Packaging Information
          product_packaging_24_6: "6 علبة / طرد - 24 قطعة / علبة",
          product_packaging_30_12: "12 علبة / الطرد - 12 قطعة / العلبة",
          product_packaging_28_12: "12 علبة / الطرد - 12 قطعة / العلبة",
          product_packaging_22_6: "6 علبة / الطرد - 24 قطعة / العلبة",

          // Ingredients - Common
          ingredient_wheat_flour: "دقيق الطحين",
          ingredient_sugar: "سكر",
          ingredient_glucose: "جلكوز",
          ingredient_vegetable_oil: "زيوت نباتية مهدرجة بالكامل",
          ingredient_skim_milk: "حليب خالي الدسم بودرة",
          ingredient_whey: "مصل الحليب",
          ingredient_sorbitol: "سوربيتول E420",
          ingredient_gelatin: "جيلاتين بقري",
          ingredient_glycerin: "غليسرين",
          ingredient_salt: "ملح الطعام",
          ingredient_monoglyceride: "مونوغلسرايد",
          ingredient_flavor: "منكهات مماثلة للطبيعة",
          ingredient_soy_lecithin: "ليستين الصويا (مستحلب E322)",
          ingredient_potassium_sorbate: "سوربات البوتاسيوم E202 (مواد حافظة)",
          ingredient_raising_agents:
            "مواد رافعة (بيروفوسفات الصوديوم E450-1 , بيكربونات الصوديوم , بيكربونات الامونيوم)",
          ingredient_cocoa: "كاكاو طبيعي",
          ingredient_cocoa_mass: "كتلة الكاكاو",
          ingredient_whole_milk: "حليب كامل الدسم",
          ingredient_sodium_pyrophosphate: "بيروفوسفات الصوديوم (مواد رافعة)",
          ingredient_ammonium_bicarbonate: "بيكربونات الأمونيوم (مواد رافعة)",
          ingredient_cocoa_powder: "بودرة الكاكاو",
          ingredient_dextrose: "ديكستروز",
          ingredient_sodium_bicarbonate: "بيكربونات الصوديوم (مواد رافعة)",
          ingredient_modified_starch: "نشاء معدل",
          ingredient_citric_acid: "حمض الليمون",
          ingredient_water: "ماء",
          ingredient_pectin: "بكتين",
          ingredient_vanilla: "فانيليا",
          ingredient_eggs: "بيض",
          ingredient_cake_gel: "كيك جيل",
          ingredient_flavor_vanilla_milk_butter: "نكهات (فانيليا، حليب، زبدة)",
          ingredient_propylene_glycol: "بروبلين جليكول",
          ingredient_color_e122: "ملون غذائي E122",
          ingredient_color_e133: "ملون غذائي E133",
          ingredient_color_e110: "ملون غذائي E110",
          ingredient_color_e122_e110: "ملونات طبيعية (E122 - E110)",
          ingredient_pistachio: "فستق حلب",
          ingredient_color_e141: "ملون E141",
          ingredient_raising_agents_simple: "مواد رافعة",

          // Cake
          cake_browse: "تصفح منتجات الكيك",
          cake_quality_subtitle: "جودة وفخامة",
          cake_filter_marshmallow: "كيك مع المارشميلو",

          // Biscuits
          biscuits_browse: "تصفح منتجات البسكويت",
          biscuits_quality_subtitle: "جودة وفخامة",
          biscuits_filter_marshmallow: "بسكويت مع مارشميلو",
          biscuits_filter_coated: "بسكويت مغطس",
          biscuits_filter_jelly: "بسكويت مع الجيلي",
          biscuits_filter_cream: "بسكويت محشي بالكريمة",

          // ProductDetails
          product_details_back: "الرجوع للخلف",
          product_details_title: "تفاصيل المنتج",
          product_details_about: "عن المنتج",
          product_details_weight: "الوزن الصافي",
          product_details_packaging: "نوع التعبئة",
          product_details_ingredients: "المكونات",
          product_details_not_specified: "غير محدد",
          product_details_standard_packaging: "تعبئة مصنعية",

          // Contact Us Page
          contact_welcome: "تواصل معنا",
          contact_hero_part1: "نحن هنا",
          contact_hero_part2: "لأجل",
          contact_hero_highlight: "سعادتك",
          contact_hero_desc:
            "في بيسكوزا، كل رسالة تصلنا هي خطوة جديدة نحو التميز. فريقنا مستعد دائماً للاستماع إليك وتقديم أفضل تجربة ممكنة.",
          contact_card1_title: "خدمة العملاء",
          contact_card1_sub: "جاهزون للرد على استفساراتك",
          contact_card1_btn: "اتصل بنا",
          contact_card2_title: "للتواصل عبر الإيميل",
          contact_card2_sub: "للطلبات التجارية والوكالات",
          contact_card2_btn: "راسل الفريق",
          contact_card3_title: "واتساب مباشر",
          contact_card3_sub: "محادثة فورية وسريعة",
          contact_card3_btn: "ابدأ المحادثة",
          contact_copy: "نسخ",
          contact_copied: "تم!",
          contact_location_title1: "أين",
          contact_location_title2: "تجدنا؟",
          contact_location_desc:
            "مصنعنا هو قلب عملياتنا، يقع في منطقة استراتيجية تجمع بين عراقة الصناعة وتطور التكنولوجيا.",
          contact_location_address_title: "العنوان الرئيسي",
          contact_location_address_line1: "الجمهورية العربية السورية، ريف دمشق",
          contact_location_address_line2: "داريا القبلية - خلف التاون سنتر",
          contact_social_title: "انضم لعائلة بيسكوزا الرقمية",
          contact_social_desc: "تابعنا لتكون جزءاً من قصتنا ولحظاتنا المميزة",
          contact_facebook_followers: "100 ألف زيارة شهرية",
          contact_instagram_followers: "120 ألف زيارة شهرية",

          // Footer
          footer_mission_part1:
            "في بيسكوزا نؤمن أن قطعة من البسكويت قد تكون سبباً لسعادة تشعر بها خلال يومك",
          footer_mission_part2:
            "نسعى دائماً لتقديم الأفضل من خلال دمج المكونات الطبيعية مع أحدث تقنيات التصنيع.",
          footer_quick_links: "روابط تهمك",
          footer_contact_info: "معلومات التواصل",
          footer_headquarters: "المقر الرئيسي",
          footer_address: "ريف دمشق - داريا القبلية - خلف التاون سنتر",
          footer_customer_service: "خدمة العملاء",
          footer_email_us: "راسلنا",
          footer_rights: "جميع الحقوق محفوظة",
        },
      },
    },
    fallbackLng: "ar",
    debug: true, // فعّل وضع التصحيح مؤقتاً
    interpolation: { escapeValue: false },
  });

export default i18n;
