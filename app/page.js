'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline mb-8">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <div key={product.uniqid} className="bg-white p-6 rounded-lg shadow-md">
            <Image 
              src={product.image} 
              alt={product.title} 
              width={500} 
              height={500} 
              className="object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-lg font-semibold">{product.price} {product.currency}</p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
