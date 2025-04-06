import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  ArrowLeft,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Globe,
  Headphones,
  Clock,
  AlertCircle
} from 'lucide-react';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    // Validate form fields
    if (!formData.fullName || !formData.email || !formData.message) {
      setSubmitError("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    try {
      // Here you would typically send the data to your backend API
      // For now we'll just simulate a successful submission
      console.log('Sending contact form data:', formData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Handle successful submission
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Scroll to top of page
      window.scrollTo(0, 0);
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitError("There was a problem submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <Heart className="text-purple-800 w-7 h-7" />
              <h1 className="text-xl font-bold text-purple-800">TheraIOT</h1>
            </Link>
            <Link to="/" className="text-gray-600 hover:text-purple-600 font-medium flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {submitSuccess ? (
          <div className="max-w-2xl mx-auto text-center bg-white p-12 rounded-2xl shadow-xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <CheckCircle2 className="text-green-600 w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You for Reaching Out!</h2>
            <p className="text-xl text-gray-600 mb-6">
              We've received your message and will get back to you as soon as possible.
            </p>
            <p className="text-gray-600 mb-8">
              A confirmation has been sent to <span className="font-semibold">{formData.email}</span>. 
              Our team typically responds within 24-48 business hours.
            </p>
            
            <div className="border-t border-gray-200 pt-8 mt-8">
              <h3 className="font-bold text-gray-800 mb-4">What happens next?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center">
                  <div className="bg-purple-100 p-3 rounded-full mb-3">
                    <Mail className="text-purple-600 w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Email Confirmation</h4>
                  <p className="text-sm text-gray-600 text-center">Check your inbox for a confirmation email</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-purple-100 p-3 rounded-full mb-3">
                    <Clock className="text-purple-600 w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Review Process</h4>
                  <p className="text-sm text-gray-600 text-center">Our team will review your inquiry</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-purple-100 p-3 rounded-full mb-3">
                    <Headphones className="text-purple-600 w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Personal Response</h4>
                  <p className="text-sm text-gray-600 text-center">A team member will contact you directly</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Link 
                to="/"
                className="inline-flex items-center justify-center bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition font-medium"
              >
                Back to Home
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact TheraIOT</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have questions about our products or services? Our team is here to help.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="bg-purple-100 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-6">
                  <Mail className="text-purple-600 w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600 mb-3">For general inquiries</p>
                <a href="mailto:hello@theraiot.com" className="text-purple-600 font-medium">hello@theraiot.com</a>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="bg-green-100 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-6">
                  <Phone className="text-green-600 w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-600 mb-3">Monday-Friday, 9am-5pm EST</p>
                <a href="tel:+1-800-THERAIOT" className="text-purple-600 font-medium">+1-800-THERAIOT</a>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="bg-blue-100 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-6">
                  <MapPin className="text-blue-600 w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Office</h3>
                <p className="text-gray-600 mb-3">Our headquarters</p>
                <address className="not-italic text-purple-600 font-medium">
                  Menlo Park, CA 94025
                </address>
              </div>
            </div>

            <div className="max-w-6xl mx-auto mt-16">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1 bg-gradient-to-br from-purple-600 to-indigo-700 p-8 rounded-2xl text-white">
                  <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                  <p className="mb-6 opacity-90">
                    Fill out the form and our team will get back to you as soon as possible.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Globe className="w-6 h-6 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Our Social Media</h4>
                        <div className="flex gap-3 mt-2">
                          <a href="#" className="hover:opacity-80 transition">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                          </a>
                          <a href="#" className="hover:opacity-80 transition">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                          </a>
                          <a href="#" className="hover:opacity-80 transition">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                            </svg>
                          </a>
                          <a href="#" className="hover:opacity-80 transition">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Headphones className="w-6 h-6 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Support Hours</h4>
                        <p className="opacity-90 text-sm mt-1">
                          Monday - Friday: 9am - 5pm EST<br />
                          Saturday: 10am - 2pm EST<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <MessageSquare className="w-6 h-6 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Live Chat</h4>
                        <p className="opacity-90 text-sm mt-1">
                          Chat with our support team during business hours through our website.
                        </p>
                        <button className="mt-2 bg-white/20 hover:bg-white/30 transition px-4 py-2 rounded-lg text-sm font-medium">
                          Start Chat
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                    
                    {submitError && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <p>{submitError}</p>
                      </div>
                    )}
                    
                    <form onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number (Optional)
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                            Subject
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                          >
                            <option value="">Select a subject</option>
                            <option value="Pre-order Question">Pre-order Question</option>
                            <option value="Product Information">Product Information</option>
                            <option value="Technical Support">Technical Support</option>
                            <option value="Partnership Inquiry">Partnership Inquiry</option>
                            <option value="Press Inquiry">Press Inquiry</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                          required
                        ></textarea>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-500">* Required fields</div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition flex items-center gap-2 disabled:opacity-70"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center">
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </div>
                          ) : (
                            <>Send Message <Send className="w-4 h-4" /></>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto mt-20">
              <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-lg mb-2">How long does it take to get a response?</h4>
                  <p className="text-gray-600">
                    We typically respond to all inquiries within 24-48 business hours. For urgent matters, 
                    please call our support line directly.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-lg mb-2">Do you offer technical support?</h4>
                  <p className="text-gray-600">
                    Yes, our support team is available during business hours to help with any technical issues. 
                    Premium customers have access to priority support.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-lg mb-2">Can I schedule a product demo?</h4>
                  <p className="text-gray-600">
                    Absolutely! Fill out our contact form and select "Product Information" as the subject, 
                    and we'll arrange a personalized demo for you.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-lg mb-2">Do you have international support?</h4>
                  <p className="text-gray-600">
                    Yes, we offer international support through email and scheduled video calls. 
                    We're expanding our support hours to accommodate various time zones.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} TheraIOT Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default ContactPage;