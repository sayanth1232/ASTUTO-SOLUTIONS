import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeftIcon, CheckCircle2Icon, ArrowRightIcon, HeadphonesIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function OngoingSupportPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    '24/7 access to expert consultants',
    'Regular strategic check-ins and reviews',
    'Proactive advice and recommendations',
    'Performance monitoring and reporting',
    'Priority response to urgent matters',
    'Continuous optimization support',
  ];

  const supportLevels = [
    {
      title: 'Essential Support',
      price: 'Request a Quote',
      features: [
        'Monthly strategic reviews',
        'Email support (24hr response)',
        'Quarterly performance reports',
        'Access to resource library',
      ],
    },
    {
      title: 'Premium Support',
      price: 'Tailored to Your Needs',
      features: [
        'Bi-weekly strategic reviews',
        'Priority email & phone support',
        'Monthly performance reports',
        'Dedicated account manager',
        'Quarterly strategy sessions',
      ],
      featured: true,
    },
    {
      title: 'Enterprise Support',
      price: 'Custom Pricing',
      features: [
        'Weekly strategic reviews',
        '24/7 priority support',
        'Real-time performance dashboards',
        'Dedicated consulting team',
        'On-site visits available',
        'Custom service packages',
      ],
    },
  ];

  const handleGetStarted = () => {
    window.location.href = '/contact';
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 min-h-[400px] flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-16 w-full">
          <Button
            onClick={() => navigate('/services')}
            variant="ghost"
            className="text-white hover:bg-white/10 mb-8"
          >
            <ArrowLeftIcon size={20} className="mr-2" />
            Back to Services
          </Button>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm font-medium">ONGOING SUPPORT</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Ongoing Support Services
              </h1>
              <p className="text-lg lg:text-xl font-light leading-relaxed opacity-90">
                Continuous guidance and support to keep your business on track and thriving.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                alt="Ongoing Support"
                width={800}
                height={600}
                loading="eager"
                className="rounded-2xl w-full h-auto shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Your trusted partner for the long term
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our ongoing support services ensure you always have access to expert guidance when you need it most.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We provide continuous monitoring, regular check-ins, and proactive advice to help you navigate challenges and seize opportunities as they arise.
              </p>
            </div>
            <div>
              <Card className="p-8 bg-purple-50 border-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What's included
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2Icon size={24} className="text-purple-900 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support Levels */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Support Level
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select the support package that best fits your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportLevels.map((level, index) => (
              <Card 
                key={index} 
                className={`p-8 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  level.featured ? 'ring-2 ring-purple-900 relative' : ''
                }`}
              >
                {level.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-900 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {level.title}
                  </h3>
                  <p className="text-3xl font-bold text-purple-900">{level.price}</p>
                </div>
                <div className="space-y-3 mb-8">
                  {level.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2Icon size={20} className="text-purple-900 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  onClick={handleGetStarted}
                  className={`w-full ${
                    level.featured 
                      ? 'bg-purple-900 text-white hover:bg-purple-800' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8 lg:px-16">
          <Card className="p-12 bg-purple-50 border-none">
            <div className="text-center">
              <div className="text-5xl mb-6">💬</div>
              <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed italic">
                "Having ongoing support has been a game-changer for our business. We always have expert guidance when we need it, and the regular check-ins keep us on track with our goals."
              </blockquote>
              <div className="font-bold text-gray-900">Sarah Johnson</div>
              <div className="text-gray-600">CEO, TechVenture Inc.</div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="max-w-4xl mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Partner with us for long-term success
          </h2>
          <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
            Let's discuss which support package is right for your business.
          </p>
          <Button
            onClick={handleGetStarted}
            className="bg-white text-purple-900 hover:bg-gray-100 font-semibold text-lg px-8 py-6 h-auto rounded-full"
            size="lg"
          >
            Schedule Free Consultation
            <ArrowRightIcon size={20} className="ml-2" />
          </Button>
        </div>
      </section>
    </main>
  );
}
