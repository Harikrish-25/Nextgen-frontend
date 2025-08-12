import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiService } from '../services/api';

const CartPage = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

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

  const handleCheckout = () => {
    setShowCheckoutForm(true);
  };

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCheckingOut(true);

    try {
      const orderData = {
        customer_info: {
          name: customerInfo.name,
          email: customerInfo.email,
          phone: customerInfo.phone,
        },
        products: cartItems.map(item => ({
          product_id: item.id.toString(),
          product_name: item.name,
          quantity: item.quantity,
          unit_price: item.price,
          total_price: item.price * item.quantity,
        })),
        total_amount: subtotal,
        delivery_address: {
          street: customerInfo.address,
          city: "Default City", // You can add more fields to the form
          state: "Default State",
          postal_code: "000000",
        },
      };

      const response = await apiService.submitOrder(orderData);

      if (response.success) {
        alert('Order placed successfully! You will be contacted shortly via WhatsApp.');
        localStorage.removeItem('cart');
        setCartItems([]);
        setShowCheckoutForm(false);
        setCustomerInfo({ name: '', email: '', phone: '', address: '' });
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Sorry, there was an error placing your order. Please try again.');
    } finally {
      setIsCheckingOut(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value,
    });
  };

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
        
        {!showCheckoutForm ? (
          <div className="mt-8 flex justify-end">
            <button 
              onClick={handleCheckout}
              className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        ) : (
          <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Checkout Information</h2>
            <form onSubmit={handleOrderSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={customerInfo.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={customerInfo.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={customerInfo.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Address *
                  </label>
                  <textarea
                    name="address"
                    value={customerInfo.address}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowCheckoutForm(false)}
                  className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300"
                >
                  Back to Cart
                </button>
                <button
                  type="submit"
                  disabled={isCheckingOut}
                  className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-300 disabled:opacity-50"
                >
                  {isCheckingOut ? 'Placing Order...' : 'Place Order'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;