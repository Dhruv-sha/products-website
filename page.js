'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProductsPage() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch('http://localhost:5000/api/products');
    const data = await res.json();
    setProducts(data);
    setFilteredProducts(data); 
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-black">My Products</h2>
        <button
          onClick={() => router.push('/')}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Submit New Product
        </button>
      </div>

      <input
        type="text"
        placeholder="Search by product name..."
        value={searchQuery}
        onChange={handleSearch}
        className="w-full mb-6 p-2 border rounded text-black"
      />

      {/* Product cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded shadow">
              <h3 className="font-bold text-black">{product.name}</h3>
              <p className='text-black'>₹{product.price}</p>
              <p className="text-sm text-gray-600">{product.description}</p>
              {product.image && (
                <img
                  src={product.image}
                  alt="product"
                  className="w-full h-48 object-cover mt-2"
                />
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-600">No products found.</p>
        )}
      </div>
    </div>
  );
}
