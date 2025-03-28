import { useState } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  Heart,
  CheckCircle2,
  DollarSign,
  Users,
  Briefcase,
  Code,
  Headphones,
  LucideIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { submitInvestment } from '../utils/appwrite';

interface InvestmentOption {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  opportunities: string[];
  minAmount?: number;
  defaultAmount?: number;
}

function InvestPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [investmentAmount, setInvestmentAmount] = useState<number>(0);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    company: '',
    role: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionComplete, setSubmissionComplete] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  const investmentOptions: InvestmentOption[] = [
    {
      id: 'investor',
      title: 'Financial Investor',
      description: 'Support TheraIOT with capital investment and become a stakeholder in our growth',
      icon: DollarSign,
      minAmount: 10000,
      defaultAmount: 50000,
      opportunities: [
        'Equity opportunities for early investors',
        'Regular updates on company performance and milestones',
        'Priority access to future funding rounds',
        'Involvement in strategic decisions based on investment level'
      ]
    },
    {
      id: 'engineer',
      title: 'Engineering Partner',
      description: 'Contribute your technical expertise to help develop our cutting-edge technology',
      icon: Code,
      opportunities: [
        'Collaborate on AI and machine learning development',
        'Hardware design and optimization opportunities',
        'Software engineering for emotional response systems',
        'Opportunity to work with leading experts in therapeutic technology'
      ]
    },
    {
      id: 'business',
      title: 'Business Partnership',
      description: 'Explore strategic partnership opportunities with TheraIOT',
      icon: Briefcase,
      opportunities: [
        'Distribution partnerships',
        'Co-marketing opportunities',
        'Integration with complementary products',
        'Healthcare provider partnerships'
      ]
    },
    {
      id: 'volunteer',
      title: 'Clinical Partner',
      description: 'Help shape our product by contributing to research and testing',
      icon: Users,
      opportunities: [
        'Participate in usability studies',
        'Trial TheraIOT in clinical settings',
        'Contribute to research on therapeutic effectiveness',
        'Help shape future product features based on field experience'
      ]
    },
    {
      id: 'support',
      title: 'Sales & Support',
      description: 'Join our team in customer-facing roles to drive adoption and provide exceptional support',
      icon: Headphones,
      opportunities: [
        'Sales representative opportunities',
        'Customer success and support roles',
        'Training and education positions',
        'Market development initiatives'
      ]
    }
  ];

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    const option = investmentOptions.find(opt => opt.id === optionId);
    if (option?.defaultAmount) {
      setInvestmentAmount(option.defaultAmount);
      setCustomAmount(option.defaultAmount.toString());
    } else {
      setInvestmentAmount(0);
      setCustomAmount('');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'customAmount') {
      const numValue = value === '' ? 0 : parseInt(value.replace(/,/g, ''));
      setCustomAmount(value);
      setInvestmentAmount(isNaN(numValue) ? 0 : numValue);
      return;
    }
    
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.email || !formData.fullName) {
      alert("Please fill in required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Prepare data for Appwrite
      const investmentData = {
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber || '',
        company: formData.company || '',
        role: formData.role || '',
        message: formData.message || '',
        interestType: selectedOption,
        investmentAmount: selectedOption === 'investor' ? investmentAmount : 0,
        submissionDate: new Date().toISOString(),
        status: 'new' // You can use this field to track status (new, contacted, in_discussion, etc.)
      };
      
      // Submit to Appwrite
      const result = await submitInvestment(investmentData);
      
      // Set the submission ID from Appwrite
      setSubmissionId(result.submissionId);
      
      // Show success state
      setSubmissionComplete(true);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your information. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedOptionData = investmentOptions.find(opt => opt.id === selectedOption);

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

      <div className="container mx-auto px-4 py-12">
        {submissionComplete ? (
          <div className="max-w-2xl mx-auto text-center bg-white p-12 rounded-2xl shadow-xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <CheckCircle2 className="text-green-600 w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You for Your Interest!</h2>
            <p className="text-xl text-gray-600 mb-6">
              Your submission reference is: <span className="font-bold text-purple-700">{submissionId}</span>
            </p>
            <p className="text-gray-600 mb-8">
              We've received your interest in {
                selectedOption === 'investor' ? 'investing in' :
                selectedOption === 'engineer' ? 'engineering partnership with' :
                selectedOption === 'business' ? 'business partnership with' :
                selectedOption === 'volunteer' ? 'volunteering with' :
                'supporting'
              } TheraIOT. Our team will reach out to you at {formData.email} within the next 48 hours.
            </p>
            <div className="border-t border-gray-200 pt-8 mt-8">
              <h3 className="font-bold text-gray-800 mb-4">Next Steps</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex flex-col items-center">
                  <div className="bg-purple-100 p-3 rounded-full mb-3">
                    <CheckCircle2 className="text-purple-600 w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Initial Call</h4>
                  <p className="text-sm text-gray-600 text-center">We'll schedule an initial discussion to understand your interests</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-purple-100 p-3 rounded-full mb-3">
                    <Users className="text-purple-600 w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Team Meeting</h4>
                  <p className="text-sm text-gray-600 text-center">Meet the relevant team members based on your interest</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-purple-100 p-3 rounded-full mb-3">
                    <Briefcase className="text-purple-600 w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Formal Proposal</h4>
                  <p className="text-sm text-gray-600 text-center">Receive a tailored proposal for your specific involvement</p>
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
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Partner with TheraIOT</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join us in revolutionizing emotional support technology. Whether you're an investor, engineer, 
                business partner, or volunteer, there's a way for you to be part of our journey.
              </p>
            </div>

            {!selectedOption ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {investmentOptions.map((option) => (
                  <div 
                    key={option.id}
                    onClick={() => handleOptionSelect(option.id)}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition hover:-translate-y-1 hover:shadow-xl border border-gray-100"
                  >
                    <div className="p-8">
                      <div className="bg-purple-100 w-14 h-14 flex items-center justify-center rounded-full mb-6">
                        <option.icon className="text-purple-600 w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                      <p className="text-gray-600 mb-6">{option.description}</p>
                      <button className="text-purple-600 font-medium flex items-center gap-2 hover:text-purple-800">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1 bg-white rounded-2xl shadow-lg overflow-hidden h-fit sticky top-8">
                  <div className="p-6">
                    <button 
                      onClick={() => setSelectedOption(null)}
                      className="flex items-center gap-1 text-gray-500 hover:text-purple-600 mb-6"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back to all options
                    </button>
                    <div className="bg-purple-100 w-14 h-14 flex items-center justify-center rounded-full mb-6">
                      {selectedOptionData && <selectedOptionData.icon className="text-purple-600 w-7 h-7" />}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{selectedOptionData?.title}</h3>
                    <p className="text-gray-600 mb-6">{selectedOptionData?.description}</p>
                    <div className="border-t border-gray-100 pt-6">
                      <h4 className="font-medium mb-4">Opportunities:</h4>
                      <ul className="space-y-3">
                        {selectedOptionData?.opportunities.map((opportunity, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="text-green-500 w-4 h-4 mt-1 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{opportunity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
                    <h3 className="text-xl font-bold mb-6">Express Your Interest</h3>
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
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                            Company/Organization
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                            value={formData.company}
                            onChange={handleInputChange}
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Role
                          </label>
                          <input
                            type="text"
                            id="role"
                            name="role"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                            value={formData.role}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      
                      {selectedOption === 'investor' && (
                        <div>
                          <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 mb-1">
                            Investment Amount Range ($)
                          </label>
                          <div className="grid grid-cols-3 gap-4">
                            {[10000, 50000, 100000].map(amount => (
                              <button
                                key={amount}
                                type="button"
                                onClick={() => {
                                  setInvestmentAmount(amount);
                                  setCustomAmount(amount.toLocaleString());
                                }}
                                className={`py-2 px-4 border rounded-lg transition ${
                                  investmentAmount === amount 
                                    ? 'border-purple-500 bg-purple-50 text-purple-700' 
                                    : 'border-gray-200 hover:border-purple-300'
                                }`}
                              >
                                ${amount.toLocaleString()}
                              </button>
                            ))}
                          </div>
                          <div className="mt-4">
                            <div className="flex items-center">
                              <span className="bg-gray-100 px-3 py-2 border border-r-0 border-gray-300 rounded-l-lg">$</span>
                              <input
                                type="text"
                                id="customAmount"
                                name="customAmount"
                                placeholder="Custom amount"
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                                value={customAmount}
                                onChange={handleInputChange}
                              />
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                              Minimum investment: ${selectedOptionData?.minAmount?.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      )}
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          How would you like to contribute? (Optional)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your specific interests or how you'd like to contribute to TheraIOT..."
                        ></textarea>
                      </div>
                      
                      <p className="text-xs text-gray-500">
                        By submitting, you agree to receive communications from TheraIOT. 
                        We respect your privacy and will handle your information in accordance with our privacy policy.
                      </p>
                      
                      <div className="pt-6">
                        <button
                          type="submit"
                          disabled={isSubmitting || (selectedOption === 'investor' && investmentAmount < (selectedOptionData?.minAmount || 0))}
                          className="px-8 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>Processing...</>
                          ) : (
                            <>Submit <ArrowRight className="w-4 h-4" /></>
                          )}
                        </button>
                        {selectedOption === 'investor' && investmentAmount < (selectedOptionData?.minAmount || 0) && (
                          <p className="text-red-500 text-sm mt-2">
                            Please enter an investment amount of at least ${selectedOptionData?.minAmount?.toLocaleString()}
                          </p>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>     

{/* Footer */}
<footer className="bg-gray-100 py-8 mt-12">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Heart className="text-purple-800 w-6 h-6" />
          <h3 className="text-lg font-bold text-purple-800">TheraIOT</h3>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          Revolutionizing emotional support through intelligent therapeutic companions.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-gray-500 hover:text-purple-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
            </svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-purple-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-purple-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
            </svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-purple-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">Investment</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-gray-600 hover:text-purple-600 text-sm">Financial Investment</a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-purple-600 text-sm">Engineering Partnership</a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-purple-600 text-sm">Business Partnership</a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-purple-600 text-sm">Clinical Partnership</a>
          </li>
        </ul>
      </div>
      
      
      
      <div>
        <h3 className="font-semibold mb-4">Contact</h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:invest@theraiot.com" className="text-gray-600 hover:text-purple-600 text-sm">info@bricklabsai.com</a>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href="tel:+1234567890" className="text-gray-600 hover:text-purple-600 text-sm">+254708419386</a>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-gray-600 text-sm">Nairobi Ke</span>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="border-t border-gray-200 pt-8 mt-8 text-center">
      <p className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()} TheraIOT Inc. All rights reserved.
      </p>
      <div className="flex justify-center gap-6 mt-4">
        <a href="#" className="text-xs text-gray-500 hover:text-purple-600">Privacy Policy</a>
        <a href="#" className="text-xs text-gray-500 hover:text-purple-600">Terms of Service</a>
        <a href="#" className="text-xs text-gray-500 hover:text-purple-600">Cookie Policy</a>
      </div>
    </div>
  </div>
</footer>
</div>
);
}

export default InvestPage;
