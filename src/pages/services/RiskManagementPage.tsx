import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeftIcon, CheckCircle2Icon, ArrowRightIcon, ShieldCheckIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function RiskManagementPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    'Comprehensive risk assessment and analysis',
    'Proactive mitigation strategies',
    'Business continuity planning',
    'Insurance advisory services',
    'Crisis management protocols',
    'Ongoing risk monitoring',
  ];

  const riskTypes = [
    {
      title: 'Financial Risk',
      description: 'Protect against market volatility, credit risks, and liquidity challenges',
      icon: '💰',
    },
    {
      title: 'Operational Risk',
      description: 'Mitigate risks from internal processes, systems, and human factors',
      icon: '⚙️',
    },
    {
      title: 'Strategic Risk',
      description: 'Address risks that could impact your long-term business strategy',
      icon: '🎯',
    },
    {
      title: 'Compliance Risk',
      description: 'Ensure adherence to laws, regulations, and industry standards',
      icon: '📋',
    },
    {
      title: 'Reputational Risk',
      description: 'Protect your brand and reputation from potential threats',
      icon: '🛡️',
    },
    {
      title: 'Cybersecurity Risk',
      description: 'Safeguard against digital threats and data breaches',
      icon: '🔒',
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
                <span className="text-sm font-medium">RISK MANAGEMENT</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Risk Management Services
              </h1>
              <p className="text-lg lg:text-xl font-light leading-relaxed opacity-90">
                Protect your business with proactive risk assessment and mitigation strategies.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop"
                alt="Risk Management"
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
                Protect what matters most
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our risk management services help you identify, assess, and mitigate potential threats to your business before they become problems.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We develop comprehensive strategies that protect your assets, ensure business continuity, and give you peace of mind.
              </p>
            </div>
            <div>
              <Card className="p-8 bg-purple-50 border-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Our approach
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

      {/* Risk Types Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Risk Coverage
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We help you manage all types of business risks
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {riskTypes.map((risk, index) => (
              <Card key={index} className="p-8 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{risk.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {risk.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {risk.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Risk Management Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Identify', desc: 'Discover potential risks' },
              { step: '2', title: 'Assess', desc: 'Evaluate impact and likelihood' },
              { step: '3', title: 'Mitigate', desc: 'Develop protection strategies' },
              { step: '4', title: 'Monitor', desc: 'Ongoing risk surveillance' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-900">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="max-w-4xl mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Secure your business future
          </h2>
          <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
            Let's discuss how our risk management services can protect your business.
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
