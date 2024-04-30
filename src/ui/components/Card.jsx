import { useEffect, useState } from "react";

export const Card = () => {

    const [product, setProduct] = useState({});

    useEffect(() => {
        // Genera un número aleatorio entre 1 y 100 (o cualquier rango que desees)
        const randomProductId = Math.floor(Math.random() * 100) + 1;
        const url = `https://dummyjson.com/products/${randomProductId}`;

        fetch(url)
        .then(res => res.json())
        .then(data => {setProduct(data)})
    }, [])

    return (
        <div>
            <p>Título: {product.title}</p>
            <p>Descripción: {product.description}</p>
            <p>Precio: USD$ {product.price}</p>
            <p>Marca: {product.brand}</p>
        </div>
    )
  
};