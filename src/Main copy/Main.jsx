import React, { useEffect, useState } from "react";
import Aos from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import "./Main.css";
import Loading from "../../Pages/Loading/Loading";

function Main() {
  const [loading, setLoading] = useState(true); // Track loading state
  const [products, setProducts] = useState(null); // Store dynamically loaded data

  useEffect(() => {
    Aos.init({ duration: 2000 });

    const fetchProducts = async () => {
      try {
        // Dynamically import the ProductsData
        const { ProductsData } = await import("./../../Data/ProductsData");
        setProducts(ProductsData); // Set the imported data
      } catch (error) {
        console.error("Error loading ProductsData:", error);
      } finally {
        setLoading(false); // Loading complete
      }
    };

    fetchProducts(); // Trigger data fetching
  }, []);

  if (loading) {
    return <Loading />; // Show loading indicator while data loads
  }

  if (!products || products.length === 0) {
    return <div>No products available</div>; // Fallback if data is unavailable
  }

  return (
    <section className="BG" dir="rtl">
      <section id="main" className="main container section">
        <div className="secTitle">
          <h3 data-aos="fade-right" data-aos-duration="1200" className="title">
            {/*Take A Look At Our Products */}
            ألق نظرة على منتجاتنا :
          </h3>
        </div>
        <div className="secContent grid">
          {products.map((product, index) => (
            <Link key={index} to={`/Product/${index}`}>
              <div
                data-aos="fade-up"
                data-aos-duration="1200"
                className="singleProduct"
              >
                <div className="imageDiv">
                  <img
                    src={product.Images[0]}
                    alt={product.title}
                    loading="lazy"
                  />
                </div>
                <div className="cardInfo">
                  <h4 className="productTitle">{product.title}</h4>
                  <div className="desc">
                    <p>{product.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Main;
