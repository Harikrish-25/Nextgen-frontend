import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [email, setEmail] = useState('');

  const stats = [
    { number: 50, label: 'Schools Impacted' },
    { number: 1000, label: 'Students Reached' },
    { number: 25, label: 'Healthy Products' },
    { number: 95, label: 'Satisfaction Rate', suffix: '%' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <div className="space-y-0 font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 to-teal-100 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-36">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4 text-center md:text-left">
                <h1 className="text-xl sm:text-3xl lg:text-6xl font-extrabold text-gray-800 leading-tight tracking-tight">
                  Nourish Your Body,
                  <span className="text-teal-600 block">Nurture Your Future</span>
                </h1>
                <p className="text-xs sm:text-base md:text-lg text-gray-500 leading-relaxed">
                  Discover preservative-free, healthy products and join our mission to create awareness about nutrition and wellness in schools and communities.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-center md:text-left">
                <Link
                  to="/products"
                  className="bg-teal-600 text-white px-3 sm:px-8 py-2 sm:py-4 rounded-full text-xs sm:text-lg font-semibold hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center w-full sm:w-auto"
                >
                  <span>Shop Now</span>
                </Link>
                <Link
                  to="/awareness-program"
                  className="border-2 border-teal-600 text-teal-600 px-3 sm:px-8 py-2 sm:py-4 rounded-full text-xs sm:text-lg font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
                >
                  <span>Learn More</span>
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-[10px] sm:text-sm text-gray-500 text-center md:text-left">
                <span>100% Natural</span>
                <span>Preservative-Free</span>
                <span>Health Focused</span>
              </div>
            </div>

            <div className="relative flex justify-center items-center">
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Healthy lifestyle"
                className="rounded-3xl shadow-xl w-full max-w-xs sm:max-w-md md:max-w-lg"
              />
              <div className="absolute -bottom-6 right-1/2 translate-x-1/2 sm:right-0 sm:translate-x-0 sm:-right-6 bg-white p-4 sm:p-6 rounded-xl shadow-lg w-40 sm:w-56">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <div>
                    <p className="text-lg sm:text-2xl font-bold text-gray-800">1000+</p>
                    <p className="text-xs sm:text-sm text-gray-500">Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-3xl font-extrabold text-gray-800 mb-2 sm:mb-4 tracking-tight">Our Impact</h2>
            <p className="text-sm sm:text-lg text-gray-500">Making a difference in communities and lives</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-4 sm:p-6 rounded-xl transition-all duration-500 ${
                  currentStat === index
                    ? 'bg-teal-600 text-white transform scale-105 shadow-xl'
                    : 'bg-white text-gray-800 hover:bg-gray-100'
                }`}
              >
                <p className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2">
                  {stat.number}{stat.suffix || ''}
                </p>
                <p className="text-xs sm:text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-4 tracking-tight">Our Services</h2>
            <p className="text-lg text-gray-500">Comprehensive health and wellness solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Healthy Products</h3>
              <p className="text-gray-500 mb-6">Preservative-free snacks, beverages, and wellness products crafted with care for your health.</p>
              <Link to="/products" className="text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-300 flex items-center">
                <span>Explore Products</span>
              </Link>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">School Programs</h3>
              <p className="text-gray-500 mb-6">Educational initiatives to promote healthy eating habits and wellness awareness in schools.</p>
              <Link to="/awareness-program" className="text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-300 flex items-center">
                <span>Learn More</span>
              </Link>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Training & Consulting</h3>
              <p className="text-gray-500 mb-6">Professional guidance for startups and organizations in health and wellness sectors.</p>
              <Link to="/training-consulting" className="text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-300 flex items-center">
                <span>Get Started</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-4 tracking-tight">About Our Company</h2>
            <p className="text-lg text-gray-500">
              NextGen Safe Food Solutions
              Empowering safer, healthier lives through food safety awareness, preservative-free product innovation, and sustainable practices.
              We educate students, support startups, and deliver nutritious, clean-label food — building a safer food ecosystem for all.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Natural Products</h3>
              <p className="text-gray-500">All our products are made from natural, high-quality ingredients with no artificial preservatives.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Community Focused</h3>
              <p className="text-gray-500">We work closely with schools and organizations to spread awareness about nutrition and wellness.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Trusted Expertise</h3>
              <p className="text-gray-500">Our team includes nutritionists and educators passionate about making a real impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-10 sm:py-16 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 sm:mb-4 tracking-tight">Stay Updated</h2>
            <p className="text-sm sm:text-lg text-teal-100 mb-4 sm:mb-8">Get the latest news on health, wellness, and our new products</p>
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex flex-col gap-3 sm:flex-row sm:gap-4 items-stretch">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-300"
                required
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300 w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;