import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(cart);
  }, []);

  const handleQuantityChange = (id: number, change: number) => {
    const updatedCart = cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleRemove = (id: number) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const convertToINR = (usdPrice: number) => (usdPrice * 83).toFixed(2);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 font-sans">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link
          to="/products"
          className="bg-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors duration-300"
        >
          Shop Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-8">Your Cart</h1>
        <div className="space-y-6">
          {cartItems.map(item => (
            <div key={item.id} className="bg-white rounded-xl shadow-md p-6 flex items-center gap-6">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <div className="flex gap-2 my-2">
                  {item.tags && item.tags.map((tag: string) => (
                    <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xl font-bold text-gray-800">₹{convertToINR(item.price)}</span>
                  <div className="flex items-center border rounded-full">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="px-3 py-1"
                    >-</button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="px-3 py-1"
                    >+</button>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-600 font-semibold ml-4"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div>
                <span className="text-lg font-bold text-gray-800">
                  ₹{convertToINR(item.price * item.quantity)}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-between items-center">
          <span className="text-xl font-bold">Subtotal:</span>
          <span className="text-2xl font-bold text-teal-700">₹{convertToINR(subtotal)}</span>
        </div>
        <div className="mt-8 flex justify-end">
          <button className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors duration-300">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;