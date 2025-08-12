import { useState } from 'react';
import { Users, BookOpen, Trophy, ArrowRight, Download } from 'lucide-react';
import { apiService } from '../services/api';

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
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      image: 'https://images.pexels.com/photos/5938356/pexels-photo-5938356.jpeg?auto=compress&cs=tinysrgb&w=800',
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
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
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
      image: 'https://images.pexels.com/photos/4500355/pexels-photo-4500355.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await apiService.submitAwarenessBooking({
        name: formData.contactName,
        email: formData.email,
        phone: formData.phone,
        preferred_date: formData.preferredDate,
        session_type: 'School Awareness Program',
        message: `School: ${formData.schoolName}, Student Count: ${formData.studentCount}, Message: ${formData.message}`,
      });

      if (response.success) {
        alert("Thank you for your interest! We'll contact you soon via WhatsApp to confirm your booking.");
        setFormData({
          schoolName: '',
          contactName: '',
          email: '',
          phone: '',
          studentCount: '',
          preferredDate: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Error submitting awareness program booking:', error);
      alert('Sorry, there was an error submitting your booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              School Awareness Program
            </h1>
            <p className="text-lg text-green-100">
              Empowering students with knowledge about nutrition, healthy eating habits, and making informed food choices for a healthier future.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all flex items-center gap-2"
              >
                Invite Us to Your School
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all flex items-center gap-2">
                <Download className="h-5 w-5" /> Download Brochure
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/8828598/pexels-photo-8828598.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Students learning"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-gradient-to-br from-white via-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Program Overview</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            A fun, interactive, and educational program crafted to inspire students towards healthy eating habits, nutritional awareness, and informed lifestyle choices.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-10 w-10 text-green-600" />,
                title: "Educational Content",
                desc: "Age-appropriate modules covering food groups, nutrition basics, and balanced diets.",
              },
              {
                icon: <Users className="h-10 w-10 text-green-600" />,
                title: "Interactive Sessions",
                desc: "Games, experiments, and activities that make learning about nutrition exciting.",
              },
              {
                icon: <Trophy className="h-10 w-10 text-green-600" />,
                title: "Long-Term Impact",
                desc: "Take-home guides and continuous support to sustain healthy habits.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Success Stories</h2>
          <p className="text-lg text-gray-600 mb-12">See how our programs have impacted schools.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {schoolSuccessStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img src={story.image} alt={story.title} className="h-48 w-full object-cover" />
                <div className="p-6 text-left">
                  <h3 className="text-lg font-semibold mb-2">{story.title}</h3>
                  <p className="text-green-600 font-medium mb-4">{story.school} - {story.focus}</p>
                  <p className="text-sm mb-2"><strong>Challenge:</strong> {story.challenge}</p>
                  <p className="text-sm mb-2"><strong>Solution:</strong> {story.solution}</p>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {story.results.map((result, i) => <li key={i}>{result}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="text-lg text-green-100">Fill out the form below and we'll contact you within 24 hours.</p>
          </div>
          <form onSubmit={handleSubmit} className="bg-white text-gray-800 p-8 rounded-xl shadow-lg space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input 
                type="text" 
                name="schoolName" 
                placeholder="School Name *" 
                value={formData.schoolName} 
                onChange={handleInputChange} 
                required 
                className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-green-500 focus:border-transparent" 
              />
              <input 
                type="text" 
                name="contactName" 
                placeholder="Contact Name *" 
                value={formData.contactName} 
                onChange={handleInputChange} 
                required 
                className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-green-500 focus:border-transparent" 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Email *" 
                value={formData.email} 
                onChange={handleInputChange} 
                required 
                className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-green-500 focus:border-transparent" 
              />
              <input 
                type="tel" 
                name="phone" 
                placeholder="Phone Number" 
                value={formData.phone} 
                onChange={handleInputChange} 
                className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-green-500 focus:border-transparent" 
              />
              <select 
                name="studentCount" 
                value={formData.studentCount} 
                onChange={handleInputChange} 
                className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Number of Students</option>
                <option value="1-100">1-100</option>
                <option value="101-300">101-300</option>
                <option value="301-500">301-500</option>
                <option value="501-1000">501-1000</option>
                <option value="1000+">1000+</option>
              </select>
              <input 
                type="date" 
                name="preferredDate" 
                value={formData.preferredDate} 
                onChange={handleInputChange} 
                className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-green-500 focus:border-transparent" 
              />
            </div>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleInputChange} 
              rows={4} 
              placeholder="Additional Information" 
              className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-green-500 focus:border-transparent"
            ></textarea>
            <div className="text-center">
              <button type="submit" className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all">
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AwarenessProgramPage;
