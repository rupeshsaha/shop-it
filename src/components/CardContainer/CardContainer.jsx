import React, { useEffect, useState } from "react";
import "./CardContainer.css";
import ProductCard from "../ProductCard/ProductCard";
import { Loader2 } from "lucide-react";

const CardContainer = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/categories");
        const catData = await res.json();
        setCategories(["All", ...catData]);
      } catch (error) {
        alert(`Error fetching categories: ${error}`);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const url =
          selectedCategory === "All"
            ? "https://fakestoreapi.com/products"
            : `https://fakestoreapi.com/products/category/${selectedCategory}`;
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        alert(`Error fetching products: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    setSearchQuery(""); // reset search on category change
  };

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="top-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="category-tags">
        {categories.map((cat, index) => (
          <span
            onClick={() => handleCategorySelection(cat)}
            key={index}
            className={`category-badge ${
              selectedCategory === cat ? "active-category" : ""
            }`}
          >
            {cat}
          </span>
        ))}
      </div>

      <div className="card-container">
        {isLoading ? (
          <Loader2 color="#ff3c5f" className="loader" />
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </>
  );
};

export default CardContainer;
