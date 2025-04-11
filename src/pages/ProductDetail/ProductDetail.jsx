import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./ProductDetail.css";
import { CartContext } from "../../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const { addToCart, cartItems } = useContext(CartContext);

  const isInCart = cartItems.some((item) => item.id === parseInt(id));

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${parseInt(id)}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        alert(`Error fetching product: ${error}`);
      }
    };
    fetchProducts();
  }, [id]);

  // ✅ Skeleton while loading
  if (!product) {
    return (
      <div className="product-container">
        <div className="product-image skeleton-img" />
        <div className="product-details">
          <div className="skeleton-title" />
          <div className="skeleton-price" />
          <div className="skeleton-rating" />
          <div className="skeleton-description" />
          <div className="skeleton-button" />
        </div>
      </div>
    );
  }

  // ✅ Show product after loading
  return (
    <div className="product-container">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-category">{product.category}</p>
        <div className="product-price">$ {product.price}</div>
        <div className="product-rating">
          ⭐ {product.rating.rate} | {product.rating.count} ratings
        </div>
        <p className="product-description">{product.description}</p>
        {isInCart ? (
          <button className="add-to-cart" onClick={() => navigate("/cart")}>
            Go to Cart
          </button>
        ) : (
          <button className="add-to-cart" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
