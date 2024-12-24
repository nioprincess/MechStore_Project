import React, { useState } from 'react';
import { Heart, Truck, RotateCcw } from 'lucide-react';
import { useLocation, useParams } from 'react-router';
import { Activity } from 'lucide-react'
import { FaWhatsapp } from "react-icons/fa";
import axios from '../API/axios';

const ProductPage = () => {
  const  productId= useParams().id;
  const images= useLocation().state.images;
  const product= useLocation().state.product;
  const[message, setMessage]= useState({
    productId:productId,
    email:"",
    phone:"",
    location:"",
    message:""
  });
  const handleChange= (e)=>{
    setMessage({...message,[e.target.name]:e.target.value});

  }
  const [currentImage, setCurrentImage]= useState(images[0])
  const whatsappLink = `https://wa.me/${import.meta.env.VITE_PHONE_NUMBER}`; 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const contactUs= async(e)=>{
    e.preventDefault();
    try { 
      const resp= await axios.post("/api/product/contact-us",JSON.stringify(message) )
      handleCloseModal();
      alert(resp.data.message);
    } catch (error) { 
      alert(error.message)
    }
  }
 
  return (
    <div className="container mx-auto px-4 py-6">
      
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left side - Images */}
        <div className="space-y-4">
          <div className="bg-amber-50 rounded-lg p-4">
            <img
              src= {currentImage}
              alt="Main hammer"
              className="w-full h-auto"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {images.map((image,index) => (
              <img
                key={index}
                src= {image}
                onClick={()=>setCurrentImage(image)}
                alt={`Hammer thumbnail ${index}`}
                className="w-full h-auto bg-gray-900 rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* Right side - Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.productName}</h1>
            <div className="flex items-center gap-2 mb-4">
               
              <span className="text-gray-500">{product.category}</span>
              <span className="ml-auto text-amber-600 bg-amber-50 px-2 py-1 rounded-md text-sm font-medium">
                 {product.status}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <div className="font-medium">Model</div>
                <div className="text-sm text-gray-500">
                   {product.type_model}
                </div>
              </div>
              
            </div>
            
            <div className="text-2xl font-bold mb-4">{String(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'RWF' }).format(product.price))}</div>
            <p className="text-gray-600">
               {product.description}
            </p>
          </div>

          <div className="border rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-4">
              <Truck className="w-6 h-6" />
              <div>
                <div className="font-medium">Vehicle Compatiblity</div>
                <div className="text-sm text-gray-500">
                   {product.vehicleCompatible}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <RotateCcw className="w-6 h-6" />
              <div>
                <div className="font-medium">Warranty</div>
                <div className="text-sm text-gray-500">
                   {product.warrantyPeriod}
                </div>
              </div>
              
            </div>
            <div className="flex items-center gap-4">
              <Activity className="w-6 h-6" />
              <div>
                <div className="font-medium">Conditions</div>
                <div className="text-sm text-gray-500">
                   {product.conditions}
                </div>
              </div>
              
            </div>
          </div>

        
          <div className="flex items-center gap-4">
           
            <button className="px-6 py-2 bg-gray-800 text-white hover:bg-gray-600 rounded" onClick={handleOpenModal}>
              Message Us
            </button>
            <button className="p-2 border rounded hover:bg-gray-50">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="w-6 h-6 text-green-700" />
            </a>
              
            </button>
            <button className="p-2 border rounded hover:bg-gray-50">
              <Heart className="w-6 h-6" />
            </button>
          </div>


          {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-1/3">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-bold">Send Us a Message</h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-800 float-right"
              >
                &times;
              </button>
            </div>
            <div className="p-6">
              <form onSubmit={contactUs}>
              <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    name='email'
                    type="email"
                    required
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    name='phone'
                    required
                    type="tel"
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <input
                    name='location'
                    required
                    type="text"
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                  name='message'
                  required
                  onChange={handleChange}
                    rows="4"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-gray-800 text-white hover:bg-gray-600 rounded"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

          
        </div>
      </div>
    </div>
  );
};

export default ProductPage;