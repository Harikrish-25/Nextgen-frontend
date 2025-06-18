import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, Minus, Plus, CheckCircle, Truck, Shield, RefreshCw } from 'lucide-react';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  // Mock product data
  const product = {
    id: 1,
    name: 'Organic Trail Mix',
    price: 12.99,
    originalPrice: 15.99,
    rating: 4.8,
    reviews: 124,
    images: [
      'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    description: 'A premium blend of organic nuts, seeds, and dried fruits, carefully selected for optimal nutrition and taste. Perfect for on-the-go snacking or as a healthy breakfast topping.',
    tags: ['Preservative-Free', 'Organic', 'Gluten-Free', 'Vegan'],
    features: [
      'No artificial preservatives',
      'Organic certified ingredients',
      'Rich in protein and healthy fats',
      'Sustainable packaging',
      'Non-GMO ingredients',
    ],
    nutritionFacts: {
      servingSize: '1/4 cup (30g)',
      calories: 160,
      totalFat: '12g',
      saturatedFat: '2g',
      sodium: '0mg',
      totalCarbs: '8g',
      fiber: '3g',
      sugars: '4g',
      protein: '6g',
    },
    ingredients: [
      'Organic almonds',
      'Organic walnuts',
      'Organic pumpkin seeds',
      'Organic sunflower seeds',
      'Organic dried cranberries',
      'Organic raisins',
    ],
    inStock: true,
    stockCount: 48,
  };

  const reviews = [
    {
      id: 1,
      name: 'Sarah M.',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Absolutely love this trail mix! The taste is incredible and I feel good knowing it\'s all natural.',
      verified: true,
    },
    {
      id: 2,
      name: 'Mike T.',
      rating: 4,
      date: '1 month ago',
      comment: 'Great quality ingredients. My kids love it as an after-school snack.',
      verified: true,
    },
    {
      id: 3,
      name: 'Emma L.',
      rating: 5,
      date: '1 month ago',
      comment: 'Perfect for hiking! Gives me the energy I need without any artificial additives.',
      verified: true,
    },
  ];

  const relatedProducts = [
    {
      id: 2,
      name: 'Quinoa Protein Bars',
      price: 16.99,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.6,
    },
    {
      id: 3,
      name: 'Organic Granola',
      price: 14.99,
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.8,
    },
    {
      id: 4,
      name: 'Mixed Nuts',
      price: 18.99,
      image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.7,
    },
  ];

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-emerald-600' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>
              
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                )}
                <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-sm font-semibold">
                  Save ${(product.originalPrice! - product.price).toFixed(2)}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 text-lg">{product.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {product.tags.map(tag => (
                  <span key={tag} className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 font-medium">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-2 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <span className="text-sm text-gray-600">({product.stockCount} in stock)</span>
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Share2 className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="border-t pt-6 space-y-3">
              <div className="flex items-center space-x-3">
                <Truck className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700">Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700">100% satisfaction guarantee</span>
              </div>
              <div className="flex items-center space-x-3">
                <RefreshCw className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700">30-day return policy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-12">
          <div className="border-b">
            <nav className="flex space-x-8 px-6">
              {['overview', 'ingredients', 'nutrition', 'reviews'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 font-medium capitalize ${
                    activeTab === tab
                      ? 'text-emerald-600 border-b-2 border-emerald-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">Product Overview</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <p className="text-gray-700">
                  Our organic trail mix is carefully crafted with the finest ingredients sourced from certified organic farms. 
                  Each batch is made in small quantities to ensure freshness and quality. Perfect for outdoor adventures, 
                  office snacking, or as a nutritious addition to your breakfast routine.
                </p>
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Ingredients</h3>
                <ul className="space-y-2">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-gray-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'nutrition' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Nutrition Facts</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Serving Size: {product.nutritionFacts.servingSize}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p><span className="font-medium">Calories:</span> {product.nutritionFacts.calories}</p>
                      <p><span className="font-medium">Total Fat:</span> {product.nutritionFacts.totalFat}</p>
                      <p><span className="font-medium">Saturated Fat:</span> {product.nutritionFacts.saturatedFat}</p>
                      <p><span className="font-medium">Sodium:</span> {product.nutritionFacts.sodium}</p>
                    </div>
                    <div>
                      <p><span className="font-medium">Total Carbs:</span> {product.nutritionFacts.totalCarbs}</p>
                      <p><span className="font-medium">Fiber:</span> {product.nutritionFacts.fiber}</p>
                      <p><span className="font-medium">Sugars:</span> {product.nutritionFacts.sugars}</p>
                      <p><span className="font-medium">Protein:</span> {product.nutritionFacts.protein}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
                <div className="space-y-6">
                  {reviews.map(review => (
                    <div key={review.id} className="border-b pb-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{review.name}</span>
                          {review.verified && <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Verified Purchase</span>}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">${product.price}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;