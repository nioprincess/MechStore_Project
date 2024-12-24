import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Pencil, Trash2, Eye } from 'lucide-react';

const ProductTable = ({ products }) => {
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editForm, setEditForm] = useState({
    productName: '',
    category: '',
    price: '',
    status: '',
    type_model: '',
    size: '',
    vehicleCompatible: '',
    warrantyPeriod: '',
    conditions: '',
    description: ''
  });

  const handleView = (product) => {
    setSelectedProduct(product);
    setShowViewModal(true);
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setEditForm(product);
    setShowEditModal(true);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting edit form:', editForm);
    setShowEditModal(false);
  };

  const handleDelete = (product) => {
    console.log('Delete product:', product);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Product Name</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Category</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Price</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Model</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Vehicle</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Status</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.productId} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-800">{product.productName}</td>
                <td className="px-4 py-3 text-sm text-gray-800">{product.category}</td>
                <td className="px-4 py-3 text-sm text-gray-800">${product.price}</td>
                <td className="px-4 py-3 text-sm text-gray-800">{product.type_model}</td>
                <td className="px-4 py-3 text-sm text-gray-800">{product.vehicleCompatible}</td>
                <td className="px-4 py-3 text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    product.status === 'instock' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleView(product)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleEdit(product)}
                      className="text-yellow-600 hover:text-yellow-800"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDelete(product)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Product Modal */}
      <Modal show={showViewModal} onHide={() => setShowViewModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Product Name</h3>
                  <p className="mt-1">{selectedProduct.productName}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Category</h3>
                  <p className="mt-1">{selectedProduct.category}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Price</h3>
                  <p className="mt-1">${selectedProduct.price}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Model Type</h3>
                  <p className="mt-1">{selectedProduct.type_model}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Size</h3>
                  <p className="mt-1">{selectedProduct.size}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Vehicle Compatibility</h3>
                  <p className="mt-1">{selectedProduct.vehicleCompatible}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Warranty Period</h3>
                  <p className="mt-1">{selectedProduct.warrantyPeriod}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Date Added</h3>
                  <p className="mt-1">{formatDate(selectedProduct.dateAdded)}</p>
                </div>
                <div className="col-span-2">
                  <h3 className="text-sm font-medium text-gray-500">Conditions</h3>
                  <p className="mt-1">{selectedProduct.conditions}</p>
                </div>
                <div className="col-span-2">
                  <h3 className="text-sm font-medium text-gray-500">Description</h3>
                  <p className="mt-1">{selectedProduct.description}</p>
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => setShowViewModal(false)}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>

      {/* Edit Product Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleEditSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Product Name</label>
                <input
                  type="text"
                  value={editForm.productName}
                  onChange={(e) => setEditForm({...editForm, productName: e.target.value})}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Category</label>
                <input
                  type="text"
                  value={editForm.category}
                  onChange={(e) => setEditForm({...editForm, category: e.target.value})}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Price</label>
                <input
                  type="number"
                  value={editForm.price}
                  onChange={(e) => setEditForm({...editForm, price: e.target.value})}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Model Type</label>
                <input
                  type="text"
                  value={editForm.type_model}
                  onChange={(e) => setEditForm({...editForm, type_model: e.target.value})}
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Size</label>
                <input
                  type="text"
                  value={editForm.size}
                  onChange={(e) => setEditForm({...editForm, size: e.target.value})}
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Vehicle Compatibility</label>
                <input
                  type="text"
                  value={editForm.vehicleCompatible}
                  onChange={(e) => setEditForm({...editForm, vehicleCompatible: e.target.value})}
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Warranty Period</label>
                <input
                  type="text"
                  value={editForm.warrantyPeriod}
                  onChange={(e) => setEditForm({...editForm, warrantyPeriod: e.target.value})}
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Status</label>
                <select
                  value={editForm.status}
                  onChange={(e) => setEditForm({...editForm, status: e.target.value})}
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="instock">In Stock</option>
                  <option value="outofstock">Out of Stock</option>
                </select>
              </div>

              <div className="col-span-2 space-y-2">
                <label className="text-sm font-medium text-gray-700">Conditions</label>
                <textarea
                  value={editForm.conditions}
                  onChange={(e) => setEditForm({...editForm, conditions: e.target.value})}
                  className="w-full p-2 border rounded-lg"
                  rows="3"
                />
              </div>

              <div className="col-span-2 space-y-2">
                <label className="text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={editForm.description}
                  onChange={(e) => setEditForm({...editForm, description: e.target.value})}
                  className="w-full p-2 border rounded-lg"
                  rows="3"
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => setShowEditModal(false)}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleEditSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductTable;