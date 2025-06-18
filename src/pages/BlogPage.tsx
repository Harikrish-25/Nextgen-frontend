import React, { useState } from 'react';
import { Search, Calendar, User, ArrowRight, Tag, Clock, Eye } from 'lucide-react';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'nutrition', name: 'Nutrition' },
    { id: 'wellness', name: 'Wellness' },
    { id: 'recipes', name: 'Healthy Recipes' },
    { id: 'lifestyle', name: 'Lifestyle' },
    { id: 'research', name: 'Research' },
  ];

  const featuredPost = {
    id: 1,
    title: 'The Science Behind Preservative-Free Foods: Why Natural Matters',
    excerpt: 'Discover the compelling research behind why preservative-free foods are not just a trend, but a necessity for optimal health and wellness.',
    author: 'Dr. Sarah Johnson',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'research',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: 2450,
    tags: ['Preservatives', 'Health', 'Research', 'Nutrition'],
  };

  const blogPosts = [
    {
      id: 2,
      title: '10 Easy Healthy Snacks Your Kids Will Actually Love',
      excerpt: 'Transform snack time with these nutritious and delicious options that even the pickiest eaters will enjoy.',
      author: 'Maria Rodriguez',
      date: '2024-01-12',
      readTime: '5 min read',
      category: 'recipes',
      image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 1890,
      tags: ['Kids', 'Snacks', 'Recipes'],
    },
    {
      id: 3,
      title: 'Building Healthy Habits: A 30-Day Wellness Challenge',
      excerpt: 'Start your journey to better health with our comprehensive 30-day challenge designed for lasting change.',
      author: 'Michael Chen',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'wellness',
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 3200,
      tags: ['Habits', 'Challenge', 'Wellness'],
    },
    {
      id: 4,
      title: 'Understanding Food Labels: A Complete Guide',
      excerpt: 'Learn how to decode food labels and make informed choices for you and your family.',
      author: 'Dr. Emily Davis',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'nutrition',
      image: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 1650,
      tags: ['Food Labels', 'Education', 'Nutrition'],
    },
    {
      id: 5,
      title: 'The Power of Plant-Based Nutrition in Schools',
      excerpt: 'Exploring how plant-based meals are transforming school nutrition programs across the country.',
      author: 'Jennifer Lee',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'nutrition',
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 2100,
      tags: ['Plant-Based', 'Schools', 'Nutrition'],
    },
    {
      id: 6,
      title: 'Mindful Eating: Connecting with Your Food',
      excerpt: 'Discover the practice of mindful eating and how it can transform your relationship with food.',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-03',
      readTime: '6 min read',
      category: 'wellness',
      image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 1420,
      tags: ['Mindfulness', 'Eating', 'Wellness'],
    },
    {
      id: 7,
      title: 'Seasonal Eating: Winter Nutrition Guide',
      excerpt: 'Make the most of winter produce with these nutritious and warming meal ideas.',
      author: 'Maria Rodriguez',
      date: '2024-01-01',
      readTime: '5 min read',
      category: 'recipes',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 980,
      tags: ['Seasonal', 'Winter', 'Recipes'],
    },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      nutrition: 'bg-emerald-100 text-emerald-800',
      wellness: 'bg-blue-100 text-blue-800',
      recipes: 'bg-orange-100 text-orange-800',
      lifestyle: 'bg-purple-100 text-purple-800',
      research: 'bg-red-100 text-red-800',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Health & Wellness Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest insights, tips, and research on nutrition, wellness, and healthy living.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-64 lg:h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredPost.category)}`}>
                  {categories.find(c => c.id === featuredPost.category)?.name}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Eye className="h-4 w-4 mr-1" />
                  {featuredPost.views.toLocaleString()} views
                </div>
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-gray-500 text-sm">
                    <User className="h-4 w-4 mr-1" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(featuredPost.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredPost.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center space-x-2 w-fit">
                <span>Read Full Article</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                    {categories.find(c => c.id === post.category)?.name}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-full">
                  <div className="flex items-center text-gray-600 text-xs">
                    <Eye className="h-3 w-3 mr-1" />
                    {post.views.toLocaleString()}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <button className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center space-x-2 group">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="mt-4 text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="bg-emerald-600 rounded-lg p-8 mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-emerald-100 mb-6">
            Subscribe to our newsletter for the latest health and wellness insights delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;