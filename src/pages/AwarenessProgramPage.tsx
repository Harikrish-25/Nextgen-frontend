import React, { useState } from 'react';
import { CheckCircle, Users, BookOpen, Trophy, Calendar, ArrowRight, Star, Download, Play } from 'lucide-react';

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

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Principal, Greenwood Elementary',
      school: 'Greenwood Elementary School',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'The HealthWell awareness program was transformative for our students. The interactive sessions and practical demonstrations made learning about nutrition fun and engaging. Our cafeteria now reports increased participation in healthy meal options!',
      rating: 5,
      students: 450,
    },
    {
      name: 'Michael Chen',
      role: 'Health Coordinator',
      school: 'Roosevelt Middle School',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'What impressed me most was how the program was tailored to different age groups. The facilitators were knowledgeable and created an environment where students felt comfortable asking questions about nutrition and health.',
      rating: 5,
      students: 680,
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Science Department Head',
      school: 'Lincoln High School',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'The scientific approach to nutrition education was excellent. Students gained a deeper understanding of how food affects their bodies and performance. Many have continued to make healthier choices months after the program.',
      rating: 5,
      students: 1200,
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

  const faqs = [
    {
      question: 'What age groups do you serve?',
      answer: 'We provide programs for students from elementary through high school (grades K-12). Each program is age-appropriate and follows educational best practices.',
    },
    {
      question: 'How long is the program?',
      answer: 'Programs can range from single-day workshops to week-long intensive courses. We work with your schedule to find the best fit.',
    },
    {
      question: 'What materials are provided?',
      answer: 'We provide all necessary materials including interactive tools, handouts, take-home resources for parents, and digital content for continued learning.',
    },
    {
      question: 'Is there a cost for the program?',
      answer: 'We offer various funding options including sponsored programs, grants, and sliding scale pricing to ensure accessibility for all schools.',
    },
    {
      question: 'How do we measure success?',
      answer: 'We provide pre and post-program assessments, student feedback surveys, and long-term tracking tools to measure the program\'s impact.',
    },
  ];

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                School Awareness Program
              </h1>
              <p className="text-xl text-emerald-100 leading-relaxed">
                Empowering students with knowledge about nutrition, healthy eating habits, and making informed food choices for a healthier future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-50 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Invite Us to Your School</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-200 flex items-center justify-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Download Brochure</span>
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8828598/pexels-photo-8828598.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students learning about nutrition"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Users className="h-8 w-8 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">50+</p>
                    <p className="text-gray-600">Schools Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive awareness program is designed to educate students about the importance of nutrition and healthy eating habits through interactive, age-appropriate sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-emerald-100 p-4 rounded-full w-fit mx-auto">
                <BookOpen className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Educational Content</h3>
              <p className="text-gray-600">
                Age-appropriate curriculum covering nutrition basics, food groups, and healthy eating patterns.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-orange-100 p-4 rounded-full w-fit mx-auto">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Interactive Sessions</h3>
              <p className="text-gray-600">
                Hands-on activities, games, and demonstrations that make learning about nutrition fun and engaging.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto">
                <Trophy className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Lasting Impact</h3>
              <p className="text-gray-600">
                Take-home resources and follow-up support to help students maintain healthy habits long-term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Curriculum Highlights</h2>
            <p className="text-xl text-gray-600">Tailored content for different age groups and learning objectives</p>
          </div>

          <div className="space-y-8">
            {curriculumHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-200">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                    <div className="flex items-center space-x-4">
                      <div className="bg-emerald-100 p-3 rounded-lg">
                        <Icon className="h-8 w-8 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-emerald-600 font-medium">{item.ageGroup}</p>
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Implementation Timeline</h2>
            <p className="text-xl text-gray-600">From initial contact to program completion</p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="ml-8 flex-1">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                        <span className="text-sm text-emerald-600 font-medium">{item.duration}</span>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Educators Say</h2>
            <p className="text-xl text-gray-600">Real feedback from schools we've partnered with</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.school}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-600 font-semibold">{testimonial.students}</p>
                    <p className="text-gray-500 text-xs">Students</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our program</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <span className="text-emerald-600">
                    {expandedFaq === index ? '−' : '+'}
                  </span>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-emerald-100">
              Fill out the form below and we'll contact you within 24 hours to discuss your program needs.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    School Name *
                  </label>
                  <input
                    type="text"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Students
                  </label>
                  <select
                    name="studentCount"
                    value={formData.studentCount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about your specific needs, goals, or any questions you have about the program..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-emerald-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-colors duration-200"
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