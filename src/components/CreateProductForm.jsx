import React, { useState } from "react";

const CreateProductForm = ({ onAddProduct }) => {
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    type_model: "",
    vehicleCompatible: "",
    size: "",
    images: "",
    description: "",
    price: "",
    warrantyPeriod: "",
    conditions: "",
    status: "instock",
    dateAdded: new Date().toISOString(),
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(formData);
    setFormData({
      productName: "",
      category: "",
      type_model: "",
      vehicleCompatible: "",
      size: "",
      images: "",
      description: "",
      price: "",
      warrantyPeriod: "",
      conditions: "",
      status: "instock",
      dateAdded: new Date().toISOString(),
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-center mb-6">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="productName" className="block text-sm font-medium">
              Product Name
            </label>
            <input
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category" className="block text-sm font-medium">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="electronics">Electronics</option>
              <option value="parts">Parts</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="type_model" className="block text-sm font-medium">
              Type/Model
            </label>
            <input
              id="type_model"
              name="type_model"
              value={formData.type_model}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="vehicleCompatible" className="block text-sm font-medium">
              Vehicle Compatibility
            </label>
            <input
              id="vehicleCompatible"
              name="vehicleCompatible"
              value={formData.vehicleCompatible}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="size" className="block text-sm font-medium">
              Size
            </label>
            <input
              id="size"
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="price" className="block text-sm font-medium">
              Price
            </label>
            <input
              id="price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="warrantyPeriod" className="block text-sm font-medium">
              Warranty Period
            </label>
            <input
              id="warrantyPeriod"
              name="warrantyPeriod"
              value={formData.warrantyPeriod}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="status" className="block text-sm font-medium">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="instock">In Stock</option>
              <option value="outofstock">Out of Stock</option>
              <option value="preorder">Pre-order</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="images" className="block text-sm font-medium">
            Images
          </label>
          <input
            id="images"
            name="images"
            type="file"
            accept="image/*"
            multiple
            className="w-full border border-gray-300 rounded-md p-2"
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="description" className="block text-sm font-medium">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 h-32"
          ></textarea>
        </div>

        <div className="space-y-2">
          <label htmlFor="conditions" className="block text-sm font-medium">
            Conditions
          </label>
          <textarea
            id="conditions"
            name="conditions"
            value={formData.conditions}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 h-24"
          ></textarea>
        </div>

        <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default CreateProductForm;
