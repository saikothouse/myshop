export const fetchProducts = async () => {
  const response = await fetch('https://dev.sellix.io/v1/products', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${process.env.SELLIX_API_KEY}`,
      'Content-Type': 'application/json',
    },
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  
  const data = await response.json();
  return data.data; // Adjust based on the actual API response structure
};
