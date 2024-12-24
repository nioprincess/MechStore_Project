import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Star, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const images = product.images.split(",").map((image) => {
      return `${import.meta.env.VITE_SERVER_URL}/uploads/${image}`;
    });
    setImages(images);
  }, [product]);

  // Function to render star rating
  const renderStars = (rating, totalReviews) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className="w-4 h-4"
            fill="#22C55E"
            color="#22C55E"
          />
        ))}
        <span className="text-gray-500 text-sm">({totalReviews})</span>
      </div>
    );
  };

  return (
    <div className="relative w-64 bg-white rounded-lg overflow-hidden">
      {/* Main product image */}
      <div className="aspect-square bg-white p-4">
        <img
          src={images[0]}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Product information */}
      <div className="p-4">
        {/* Product name */}
        <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>

        {/* Price section */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-lg font-bold">${product.price}</span>
          {product.originalPrice && (
            <span className="text-gray-500 line-through text-sm">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="mt-2">
          {renderStars(5, product.reviews || 66)}
        </div>

        {/* Cart button */}
        <Link
          to={`/view-product/${product.productId}`}
          state={{ images: images, product: product }}
          className="absolute bottom-4 right-4 p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <ShoppingCart className="w-5 h-5 text-gray-700" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;