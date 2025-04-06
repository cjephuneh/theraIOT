import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  Heart,
  Shield,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  Settings,
  Play,
  X,
  ChevronRight,
  Users,
  DollarSign,
  Code,
  Briefcase,
  ArrowRight
} from 'lucide-react';

function App() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/90 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Heart className="text-purple-800 w-8 h-8" />
              <h1 className="text-2xl font-bold text-purple-800">TheraIOT</h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-gray-600 hover:text-purple-600 font-medium">
                Features
              </a>
              <a href="#showcase" className="text-gray-600 hover:text-purple-600 font-medium">
                Showcase
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-purple-600 font-medium">
                Pricing
              </a>
              <Link to="/invest" className="text-gray-600 hover:text-purple-600 font-medium">
                Invest
              </Link>
              
            </div>
            <Link to="/preorder" className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition flex items-center gap-2 font-medium">
              Pre-order Now <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Video Modal */}
      {videoPlaying && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-2xl mx-4 bg-white rounded-2xl overflow-hidden shadow-2xl">
            <button 
              onClick={() => setVideoPlaying(false)} 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="p-12 text-center">
              <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Play className="text-purple-600 w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Demo Coming Soon</h3>
              <p className="text-gray-600 mb-6">
                Our product demo is currently in production. Sign up for our newsletter to be notified when it's ready!
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-r-lg hover:bg-purple-700 transition font-medium">
                    Notify Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-purple-100 via-white to-purple-50 overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-6 animate-pulse">
                <Sparkles className="text-purple-600 w-4 h-4" />
                <span className="text-purple-800 font-medium">New: Version 1.0 - Limited Release</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                AI-Powered <span className="text-purple-600">Emotional Support</span> Companion
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                TheraIOT combines advanced AI, real-time biometric sensing, and personalized learning 
                to provide therapeutic comfort for children and adults alike.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/preorder" className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition text-lg font-medium flex items-center gap-2 shadow-lg shadow-purple-200">
                  Pre-order Now <ChevronRight className="w-5 h-5" />
                </Link>
                <button 
                  onClick={() => setVideoPlaying(true)}
                  className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full hover:bg-purple-50 transition text-lg font-medium flex items-center gap-2"
                >
                  <Play className="w-5 h-5" /> Watch Demo
                </button>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <img 
                      key={i}
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i * 10}.jpg`} 
                      alt="Customer" 
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-purple-600">4</span> pre-orders this month
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
                <img
                  src="../teddy2.webp"
                  alt="AI Therapeutic Teddy Bear"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg z-20">
                <div className="flex items-center space-x-2">
                  <Brain className="text-purple-600 w-6 h-6" />
                  <span className="text-sm font-medium">Advanced Neural Processing</span>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg z-20">
                <div className="flex items-center space-x-2">
                  <Heart className="text-pink-500 w-6 h-6" />
                  <span className="text-sm font-medium">Emotional Sensing</span>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-200 rounded-full opacity-50 blur-3xl"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-200 rounded-full opacity-50 blur-3xl"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
              <Brain className="text-blue-600 w-4 h-4" />
              <span className="text-blue-800 font-medium">Advanced Technology</span>
            </div>
            <h3 className="text-4xl font-bold text-gray-800 mb-6">
              Designed for Real Emotional Support
            </h3>
            <p className="text-xl text-gray-600">
              Our AI-powered companion uses multiple technologies to create a truly therapeutic experience
              that adapts to your unique emotional needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-lg shadow-purple-100/50 hover:shadow-xl transition hover:-translate-y-1">
              <Heart className="text-pink-500 w-10 h-10 mb-4" />
              <h4 className="text-xl font-semibold mb-2">
                Emotional Response 2.0
              </h4>
              <p className="text-gray-600">
                Advanced biometric sensors detect subtle emotional changes and respond with comforting actions.
              </p>
              <a href="#" className="inline-flex items-center text-purple-600 font-medium mt-4 hover:text-purple-700">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-lg shadow-purple-100/50 hover:shadow-xl transition hover:-translate-y-1">
              <MessageCircle className="text-blue-500 w-10 h-10 mb-4" />
              <h4 className="text-xl font-semibold mb-2">
                Natural Dialogue
              </h4>
              <p className="text-gray-600">
                Engage in meaningful conversations with advanced language processing optimized for emotional support.
              </p>
              <a href="#" className="inline-flex items-center text-purple-600 font-medium mt-4 hover:text-purple-700">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-lg shadow-purple-100/50 hover:shadow-xl transition hover:-translate-y-1">
              <Shield className="text-green-500 w-10 h-10 mb-4" />
              <h4 className="text-xl font-semibold mb-2">
                Privacy & Security
              </h4>
              <p className="text-gray-600">
                Military-grade encryption with all processing done on-device for complete privacy.
              </p>
              <a href="#" className="inline-flex items-center text-purple-600 font-medium mt-4 hover:text-purple-700">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-lg shadow-purple-100/50 hover:shadow-xl transition hover:-translate-y-1">
              <Brain className="text-violet-500 w-10 h-10 mb-4" />
              <h4 className="text-xl font-semibold mb-2">
                Adaptive Learning
              </h4>
              <p className="text-gray-600">
                Personalized responses that evolve by learning your emotional patterns over time.
              </p>
              <a href="#" className="inline-flex items-center text-purple-600 font-medium mt-4 hover:text-purple-700">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
          
          <div className="mt-20 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-purple-100 to-white rounded-2xl overflow-hidden">
                <img 
                  src="/DALL·E 2025-03-28 02.01.04 - A futuristic AI-powered therapeutic teddy bear and pillow designed for all ages, providing emotional support for both children and adults. The teddy b.webp" 
                  alt="TheraIOT in action"
                  className="w-full h-auto rounded-2xl shadow-lg transform hover:scale-105 transition duration-500"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-6">
                  <Users className="text-green-600 w-4 h-4" />
                  <span className="text-green-800 font-medium">For All Ages</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Therapeutic Support for Children & Adults
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  TheraIOT adapts its interaction style based on the user's age, preferences, 
                  and emotional needs. From comforting children during stressful times to providing 
                  mindfulness guidance for adults.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Age-appropriate conversations and responses</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Customizable comfort levels and interaction styles</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Parent controls and monitoring through companion app</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-24 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
              <Sparkles className="text-blue-600 w-4 h-4" />
              <span className="text-blue-800 font-medium">Interactive Experience</span>
            </span>
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Explore TheraIOT in 3D
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our therapeutic companion works through an interactive 3D experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative aspect-square bg-gradient-to-br from-purple-100 to-indigo-50 rounded-2xl shadow-xl overflow-hidden">
              <img
                src="/teddy-showcase.webp" 
                alt="TheraIOT Interactive 3D Model"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  onClick={() => setVideoPlaying(true)}
                  className="bg-white/90 backdrop-blur-sm p-6 rounded-full shadow-lg hover:bg-white transition transform hover:scale-105"
                >
                  <svg className="w-8 h-8 text-purple-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Brain className="text-purple-700 w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold">AI-Powered Understanding</h4>
                </div>
                <p className="text-gray-600">
                  Our neural processing system understands emotions through voice patterns, 
                  facial expressions, and biometric data to provide personalized support.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Heart className="text-purple-700 w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold">Therapeutic Connection</h4>
                </div>
                <p className="text-gray-600">
                  Build a genuine emotional bond with a companion that actively responds 
                  to your emotional needs and adapts to your personal patterns.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Settings className="text-purple-700 w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold">Fully Customizable</h4>
                </div>
                <p className="text-gray-600">
                  Tailor your TheraIOT experience with customizable responses, 
                  personality traits, and integration with your smart home ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
              <Sparkles className="text-purple-600 w-4 h-4" />
              <span className="text-purple-800 font-medium">Pre-Order Special</span>
            </span>
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Choose Your Perfect Companion
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pre-order now to secure your TheraIOT at our special introductory prices 
              with exclusive early adopter benefits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Standard Package */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition hover:-translate-y-1 hover:shadow-2xl border border-gray-100">
              <div className="p-8 border-b border-gray-100">
                <h4 className="text-xl font-bold mb-2">Standard</h4>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-bold">$103</span>
                  <span className="text-gray-500 line-through mb-1">$249</span>
                </div>
                <p className="text-gray-600 mb-6">Perfect for individual users seeking emotional support.</p>
                <Link to="/preorder" className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
                  Pre-order Now
                </Link>
              </div>
              <div className="p-8">
                <p className="font-medium text-gray-700 mb-4">Features include:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Basic emotional response system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">6-month cloud subscription</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Companion mobile app</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">1-year warranty</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Premium Package - Highlighted */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-xl overflow-hidden transition hover:-translate-y-1 hover:shadow-2xl border-2 border-purple-200 transform scale-105">
              <div className="bg-purple-600 text-white text-center py-2 text-sm font-medium">
                MOST POPULAR
              </div>
              <div className="p-8 border-b border-purple-100">
                <h4 className="text-xl font-bold mb-2">Premium</h4>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-bold">$209</span>
                  <span className="text-gray-500 line-through mb-1">$399</span>
                </div>
                <p className="text-gray-600 mb-6">Enhanced features for deeper emotional support and personalization.</p>
                <Link to="/preorder" className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition">
                  Pre-order Now
                </Link>
              </div>
              <div className="p-8">
                <p className="font-medium text-gray-700 mb-4">Everything in Standard, plus:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-purple-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Advanced emotional response system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-purple-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">12-month cloud subscription</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-purple-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Premium accessory pack</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-purple-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">2-year extended warranty</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-purple-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Priority customer support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Family Package */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition hover:-translate-y-1 hover:shadow-2xl border border-gray-100">
              <div className="p-8 border-b border-gray-100">
                <h4 className="text-xl font-bold mb-2">Family</h4>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-bold">$399</span>
                  <span className="text-gray-500 line-through mb-1">$449</span>
                </div>
                <p className="text-gray-600 mb-6">Complete package for families needing multiple support options.</p>
                <Link to="/preorder" className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
                  Pre-order Now
                </Link>
              </div>
              <div className="p-8">
                <p className="font-medium text-gray-700 mb-4">Everything in Premium, plus:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Two TheraIOT companions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Family account with 5 profiles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">24-month cloud subscription</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">3-year comprehensive warranty</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gray-50 p-8 rounded-2xl max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h4 className="text-xl font-bold mb-2">Need a custom solution?</h4>
                <p className="text-gray-600">
                  We offer special packages for healthcare providers, schools, and organizations.
                </p>
              </div>
              <button className="whitespace-nowrap px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 font-medium">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h4 className="text-2xl font-bold text-center mb-8">Feature Comparison</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-xl overflow-hidden shadow-lg">
                <thead className="bg-purple-50">
                  <tr>
                    <th className="py-4 px-6 text-left text-gray-700 font-semibold">Feature</th>
                    <th className="py-4 px-6 text-center text-gray-700 font-semibold">Standard</th>
                    <th className="py-4 px-6 text-center bg-purple-100 text-purple-800 font-semibold">Premium</th>
                    <th className="py-4 px-6 text-center text-gray-700 font-semibold">Family</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 px-6 text-gray-800">Emotional Response System</td>
                    <td className="py-3 px-6 text-center">Basic</td>
                    <td className="py-3 px-6 text-center bg-purple-50">Advanced</td>
                    <td className="py-3 px-6 text-center">Advanced</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-6 text-gray-800">Voice Recognition</td>
                    <td className="py-3 px-6 text-center">✓</td>
                    <td className="py-3 px-6 text-center bg-purple-50">Enhanced</td>
                    <td className="py-3 px-6 text-center">Enhanced</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-6 text-gray-800">Cloud Subscription</td>
                    <td className="py-3 px-6 text-center">6 months</td>
                    <td className="py-3 px-6 text-center bg-purple-50">12 months</td>
                    <td className="py-3 px-6 text-center">24 months</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-6 text-gray-800">Personalized Learning</td>
                    <td className="py-3 px-6 text-center">Basic</td>
                    <td className="py-3 px-6 text-center bg-purple-50">Advanced</td>
                    <td className="py-3 px-6 text-center">Advanced</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-6 text-gray-800">Smart Home Integration</td>
                    <td className="py-3 px-6 text-center">—</td>
                    <td className="py-3 px-6 text-center bg-purple-50">✓</td>
                    <td className="py-3 px-6 text-center">✓</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-6 text-gray-800">Multi-user Support</td>
                    <td className="py-3 px-6 text-center">—</td>
                    <td className="py-3 px-6 text-center bg-purple-50">2 profiles</td>
                    <td className="py-3 px-6 text-center">5 profiles</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-6 text-gray-800">Warranty</td>
                    <td className="py-3 px-6 text-center">1 year</td>
                    <td className="py-3 px-6 text-center bg-purple-50">2 years</td>
                    <td className="py-3 px-6 text-center">3 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-xl text-gray-600">
              Everything you need to know about TheraIOT
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-bold text-lg mb-2">How does TheraIOT sense emotions?</h4>
              <p className="text-gray-600">
                TheraIOT uses a combination of voice analysis, facial recognition, and biometric sensors 
                to detect subtle emotional changes and respond appropriately.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-bold text-lg mb-2">Is my data private and secure?</h4>
              <p className="text-gray-600">
                Absolutely. All emotional data is processed locally on the device. Any cloud data 
                is fully encrypted and anonymized, with strict privacy controls.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-bold text-lg mb-2">How long does the battery last?</h4>
              <p className="text-gray-600">
                TheraIOT has an all-day battery life of approximately 18 hours with typical use, 
                and recharges fully in just 2 hours.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-bold text-lg mb-2">Can multiple people use the same TheraIOT?</h4>
              <p className="text-gray-600">
                Yes, Premium and Family packages support multiple user profiles, each with personalized 
                responses and tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
              <Briefcase className="text-blue-600 w-4 h-4" />
              <span className="text-blue-800 font-medium">Partnership Opportunities</span>
            </span>
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Invest in the Future of Emotional Wellness
            </h3>
            <p className="text-xl text-gray-600">
              Join us on our mission to revolutionize therapeutic technology and make emotional support accessible to all.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="bg-purple-100 w-14 h-14 flex items-center justify-center rounded-full mb-6">
                <DollarSign className="text-purple-600 w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3">Financial Investor</h4>
              <p className="text-gray-600 mb-6">Support TheraIOT with capital investment and become a stakeholder in our growth.</p>
              <Link to="/invest" className="text-purple-600 font-medium flex items-center gap-2 hover:text-purple-800">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="bg-purple-100 w-14 h-14 flex items-center justify-center rounded-full mb-6">
                <Code className="text-purple-600 w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3">Engineering Partner</h4>
              <p className="text-gray-600 mb-6">Contribute your technical expertise to help develop our cutting-edge technology.</p>
              <Link to="/invest" className="text-purple-600 font-medium flex items-center gap-2 hover:text-purple-800">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="bg-purple-100 w-14 h-14 flex items-center justify-center rounded-full mb-6">
                <Briefcase className="text-purple-600 w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3">Business Partnership</h4>
              <p className="text-gray-600 mb-6">Explore strategic partnership opportunities with TheraIOT for market expansion.</p>
              <Link to="/invest" className="text-purple-600 font-medium flex items-center gap-2 hover:text-purple-800">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="bg-purple-100 w-14 h-14 flex items-center justify-center rounded-full mb-6">
                <Users className="text-purple-600 w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3">Clinical Partner</h4>
              <p className="text-gray-600 mb-6">Help shape our product by contributing to research and clinical testing.</p>
              <Link to="/invest" className="text-purple-600 font-medium flex items-center gap-2 hover:text-purple-800">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/invest" 
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-medium hover:bg-purple-50 transition"
            >
              Explore All Investment Opportunities
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-6">
              Experience the Future of Emotional Support
            </h3>
            <p className="text-xl mb-10 opacity-90">
              Limited quantities available for our first production run. 
              Secure yours today to be among the first to experience TheraIOT.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/preorder" className="bg-white text-purple-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition shadow-lg">
                Pre-order Now
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-500 transition">
                Download Brochure
              </button>
            </div>
            <div className="mt-8 p-4 bg-white/10 rounded-xl inline-block">
              <div className="flex items-center gap-2">
                <Shield className="text-white w-5 h-5" />
                <span className="text-sm">30-day money back guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 py-12">
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} TheraIOT Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;