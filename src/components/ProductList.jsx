import React, { useEffect, useState } from "react";
import { db, collection, getDocs, doc, deleteDoc } from "../firebase";
import { Link, useLocation } from "react-router-dom";
import "./css/ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("search")?.toLowerCase() || "";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products: ", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on the search term, handling undefined values
  const filteredProducts = products.filter(
    (product) =>
      (product.productName?.toLowerCase() || "").includes(searchTerm) ||
      (product.description?.toLowerCase() || "").includes(searchTerm) ||
      (product.supplier?.toLowerCase() || "").includes(searchTerm) ||
      (product.category?.toLowerCase() || "").includes(searchTerm)
  );

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="product-list">
      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.productName}</h3>
            <p>Category: {product.category}</p>
            <p>{product.description}</p>
            <p>Supplier: {product.supplier}</p>
            <p>Stock: {product.stockQuantity}</p>
            <p>Price: Rs: {product.price}</p>
            <Link
              to="/Payment"
              state={{
                productName: product.productName,
                category: product.category,
                description: product.description,
                supplier: product.supplier,
                stockQuantity: product.stockQuantity,
                price: product.price,
              }}
            >
              <button className="add-to-card-btn">Add to Cart</button>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
