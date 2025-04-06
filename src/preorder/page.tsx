import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  Heart,
  CheckCircle2,
  Calendar,
  Mail,
  Truck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { submitPreorder } from '../utils/api'; // Changed from appwrite to api

// Define TypeScript interfaces for better type safety
interface PreorderData {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
  additionalNotes: string;
  selectedPackage: string | null;
  registrationDate: string;
  status: string;
}

interface PreorderResponse {
  success: boolean;
  registrationId: string;
}

function PreorderPage() {
  const [step, setStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    additionalNotes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const [registrationId, setRegistrationId] = useState('');

  const handlePackageSelect = (pkg: string) => {
    setSelectedPackage(pkg);
    setStep(2);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.email || !formData.fullName || !formData.phoneNumber) {
      alert("Please fill in all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Prepare data for API
      const preorderData: PreorderData = {
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        address: formData.address || '',
        city: formData.city || '',
        zipCode: formData.zipCode || '',
        country: formData.country || '',
        additionalNotes: formData.additionalNotes || '',
        selectedPackage,
        registrationDate: new Date().toISOString(),
        status: 'registered' // You can use this field to track status (registered, contacted, etc.)
      };
      
      // Log data being sent to API for debugging
      console.log('Submitting preorder data:', preorderData);
      
      // Submit to Azure API
      const result = await submitPreorder(preorderData);
      
      // Log API response for debugging
      console.log('API response:', result);
      
      // Set the registration ID from API response
      setRegistrationId(result.registrationId);
      
      // Show success state
      setRegistrationComplete(true);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Error submitting form:", error);
      
      // Check for network errors
      if (!navigator.onLine) {
        alert("You appear to be offline. Please check your internet connection and try again.");
      } else {
        alert("There was an error submitting your information. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
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

      <div className="container mx-auto px-4 py-12">
        {registrationComplete ? (
          <div className="max-w-2xl mx-auto text-center bg-white p-12 rounded-2xl shadow-xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <CheckCircle2 className="text-green-600 w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You for Your Interest!</h2>
            <p className="text-xl text-gray-600 mb-6">
              Your registration ID is: <span className="font-bold text-purple-700">{registrationId}</span>
            </p>
            <p className="text-gray-600 mb-8">
              We've recorded your interest in the {selectedPackage === 'standard' ? 'Standard' : 
              selectedPackage === 'premium' ? 'Premium' : 'Family'} package. We'll contact you at {formData.email} with updates 
              about TheraIOT's availability and special pre-launch offers.
            </p>
            <div className="border-t border-gray-200 pt-8 mt-8">
              <h3 className="font-bold text-gray-800 mb-4">What happens next?</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex flex-col items-center">
                  <div className="bg-purple-100 p-3 rounded-full mb-3">
                    <Calendar className="text-purple-600 w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Updates</h4>
                  <p className="text-sm text-gray-600 text-center">You'll receive exclusive updates on our progress</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-purple-100 p-3 rounded-full mb-3">
                    <Mail className="text-purple-600 w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Early Access</h4>
                  <p className="text-sm text-gray-600 text-center">Priority notification when pre-orders open</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-purple-100 p-3 rounded-full mb-3">
                    <Truck className="text-purple-600 w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Pre-Launch Offers</h4>
                  <p className="text-sm text-gray-600 text-center">Special discounts for early registrants</p>
                </div>
              </div>
            </div>
            <Link 
              to="/"
              className="mt-8 inline-flex items-center justify-center bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition font-medium"
            >
              Back to Home
            </Link>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Register Your Interest in TheraIOT</h2>
              <p className="text-xl text-gray-600">Join our waitlist and be the first to know when we launch</p>
              
              {/* Progress Steps */}
              <div className="flex justify-center items-center mt-8">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    1
                  </div>
                  <div className={`w-20 h-1 ${step >= 2 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    2
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-16 mt-2 mb-8 text-sm">
                <span className={step >= 1 ? 'text-purple-600 font-medium' : 'text-gray-500'}>Select Package</span>
                <span className={step >= 2 ? 'text-purple-600 font-medium' : 'text-gray-500'}>Your Details</span>
              </div>
            </div>

            {/* Step 1: Package Selection */}
            {step === 1 && (
              <div className="grid md:grid-cols-3 gap-8">
                {/* Standard Package */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition hover:-translate-y-1 hover:shadow-2xl border border-gray-100">
                  <div className="p-8 border-b border-gray-100">
                    <h4 className="text-xl font-bold mb-2">Standard</h4>
                    <div className="flex items-end gap-1 mb-6">
                      <span className="text-4xl font-bold">$103</span>
                      <span className="text-gray-500 line-through mb-1">$249</span>
                    </div>
                    <p className="text-gray-600 mb-6">Perfect for individual users seeking emotional support.</p>
                    <button 
                      onClick={() => handlePackageSelect('standard')}
                      className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
                    >
                      Select
                    </button>
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
                    <button 
                      onClick={() => handlePackageSelect('premium')}
                      className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition"
                    >
                      Select
                    </button>
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
                    </ul>
                  </div>
                </div>

                {/* Family Package */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition hover:-translate-y-1 hover:shadow-2xl border border-gray-100">
                  <div className="p-8 border-b border-gray-100">
                    <h4 className="text-xl font-bold mb-2">Family</h4>
                    <div className="flex items-end gap-1 mb-6">
                      <span className="text-4xl font-bold">$399</span>
                      <span className="text-gray-500 line-through mb-1">$799</span>
                    </div>
                    <p className="text-gray-600 mb-6">Complete package for families needing multiple support options.</p>
                    <button 
                      onClick={() => handlePackageSelect('family')}
                      className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
                    >
                      Select
                    </button>
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
            )}

            {/* Step 2: Contact Information */}
            {step === 2 && (
              <div>
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
                  <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                          value={formData.fullName}
                          onChange={handleInputChange}
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
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                          Country
                        </label>
                        <input
                          type="text"
                          id="country"
                          name="country"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                          value={formData.country}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Notes (Optional)
                      </label>
                      <textarea
                        id="additionalNotes"
                        name="additionalNotes"
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                        value={formData.additionalNotes}
                        onChange={handleInputChange}
                        placeholder="Tell us about your specific needs or any questions you have"
                      ></textarea>
                    </div>
                    
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-medium mb-2">Selected Package: {
                        selectedPackage === 'standard' ? 'Standard ($103)' : 
                        selectedPackage === 'premium' ? 'Premium ($209)' : 'Family ($399)'
                      }</h4>
                      <p className="text-sm text-gray-600">
                        By submitting this form, you're expressing interest in TheraIOT. 
                        This is not a purchase - we'll notify you when our pre-order system is ready.
                      </p>
                    </div>
                    
                    <p className="text-xs text-gray-500">
                      By submitting, you agree to receive updates about TheraIOT. 
                      We respect your privacy and will never share your information with third parties.
                    </p>
                    
                    <div className="flex justify-between pt-6">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-8 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition flex items-center gap-2"
                      >
                        <ArrowLeft className="w-4 h-4" /> Back
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition flex items-center gap-2 disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </div>
                        ) : (
                          <>Submit Registration <ArrowRight className="w-4 h-4" /></>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} TheraIOT Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default PreorderPage;