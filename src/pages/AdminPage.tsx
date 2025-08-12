import { useState } from 'react';
import { User, Package, Plus, Edit3, Trash2, Save, X, BarChart3, Users, ShoppingCart, Settings, LogOut, Eye, DollarSign } from 'lucide-react';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [editingProductId, setEditingProductId] = useState<number | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    originalPrice: '',
    category: '',
    description: '',
    image: '',
    tags: '',
    inStock: true,
    stockCount: ''
  });

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Organic Trail Mix',
      price: 12.99,
      originalPrice: 15.99,
      category: 'snacks',
      description: 'A premium blend of organic nuts, seeds, and dried fruits',
      image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Preservative-Free', 'Organic', 'Gluten-Free'],
      inStock: true,
      stockCount: 48,
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: 'Green Smoothie Powder',
      price: 24.99,
      originalPrice: 29.99,
      category: 'supplements',
      description: 'Nutrient-packed green powder for daily wellness',
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Preservative-Free', 'Vegan', 'Superfood'],
      inStock: true,
      stockCount: 30,
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: 'Herbal Tea Blend',
      price: 18.99,
      originalPrice: 22.99,
      category: 'beverages',
      description: 'Calming herbal blend for relaxation and wellness',
      image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Preservative-Free', 'Organic', 'Caffeine-Free'],
      inStock: true,
      stockCount: 60,
      rating: 4.7,
      reviews: 156
    }
  ]);

  const dashboardStats = [
    { title: 'Total Products', value: products.length, icon: Package, color: 'bg-green-500' },
    { title: 'Total Orders', value: 147, icon: ShoppingCart, color: 'bg-blue-500' },
    { title: 'Total Revenue', value: '$12,450', icon: DollarSign, color: 'bg-purple-500' },
    { title: 'Active Users', value: 1250, icon: Users, color: 'bg-orange-500' }
  ];

  const recentOrders = [
    { id: 'ORD-001', customer: 'John Doe', total: 45.99, status: 'delivered', date: '2024-01-15' },
    { id: 'ORD-002', customer: 'Jane Smith', total: 28.99, status: 'processing', date: '2024-01-14' },
    { id: 'ORD-003', customer: 'Mike Johnson', total: 34.99, status: 'shipped', date: '2024-01-13' },
  ];

  const categories = [
    { value: 'snacks', label: 'Healthy Snacks' },
    { value: 'beverages', label: 'Natural Beverages' },
    { value: 'supplements', label: 'Supplements' },
    { value: 'organic', label: 'Organic Foods' },
  ];

  // Admin Login Handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.username === 'admin' && loginData.password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials! Use username: admin, password: admin123');
    }
  };

  // Product Management Functions
  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.category) {
      alert('Please fill in all required fields');
      return;
    }

    const product = {
      id: Date.now(),
      name: newProduct.name,
      price: parseFloat(newProduct.price),
      originalPrice: parseFloat(newProduct.originalPrice) || parseFloat(newProduct.price),
      category: newProduct.category,
      description: newProduct.description,
      image: newProduct.image || 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: newProduct.tags.split(',').map(tag => tag.trim()),
      inStock: newProduct.inStock,
      stockCount: parseInt(newProduct.stockCount) || 0,
      rating: 0,
      reviews: 0
    };

    setProducts([...products, product]);
    setNewProduct({
      name: '',
      price: '',
      originalPrice: '',
      category: '',
      description: '',
      image: '',
      tags: '',
      inStock: true,
      stockCount: ''
    });
    setIsAddingProduct(false);
    alert('Product added successfully!');
  };

  const handleEditProduct = (id: number) => {
    setEditingProductId(id);
    const product = products.find(p => p.id === id);
    if (product) {
      setNewProduct({
        name: product.name,
        price: product.price.toString(),
        originalPrice: product.originalPrice.toString(),
        category: product.category,
        description: product.description,
        image: product.image,
        tags: product.tags.join(', '),
        inStock: product.inStock,
        stockCount: product.stockCount.toString()
      });
    }
  };

  const handleUpdateProduct = () => {
    setProducts(products.map(product => 
      product.id === editingProductId 
        ? {
            ...product,
            name: newProduct.name,
            price: parseFloat(newProduct.price),
            originalPrice: parseFloat(newProduct.originalPrice),
            category: newProduct.category,
            description: newProduct.description,
            image: newProduct.image,
            tags: newProduct.tags.split(',').map(tag => tag.trim()),
            inStock: newProduct.inStock,
            stockCount: parseInt(newProduct.stockCount)
          }
        : product
    ));
    setEditingProductId(null);
    setNewProduct({
      name: '',
      price: '',
      originalPrice: '',
      category: '',
      description: '',
      image: '',
      tags: '',
      inStock: true,
      stockCount: ''
    });
    alert('Product updated successfully!');
  };

  const handleDeleteProduct = (id: number) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(product => product.id !== id));
      alert('Product deleted successfully!');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setNewProduct({
      ...newProduct,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: BarChart3 },
    { id: 'products', name: 'Products', icon: Package },
    { id: 'orders', name: 'Orders', icon: ShoppingCart },
    { id: 'users', name: 'Users', icon: Users },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-green-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Login</h1>
            <p className="text-gray-600">Access the admin dashboard</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
              <input
                type="text"
                value={loginData.username}
                onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter username"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              Login
            </button>
          </form>
          <div className="mt-4 p-3 bg-green-50 rounded-lg">
            <p className="text-sm text-green-700">
              <strong>Demo Credentials:</strong><br />
              Username: admin<br />
              Password: admin123
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Manage your website content and settings</p>
          </div>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-green-100 p-3 rounded-full">
                  <User className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Admin User</h3>
                  <p className="text-gray-600 text-sm">Administrator</p>
                </div>
              </div>
              
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors duration-200 ${
                        activeTab === tab.id
                          ? 'bg-green-100 text-green-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{tab.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              
              {/* Dashboard Tab */}
              {activeTab === 'dashboard' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Dashboard Overview</h2>
                  
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {dashboardStats.map((stat, index) => {
                      const Icon = stat.icon;
                      return (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                          <div className="flex items-center">
                            <div className={`${stat.color} p-3 rounded-lg`}>
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                            <div className="ml-4">
                              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                              <p className="text-gray-600">{stat.title}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Recent Orders */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {recentOrders.map((order) => (
                            <tr key={order.id}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${order.total}</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                  order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                                  order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                                  'bg-yellow-100 text-yellow-800'
                                }`}>
                                  {order.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.date}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Products Tab */}
              {activeTab === 'products' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Product Management</h2>
                    <button
                      onClick={() => setIsAddingProduct(true)}
                      className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
                    >
                      <Plus className="h-4 w-4" />
                      <span>Add Product</span>
                    </button>
                  </div>

                  {/* Add/Edit Product Form */}
                  {(isAddingProduct || editingProductId) && (
                    <div className="bg-gray-50 p-6 rounded-lg mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        {editingProductId ? 'Edit Product' : 'Add New Product'}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Product Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={newProduct.name}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="Enter product name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                          <select
                            name="category"
                            value={newProduct.category}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          >
                            <option value="">Select Category</option>
                            {categories.map(cat => (
                              <option key={cat.value} value={cat.value}>{cat.label}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Price *</label>
                          <input
                            type="number"
                            name="price"
                            value={newProduct.price}
                            onChange={handleInputChange}
                            step="0.01"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="0.00"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Original Price</label>
                          <input
                            type="number"
                            name="originalPrice"
                            value={newProduct.originalPrice}
                            onChange={handleInputChange}
                            step="0.01"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="0.00"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Stock Count</label>
                          <input
                            type="number"
                            name="stockCount"
                            value={newProduct.stockCount}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="0"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                          <input
                            type="url"
                            name="image"
                            value={newProduct.image}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="https://example.com/image.jpg"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                          <textarea
                            name="description"
                            value={newProduct.description}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="Product description"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Tags (comma separated)</label>
                          <input
                            type="text"
                            name="tags"
                            value={newProduct.tags}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="Organic, Gluten-Free, Vegan"
                          />
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            name="inStock"
                            checked={newProduct.inStock}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                          />
                          <label className="ml-2 block text-sm text-gray-900">In Stock</label>
                        </div>
                      </div>
                      <div className="flex space-x-4 mt-6">
                        <button
                          onClick={editingProductId ? handleUpdateProduct : handleAddProduct}
                          className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
                        >
                          <Save className="h-4 w-4" />
                          <span>{editingProductId ? 'Update' : 'Save'} Product</span>
                        </button>
                        <button
                          onClick={() => {
                            setIsAddingProduct(false);
                            setEditingProductId(null);
                            setNewProduct({
                              name: '',
                              price: '',
                              originalPrice: '',
                              category: '',
                              description: '',
                              image: '',
                              tags: '',
                              inStock: true,
                              stockCount: ''
                            });
                          }}
                          className="flex items-center space-x-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors duration-200"
                        >
                          <X className="h-4 w-4" />
                          <span>Cancel</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Products List */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {products.map((product) => (
                      <div key={product.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex space-x-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">{product.name}</h3>
                            <p className="text-gray-600 text-sm">{product.category}</p>
                            <div className="flex items-center space-x-2 mt-2">
                              <span className="text-lg font-bold text-green-600">${product.price}</span>
                              {product.originalPrice > product.price && (
                                <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mt-1">Stock: {product.stockCount}</p>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {product.tags.map((tag, index) => (
                                <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex flex-col space-y-2">
                            <button
                              onClick={() => handleEditProduct(product.id)}
                              className="flex items-center space-x-1 text-green-600 hover:text-green-700"
                            >
                              <Edit3 className="h-4 w-4" />
                              <span className="text-sm">Edit</span>
                            </button>
                            <button
                              onClick={() => handleDeleteProduct(product.id)}
                              className="flex items-center space-x-1 text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4" />
                              <span className="text-sm">Delete</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Orders Tab */}
              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Management</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {recentOrders.map((order) => (
                          <tr key={order.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${order.total}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                                order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {order.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <button className="text-green-600 hover:text-green-900 mr-3">
                                <Eye className="h-4 w-4" />
                              </button>
                              <button className="text-blue-600 hover:text-blue-900">
                                <Edit3 className="h-4 w-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Users Tab */}
              {activeTab === 'users' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">User Management</h2>
                  <div className="text-center py-12">
                    <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">User management functionality coming soon...</p>
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Site Settings</h2>
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="font-medium text-gray-900 mb-4">General Settings</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
                          <input
                            type="text"
                            defaultValue="HealthWell"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Site Description</label>
                          <textarea
                            rows={3}
                            defaultValue="Your trusted partner for healthy living and wellness products."
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="font-medium text-gray-900 mb-4">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                          <input
                            type="email"
                            defaultValue="info@healthwell.com"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                          <input
                            type="tel"
                            defaultValue="+1 (555) 123-4567"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
