import React, { useState } from 'react';
import axios from 'axios';
import Anavbar from './Anavbar';
import { useNavigate } from 'react-router-dom';

const AddProduct = ({ fetchProducts }) => {
  const [productData, setProductData] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    imgUrl: ''
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!productData.name || !productData.category || !productData.price || !productData.description || !productData.imgUrl) {
      setError('All fields are required!');
      setIsLoading(false);
      return;
    }

    try {
      await axios.post('http://localhost:7000/products', productData);
      alert('Product added successfully');
      navigate('/getproducts')
      fetchProducts(); // Fetch the updated list of products
      // Reset form fields
      setProductData({
        name: '',
        category: '',
        price: '',
        description: '',
        imgUrl: ''
      });
    } catch (error) {
      setError('There was an error adding the product!');
      console.error('Error in adding:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Anavbar/>
      <form onSubmit={handleSubmit} className="bg-orange-400 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Product</h2>
        <div className="mb-4">
          <label className="block text-black-900 text-sm font-bold mb-2" htmlFor="name">
           Product Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={productData.name}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="category">
            Category
          </label>
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={productData.category}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={productData.price}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={productData.description}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="imgUrl">
            Image URL
          </label>
          <input
            type="text"
            name="imgUrl"
            placeholder="Image URL"
            value={productData.imgUrl}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
          >
            {isLoading ? 'Adding...' : 'Add Product'}
          </button>
        </div>
        {error && <p className="text-red-500 text-xs italic mt-4">{error}</p>}
      </form>
    </div>
  );
};

export default AddProduct;
