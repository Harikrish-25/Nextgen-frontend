import React, { useState } from 'react';
import { Users, BookOpen, Trophy, ArrowRight, Download } from 'lucide-react';

const AwarenessProgramPage = () => {
  const [formData, setFormData] = useState({
    schoolName: '',
    contactName: '',
    email: '',
    phone: '',
    studentCount: '',
    preferredDate: '',
    message: '',
  });

  const curriculumHighlights = [
    {
      title: 'Nutrition Fundamentals',
      description: 'Understanding macronutrients, micronutrients, and reading food labels',
      duration: '45 minutes',
      ageGroup: 'Grades 3-5',
      icon: BookOpen,
    },
    {
      title: 'Healthy Eating Habits',
      description: 'Building sustainable eating patterns and meal planning basics',
      duration: '60 minutes',
      ageGroup: 'Grades 6-8',
      icon: Users,
    },
    {
      title: 'Food Science Workshop',
      description: 'Hands-on experiments exploring food preservation and nutrition',
      duration: '90 minutes',
      ageGroup: 'Grades 9-12',
      icon: Trophy,
    },
  ];

  const timeline = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'We discuss your school\'s needs, student demographics, and program goals.',
      duration: '1 week',
    },
    {
      step: 2,
      title: 'Program Customization',
      description: 'We tailor the curriculum to match your students\' age groups and learning objectives.',
      duration: '2 weeks',
    },
    {
      step: 3,
      title: 'Resource Preparation',
      description: 'All materials, interactive tools, and take-home resources are prepared.',
      duration: '1 week',
    },
    {
      step: 4,
      title: 'Program Delivery',
      description: 'Our certified educators deliver engaging, interactive sessions at your school.',
      duration: '1-3 days',
    },
    {
      step: 5,
      title: 'Follow-up Support',
      description: 'Ongoing support and resources to help maintain healthy eating habits.',
      duration: 'Ongoing',
    },
  ];

  // Modified schoolSuccessStories data to contain only 3 entries
  const schoolSuccessStories = [
    {
      id: 1,
      title: 'Maplewood Elementary: A Healthier Snack Culture',
      school: 'Maplewood Elementary School',
      focus: 'Early Childhood Nutrition Awareness',
      challenge: 'Increased consumption of unhealthy snacks among students, leading to energy dips and concentration issues.',
      solution: 'Conducted interactive "My Plate" workshops, introduced fun fruit & veggie tasting sessions, and provided educational posters for classrooms.',
      results: [
        '40% increase in students bringing healthy snacks from home.',
        'Observed improved concentration levels in afternoon classes.',
        'Positive feedback from parents noting children asking for more fruits and vegetables.',
      ],
      image: 'https://images.pexels.com/photos/5938356/pexels-photo-5938356.jpeg?auto=compress&cs=tinysrgb&w=800', // Image of kids with healthy food
    },
    {
      id: 2,
      title: 'Riverside Middle: Empowering Smart Food Choices',
      school: 'Riverside Middle School',
      focus: 'Adolescent Nutrition & Balanced Diets',
      challenge: 'Students relying heavily on fast food and sugary drinks, with limited understanding of balanced meals.',
      solution: 'Engaged students in "Decode Your Drink" sugar experiments, led peer-to-peer discussions on balanced meal planning, and hosted a healthy cooking demo.',
      results: [
        '25% reduction in soda consumption reported by students.',
        'Formation of a student-led "Healthy Habits" club.',
        'Increased student participation in school cafeteria surveys, advocating for healthier options.',
      ],
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800', // Image of teens in a classroom or lab
    },
    {
      id: 3,
      title: 'Northwood High: Beyond Basics, Towards Wellness',
      school: 'Northwood High School',
      focus: 'Advanced Nutrition & Lifestyle Connection',
      challenge: 'Lack of understanding about how nutrition impacts athletic performance, mood, and long-term health among high schoolers.',
      solution: 'Presented on "Fueling Your Body for Success" for sports teams, facilitated discussions on emotional eating, and offered a "DIY Healthy Meal Prep" session.',
      results: [
        'Student athletes reported improved energy and recovery.',
        'Increased awareness among students about the link between diet and mental well-being.',
        'School initiated a "Wellness Week" with nutrition as a core theme, inspired by the program.',
      ],
      image: 'https://images.pexels.com/photos/4500355/pexels-photo-4500355.jpeg?auto=compress&cs=tinysrgb&w=800', // Image of high school students or a wellness activity
    },
  ];


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We\'ll contact you within 24 hours to discuss your program needs.');
    setFormData({
      schoolName: '',
      contactName: '',
      email: '',
      phone: '',
      studentCount: '',
      preferredDate: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight text-center md:text-left">
                School Awareness Program
              </h1>
              <p className="text-sm sm:text-base md:text-xl text-emerald-100 leading-relaxed text-center md:text-left">
                Empowering students with knowledge about nutrition, healthy eating habits, and making informed food choices for a healthier future.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                <button
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-emerald-600 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:bg-emerald-50 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 w-full sm:w-auto"
                >
                  <span>Invite Us to Your School</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="border-2 border-white text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-200 flex items-center justify-center space-x-2 w-full sm:w-auto">
                  <Download className="h-5 w-5" />
                  <span>Download Brochure</span>
                </button>
              </div>
            </div>
            <div className="relative flex justify-center items-center mt-8 md:mt-0">
              <img
                src="https://images.pexels.com/photos/8828598/pexels-photo-8828598.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students learning about nutrition"
                className="rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-md md:max-w-none"
              />
              <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:-bottom-6 md:-left-6 bg-white p-4 sm:p-6 rounded-xl shadow-lg w-48 sm:w-64">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <div className="bg-emerald-100 p-2 sm:p-3 rounded-lg">
                    <Users className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-2xl font-bold text-gray-900">50+</p>
                    <p className="text-gray-600 text-xs sm:text-sm">Schools Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Program Overview */}
      <section className="py-8 sm:py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2 md:mb-4">Program Overview</h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive awareness program is designed to educate students about the importance of nutrition and healthy eating habits through interactive, age-appropriate sessions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center space-y-2 sm:space-y-4">
              <div className="bg-emerald-100 p-2 sm:p-4 rounded-full w-fit mx-auto">
                <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-600" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">Educational Content</h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                Age-appropriate curriculum covering nutrition basics, food groups, and healthy eating patterns.
              </p>
            </div>
            <div className="text-center space-y-2 sm:space-y-4">
              <div className="bg-orange-100 p-2 sm:p-4 rounded-full w-fit mx-auto">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">Interactive Sessions</h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                Hands-on activities, games, and demonstrations that make learning about nutrition fun and engaging.
              </p>
            </div>
            <div className="text-center space-y-2 sm:space-y-4">
              <div className="bg-blue-100 p-2 sm:p-4 rounded-full w-fit mx-auto">
                <Trophy className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">Lasting Impact</h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                Take-home resources and follow-up support to help students maintain healthy habits long-term.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Curriculum Highlights */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">Curriculum Highlights</h2>
            <p className="text-base sm:text-xl text-gray-600">Tailored content for different age groups and learning objectives</p>
          </div>
          <div className="space-y-6 sm:space-y-8">
            {curriculumHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-4 sm:p-8 hover:shadow-lg transition-shadow duration-200">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 items-center">
                    <div className="flex items-center space-x-2 sm:space-x-4">
                      <div className="bg-emerald-100 p-2 sm:p-3 rounded-lg">
                        <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-xl font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-emerald-600 font-medium text-xs sm:text-base">{item.ageGroup}</p>
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <p className="text-gray-600 text-xs sm:text-base">{item.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="bg-emerald-100 text-emerald-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                        {item.duration}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Program Timeline */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">Implementation Timeline</h2>
            <p className="text-base sm:text-xl text-gray-600">From initial contact to program completion</p>
          </div>
          <div className="relative">
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-emerald-200"></div>
            <div className="space-y-8 sm:space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex flex-col sm:flex-row items-start">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg">
                    {item.step}
                  </div>
                  <div className="mt-2 sm:mt-0 sm:ml-8 flex-1">
                    <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-1 sm:mb-2">
                        <h3 className="text-base sm:text-xl font-semibold text-gray-900">{item.title}</h3>
                        <span className="text-xs sm:text-sm text-emerald-600 font-medium">{item.duration}</span>
                      </div>
                      <p className="text-gray-600 text-xs sm:text-base">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Success Stories Section */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">Our Success Stories</h2>
            <p className="text-base sm:text-xl text-gray-600">See the positive impact our programs have made in schools.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {schoolSuccessStories.map((story) => (
              <div key={story.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-32 sm:h-48 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">{story.title}</h3>
                  <p className="text-emerald-600 font-medium text-xs sm:text-base mb-2 sm:mb-4">{story.school} - {story.focus}</p>
                  <p className="text-gray-700 text-xs sm:text-base mb-2 sm:mb-3">
                    <span className="font-semibold">Challenge:</span> {story.challenge}
                  </p>
                  <p className="text-gray-700 text-xs sm:text-base mb-2 sm:mb-3">
                    <span className="font-semibold">Solution:</span> {story.solution}
                  </p>
                  <div className="mt-2 sm:mt-4">
                    <h4 className="text-xs sm:text-md font-semibold text-gray-800 mb-1 sm:mb-2">Key Results:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-xs sm:text-base">
                      {story.results.map((result, i) => (
                        <li key={i}>{result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Form */}
      <section id="contact-form" className="py-10 sm:py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">Ready to Get Started?</h2>
            <p className="text-base sm:text-xl text-emerald-100">
              Fill out the form below and we'll contact you within 24 hours to discuss your program needs.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    School Name *
                  </label>
                  <input
                    type="text"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-xs sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-xs sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-xs sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-xs sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Number of Students
                  </label>
                  <select
                    name="studentCount"
                    value={formData.studentCount}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-xs sm:text-sm"
                  >
                    <option value="">Select range</option>
                    <option value="1-100">1-100 students</option>
                    <option value="101-300">101-300 students</option>
                    <option value="301-500">301-500 students</option>
                    <option value="501-1000">501-1000 students</option>
                    <option value="1000+">1000+ students</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-xs sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Additional Information
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about your specific needs, goals, or any questions you have about the program..."
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-xs sm:text-sm"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-emerald-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-emerald-700 transition-colors duration-200"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AwarenessProgramPage;