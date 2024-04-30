import React, { useEffect, useState } from "react";

interface Product {
  title: string;
  description: string;
  price: number;
  brand: string;
}

const Card: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const randomProductId = Math.floor(Math.random() * 100) + 1;
      const url = `https://dummyjson.com/products/${randomProductId}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data: Product = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div>
      {product && (
        <>
          <p>Título: {product.title}</p>
          <p>Descripción: {product.description}</p>
          <p>Precio: USD$ {product.price}</p>
          <p>Marca: {product.brand}</p>
        </>
      )}
    </div>
  );
};

export default Card;