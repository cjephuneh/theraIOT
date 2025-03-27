import React, { useState } from 'react';
import {
  Brain,
  Heart,
  Shield,
  MessageCircle,
  Star,
  CheckCircle2,
  Sparkles,
  Wifi,
  Battery,
  Moon,
  Clock,
  Settings,
} from 'lucide-react';

function App() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <Heart className="text-purple-800 w-8 h-8" />
            <h1 className="text-3xl font-bold text-purple-800">TheraIOT</h1>
          </div>
          <div className="flex items-center gap-4">
            <a href="#features" className="text-gray-600 hover:text-purple-600">
              Features
            </a>
            <a href="#specs" className="text-gray-600 hover:text-purple-600">
              Specs
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-purple-600">
              Pricing
            </a>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition">
              Pre-order Now
            </button>
          </div>
        </nav>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-6">
              <Sparkles className="text-purple-600 w-4 h-4" />
              <span className="text-purple-800 font-medium">
                Version 6.0 - Now with Advanced AI
              </span>
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              The Future of Emotional Support is Here
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience the next generation of therapeutic companions. With
              advanced AI, biometric sensing, and adaptive learning, TheraIOT
              v6.0 provides personalized comfort like never before.
            </p>
            <div className="space-x-4">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition text-lg">
                Join Waitlist
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full hover:bg-purple-50 transition text-lg">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="../glow.webp"
              alt="AI Therapeutic Teddy Bear"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <Brain className="text-purple-600 w-6 h-6" />
                <span className="text-sm font-medium">Neural Processing</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Advanced Features for Enhanced Well-being
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 bg-purple-50 rounded-xl hover:shadow-lg transition">
              <Heart className="text-purple-600 w-8 h-8 mb-4" />
              <h4 className="text-xl font-semibold mb-2">
                Emotional Response 2.0
              </h4>
              <p className="text-gray-600">
                Enhanced biometric sensors with machine learning for deeper
                emotional understanding.
              </p>
            </div>
            <div className="p-6 bg-purple-50 rounded-xl hover:shadow-lg transition">
              <MessageCircle className="text-purple-600 w-8 h-8 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Natural Dialogue</h4>
              <p className="text-gray-600">
                Advanced NLP for more meaningful and therapeutic conversations.
              </p>
            </div>
            <div className="p-6 bg-purple-50 rounded-xl hover:shadow-lg transition">
              <Shield className="text-purple-600 w-8 h-8 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Enhanced Security</h4>
              <p className="text-gray-600">
                Military-grade encryption and improved privacy controls.
              </p>
            </div>
            <div className="p-6 bg-purple-50 rounded-xl hover:shadow-lg transition">
              <Brain className="text-purple-600 w-8 h-8 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Adaptive Learning</h4>
              <p className="text-gray-600">
                Personalized responses that evolve with your emotional patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs Section */}
      <section
        id="specs"
        className="py-20 bg-gradient-to-r from-purple-50 to-white"
      >
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Technical Specifications
          </h3>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Wifi className="text-purple-600 w-6 h-6" />
                <div>
                  <h4 className="font-semibold">Connectivity</h4>
                  <p className="text-gray-600">
                    Bluetooth 5.2, Wi-Fi 6E, Thread
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Battery className="text-purple-600 w-6 h-6" />
                <div>
                  <h4 className="font-semibold">Battery Life</h4>
                  <p className="text-gray-600">
                    Up to 2 weeks on single charge
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Moon className="text-purple-600 w-6 h-6" />
                <div>
                  <h4 className="font-semibold">Sleep Tracking</h4>
                  <p className="text-gray-600">
                    Advanced sleep patterns analysis
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Clock className="text-purple-600 w-6 h-6" />
                <div>
                  <h4 className="font-semibold">Response Time</h4>
                  <p className="text-gray-600">
                    &lt; 50ms emotional recognition
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Settings className="text-purple-600 w-6 h-6" />
                <div>
                  <h4 className="font-semibold">Customization</h4>
                  <p className="text-gray-600">Fully programmable responses</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Shield className="text-purple-600 w-6 h-6" />
                <div>
                  <h4 className="font-semibold">Security</h4>
                  <p className="text-gray-600">
                    256-bit encryption, secure element
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preview & Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-4">
                <Star className="text-yellow-600 w-4 h-4" />
                <span className="text-yellow-800 font-medium">
                  Limited Time Launch Offer
                </span>
              </span>
              <h3 className="text-4xl font-bold text-gray-800 mb-4">
                Version 6.0 Launch Special
              </h3>
              <p className="text-xl text-gray-600">
                Experience the most advanced therapeutic companion.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-white rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="text-yellow-500 w-6 h-6" />
                    <span className="text-purple-800 font-semibold">
                      Premium Package
                    </span>
                  </div>
                  <h4 className="text-4xl font-bold text-gray-800 mb-4">
                    $200
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-green-500 w-5 h-5" />
                      <span>Next-Gen AI Therapeutic Companion</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-green-500 w-5 h-5" />
                      <span>2-year extended warranty</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-green-500 w-5 h-5" />
                      <span>Premium companion app features</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-green-500 w-5 h-5" />
                      <span>24/7 priority support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-green-500 w-5 h-5" />
                      <span>Free software updates for life</span>
                    </li>
                  </ul>
                  <button className="mt-6 w-full bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition text-lg">
                    Pre-order Now - Save 20%
                  </button>
                  <p className="text-sm text-gray-600 mt-2 text-center">
                    Limited units available for Q4 2025
                  </p>
                </div>
                <div className="flex-1">
                  <img
                    src="https://images.unsplash.com/photo-1567169866456-a0759b632320?auto=format&fit=crop&w=800&q=80"
                    alt="TheraIOT Smart Teddy"
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 text-center bg-gradient-to-t from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-purple-800 mb-6">
            Stay Updated
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community to receive exclusive updates, early access
            opportunities, and special offers for Version 6.0.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border-2 border-purple-200 focus:border-purple-600 focus:outline-none"
              />
              <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-gray-600">
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-purple-600">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Patents
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-600">
            <p>© 2025 TheraIOT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
