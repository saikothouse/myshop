import { fetchProducts } from '../../utils/sellix';
import { useEffect, useState } from 'react';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (err) {
        setError('Failed to fetch products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return <div className="text-center">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={product.image_url} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-lg font-semibold mt-2">${product.price}</p>
              <a 
                href={product.payment_link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-500 text-white p-2 rounded mt-4 w-full text-center block hover:bg-blue-600 transition-colors duration-300"
              >
                Buy Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
