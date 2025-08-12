import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  const products = [
    {
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
    },
    {
      id: 2,
      name: 'Green Smoothie Powder',
      price: 24.99,
      originalPrice: 29.99,
      rating: 4.9,
      reviews: 89,
      images: [
        'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=600',
      ],
      description: 'Nutrient-packed green powder for daily wellness, made with organic superfoods.',
      tags: ['Preservative-Free', 'Vegan', 'Superfood'],
      features: [
        'Organic superfoods',
        'Rich in vitamins',
        'No added sugars',
        'Vegan-friendly',
      ],
      nutritionFacts: {
        servingSize: '1 scoop (10g)',
        calories: 40,
        totalFat: '0g',
        saturatedFat: '0g',
        sodium: '10mg',
        totalCarbs: '6g',
        fiber: '2g',
        sugars: '1g',
        protein: '2g',
      },
      ingredients: [
        'Organic spirulina',
        'Organic kale',
        'Organic wheatgrass',
        'Organic barley grass',
      ],
      inStock: true,
      stockCount: 30,
    },
    {
      id: 3,
      name: 'Herbal Tea Blend',
      price: 18.99,
      originalPrice: 22.99,
      rating: 4.7,
      reviews: 156,
      images: [
        'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      ],
      description: 'Calming herbal blend for relaxation and wellness, crafted with organic herbs.',
      tags: ['Preservative-Free', 'Organic', 'Caffeine-Free'],
      features: [
        'Organic herbs',
        'Caffeine-free',
        'Promotes relaxation',
        'Eco-friendly packaging',
      ],
      nutritionFacts: {
        servingSize: '1 tea bag (2g)',
        calories: 0,
        totalFat: '0g',
        saturatedFat: '0g',
        sodium: '0mg',
        totalCarbs: '0g',
        fiber: '0g',
        sugars: '0g',
        protein: '0g',
      },
      ingredients: [
        'Organic chamomile',
        'Organic peppermint',
        'Organic lemon balm',
        'Organic lavender',
      ],
      inStock: true,
      stockCount: 60,
    },
  ];

  // Fix: parseInt fallback to 1 if id is undefined or not a number
  const product = products.find(p => p.id === parseInt(id ?? "0")) || products[0];

  const reviews = [
    {
      id: 1,
      name: 'Sarah M.',
      rating: 5,
      date: '2 weeks ago',
      comment: "Absolutely love this trail mix! The taste is incredible and I feel good knowing it's all natural.",
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

  // Fix: add type for usdPrice
  const convertToINR = (usdPrice: number) => (usdPrice * 83).toFixed(2);

  // Fix: add type for change
  const handleQuantityChange = (change: number) => {
    setQuantity(q => Math.max(1, q + change));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 mb-8 sm:mb-12">
          {/* Product Images */}
          <div className="space-y-4 flex flex-col items-center">
            <div className="aspect-square bg-white rounded-xl overflow-hidden w-full max-w-xs sm:max-w-md">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2 sm:gap-4 flex-wrap justify-center">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-12 h-12 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-teal-600' : 'border-gray-200'
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
              <h1 className="text-lg sm:text-2xl font-extrabold text-gray-800 mb-2 tracking-tight text-center md:text-left">{product.name}</h1>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-2 sm:mb-4 text-center md:text-left">
                <span className="text-xs sm:text-base text-gray-500">({product.reviews} reviews)</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-2 sm:mb-4 text-center md:text-left">
                <span className="text-lg sm:text-3xl font-bold text-gray-800">₹{convertToINR(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-sm sm:text-xl text-gray-500 line-through">₹{convertToINR(product.originalPrice)}</span>
                )}
                {product.originalPrice && (
                  <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    Save ₹{convertToINR(product.originalPrice - product.price)}
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-2 sm:space-y-4">
              <p className="text-xs sm:text-base text-gray-500">{product.description}</p>
              <div className="flex flex-wrap gap-1 sm:gap-2 justify-center md:justify-start">
                {product.tags.map(tag => (
                  <span key={tag} className="bg-teal-100 text-teal-800 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-sm font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2 sm:space-y-4">
              <h3 className="text-xs sm:text-lg font-semibold text-gray-800">Key Features:</h3>
              <ul className="space-y-1 sm:space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="text-gray-700 text-xs sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-2 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 gap-2">
                <span className="text-xs sm:text-base text-gray-700 font-medium">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-full">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-2 hover:bg-gray-100 transition-colors duration-300"
                  >
                    -
                  </button>
                  <span className="px-3 sm:px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 hover:bg-gray-100 transition-colors duration-300"
                  >
                    +
                  </button>
                </div>
                <span className="text-xs sm:text-sm text-gray-500">({product.stockCount} in stock)</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <button className="flex-1 bg-teal-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors duration-300 text-xs sm:text-base">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="border-t pt-4 sm:pt-6 space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <span className="text-xs sm:text-base text-gray-700">Free shipping on orders over ₹4150</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <span className="text-xs sm:text-base text-gray-700">100% satisfaction guarantee</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <span className="text-xs sm:text-base text-gray-700">30-day return policy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="bg-white rounded-xl shadow-md">
          <div className="border-b">
            <nav className="flex flex-wrap gap-2 sm:gap-8 px-2 sm:px-6 text-xs sm:text-base justify-center">
              {['overview', 'ingredients', 'nutrition', 'reviews'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 sm:py-4 px-2 font-medium capitalize ${
                    activeTab === tab
                      ? 'text-teal-600 border-b-2 border-teal-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-4 sm:p-6">
            {activeTab === 'overview' && (
              <div className="prose max-w-none">
                <h3 className="text-xs sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">Product Overview</h3>
                <p className="text-xs sm:text-gray-500">{product.description}</p>
                <p className="text-xs sm:text-gray-500">
                  Our {product.name.toLowerCase()} is carefully crafted with the finest ingredients sourced from certified organic farms. 
                  Each batch is made in small quantities to ensure freshness and quality. Perfect for outdoor adventures, 
                  office snacking, or as a nutritious addition to your routine.
                </p>
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div>
                <h3 className="text-xs sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">Ingredients</h3>
                <ul className="space-y-1 sm:space-y-2">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="text-gray-700 text-xs sm:text-base">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'nutrition' && (
              <div>
                <h3 className="text-xs sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">Nutrition Facts</h3>
                <div className="bg-gray-50 p-2 sm:p-4 rounded-lg">
                  <p className="font-semibold mb-1 sm:mb-2 text-xs sm:text-base">Serving Size: {product.nutritionFacts.servingSize}</p>
                  <div className="grid grid-cols-2 gap-2 sm:gap-4">
                    <div>
                      <p className="text-xs sm:text-base"><span className="font-medium">Calories:</span> {product.nutritionFacts.calories}</p>
                      <p className="text-xs sm:text-base"><span className="font-medium">Total Fat:</span> {product.nutritionFacts.totalFat}</p>
                      <p className="text-xs sm:text-base"><span className="font-medium">Saturated Fat:</span> {product.nutritionFacts.saturatedFat}</p>
                      <p className="text-xs sm:text-base"><span className="font-medium">Sodium:</span> {product.nutritionFacts.sodium}</p>
                    </div>
                    <div>
                      <p className="text-xs sm:text-base"><span className="font-medium">Total Carbs:</span> {product.nutritionFacts.totalCarbs}</p>
                      <p className="text-xs sm:text-base"><span className="font-medium">Fiber:</span> {product.nutritionFacts.fiber}</p>
                      <p className="text-xs sm:text-base"><span className="font-medium">Sugars:</span> {product.nutritionFacts.sugars}</p>
                      <p className="text-xs sm:text-base"><span className="font-medium">Protein:</span> {product.nutritionFacts.protein}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-xs sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">Customer Reviews</h3>
                <div className="space-y-4 sm:space-y-6">
                  {reviews.map(review => (
                    <div key={review.id} className="border-b pb-4 sm:pb-6">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-1 sm:mb-2 gap-1 sm:gap-0">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-xs sm:text-base">{review.name}</span>
                          {review.verified && <span className="text-[10px] sm:text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded">Verified Purchase</span>}
                        </div>
                        <span className="text-[10px] sm:text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-xs sm:text-base text-gray-500">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;