import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../User/Navbar';
import { Link } from 'react-router-dom';

const UProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:7000/products');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4 bg-gray-200">
        <h1 className="text-3xl font-bold mb-4 text-center">Products List</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-center">
          {products.map(product => (
            <div key={product._id} className="bg-green-50 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow w-72 mx-auto">
              <div className="w-full h-56 rounded-t-lg overflow-hidden flex items-center justify-center">
                <img src={product.imgUrl} alt={product.name} className="max-h-full w-full border-none" />
              </div>
              <div className="mt-2">
                <h2 className="text-2xl font-semibold text-center">{product.name}</h2>
              </div>
              <div className="p-4">
                <p className="text-black mb-2">
                  Category: <span className='font-bold'>{product.category}</span>
                </p>
                <p className="text-black mb-2">
                  Price: <span className='font-bold'>{product.price}</span>
                </p>
                <p className="text-black mb-4">
                  Description: <span className='font-bold'>{product.description}</span>
                </p>
                <button className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors">
                <Link to={`/buyproduct/${product._id}`} style={{ color: 'white', textDecoration: 'none',fontSize:"18px" }}>
                      Buy Now
                    </Link>
                </button>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UProducts;
