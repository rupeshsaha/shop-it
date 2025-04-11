import React, { Suspense, lazy } from "react";
import "./Home.css"; 

const CardContainer = lazy(() => import("../../components/CardContainer/CardContainer"));

const Home = () => {
  return (
    <div className="home">
      <section className="hero-section">
        <div id="hero">
          <div className="hero-title">
            <h1>Made to Impress </h1>
            <p>Priced to Win</p>
            <a href="#products-section"><button className="cta-button" >Shop Now</button></a>
          </div>
        </div>
      </section>

      <section className="products-section" id="products-section">
        <div className="product-section-heading">OUR PRODUCTS</div>
        <Suspense fallback={<div>Loading products...</div>}>
          <CardContainer />
        </Suspense>
      </section>
    </div>
  );
};

export default Home;
